import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Crown, 
  Star, 
  Camera, 
  Music, 
  Film, 
  Mic,
  Video,
  Image,
  Send,
  Search,
  Settings,
  Bell,
  UserPlus,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  TrendingUp,
  Award,
  Play,
  Download,
  Eye,
  Clock,
  MapPin,
  Calendar,
  Link,
  Smile,
  Gift,
  Zap,
  Target,
  DollarSign,
  Filter,
  Grid,
  Compass,
  ArrowLeft,
  Plus,
  CheckCircle,
  ShoppingBag,
  Globe,
  Verified,
  UserCheck,
  Activity,
  BarChart3,
  Hash,
  Volume2,
  Headphones,
  Tv,
  Ticket
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Merchandise from './Merchandise';

const Community: React.FC = () => {
  const [selectedCircle, setSelectedCircle] = useState<string>('pathaan-circle');
  const [activeTab, setActiveTab] = useState<'feed' | 'channels' | 'friends' | 'media' | 'perks' | 'merch'>('feed');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [newPost, setNewPost] = useState('');
  const [showComments, setShowComments] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<string>('announcements');
  const [newMessage, setNewMessage] = useState('');
  const { theme } = useTheme();

  // Mock circles data with key people and detailed info
  const myCircles = [
    {
      id: 'pathaan-circle',
      name: 'Pathaan Universe',
      type: 'film',
      category: 'Bollywood',
      members: 15420,
      activeMembers: 2847,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      cover: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Official community for Shah Rukh Khan\'s action franchise',
      keyPeople: [
        { name: 'Shah Rukh Khan', role: 'Lead Actor', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Deepika Padukone', role: 'Lead Actress', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Siddharth Anand', role: 'Director', verified: true, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'John Abraham', role: 'Antagonist', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' }
      ],
      movieInfo: {
        budget: '₹250 Crores',
        releaseDate: 'January 25, 2023',
        boxOffice: '₹1050 Crores',
        rating: '8.2/10',
        genre: 'Action, Thriller, Spy'
      },
      lastActivity: '2 minutes ago',
      unreadMessages: 12,
      isJoined: true,
      level: 'Producer'
    },
    {
      id: 'ar-rahman-circle',
      name: 'A.R. Rahman Music Circle',
      type: 'music',
      category: 'Classical Fusion',
      members: 8950,
      activeMembers: 1234,
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
      cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Celebrating the Mozart of Madras and his musical journey',
      keyPeople: [
        { name: 'A.R. Rahman', role: 'Composer', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Hariharan', role: 'Vocalist', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Shreya Ghoshal', role: 'Vocalist', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Ustad Zakir Hussain', role: 'Percussionist', verified: true, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' }
      ],
      movieInfo: {
        albums: '150+ Albums',
        awards: '6 National Awards, 2 Oscars',
        genres: 'Classical, Fusion, World Music',
        collaborations: '200+ Artists',
        experience: '30+ Years'
      },
      lastActivity: '5 minutes ago',
      unreadMessages: 5,
      isJoined: true,
      level: 'Executive'
    },
    {
      id: 'rrr-circle',
      name: 'RRR Epic Universe',
      type: 'film',
      category: 'Regional',
      members: 22100,
      activeMembers: 4567,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      cover: 'https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Rise, Roar, Revolt - The epic that conquered the world',
      keyPeople: [
        { name: 'S.S. Rajamouli', role: 'Director', verified: true, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Ram Charan', role: 'Alluri Sitarama Raju', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Jr. NTR', role: 'Komaram Bheem', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Alia Bhatt', role: 'Sita', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' }
      ],
      movieInfo: {
        budget: '₹550 Crores',
        releaseDate: 'March 25, 2022',
        boxOffice: '₹1387 Crores',
        rating: '8.8/10',
        awards: 'Oscar Winner, Golden Globe'
      },
      lastActivity: '1 hour ago',
      unreadMessages: 0,
      isJoined: true,
      level: 'Backer'
    },
    {
      id: 'spider-man-circle',
      name: 'Spider-Verse Community',
      type: 'film',
      category: 'Hollywood',
      members: 34500,
      activeMembers: 6789,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      cover: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Your friendly neighborhood Spider-Man multiverse',
      keyPeople: [
        { name: 'Tom Holland', role: 'Spider-Man', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Zendaya', role: 'MJ', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Jon Watts', role: 'Director', verified: true, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' }
      ],
      movieInfo: {
        budget: '$200 Million',
        releaseDate: 'December 17, 2021',
        boxOffice: '$1.9 Billion',
        rating: '8.4/10',
        genre: 'Superhero, Action, Adventure'
      },
      lastActivity: '30 minutes ago',
      unreadMessages: 3,
      isJoined: true,
      level: 'Supporter'
    },
    {
      id: 'taylor-swift-circle',
      name: 'Swifties United',
      type: 'music',
      category: 'Pop',
      members: 67890,
      activeMembers: 12345,
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
      cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The ultimate Taylor Swift fan community',
      keyPeople: [
        { name: 'Taylor Swift', role: 'Artist', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Jack Antonoff', role: 'Producer', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Aaron Dessner', role: 'Producer', verified: true, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' }
      ],
      movieInfo: {
        albums: '10 Studio Albums',
        awards: '12 Grammy Awards',
        tours: 'Eras Tour 2023-2024',
        fanbase: '200M+ Followers',
        achievements: 'Billionaire Artist'
      },
      lastActivity: '15 minutes ago',
      unreadMessages: 8,
      isJoined: true,
      level: 'VIP'
    },
    {
      id: 'stranger-things-circle',
      name: 'Hawkins Community',
      type: 'webseries',
      category: 'Sci-Fi Horror',
      members: 45670,
      activeMembers: 8901,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      cover: 'https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exploring the Upside Down with fellow fans',
      keyPeople: [
        { name: 'The Duffer Brothers', role: 'Creators', verified: true, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Millie Bobby Brown', role: 'Eleven', verified: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'Finn Wolfhard', role: 'Mike Wheeler', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
        { name: 'David Harbour', role: 'Jim Hopper', verified: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' }
      ],
      movieInfo: {
        seasons: '4 Seasons',
        episodes: '42 Episodes',
        platform: 'Netflix',
        rating: '8.7/10',
        awards: 'Emmy Nominations'
      },
      lastActivity: '45 minutes ago',
      unreadMessages: 2,
      isJoined: true,
      level: 'Member'
    }
  ];

  const channels = [
    { id: 'announcements', name: 'announcements', icon: '📢', unread: 3 },
    { id: 'investor-hall', name: 'investor-hall', icon: '💰', unread: 8 },
    { id: 'creator-talks', name: 'creator-talks', icon: '🎬', unread: 2 },
    { id: 'fan-zone', name: 'fan-zone', icon: '🎉', unread: 15 },
    { id: 'polls', name: 'polls', icon: '📊', unread: 1 },
    { id: 'behind-scenes', name: 'behind-the-scenes', icon: '🎭', unread: 5 }
  ];

  const feedPosts = [
    {
      id: '1',
      user: {
        name: 'Shah Rukh Khan',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: true,
        role: 'Lead Actor'
      },
      timestamp: '2 hours ago',
      content: 'Just wrapped an incredible action sequence for Pathaan 2! The stunts are going to blow your minds. Thank you to all our amazing investors for making this possible! 🔥',
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      reactions: [
        { emoji: '🔥', count: 1234 },
        { emoji: '❤️', count: 890 },
        { emoji: '🎬', count: 567 },
        { emoji: '💎', count: 234 }
      ],
      comments: 156,
      shares: 89
    },
    {
      id: '2',
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: false,
        role: 'Producer Tier Investor'
      },
      timestamp: '4 hours ago',
      content: 'Got exclusive behind-the-scenes access today! Being a Producer tier investor has its perks. The production quality is absolutely stunning! 📸',
      media: {
        type: 'video',
        url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      reactions: [
        { emoji: '📸', count: 456 },
        { emoji: '🎥', count: 234 },
        { emoji: '💰', count: 123 }
      ],
      comments: 67,
      shares: 23
    },
    {
      id: '3',
      user: {
        name: 'Siddharth Anand',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
        verified: true,
        role: 'Director'
      },
      timestamp: '6 hours ago',
      content: 'Working with this incredible cast and crew has been a dream. Special thanks to our investor community for believing in our vision! 🎬',
      reactions: [
        { emoji: '🎬', count: 789 },
        { emoji: '👏', count: 456 },
        { emoji: '🙏', count: 234 }
      ],
      comments: 89,
      shares: 34
    }
  ];

  const currentCircle = myCircles.find(circle => circle.id === selectedCircle) || myCircles[0];

  const tabs = [
    { id: 'feed', label: 'Feed', icon: Activity },
    { id: 'channels', label: 'Channels', icon: Hash },
    { id: 'friends', label: 'Friends', icon: Users },
    { id: 'media', label: 'Media', icon: Image },
    { id: 'perks', label: 'Perks', icon: Gift },
    { id: 'merch', label: 'Merch', icon: ShoppingBag }
  ];

  return (
    <div
      className={`relative min-h-screen pt-16 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
          : 'bg-gradient-to-br from-black via-gray-900 to-purple-900'
      }`}
    >
      {/* Light theme background orbs */}
      {theme === 'light' && (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="light-gradient-orb-1 top-1/4 left-1/4" />
          <div className="light-gradient-orb-2 bottom-1/3 right-1/4" />
          <div className="light-gradient-orb-3 top-2/3 left-1/2" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Community
          </h1>
          <p className={`text-lg ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Instagram + Discord for entertainment fans and investors
          </p>
        </motion.div>

        {/* Circle Selector - Instagram Stories Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {myCircles.map((circle, index) => (
              <motion.button
                key={circle.id}
                onClick={() => setSelectedCircle(circle.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex-shrink-0 w-20 h-20 rounded-full p-1 transition-all duration-300 ${
                  selectedCircle === circle.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                    : circle.unreadMessages > 0
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : 'bg-gray-600'
                }`}
              >
                <img 
                  src={circle.avatar}
                  alt={circle.name}
                  className="w-full h-full rounded-full object-cover"
                />
                {circle.unreadMessages > 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{circle.unreadMessages}</span>
                  </div>
                )}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                  }`}>
                    {circle.name.split(' ')[0]}
                  </span>
                </div>
              </motion.button>
            ))}
            
            {/* Join More Circles Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: myCircles.length * 0.1 }}
              className={`flex-shrink-0 w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-300 ${
                theme === 'light'
                  ? 'border-gray-300 text-gray-600 hover:border-purple-400 hover:text-purple-600'
                  : 'border-gray-600 text-gray-400 hover:border-purple-400 hover:text-purple-400'
              }`}
            >
              <Plus className="w-8 h-8" />
            </motion.button>
          </div>
        </motion.div>

        {/* Current Circle Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border mb-8 ${
            theme === 'light'
              ? 'light-glass-header'
              : 'bg-white/10 border-white/20'
          }`}
        >
          {/* Cover Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={currentCircle.cover}
              alt={currentCircle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Circle Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={currentCircle.avatar}
                  alt={currentCircle.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                />
                <div>
                  <h2 className="text-white text-2xl font-bold mb-1">{currentCircle.name}</h2>
                  <p className="text-gray-300">{currentCircle.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{currentCircle.members.toLocaleString()} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span>{currentCircle.activeMembers.toLocaleString()} active</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Active {currentCircle.lastActivity}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentCircle.level === 'Producer' ? 'bg-yellow-500/20 text-yellow-400' :
                  currentCircle.level === 'Executive' ? 'bg-green-500/20 text-green-400' :
                  currentCircle.level === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {currentCircle.level} Level
                </div>
              </div>
            </div>
          </div>

          {/* Key People & Project Info */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Key People */}
              <div>
                <h3 className={`font-bold text-lg mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Key People
                </h3>
                <div className="space-y-3">
                  {currentCircle.keyPeople.map((person, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={person.avatar}
                          alt={person.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {person.verified && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                          {person.name}
                        </div>
                        <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                          {person.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className={`font-bold text-lg mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Project Info
                </h3>
                <div className="space-y-3">
                  {Object.entries(currentCircle.movieInfo).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                      <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                      </span>
                      <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex items-center gap-2 p-2 rounded-2xl backdrop-blur-xl border mb-8 ${
            theme === 'light'
              ? 'light-glass-header'
              : 'bg-white/10 border-white/20'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : `${theme === 'light' ? 'text-gray-700 hover:bg-white/50 hover:text-gray-900' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* Feed Tab */}
          {activeTab === 'feed' && (
            <motion.div
              key="feed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Create Post */}
              <div className={`p-6 rounded-2xl backdrop-blur-xl border ${
                theme === 'light'
                  ? 'light-glass-header'
                  : 'bg-white/10 border-white/20'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50"
                    alt="Your avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <input
                    type="text"
                    placeholder="Share your thoughts with the community..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:border-purple-500/50 ${
                      theme === 'light'
                        ? 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                        : 'bg-white/10 border-white/20 text-white placeholder-gray-400'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:bg-white/50'
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}>
                      <Image className="w-5 h-5" />
                      Photo
                    </button>
                    <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:bg-white/50'
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}>
                      <Video className="w-5 h-5" />
                      Video
                    </button>
                    <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:bg-white/50'
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}>
                      <BarChart3 className="w-5 h-5" />
                      Poll
                    </button>
                  </div>
                  <button 
                    disabled={!newPost.trim()}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:from-purple-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post
                  </button>
                </div>
              </div>

              {/* Feed Posts */}
              <div className="space-y-6">
                {feedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl backdrop-blur-xl border ${
                      theme === 'light'
                        ? 'light-glass-header hover:shadow-lg hover:shadow-purple-200/50'
                        : 'bg-white/10 border-white/20 hover:border-white/30'
                    } transition-all duration-300`}
                  >
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={post.user.avatar}
                          alt={post.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                              {post.user.name}
                            </span>
                            {post.user.verified && (
                              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              post.user.role.includes('Actor') || post.user.role.includes('Director') ? 'bg-purple-500/20 text-purple-400' :
                              post.user.role.includes('Producer') ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {post.user.role}
                            </span>
                          </div>
                          <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            {post.timestamp}
                          </div>
                        </div>
                      </div>
                      <button className={`p-2 rounded-lg transition-all duration-300 ${
                        theme === 'light'
                          ? 'text-gray-600 hover:bg-white/50'
                          : 'text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}>
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Post Content */}
                    <div className={`mb-4 leading-relaxed ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                      {post.content}
                    </div>

                    {/* Media Content */}
                    {post.media && (
                      <div className="mb-4">
                        <div className="relative rounded-xl overflow-hidden">
                          <img 
                            src={post.media.url}
                            alt="Post media"
                            className="w-full h-64 object-cover"
                          />
                          {post.media.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Reactions */}
                    <div className="flex items-center gap-2 mb-4">
                      {post.reactions.map((reaction, idx) => (
                        <button
                          key={idx}
                          className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 ${
                            theme === 'light'
                              ? 'bg-white/50 hover:bg-white/80'
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          <span className="text-lg">{reaction.emoji}</span>
                          <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                            {reaction.count}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Engagement Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-6">
                        <button className={`flex items-center gap-2 transition-all duration-300 ${
                          theme === 'light'
                            ? 'text-gray-600 hover:text-red-500'
                            : 'text-gray-400 hover:text-red-400'
                        }`}>
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">Like</span>
                        </button>
                        <button className={`flex items-center gap-2 transition-all duration-300 ${
                          theme === 'light'
                            ? 'text-gray-600 hover:text-blue-500'
                            : 'text-gray-400 hover:text-blue-400'
                        }`}>
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{post.comments} Comments</span>
                        </button>
                        <button className={`flex items-center gap-2 transition-all duration-300 ${
                          theme === 'light'
                            ? 'text-gray-600 hover:text-green-500'
                            : 'text-gray-400 hover:text-green-400'
                        }`}>
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm">{post.shares} Shares</span>
                        </button>
                      </div>
                      <button className={`transition-all duration-300 ${
                        theme === 'light'
                          ? 'text-gray-600 hover:text-yellow-500'
                          : 'text-gray-400 hover:text-yellow-400'
                      }`}>
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Channels Tab */}
          {activeTab === 'channels' && (
            <motion.div
              key="channels"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-4 gap-6"
            >
              {/* Channel List */}
              <div className={`lg:col-span-1 p-6 rounded-2xl backdrop-blur-xl border ${
                theme === 'light'
                  ? 'light-glass-header'
                  : 'bg-white/10 border-white/20'
              }`}>
                <h3 className={`font-bold text-lg mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Channels
                </h3>
                <div className="space-y-2">
                  {channels.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                        selectedChannel === channel.id
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                          : `${theme === 'light' ? 'text-gray-700 hover:bg-white/50' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{channel.icon}</span>
                        <span className="font-medium">#{channel.name}</span>
                      </div>
                      {channel.unread > 0 && (
                        <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                          {channel.unread}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className={`lg:col-span-3 p-6 rounded-2xl backdrop-blur-xl border ${
                theme === 'light'
                  ? 'light-glass-header'
                  : 'bg-white/10 border-white/20'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-bold text-xl ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    #{selectedChannel}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button className={`p-2 rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:bg-white/50'
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}>
                      <Bell className="w-5 h-5" />
                    </button>
                    <button className={`p-2 rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:bg-white/50'
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}>
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 mb-6 h-96 overflow-y-auto">
                  {[
                    { user: 'Priya Sharma', message: 'Just saw the latest behind-the-scenes footage! 🔥', time: '2:30 PM', avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=50' },
                    { user: 'Dev Malhotra', message: 'The action sequences look incredible!', time: '2:32 PM', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
                    { user: 'Rahul Krishnan', message: 'Worth every rupee invested 💰', time: '2:35 PM', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50' }
                  ].map((msg, index) => (
                    <div key={index} className="flex gap-3">
                      <img 
                        src={msg.avatar}
                        alt={msg.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            {msg.user}
                          </span>
                          <span className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'}`}>
                            {msg.time}
                          </span>
                        </div>
                        <div className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                          {msg.message}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder={`Message #${selectedChannel}`}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:border-purple-500/50 ${
                      theme === 'light'
                        ? 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                        : 'bg-white/10 border-white/20 text-white placeholder-gray-400'
                    }`}
                  />
                  <button 
                    disabled={!newMessage.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-medium hover:from-purple-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Friends Tab */}
          {activeTab === 'friends' && (
            <motion.div
              key="friends"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { name: 'Priya Sharma', level: 'Producer', mutual: 12, online: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Dev Malhotra', level: 'Executive', mutual: 8, online: true, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Rahul Krishnan', level: 'Backer', mutual: 15, online: false, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Kavya Nair', level: 'Producer', mutual: 6, online: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Arjun Reddy', level: 'Supporter', mutual: 9, online: false, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Meera Patel', level: 'VIP', mutual: 11, online: true, avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100' }
              ].map((friend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl backdrop-blur-xl border ${
                    theme === 'light'
                      ? 'light-glass-header hover:shadow-lg hover:shadow-purple-200/50'
                      : 'bg-white/10 border-white/20 hover:border-white/30'
                  } transition-all duration-300`}
                >
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <img 
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-16 h-16 rounded-full object-cover mx-auto"
                      />
                      {friend.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-current"></div>
                      )}
                    </div>
                    <h3 className={`font-bold text-lg mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {friend.name}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block ${
                      friend.level === 'Producer' ? 'bg-yellow-500/20 text-yellow-400' :
                      friend.level === 'Executive' ? 'bg-green-500/20 text-green-400' :
                      friend.level === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {friend.level}
                    </div>
                    <p className={`text-sm mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {friend.mutual} mutual connections
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white text-sm font-medium hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
                        Message
                      </button>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-white/50 text-gray-700 hover:bg-white/80'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}>
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Media Tab */}
          {activeTab === 'media' && (
            <motion.div
              key="media"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Media Filters */}
              <div className="flex gap-4">
                {['All', 'Photos', 'Videos', 'Audio'].map((filter) => (
                  <button
                    key={filter}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      filter === 'All'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : `${theme === 'light' ? 'bg-white/50 text-gray-700 hover:bg-white/80' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Media Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(12)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img 
                      src={`https://images.pexels.com/photos/${7991579 + index}/pexels-photo-${7991579 + index}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                      alt={`Media ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Perks Tab */}
          {activeTab === 'perks' && (
            <motion.div
              key="perks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                { title: 'Premiere Screening Access', description: 'VIP access to the movie premiere', status: 'Available', type: 'event', icon: Ticket },
                { title: 'Signed Poster Collection', description: 'Limited edition signed posters', status: 'Claimed', type: 'merchandise', icon: Gift },
                { title: 'Behind-the-Scenes Footage', description: 'Exclusive BTS content access', status: 'Available', type: 'content', icon: Camera },
                { title: 'Producer Credit', description: 'Your name in the end credits', status: 'Active', type: 'credit', icon: Crown },
                { title: 'Set Visit Experience', description: 'Visit the movie set during filming', status: 'Upcoming', type: 'experience', icon: MapPin },
                { title: 'Cast Meet & Greet', description: 'Personal meeting with the cast', status: 'Available', type: 'experience', icon: Users }
              ].map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl backdrop-blur-xl border ${
                    theme === 'light'
                      ? 'light-glass-header hover:shadow-lg hover:shadow-purple-200/50'
                      : 'bg-white/10 border-white/20 hover:border-white/30'
                  } transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      perk.status === 'Available' ? 'bg-green-500/20' :
                      perk.status === 'Claimed' ? 'bg-purple-500/20' :
                      perk.status === 'Active' ? 'bg-blue-500/20' :
                      'bg-yellow-500/20'
                    }`}>
                      <perk.icon className={`w-6 h-6 ${
                        perk.status === 'Available' ? 'text-green-400' :
                        perk.status === 'Claimed' ? 'text-purple-400' :
                        perk.status === 'Active' ? 'text-blue-400' :
                        'text-yellow-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                          {perk.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          perk.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                          perk.status === 'Claimed' ? 'bg-purple-500/20 text-purple-400' :
                          perk.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {perk.status}
                        </span>
                      </div>
                      <p className={`text-sm mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        {perk.description}
                      </p>
                      {perk.status === 'Available' && (
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white text-sm font-medium hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
                          Claim Perk
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Merch Tab */}
          {activeTab === 'merch' && (
            <motion.div
              key="merch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Merchandise />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Community;