// "use client";
// import React, { useState } from 'react';
// import { BookOpen, Video, Play, Search, ChevronLeft, ChevronRight, Eye, Calendar, CheckCircle, TrendingUp, Target, Award } from 'lucide-react';

// const GuideHub = () => {
//   const [activeTab, setActiveTab] = useState('text');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Learning System Features
//   const learningFeatures = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Targeted Practice",
//       description: "Focus on weak areas with AI-powered question recommendations"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Progress Tracking",
//       description: "Monitor your improvement with detailed analytics and insights"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Achievement System",
//       description: "Earn badges and rewards as you master different topics"
//     },
//     {
//       icon: <CheckCircle className="w-8 h-8" />,
//       title: "Smart Review",
//       description: "Revisit questions based on spaced repetition principles"
//     }
//   ];

//   // Video Guidelines
//   const videoGuidelines = [
//     {
//       id: 1,
//       thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
//       title: "Complete MCQ Strategy Guide for Beginners",
//       description: "Learn the fundamentals of MCQ preparation and test-taking strategies",
//       youtubeLink: "https://youtube.com/watch?v=example1",
//       views: "15.2K",
//       publishDate: "2024-11-28",
//       published: true
//     },
//     {
//       id: 2,
//       thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
//       title: "Advanced Time Management Techniques",
//       description: "Master time management to maximize your score in competitive exams",
//       youtubeLink: "https://youtube.com/watch?v=example2",
//       views: "12.8K",
//       publishDate: "2024-11-25",
//       published: true
//     },
//     {
//       id: 3,
//       thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=225&fit=crop",
//       title: "Subject-Wise Preparation Roadmap",
//       description: "Comprehensive guide for each subject with topic prioritization",
//       youtubeLink: "https://youtube.com/watch?v=example3",
//       views: "18.5K",
//       publishDate: "2024-11-22",
//       published: true
//     },
//     {
//       id: 4,
//       thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop",
//       title: "Mental Preparation & Stress Management",
//       description: "Techniques to stay calm and focused during exam preparation",
//       youtubeLink: "https://youtube.com/watch?v=example4",
//       views: "9.3K",
//       publishDate: "2024-11-20",
//       published: true
//     },
//     {
//       id: 5,
//       thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=225&fit=crop",
//       title: "Revision Strategies That Actually Work",
//       description: "Evidence-based revision techniques for long-term retention",
//       youtubeLink: "https://youtube.com/watch?v=example5",
//       views: "21.1K",
//       publishDate: "2024-11-18",
//       published: true
//     },
//     {
//       id: 6,
//       thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop",
//       title: "Common MCQ Mistakes to Avoid",
//       description: "Learn from others' mistakes and improve your accuracy",
//       youtubeLink: "https://youtube.com/watch?v=example6",
//       views: "14.7K",
//       publishDate: "2024-11-15",
//       published: true
//     }
//   ];

//   // Text Guidelines
//   const textGuidelines = [
//     {
//       id: 1,
//       title: "How to Analyze Your MCQ Performance",
//       category: "Strategy",
//       readTime: "8 min read",
//       publishDate: "2024-11-30"
//     },
//     {
//       id: 2,
//       title: "The Ultimate MCQ Preparation Checklist",
//       category: "Resources",
//       readTime: "6 min read",
//       publishDate: "2024-11-28"
//     },
//     {
//       id: 3,
//       title: "Understanding Question Patterns in Competitive Exams",
//       category: "Analysis",
//       readTime: "10 min read",
//       publishDate: "2024-11-26"
//     },
//     {
//       id: 4,
//       title: "Weekly Study Plan Template for MCQ Preparation",
//       category: "Planning",
//       readTime: "5 min read",
//       publishDate: "2024-11-24"
//     },
//     {
//       id: 5,
//       title: "How to Build Strong Foundation in Core Subjects",
//       category: "Learning",
//       readTime: "12 min read",
//       publishDate: "2024-11-22"
//     },
//     {
//       id: 6,
//       title: "Effective Note-Taking Methods for MCQ Practice",
//       category: "Study Tips",
//       readTime: "7 min read",
//       publishDate: "2024-11-20"
//     }
//   ];

//   const filteredTextGuidelines = textGuidelines.filter(guide =>
//     guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     guide.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredVideoGuidelines = videoGuidelines.filter(video =>
//     video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     video.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const currentData = activeTab === 'text' ? filteredTextGuidelines : filteredVideoGuidelines;
//   const totalPages = Math.ceil(currentData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = currentData.slice(startIndex, endIndex);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
//       {/* Hero Section with Cover Banner */}
//       <div className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white py-32 overflow-hidden">
//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             animation: 'slide 20s linear infinite'
//           }}></div>
//         </div>

//         {/* MCQ Learning Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {/* Floating MCQ Cards */}
//           <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl" style={{ animation: 'float 6s ease-in-out infinite' }}>
//             <div className="text-emerald-200 text-sm font-semibold mb-2">Question 1</div>
//             <div className="space-y-1">
//               <div className="w-32 h-2 bg-white/30 rounded"></div>
//               <div className="w-28 h-2 bg-white/30 rounded"></div>
//               <div className="w-36 h-2 bg-emerald-400 rounded"></div>
//             </div>
//           </div>

//           <div className="absolute top-32 right-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl" style={{ animation: 'float 7s ease-in-out infinite 1s' }}>
//             <div className="text-emerald-200 text-sm font-semibold mb-2">Question 2</div>
//             <div className="space-y-1">
//               <div className="w-32 h-2 bg-white/30 rounded"></div>
//               <div className="w-36 h-2 bg-emerald-400 rounded"></div>
//               <div className="w-28 h-2 bg-white/30 rounded"></div>
//             </div>
//           </div>

//           <div className="absolute bottom-20 left-1/4 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl" style={{ animation: 'float 8s ease-in-out infinite 2s' }}>
//             <div className="text-emerald-200 text-sm font-semibold mb-2">Question 3</div>
//             <div className="space-y-1">
//               <div className="w-28 h-2 bg-white/30 rounded"></div>
//               <div className="w-32 h-2 bg-emerald-400 rounded"></div>
//               <div className="w-36 h-2 bg-white/30 rounded"></div>
//             </div>
//           </div>

//           {/* Stats Badges */}
//           <div className="absolute top-1/4 right-1/4 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border-2 border-emerald-300/30" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>
//             <div className="text-white font-bold text-lg">95% Accuracy</div>
//           </div>

//           <div className="absolute bottom-1/3 right-12 bg-teal-500/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border-2 border-teal-300/30" style={{ animation: 'float 6s ease-in-out infinite 1.5s' }}>
//             <div className="text-white font-bold text-lg">1000+ Questions</div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="inline-block mb-6 px-6 py-2 bg-emerald-500/30 backdrop-blur-sm rounded-full border border-emerald-300/50">
//             <span className="text-emerald-100 font-semibold">📚 Your Learning Companion</span>
//           </div>
          
//           <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
//             Student Guide Hub
//           </h1>
          
//           <p className="text-lg md:text-xl lg:text-2xl text-emerald-50 max-w-4xl mx-auto leading-relaxed mb-8">
//             Your comprehensive resource center for mastering MCQ preparation with expert guidance and proven strategies
//           </p>

//           <div className="flex flex-wrap justify-center gap-8 text-emerald-100">
//             <div className="flex items-center gap-2">
//               <div className="w-12 h-12 bg-emerald-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <BookOpen className="w-6 h-6" />
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold">50+</div>
//                 <div className="text-sm">Text Guides</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-12 h-12 bg-teal-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <Video className="w-6 h-6" />
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold">100+</div>
//                 <div className="text-sm">Video Tutorials</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <Award className="w-6 h-6" />
//               </div>
//               <div className="text-left">
//                 <div className="text-2xl font-bold">10K+</div>
//                 <div className="text-sm">Active Learners</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Wave */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(236, 253, 245)"/>
//           </svg>
//         </div>
//       </div>

//       {/* Learning System Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Professional Learning System
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Experience a cutting-edge learning platform designed to maximize your preparation efficiency
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {learningFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100"
//               style={{
//                 animation: `float 3s ease-in-out infinite ${index * 0.2}s`
//               }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Guidelines Section */}
//         <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
//           {/* Tabs */}
//           <div className="flex flex-col sm:flex-row gap-4 mb-8">
//             <button
//               onClick={() => {
//                 setActiveTab('text');
//                 setCurrentPage(1);
//                 setSearchQuery('');
//               }}
//               className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                 activeTab === 'text'
//                   ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <BookOpen className="w-5 h-5" />
//                 Text Guidelines
//               </div>
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab('video');
//                 setCurrentPage(1);
//                 setSearchQuery('');
//               }}
//               className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                 activeTab === 'video'
//                   ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <Video className="w-5 h-5" />
//                 Video Guidelines
//               </div>
//             </button>
//           </div>

//           {/* Search Bar */}
//           <div className="mb-8">
//             <div className="relative max-w-2xl mx-auto">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder={`Search ${activeTab === 'text' ? 'articles' : 'videos'}...`}
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value);
//                   setCurrentPage(1);
//                 }}
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-lg"
//               />
//             </div>
//           </div>

//           {/* Content Grid */}
//           <div className="min-h-[600px]">
//             {activeTab === 'text' ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {currentItems.map((guide) => (
//                   <div
//                     key={guide.id}
//                     className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100 cursor-pointer"
//                   >
//                     <div className="flex items-start justify-between mb-3">
//                       <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
//                         {guide.category}
//                       </span>
//                       <span className="text-sm text-gray-500">{guide.readTime}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
//                       {guide.title}
//                     </h3>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Calendar className="w-4 h-4 mr-2" />
//                       {new Date(guide.publishDate).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric',
//                         year: 'numeric'
//                       })}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {currentItems.map((video) => (
//                   <div
//                     key={video.id}
//                     className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
//                   >
//                     <div className="relative group cursor-pointer">
//                       <img
//                         src={video.thumbnail}
//                         alt={video.title}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
//                           <Play className="w-8 h-8 text-white ml-1" fill="white" />
//                         </div>
//                       </div>
//                       {video.published && (
//                         <span className="absolute top-3 right-3 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
//                           LIVE
//                         </span>
//                       )}
//                     </div>
//                     <div className="p-5">
//                       <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
//                         {video.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                         {video.description}
//                       </p>
//                       <div className="flex items-center justify-between text-sm text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <Eye className="w-4 h-4" />
//                           <span>{video.views} views</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{new Date(video.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex items-center justify-center gap-2 mt-8">
//               <button
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="p-2 rounded-lg bg-gray-100 hover:bg-emerald-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
              
//               {[...Array(totalPages)].map((_, index) => (
//                 <button
//                   key={index + 1}
//                   onClick={() => setCurrentPage(index + 1)}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     currentPage === index + 1
//                       ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
              
//               <button
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="p-2 rounded-lg bg-gray-100 hover:bg-emerald-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slide {
//           0% {
//             transform: translate(0, 0);
//           }
//           100% {
//             transform: translate(-60px, -60px);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GuideHub;









"use client";
import React, { JSX, useState } from "react";
import {
  BookOpen,
  Video,
  Play,
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  Calendar,
  CheckCircle,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";

// ----------------------
// TYPE DEFINITIONS
// ----------------------
interface VideoGuide {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  youtubeLink: string;
  views: string;
  publishDate: string;
  published: boolean;
}

interface TextGuide {
  id: number;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
}

interface LearningFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

// ----------------------
// COMPONENT START
// ----------------------
const GuideHub = () => {
  const [activeTab, setActiveTab] = useState<"text" | "video">("text");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ----------------------
  // LEARNING FEATURES
  // ----------------------
  const learningFeatures: LearningFeature[] = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Practice",
      description: "Focus on weak areas with AI-powered question recommendations",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and insights",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Achievement System",
      description: "Earn badges and rewards as you master different topics",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Smart Review",
      description: "Revisit questions based on spaced repetition principles",
    },
  ];

  // ----------------------
  // VIDEO GUIDELINES
  // ----------------------
  const videoGuidelines: VideoGuide[] = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
      title: "Complete MCQ Strategy Guide for Beginners",
      description: "Learn fundamentals of MCQ preparation",
      youtubeLink: "https://youtube.com/watch?v=example1",
      views: "15.2K",
      publishDate: "2024-11-28",
      published: true,
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      title: "Advanced Time Management Techniques",
      description: "Master time management and maximize score",
      youtubeLink: "https://youtube.com/watch?v=example2",
      views: "12.8K",
      publishDate: "2024-11-25",
      published: true,
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=225&fit=crop",
      title: "Subject-Wise Preparation Roadmap",
      description: "Guide for each subject with topic prioritization",
      youtubeLink: "https://youtube.com/watch?v=example3",
      views: "18.5K",
      publishDate: "2024-11-22",
      published: true,
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop",
      title: "Mental Preparation & Stress Management",
      description: "Techniques to stay calm during exams",
      youtubeLink: "https://youtube.com/watch?v=example4",
      views: "9.3K",
      publishDate: "2024-11-20",
      published: true,
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=225&fit=crop",
      title: "Revision Strategies That Actually Work",
      description: "Evidence-based revision techniques",
      youtubeLink: "https://youtube.com/watch?v=example5",
      views: "21.1K",
      publishDate: "2024-11-18",
      published: true,
    },
    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop",
      title: "Common MCQ Mistakes to Avoid",
      description: "Improve your accuracy",
      youtubeLink: "https://youtube.com/watch?v=example6",
      views: "14.7K",
      publishDate: "2024-11-15",
      published: true,
    },
  ];

  // ----------------------
  // TEXT GUIDELINES
  // ----------------------
  const textGuidelines: TextGuide[] = [
    {
      id: 1,
      title: "How to Analyze Your MCQ Performance",
      category: "Strategy",
      readTime: "8 min read",
      publishDate: "2024-11-30",
    },
    {
      id: 2,
      title: "The Ultimate MCQ Preparation Checklist",
      category: "Resources",
      readTime: "6 min read",
      publishDate: "2024-11-28",
    },
    {
      id: 3,
      title: "Understanding Question Patterns in Competitive Exams",
      category: "Analysis",
      readTime: "10 min read",
      publishDate: "2024-11-26",
    },
    {
      id: 4,
      title: "Weekly Study Plan Template for MCQ Preparation",
      category: "Planning",
      readTime: "5 min read",
      publishDate: "2024-11-24",
    },
    {
      id: 5,
      title: "How to Build Strong Foundation in Core Subjects",
      category: "Learning",
      readTime: "12 min read",
      publishDate: "2024-11-22",
    },
    {
      id: 6,
      title: "Effective Note-Taking Methods for MCQ Practice",
      category: "Study Tips",
      readTime: "7 min read",
      publishDate: "2024-11-20",
    },
  ];

  // ----------------------
  // FILTERING SYSTEM
  // ----------------------
  const filteredTextGuidelines = textGuidelines.filter((g: TextGuide) =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideoGuidelines = videoGuidelines.filter((v: VideoGuide) =>
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentData: (VideoGuide | TextGuide)[] =
    activeTab === "text" ? filteredTextGuidelines : filteredVideoGuidelines;

  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = currentData.slice(startIndex, startIndex + itemsPerPage);

  // ----------------------
  // UI START
  // ----------------------
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50">

      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative bg-linear-to-br from-emerald-900 via-teal-800 to-green-900 text-white py-32 overflow-hidden">

        {/* Animated floating elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: "slide 20s linear infinite",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Cards */}
          <div
            className="absolute top-10 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="text-emerald-200 text-sm font-semibold mb-2">
              Question 1
            </div>
            <div className="space-y-1">
              <div className="w-32 h-2 bg-white/30 rounded"></div>
              <div className="w-28 h-2 bg-white/30 rounded"></div>
              <div className="w-36 h-2 bg-emerald-400 rounded"></div>
            </div>
          </div>

          <div
            className="absolute top-32 right-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
            style={{ animation: "float 7s ease-in-out infinite 1s" }}
          >
            <div className="text-emerald-200 text-sm font-semibold mb-2">
              Question 2
            </div>
            <div className="space-y-1">
              <div className="w-32 h-2 bg-white/30 rounded"></div>
              <div className="w-36 h-2 bg-emerald-400 rounded"></div>
              <div className="w-28 h-2 bg-white/30 rounded"></div>
            </div>
          </div>

          <div
            className="absolute bottom-20 left-1/4 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl"
            style={{ animation: "float 8s ease-in-out infinite 2s" }}
          >
            <div className="text-emerald-200 text-sm font-semibold mb-2">
              Question 3
            </div>
            <div className="space-y-1">
              <div className="w-28 h-2 bg-white/30 rounded"></div>
              <div className="w-32 h-2 bg-emerald-400 rounded"></div>
              <div className="w-36 h-2 bg-white/30 rounded"></div>
            </div>
          </div>

          {/* Stats Badges */}
          <div
            className="absolute top-1/4 right-1/4 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border-2 border-emerald-300/30"
            style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
          >
            <div className="text-white font-bold text-lg">95% Accuracy</div>
          </div>

          <div
            className="absolute bottom-1/3 right-12 bg-teal-500/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border-2 border-teal-300/30"
            style={{ animation: "float 6s ease-in-out infinite 1.5s" }}
          >
            <div className="text-white font-bold text-lg">1000+ Questions</div>
          </div>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-emerald-500/30 backdrop-blur-sm rounded-full border border-emerald-300/50">
            <span className="text-emerald-100 font-semibold">
              📚 Your Learning Companion
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Student Guide Hub
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-emerald-50 max-w-4xl mx-auto leading-relaxed mb-8">
            Your comprehensive resource center for mastering MCQ preparation
            with expert guidance and proven strategies
          </p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(236, 253, 245)"
            />
          </svg>
        </div>
      </div>

      {/* --------------------------------- */}
      {/* LEARNING FEATURES SECTION */}
      {/* --------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Learning System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience a cutting-edge learning platform designed to maximize
            your preparation efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {learningFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100"
              style={{
                animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
              }}
            >
              <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* --------------------------------- */}
        {/* GUIDELINES SECTION */}
        {/* --------------------------------- */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

          {/* TABS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">

            {/* TEXT TAB */}
            <button
              onClick={() => {
                setActiveTab("text");
                setCurrentPage(1);
                setSearchQuery("");
              }}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === "text"
                  ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Text Guidelines
              </div>
            </button>

            {/* VIDEO TAB */}
            <button
              onClick={() => {
                setActiveTab("video");
                setCurrentPage(1);
                setSearchQuery("");
              }}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Video className="w-5 h-5" />
                Video Guidelines
              </div>
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${
                  activeTab === "text" ? "articles" : "videos"
                }...`}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-lg"
              />
            </div>
          </div>

          {/* ---------------------- CONTENT GRID ---------------------- */}
          <div className="min-h-[600px]">

            {/* ------------------ TEXT CONTENT ------------------ */}
            {activeTab === "text" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(currentItems as TextGuide[]).map((guide) => (
                  <div
                    key={guide.id}
                    className="bg-linear-to-br from-white to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                        {guide.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {guide.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {guide.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(guide.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* ------------------ VIDEO CONTENT ------------------ */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(currentItems as VideoGuide[]).map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    {/* Thumbnail */}
                    <div className="relative group cursor-pointer">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>

                      {video.published && (
                        <span className="absolute top-3 right-3 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                          LIVE
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {video.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{video.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(video.publishDate).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ---------------------- PAGINATION ---------------------- */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {/* Prev */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-gray-100 hover:bg-emerald-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === i + 1
                      ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-gray-100 hover:bg-emerald-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ---------------------- ANIMATION CSS ---------------------- */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-60px, -60px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GuideHub;
