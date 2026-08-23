import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  ArrowBigUp,
  ArrowBigDown,
  Sparkles,
  Search,
  Plus,
  Bookmark,
  Share2,
  Filter,
  Check,
  Tag,
  ShieldCheck,
  Heart,
  TrendingUp,
  Clock,
  Award,
  BookOpen,
  Send,
  X,
  UserCheck,
  Flame,
  HelpCircle,
  Pin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Smile,
  AlertCircle
} from 'lucide-react';
import { CommunityPost, CommunityComment, CommunityCategory, UserAccount } from '../types';
import { INITIAL_COMMUNITY_POSTS, COMMUNITY_CATEGORIES } from '../data/communityData';
import { storageService, STORAGE_KEYS } from '../services/storageService';

interface CommunityViewProps {
  onNavigate: (view: string) => void;
  currentUser?: UserAccount | null;
  isCalmMode?: boolean;
}

type SortOption = 'hot' | 'top' | 'new' | 'discussed' | 'saved';

export const CommunityView: React.FC<CommunityViewProps> = ({
  onNavigate,
  currentUser,
  isCalmMode = false
}) => {
  // Load posts from persistent storage or seed with INITIAL_COMMUNITY_POSTS
  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    const saved = storageService.getItem<CommunityPost[]>(
      STORAGE_KEYS.COMMUNITY_POSTS,
      INITIAL_COMMUNITY_POSTS
    );
    return saved && saved.length > 0 ? saved : INITIAL_COMMUNITY_POSTS;
  });

  const [savedPostIds, setSavedPostIds] = useState<string[]>(() => {
    return storageService.getItem<string[]>(STORAGE_KEYS.SAVED_POST_IDS, []);
  });

  // Filtering & Sorting State
  const [selectedCategory, setSelectedCategory] = useState<CommunityCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('hot');
  const [expandedCommentsPostId, setExpandedCommentsPostId] = useState<string | null>(null);

  // New Post Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<CommunityCategory>('salah_accommodations');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('');
  const [newAuthorName, setNewAuthorName] = useState(currentUser?.name || 'Caring Parent');
  const [newAuthorRole, setNewAuthorRole] = useState(
    currentUser?.role === 'educator' ? 'Islamic Special Educator' : 'Parent & Advocate'
  );
  const [newLinkedTopic, setNewLinkedTopic] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Comment Input State (keyed by postId)
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [commentAuthorNames, setCommentAuthorNames] = useState<Record<string, string>>({});

  // Sync posts to storage
  useEffect(() => {
    storageService.setItem(STORAGE_KEYS.COMMUNITY_POSTS, posts);
  }, [posts]);

  // Sync saved posts to storage
  useEffect(() => {
    storageService.setItem(STORAGE_KEYS.SAVED_POST_IDS, savedPostIds);
  }, [savedPostIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Upvote / Downvote Handler for Posts
  const handleVote = (postId: string, direction: 'up' | 'down') => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id !== postId) return p;

        let delta = 0;
        let nextVote: 'up' | 'down' | null = direction;

        if (p.userVote === direction) {
          // Un-vote
          delta = direction === 'up' ? -1 : 1;
          nextVote = null;
        } else if (p.userVote === 'up' && direction === 'down') {
          delta = -2;
        } else if (p.userVote === 'down' && direction === 'up') {
          delta = 2;
        } else if (!p.userVote) {
          delta = direction === 'up' ? 1 : -1;
        }

        return {
          ...p,
          upvotes: p.upvotes + delta,
          userVote: nextVote
        };
      })
    );
  };

  // Toggle Bookmark / Save Post
  const handleToggleSave = (postId: string) => {
    setSavedPostIds((prev) => {
      const isSaved = prev.includes(postId);
      const next = isSaved ? prev.filter((id) => id !== postId) : [...prev, postId];
      showToast(isSaved ? 'Post removed from saved' : 'Post saved to your bookmarks!');
      return next;
    });
  };

  // Share / Copy Link
  const handleShare = (post: CommunityPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link to "${post.title.substring(0, 30)}..." copied!`);
    } else {
      showToast('Post link ready to share!');
    }
  };

  // Submit New Post
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const categoryObj = COMMUNITY_CATEGORIES.find((c) => c.id === newCategory);
    const categoryLabel = categoryObj ? categoryObj.label : 'General Discussion';

    const parsedTags = newTags
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter((t) => t.length > 0);

    if (parsedTags.length === 0) {
      parsedTags.push('CommunityStory');
    }

    const createdPost: CommunityPost = {
      id: `post-${Date.now()}`,
      title: newTitle.trim(),
      content: newContent.trim(),
      category: newCategory,
      categoryLabel,
      authorName: newAuthorName.trim() || 'Parent Contributor',
      authorRole: newAuthorRole.trim() || 'Bridge Community Parent',
      authorAvatar: (newAuthorName.trim() || 'P').charAt(0).toUpperCase(),
      createdAt: 'Just now',
      upvotes: 1,
      userVote: 'up',
      commentsCount: 0,
      comments: [],
      tags: parsedTags,
      pinned: false,
      linkedLessonTopic: newLinkedTopic.trim() || undefined
    };

    setPosts([createdPost, ...posts]);
    setIsCreateModalOpen(false);
    setNewTitle('');
    setNewContent('');
    setNewTags('');
    setNewLinkedTopic('');
    showToast('Alhamdulillah! Your post has been published to the community.');
  };

  // Submit New Comment
  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    const author = commentAuthorNames[postId]?.trim() || currentUser?.name || 'Parent Member';

    const newComment: CommunityComment = {
      id: `comm-${Date.now()}`,
      postId,
      authorName: author,
      authorRole: currentUser?.role === 'educator' ? 'Islamic Educator' : 'Parent',
      content: text,
      createdAt: 'Just now',
      upvotes: 1,
      userVote: 'up'
    };

    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id !== postId) return p;
        return {
          ...p,
          commentsCount: p.commentsCount + 1,
          comments: [newComment, ...(p.comments || [])]
        };
      })
    );

    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    showToast('Your reply was shared with the parent community.');
  };

  // Upvote a Comment
  const handleCommentVote = (postId: string, commentId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id !== postId) return p;
        const updatedComments = (p.comments || []).map((c) => {
          if (c.id !== commentId) return c;
          const isUpvoted = c.userVote === 'up';
          return {
            ...c,
            upvotes: c.upvotes + (isUpvoted ? -1 : 1),
            userVote: isUpvoted ? null : ('up' as const)
          };
        });
        return { ...p, comments: updatedComments };
      })
    );
  };

  // Filter Posts
  const filteredPosts = posts.filter((post) => {
    // Category match
    if (selectedCategory !== 'all' && post.category !== selectedCategory) {
      return false;
    }

    // Tag match
    if (activeTag && !post.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase())) {
      return false;
    }

    // Saved only filter
    if (sortBy === 'saved' && !savedPostIds.includes(post.id)) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchContent = post.content.toLowerCase().includes(q);
      const matchAuthor = post.authorName.toLowerCase().includes(q);
      const matchTag = post.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchContent && !matchAuthor && !matchTag) {
        return false;
      }
    }

    return true;
  });

  // Sort Posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;

    switch (sortBy) {
      case 'top':
        return b.upvotes - a.upvotes;
      case 'discussed':
        return b.commentsCount - a.commentsCount;
      case 'new':
        return (b.id.startsWith('post-') ? 1 : 0) - (a.id.startsWith('post-') ? 1 : 0);
      case 'hot':
      default:
        // Hot score: upvotes + (comments * 2)
        const hotA = a.upvotes + a.commentsCount * 2;
        const hotB = b.upvotes + b.commentsCount * 2;
        return hotB - hotA;
    }
  });

  // Collect All Unique Tags for sidebar cloud
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).slice(0, 12);

  return (
    <div
      id="bridge-community-forum-page"
      className={`min-h-screen pb-16 pt-4 sm:pt-6 ${
        isCalmMode ? 'bg-[#F2F6FB] text-stone-800' : 'bg-[#EEF3F9] text-slate-800'
      }`}
    >
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2.5 animate-in slide-in-from-bottom-4 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Reddit-Style Subreddit Header Banner */}
        <div className="bg-gradient-to-r from-[#4A648D] via-[#6584B3] to-[#8FAACC] rounded-3xl p-6 sm:p-8 text-white shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-extrabold text-2xl sm:text-3xl border border-white/30 shadow-xs shrink-0">
                B
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                    b/BridgeParents
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/25 backdrop-blur-xs text-xs font-bold border border-white/30">
                    Official Community
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                  A compassionate, neurodiversity-affirming forum for Muslim parents and educators sharing practical visual schedules, sensory Salah accommodations, and daily milestones.
                </p>
                <div className="flex items-center gap-4 text-2xs sm:text-xs text-white/80 font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-300" />
                    <strong>2,480+</strong> Families Supporting Each Other
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <strong>120+</strong> Active Discussions
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                id="open-create-post-modal-banner-btn"
                onClick={() => setIsCreateModalOpen(true)}
                className="px-5 py-3 rounded-2xl bg-white text-[#344D76] hover:bg-[#F2F6FC] font-extrabold text-sm transition-all shadow-sm flex items-center gap-2 border border-white/60 active:scale-95"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Create Post</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Post Prompt Bar */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#99AFD7]/30 shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#E8EEF8] text-[#344D76] font-bold text-sm flex items-center justify-center shrink-0 border border-[#99AFD7]/40">
            {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="flex-1 text-left px-4 py-2.5 bg-[#F2F6FC] hover:bg-[#E8EEF8] text-slate-500 hover:text-slate-700 text-xs sm:text-sm font-medium rounded-xl border border-slate-200/80 transition-colors"
          >
            Ask a question, share a sensory routine, or celebrate a milestone...
          </button>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#99AFD7] hover:bg-[#869EC9] text-white text-xs sm:text-sm font-bold transition-all shadow-2xs hidden sm:flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Post</span>
          </button>
        </div>

        {/* Category / Flair Filter Pill Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {COMMUNITY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id && !activeTag;
            return (
              <button
                key={cat.id}
                type="button"
                id={`community-cat-tab-${cat.id}`}
                onClick={() => {
                  setSelectedCategory(cat.id as CommunityCategory);
                  setActiveTag(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-[#344D76] text-white border-[#344D76] shadow-xs scale-102'
                    : 'bg-white text-slate-700 border-slate-200/80 hover:bg-[#F2F6FC]'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: Post Feed + Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Feed Column (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Search & Sort Controls Bar */}
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#99AFD7]/30 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search discussions, accommodations, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#99AFD7]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Tabs (Reddit style: Hot, Top, New, Saved) */}
              <div className="flex items-center gap-1 bg-[#F2F6FC] p-1 rounded-xl border border-slate-200 self-start sm:self-auto overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setSortBy('hot')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    sortBy === 'hot'
                      ? 'bg-white text-[#344D76] shadow-2xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span>Hot</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortBy('top')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    sortBy === 'top'
                      ? 'bg-white text-[#344D76] shadow-2xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Award className="w-3 h-3 text-amber-500" />
                  <span>Top</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortBy('new')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    sortBy === 'new'
                      ? 'bg-white text-[#344D76] shadow-2xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Clock className="w-3 h-3 text-blue-500" />
                  <span>New</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortBy('discussed')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    sortBy === 'discussed'
                      ? 'bg-white text-[#344D76] shadow-2xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <MessageSquare className="w-3 h-3 text-emerald-500" />
                  <span>Discussed</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortBy('saved')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    sortBy === 'saved'
                      ? 'bg-white text-[#344D76] shadow-2xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Bookmark className="w-3 h-3 text-purple-500" />
                  <span>Saved</span>
                </button>
              </div>
            </div>

            {/* Active Tag Filter Indicator */}
            {activeTag && (
              <div className="flex items-center justify-between p-2.5 bg-[#E8EEF8] rounded-xl border border-[#99AFD7]/40 text-xs text-[#344D76]">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Tag className="w-3.5 h-3.5 text-[#5D7CAE]" />
                  Filtering by tag: <strong>#{activeTag}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTag(null)}
                  className="px-2 py-0.5 bg-white text-slate-700 hover:bg-slate-100 rounded-lg text-2xs font-bold border border-slate-200"
                >
                  Clear Tag Filter
                </button>
              </div>
            )}

            {/* Posts Stream */}
            {sortedPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E8EEF8] text-[#344D76] flex items-center justify-center mx-auto">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">No discussions found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {sortBy === 'saved'
                    ? "You haven't saved any discussions yet. Click the bookmark icon on any post to keep it handy."
                    : 'Be the first to share a sensory routine, ask a question, or post an inspiring milestone!'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setActiveTag(null);
                    setSortBy('hot');
                  }}
                  className="px-4 py-2 bg-[#99AFD7] hover:bg-[#869EC9] text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              sortedPosts.map((post) => {
                const isSaved = savedPostIds.includes(post.id);
                const isExpanded = expandedCommentsPostId === post.id;

                return (
                  <article
                    key={post.id}
                    id={`community-post-${post.id}`}
                    className={`bg-white rounded-2xl border transition-all shadow-2xs hover:shadow-xs overflow-hidden ${
                      post.pinned
                        ? 'border-emerald-300 ring-1 ring-emerald-200/50 bg-emerald-50/10'
                        : 'border-[#99AFD7]/30 hover:border-[#99AFD7]/60'
                    }`}
                  >
                    <div className="flex">
                      {/* Left Reddit-Style Vote Column */}
                      <div className="w-12 sm:w-14 bg-[#F8FAFD] border-r border-slate-100 flex flex-col items-center justify-start pt-3.5 pb-2 px-1 gap-1 shrink-0 select-none">
                        <button
                          type="button"
                          id={`post-upvote-${post.id}`}
                          onClick={() => handleVote(post.id, 'up')}
                          className={`p-1.5 rounded-lg transition-colors ${
                            post.userVote === 'up'
                              ? 'text-emerald-700 bg-emerald-100 font-extrabold'
                              : 'text-slate-400 hover:text-emerald-700 hover:bg-slate-200/60'
                          }`}
                          aria-label="Upvote this post"
                        >
                          <ArrowBigUp className={`w-6 h-6 ${post.userVote === 'up' ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                        </button>

                        <span
                          className={`text-xs font-extrabold ${
                            post.userVote === 'up'
                              ? 'text-emerald-700 font-black'
                              : post.userVote === 'down'
                              ? 'text-rose-600 font-black'
                              : 'text-slate-700'
                          }`}
                        >
                          {post.upvotes}
                        </span>

                        <button
                          type="button"
                          id={`post-downvote-${post.id}`}
                          onClick={() => handleVote(post.id, 'down')}
                          className={`p-1.5 rounded-lg transition-colors ${
                            post.userVote === 'down'
                              ? 'text-rose-700 bg-rose-100 font-extrabold'
                              : 'text-slate-400 hover:text-rose-600 hover:bg-slate-200/60'
                          }`}
                          aria-label="Downvote this post"
                        >
                          <ArrowBigDown className={`w-6 h-6 ${post.userVote === 'down' ? 'fill-rose-600 text-rose-600' : ''}`} />
                        </button>
                      </div>

                      {/* Post Content Body */}
                      <div className="flex-1 p-4 sm:p-5 space-y-3">
                        {/* Header: Author + Category Flair + Time */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="w-7 h-7 rounded-full bg-[#99AFD7] text-white flex items-center justify-center text-xs font-bold">
                              {post.authorAvatar || post.authorName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-xs text-slate-900">
                                  {post.authorName}
                                </span>
                                <span className="text-3xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                                  {post.authorRole}
                                </span>
                              </div>
                            </div>
                            <span className="text-slate-300">•</span>
                            <span className="text-2xs text-slate-400">{post.createdAt}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {post.pinned && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-2xs font-extrabold border border-emerald-200">
                                <Pin className="w-3 h-3 text-emerald-700" />
                                <span>Pinned Strategy</span>
                              </span>
                            )}
                            <span className="text-2xs font-bold px-2.5 py-0.5 rounded-full bg-[#E8EEF8] text-[#344D76] border border-[#99AFD7]/40">
                              {post.categoryLabel}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {post.title}
                        </h2>

                        {/* Post Text Body */}
                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-2">
                          {post.content}
                        </div>

                        {/* Linked Lesson Navigation Banner (if present) */}
                        {post.linkedLessonTopic && (
                          <div className="p-3 bg-[#F2F6FC] rounded-xl border border-[#99AFD7]/30 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#5D7CAE] shrink-0" />
                              <span className="text-xs font-semibold text-slate-700">
                                Related Lesson: <strong>{post.linkedLessonTopic}</strong>
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => onNavigate('home')}
                              className="px-2.5 py-1 bg-white hover:bg-slate-50 text-[#344D76] font-bold text-2xs rounded-lg border border-[#99AFD7]/40 transition-colors flex items-center gap-1"
                            >
                              <span>Explore Lesson</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        )}

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {post.tags.map((t, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveTag(t)}
                                className={`text-2xs font-medium px-2 py-0.5 rounded-md transition-colors ${
                                  activeTag === t
                                    ? 'bg-[#344D76] text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                              >
                                #{t}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Actions Toolbar */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              id={`toggle-comments-${post.id}`}
                              onClick={() =>
                                setExpandedCommentsPostId(isExpanded ? null : post.id)
                              }
                              className={`px-3 py-1.5 rounded-xl font-bold transition-colors flex items-center gap-1.5 ${
                                isExpanded
                                  ? 'bg-[#E8EEF8] text-[#344D76]'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                              }`}
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-[#5D7CAE]" />
                              <span>
                                {post.commentsCount} {post.commentsCount === 1 ? 'Reply' : 'Replies'}
                              </span>
                              {isExpanded ? (
                                <ChevronUp className="w-3 h-3 text-slate-400" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-slate-400" />
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={() => handleToggleSave(post.id)}
                              className={`px-3 py-1.5 rounded-xl font-bold transition-colors flex items-center gap-1.5 ${
                                isSaved
                                  ? 'bg-amber-50 text-amber-900 border border-amber-200'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                              }`}
                              title={isSaved ? 'Saved to bookmarks' : 'Save discussion'}
                            >
                              <Bookmark
                                className={`w-3.5 h-3.5 ${
                                  isSaved ? 'fill-amber-500 text-amber-500' : 'text-slate-400'
                                }`}
                              />
                              <span>{isSaved ? 'Saved' : 'Save'}</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleShare(post)}
                              className="px-3 py-1.5 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-bold transition-colors flex items-center gap-1.5"
                            >
                              <Share2 className="w-3.5 h-3.5 text-slate-400" />
                              <span className="hidden sm:inline">Share</span>
                            </button>
                          </div>
                        </div>

                        {/* Expanded Comments / Discussion Thread */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-4 animate-in fade-in duration-200">
                            {/* Comment Input Composer */}
                            <div className="bg-[#F8FAFD] rounded-2xl p-3 sm:p-4 border border-[#99AFD7]/30 space-y-2.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                  <MessageSquare className="w-3.5 h-3.5 text-[#5D7CAE]" />
                                  <span>Leave a compassionate reply</span>
                                </span>
                                <input
                                  type="text"
                                  placeholder="Your name or nickname"
                                  value={commentAuthorNames[post.id] ?? (currentUser?.name || '')}
                                  onChange={(e) =>
                                    setCommentAuthorNames({
                                      ...commentAuthorNames,
                                      [post.id]: e.target.value
                                    })
                                  }
                                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-2xs text-slate-800 focus:outline-hidden max-w-[150px]"
                                />
                              </div>

                              <div className="relative">
                                <textarea
                                  rows={2}
                                  placeholder="Share your encouragement, tip, or experience..."
                                  value={commentInputs[post.id] || ''}
                                  onChange={(e) =>
                                    setCommentInputs({ ...commentInputs, [post.id]: e.target.value })
                                  }
                                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#99AFD7]"
                                />
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-3xs text-slate-400">
                                  Remember to maintain warm Akhlaq and protect child privacy.
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleAddComment(post.id)}
                                  disabled={!commentInputs[post.id]?.trim()}
                                  className="px-4 py-1.5 bg-[#99AFD7] hover:bg-[#869EC9] disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5"
                                >
                                  <Send className="w-3 h-3" />
                                  <span>Reply</span>
                                </button>
                              </div>
                            </div>

                            {/* Comment Thread List */}
                            <div className="space-y-2.5">
                              {post.comments && post.comments.length > 0 ? (
                                post.comments.map((comm) => (
                                  <div
                                    key={comm.id}
                                    className="p-3 sm:p-3.5 bg-[#F8FAFD] rounded-xl border border-slate-200/80 space-y-1.5 text-xs"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-bold text-slate-900">
                                          {comm.authorName}
                                        </span>
                                        <span className="text-3xs text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                                          {comm.authorRole}
                                        </span>
                                        {comm.authorBadge && (
                                          <span className="text-3xs font-extrabold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                                            {comm.authorBadge}
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-3xs text-slate-400">{comm.createdAt}</span>
                                    </div>

                                    <p className="text-slate-700 leading-relaxed">{comm.content}</p>

                                    <div className="flex items-center gap-2 pt-1">
                                      <button
                                        type="button"
                                        onClick={() => handleCommentVote(post.id, comm.id)}
                                        className={`inline-flex items-center gap-1 text-2xs font-bold px-2 py-0.5 rounded-md transition-colors ${
                                          comm.userVote === 'up'
                                            ? 'bg-emerald-100 text-emerald-800'
                                            : 'text-slate-500 hover:bg-slate-200/60'
                                        }`}
                                      >
                                        <ArrowBigUp className="w-3.5 h-3.5" />
                                        <span>{comm.upvotes} Helpful</span>
                                      </button>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-xs text-slate-400 text-center py-2">
                                  No replies yet. Be the first parent to share insight!
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {/* Right Sidebar (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* About Bridge Community Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#99AFD7]/30 shadow-2xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-2xl bg-[#99AFD7] text-white flex items-center justify-center font-bold text-base">
                  B
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">About Bridge Parents</h3>
                  <p className="text-2xs text-slate-500">Established for Neurodivergent Muslim Families</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                A safe, judgment-free space designed for parents, therapists, and educators supporting autistic, ADHD, sensory-sensitive, and neurodiverse children in learning their Deen with confidence and joy.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-2xl bg-[#F2F6FC] border border-[#99AFD7]/30 text-center">
                  <div className="text-base font-extrabold text-[#344D76]">2.4k+</div>
                  <div className="text-3xs font-semibold text-slate-500">Parent Members</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#F2F6FC] border border-[#99AFD7]/30 text-center">
                  <div className="text-base font-extrabold text-[#344D76]">100%</div>
                  <div className="text-3xs font-semibold text-slate-500">Judgment Free</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full py-2.5 bg-[#99AFD7] hover:bg-[#869EC9] text-white rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Start a Discussion</span>
              </button>
            </div>

            {/* Weekly Parent Highlight / Prompt */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-5 border border-amber-200/80 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Weekly Parent Prompt</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                "What sensory-friendly tool helped your child most during prayer or bedtime du'as?"
              </h4>
              <p className="text-2xs text-slate-600">
                Share your favorite textured mats, weighted pillows, visual schedules, or quiet audio routines.
              </p>
              <button
                type="button"
                onClick={() => {
                  setNewTitle('Weekly Share: Our favorite sensory prayer tool');
                  setNewCategory('salah_accommodations');
                  setIsCreateModalOpen(true);
                }}
                className="text-2xs font-bold text-amber-900 bg-white px-3 py-1.5 rounded-xl border border-amber-300 hover:bg-amber-100 transition-colors inline-block"
              >
                Respond to Prompt →
              </button>
            </div>

            {/* Popular Community Tags Cloud */}
            <div className="bg-white rounded-3xl p-5 border border-[#99AFD7]/30 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <Tag className="w-4 h-4 text-[#5D7CAE]" />
                <span>Popular Community Tags</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {allTags.map((tag, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={`text-2xs font-medium px-2.5 py-1 rounded-lg transition-colors border ${
                      activeTag === tag
                        ? 'bg-[#344D76] text-white border-[#344D76]'
                        : 'bg-[#F8FAFD] text-slate-700 border-slate-200 hover:bg-[#E8EEF8]'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Community Adab & Safety Rules */}
            <div className="bg-[#F8FAFD] rounded-3xl p-5 border border-slate-200 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-[#7B9A7A]" />
                <span>Community Adab & Rules</span>
              </div>
              <ul className="space-y-2 text-2xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#344D76]">1.</span>
                  <span><strong>Compassion First (Husn al-Dhann)</strong>: Every family is doing their best. Uplift and encourage without shaming.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#344D76]">2.</span>
                  <span><strong>Protect Child Privacy</strong>: Do not post real last names, medical diagnosis documents, or private identifiers.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-[#344D76]">3.</span>
                  <span><strong>Evidence & Sunnah Grounded</strong>: Share authentic Islamic principles and practical evidence-based accommodations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Create New Post Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#99AFD7] text-white flex items-center justify-center font-bold text-sm">
                  <Plus className="w-5 h-5 stroke-[3]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Create a Community Discussion
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs">
              {/* Category / Flair */}
              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  Topic Category / Flair
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as CommunityCategory)}
                  className="w-full p-2.5 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#99AFD7]"
                >
                  {COMMUNITY_CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  Discussion Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How we adapted Friday Jummu'ah for sound sensitivity..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-3 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 font-semibold focus:ring-2 focus:ring-[#99AFD7]"
                />
              </div>

              {/* Author & Role Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Your Name / Display Alias
                  </label>
                  <input
                    type="text"
                    value={newAuthorName}
                    onChange={(e) => setNewAuthorName(e.target.value)}
                    placeholder="e.g. Sister Maryam A. or Abu Bilal"
                    className="w-full p-2.5 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#99AFD7]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Parent Role / Profile
                  </label>
                  <input
                    type="text"
                    value={newAuthorRole}
                    onChange={(e) => setNewAuthorRole(e.target.value)}
                    placeholder="e.g. Mom of 7yo (Autism & Sensory)"
                    className="w-full p-2.5 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#99AFD7]"
                  />
                </div>
              </div>

              {/* Content Body */}
              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  Content / Strategy / Question <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Describe what worked, specific tools you used, sensory adjustments made, or questions you have for other parents..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-3 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 leading-relaxed focus:ring-2 focus:ring-[#99AFD7]"
                />
              </div>

              {/* Tags & Optional Lesson Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="SensoryTips, Jummuah, PECS, Wudu"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    className="w-full p-2.5 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#99AFD7]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Linked Bridge Lesson (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to Make Wudu, Salah Steps"
                    value={newLinkedTopic}
                    onChange={(e) => setNewLinkedTopic(e.target.value)}
                    className="w-full p-2.5 bg-[#F8FAFD] border border-slate-200 rounded-xl text-xs text-slate-800 focus:ring-2 focus:ring-[#99AFD7]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="submit-create-post-btn"
                  className="px-6 py-2.5 bg-[#99AFD7] hover:bg-[#869EC9] text-white rounded-xl font-bold transition-all shadow-xs"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
