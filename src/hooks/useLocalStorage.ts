import { useState, useEffect, useCallback, useRef } from 'react';
import { storageService, StorageKey } from '../services/storageService';

/**
 * Custom React hook for synchronized persistent state in localStorage.
 * Fixed for React infinite render loops by stabilizing initialValue references and key changes.
 *
 * @param key Storage key string
 * @param initialValue Default value if none is stored
 * @returns [storedValue, setValue, removeValue]
 */
export function useLocalStorage<T>(
  key: StorageKey,
  initialValue: T | (() => T)
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  // Store initialValue in a ref to avoid recreating callbacks or effect dependencies
  const initialValueRef = useRef(initialValue);
  initialValueRef.current = initialValue;

  const keyRef = useRef(key);
  keyRef.current = key;

  // Read value helper
  const readCurrentValue = useCallback((storageKey: StorageKey): T => {
    const fallback =
      typeof initialValueRef.current === 'function'
        ? (initialValueRef.current as () => T)()
        : initialValueRef.current;
    return storageService.getItem<T>(storageKey, fallback);
  }, []);

  const [storedValue, setStoredValue] = useState<T>(() => readCurrentValue(key));

  // Set value function compatible with React's useState dispatcher pattern
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((current) => {
        const nextValue = typeof value === 'function' ? (value as (prev: T) => T)(current) : value;
        storageService.setItem(keyRef.current, nextValue);
        return nextValue;
      });
    },
    []
  );

  // Remove value function
  const removeValue = useCallback(() => {
    const fallback =
      typeof initialValueRef.current === 'function'
        ? (initialValueRef.current as () => T)()
        : initialValueRef.current;
    storageService.removeItem(keyRef.current);
    setStoredValue(fallback);
  }, []);

  // Synchronize state only when the storage key itself changes
  useEffect(() => {
    setStoredValue(readCurrentValue(key));
  }, [key, readCurrentValue]);

  // Listen to cross-window storage events and local custom events
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        if (e.newValue === null) {
          const fallback =
            typeof initialValueRef.current === 'function'
              ? (initialValueRef.current as () => T)()
              : initialValueRef.current;
          setStoredValue(fallback);
        } else {
          try {
            const parsed = JSON.parse(e.newValue);
            setStoredValue(parsed);
          } catch {
            setStoredValue(readCurrentValue(key));
          }
        }
      }
    };

    const handleCustomStorageChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string; value: any }>;
      if (customEvent.detail && customEvent.detail.key === key) {
        if (customEvent.detail.value === null) {
          const fallback =
            typeof initialValueRef.current === 'function'
              ? (initialValueRef.current as () => T)()
              : initialValueRef.current;
          setStoredValue(fallback);
        } else {
          setStoredValue(customEvent.detail.value);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('bridge_storage_change', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bridge_storage_change', handleCustomStorageChange);
    };
  }, [key, readCurrentValue]);

  return [storedValue, setValue, removeValue];
}
