import React from 'react';
import {
  Droplets,
  Sparkles,
  Moon,
  Sun,
  CheckCircle2,
  Heart,
  Smile,
  Shield,
  Wind,
  Zap,
  Crown,
  Footprints,
  Compass,
  BookOpen,
  Feather,
  Eye,
  FileText,
  CheckSquare,
  RotateCcw,
  Volume2,
  ShieldCheck,
  HeartHandshake,
  Fish,
  Star,
  Layers,
  ArrowRight,
  RefreshCw,
  HelpCircle,
  Hand,
  Printer,
  MessageSquare,
  Clock,
  Coffee,
  Check,
  Plus,
  Trash2,
  Award,
  Sparkle,
  User,
  Users,
  Key,
  Mountain,
  Languages,
  TreePine,
  Flame,
  CheckCheck,
  LucideProps
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  Droplets,
  Sparkles,
  Moon,
  Sun,
  CheckCircle2,
  Heart,
  Smile,
  Shield,
  Wind,
  Zap,
  Crown,
  Footprints,
  Compass,
  BookOpen,
  Feather,
  Eye,
  FileText,
  CheckSquare,
  RotateCcw,
  Volume2,
  ShieldCheck,
  HeartHandshake,
  Fish,
  Star,
  Layers,
  ArrowRight,
  RefreshCw,
  HelpCircle,
  Hand,
  Printer,
  MessageSquare,
  Clock,
  Coffee,
  Check,
  Plus,
  Trash2,
  Award,
  Sparkle,
  User,
  Users,
  Key,
  Mountain,
  Languages,
  TreePine,
  Flame,
  CheckCheck
};

interface DynamicIconProps extends LucideProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', ...props }) => {
  // Normalize key
  const normalized = Object.keys(ICON_MAP).find(
    (k) => k.toLowerCase() === name.toLowerCase().replace(/[-_]/g, '')
  );

  const IconComponent = normalized ? ICON_MAP[normalized] : ICON_MAP[name] || Sparkles;

  return <IconComponent className={className} {...props} />;
};
