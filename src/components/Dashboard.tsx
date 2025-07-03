import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Award, 
  Users, 
  Film, 
  Music, 
  Star, 
  Calendar,
  Gift,
  Crown,
  Ticket,
  Camera,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  BarChart
} from 'lucide-react';
import PortfolioAnalytics from './PortfolioAnalytics';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'investments' | 'perks' | 'circles' | 'portfolio'>('overview');

  const userStats = {
    totalInvested: 125000,
    totalReturns: 18750,
    activeInvestments: 8,
    totalPerks: 24,
    circleLevel: 'Producer',
    nextLevel: 'Executive Producer'
  };

  const investments = [
    {
      id: '1',
      title: 'Neon Nights',
      type: 'film',
      category: 'Bollywood',
      invested: 25000,
      currentValue: 29500,
      returns: 4500,
      returnPercentage: 18,
      status: 'In Production',
      poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1080',
      releaseDate: '2024-06-15'
    },
    {
      id: '2',
      title: 'Monsoon Melodies',
      type: 'music',
      category: 'Classical Fusion',
      invested: 15000,
      currentValue: 16800,
      returns: 1800,
      returnPercentage: 12,
      status: 'Released',
      poster: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1080',
      releaseDate: '2024-03-20'
    },
    {
      id: '3',
      title: 'The Last Village',
      type: 'film',
      category: 'Regional - Tamil',
      invested: 50000,
      currentValue: 62500,
      returns: 12500,
      returnPercentage: 25,
      status: 'Post Production',
      poster: 'https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=1080',
      releaseDate: '2024-08-10'
    },
    {
      id: '4',
      title: 'Urban Beats',
      type: 'music',
      category: 'Hip Hop',
      invested: 20000,
      currentValue: 18000,
      returns: -2000,
      returnPercentage: -10,
      status: 'In Production',
      poster: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1080',
      releaseDate: '2024-07-05'
    },
    {
      id: '5',
      title: 'Midnight Express',
      type: 'webseries',
      category: 'Thriller',
      invested: 15000,
      currentValue: 17250,
      returns: 2250,
      returnPercentage: 15,
      status: 'Streaming',
      poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1080',
      releaseDate: '2024-01-15'
    }
  ];

  const perks = [
    {
      id: '1',
      title: 'Neon Nights Premiere',
      type: 'event',
      description: 'Red carpet premiere access in Mumbai',
      status: 'upcoming',
      date: '2024-06-10',
      icon: <Ticket className="w-5 h-5" />
    },
    {
      id: '2',
      title: 'Signed Poster Collection',
      type: 'merchandise',
      description: 'Limited edition signed posters from 3 films',
      status: 'delivered',
      date: '2024-02-15',
      icon: <Gift className="w-5 h-5" />
    },
    {
      id: '3',
      title: 'Behind the Scenes Access',
      type: 'content',
      description: 'Exclusive BTS footage from The Last Village',
      status: 'available',
      date: '2024-03-01',
      icon: <Camera className="w-5 h-5" />
    },
    {
      id: '4',
      title: 'Producer Credit',
      type: 'credit',
      description: 'Your name in end credits of Monsoon Melodies',
      status: 'active',
      date: '2024-03-20',
      icon: <Crown className="w-5 h-5" />
    },
    {
      id: '5',
      title: 'Early Music Release',
      type: 'content',
      description: 'Get Urban Beats album 2 weeks before public release',
      status: 'upcoming',
      date: '2024-06-20',
      icon: <Play className="w-5 h-5" />
    }
  ];

  const circles = [
    {
      name: 'Shah Rukh Khan Circle',
      members: 1250,
      level: 'VIP Member',
      description: 'Exclusive community for SRK film investors',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastActivity: '2 hours ago',
      unreadMessages: 5
    },
    {
      name: 'A.R. Rahman Music Circle',
      members: 890,
      level: 'Producer',
      description: 'Music lovers and Rahman project backers',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastActivity: '1 day ago',
      unreadMessages: 12
    },
    {
      name: 'Regional Cinema Hub',
      members: 2100,
      level: 'Member',
      description: 'Supporting regional films across India',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastActivity: '3 hours ago',
      unreadMessages: 0
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'investments', label: 'My Investments', icon: TrendingUp },
    { id: 'perks', label: 'Perks & Rewards', icon: Gift },
    { id: 'circles', label: 'My Circles', icon: Users },
    { id: 'portfolio', label: 'Portfolio', icon: BarChart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20 pb-[100px]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome back, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Rahul</span>
          </h1>
          <p className="text-gray-300 text-lg">Track your investments, perks, and community engagement</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-center sm:text-left">
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <DollarSign className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Invested</p>
                    <p className="text-white text-2xl font-bold">₹{(userStats.totalInvested / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Returns</p>
                    <p className="text-white text-2xl font-bold">₹{(userStats.totalReturns / 1000).toFixed(1)}K</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/20">
                    <Film className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Active Investments</p>
                    <p className="text-white text-2xl font-bold">{userStats.activeInvestments}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-yellow-500/20">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Perks</p>
                    <p className="text-white text-2xl font-bold">{userStats.totalPerks}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Circle Level */}
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Your Circle Level</h3>
                  <p className="text-gray-300">Current: <span className="text-purple-400 font-semibold">{userStats.circleLevel}</span></p>
                </div>
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress to {userStats.nextLevel}</span>
                  <span className="text-purple-400">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-3/4"></div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">Invest ₹25K more to unlock Executive Producer benefits</p>
            </div>

            {/* Recent Activity */}
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'Received returns from Monsoon Melodies', amount: '+₹1,800', time: '2 hours ago', type: 'profit' },
                  { action: 'New perk unlocked: BTS footage access', amount: '', time: '1 day ago', type: 'perk' },
                  { action: 'Invested in Urban Beats', amount: '-₹20,000', time: '3 days ago', type: 'investment' },
                  { action: 'Joined A.R. Rahman Music Circle', amount: '', time: '1 week ago', type: 'community' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'profit' ? 'bg-green-400' :
                        activity.type === 'perk' ? 'bg-yellow-400' :
                        activity.type === 'investment' ? 'bg-blue-400' : 'bg-purple-400'
                      }`} />
                      <span className="text-white">{activity.action}</span>
                    </div>
                    <div className="text-right">
                      {activity.amount && (
                        <div className={`font-semibold ${
                          activity.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {activity.amount}
                        </div>
                      )}
                      <div className="text-gray-400 text-sm">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Investments Tab */}
        {activeTab === 'investments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {investments.map((investment, index) => (
              <div key={investment.id} className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src={investment.poster} 
                    alt={investment.title}
                    className="w-full md:w-32 h-48 md:h-32 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-white text-xl font-bold">{investment.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            investment.type === 'film' ? 'bg-purple-500/20 text-purple-300' :
                            investment.type === 'music' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-green-500/20 text-green-300'
                          }`}>
                            {investment.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-2">{investment.category}</p>
                        <p className="text-gray-300 text-sm">Release: {investment.releaseDate}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-2xl font-bold mb-1 ${
                          investment.returns >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {investment.returns >= 0 ? '+' : ''}₹{Math.abs(investment.returns).toLocaleString()}
                        </div>
                        <div className={`text-sm ${
                          investment.returnPercentage >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {investment.returnPercentage >= 0 ? '+' : ''}{investment.returnPercentage}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-gray-400 text-sm">Invested</p>
                        <p className="text-white font-semibold">₹{investment.invested.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Current Value</p>
                        <p className="text-white font-semibold">₹{investment.currentValue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Status</p>
                        <p className="text-white font-semibold">{investment.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Actions</p>
                        <div className="flex gap-2">
                          <button className="p-1 rounded text-gray-400 hover:text-white">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button className="p-1 rounded text-gray-400 hover:text-white">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Perks Tab */}
        {activeTab === 'perks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {perks.map((perk, index) => (
              <div key={perk.id} className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${
                    perk.status === 'available' ? 'bg-green-500/20' :
                    perk.status === 'upcoming' ? 'bg-blue-500/20' :
                    perk.status === 'delivered' ? 'bg-purple-500/20' :
                    'bg-yellow-500/20'
                  }`}>
                    <div className={`${
                      perk.status === 'available' ? 'text-green-400' :
                      perk.status === 'upcoming' ? 'text-blue-400' :
                      perk.status === 'delivered' ? 'text-purple-400' :
                      'text-yellow-400'
                    }`}>
                      {perk.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold">{perk.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        perk.status === 'available' ? 'bg-green-500/20 text-green-300' :
                        perk.status === 'upcoming' ? 'bg-blue-500/20 text-blue-300' :
                        perk.status === 'delivered' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {perk.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{perk.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{perk.date}</span>
                      {perk.status === 'available' && (
                        <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white text-sm font-medium hover:from-green-400 hover:to-emerald-400 transition-all duration-300">
                          Claim Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Circles Tab */}
        {activeTab === 'circles' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            {circles.map((circle, index) => (
              <div
                key={index}
                className="relative p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                {circle.unreadMessages > 0 && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-red-500 rounded-full text-white text-xs font-bold">
                    {circle.unreadMessages}
                  </span>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 flex-wrap">
                  <img
                    src={circle.avatar}
                    alt={circle.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div className="flex-1 break-words">
                    <h3 className="text-white text-xl font-bold mb-2">{circle.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">{circle.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span>{circle.members.toLocaleString()} members</span>
                      <span>•</span>
                      <span>
                        Level: <span className="text-purple-400">{circle.level}</span>
                      </span>
                      <span>•</span>
                      <span>Active {circle.lastActivity}</span>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2 min-h-[48px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:from-purple-400 hover:to-blue-400 transition-all duration-300 mt-2 sm:mt-0">
                    Enter Circle
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PortfolioAnalytics />
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;