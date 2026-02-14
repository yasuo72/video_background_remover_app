'use client'

import { Video, Upload, Sparkles, Zap, Shield, ArrowRight, ExternalLink, Github, Instagram, Twitter, CheckCircle, Star, Users, Clock, Globe, MessageCircle, ChevronRight, Play, ArrowUpRight, Download } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [showApp, setShowApp] = useState(false)
  const huggingFaceUrl = 'https://huggingface.co/spaces/yasuo7/Background_remover'

  const handleLaunchApp = () => {
    window.open(huggingFaceUrl, '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Video className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Video Background Removal
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/yasuo72" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/ii_rohiit_ii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <button 
                onClick={handleLaunchApp}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Launch App
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-300 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              AI-Powered Background Removal
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Remove Video Backgrounds
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Instantly with AI
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload any video, select your subject with a single click, and get a clean background-free video. 
            Perfect for content creators, marketers, and anyone who needs professional video editing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleLaunchApp}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg font-semibold text-lg group"
            >
              <Upload className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Start Removing Backgrounds
            </button>
            <a 
              href="#features" 
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 font-semibold text-lg"
            >
              Learn More
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
          </div>

          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Videos Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Why Choose Our Tool?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Powerful features designed to make video background removal effortless
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Process videos in seconds with our optimized AI models. No waiting, instant results.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Easy to Use
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply upload your video and select your subject. No technical skills required.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Privacy First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your videos are processed securely. We don't store your data unless you choose to.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                High Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get professional-grade results with our advanced AI segmentation models.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                User Friendly
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intuitive interface designed for everyone, from beginners to professionals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Cloud Based
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No installation required. Access from anywhere with an internet connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20 bg-white dark:bg-gray-800 rounded-3xl max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Three simple steps to remove backgrounds from your videos
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Upload Video</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your video file in MP4, MOV, or other common formats
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Select Subject</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Draw a bounding box around the subject you want to keep
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Download Result</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get your background-free video ready to use anywhere
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Perfect For
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover how our tool can help you
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Content Creators</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create professional videos for YouTube, TikTok, and Instagram with clean backgrounds
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Marketing Teams</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create product demos and promotional videos with professional backgrounds
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Social Media</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Make your social media content stand out with unique backgrounds
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Time Saving</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Save hours of manual editing with our automated background removal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Remove Backgrounds?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start using our AI-powered tool for free. No credit card required.
          </p>
          <button 
            onClick={handleLaunchApp}
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl hover:shadow-2xl transition-all font-semibold text-lg group"
          >
            <Upload className="h-6 w-6 mr-3 group-hover:animate-bounce" />
            Launch App Now
            <ArrowUpRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Video className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Video Background Removal
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI-powered video background removal tool. Fast, easy, and free.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="https://huggingface.co/spaces/yasuo7/Background_remover" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Launch App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yasuo72" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/ii_rohiit_ii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Contact</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:contact@yasuo72.dev" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  contact@yasuo72.dev
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                © 2026 Video Background Removal. All rights reserved.
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Built by</span>
                <a 
                  href="https://github.com/yasuo72" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  yasuo72
                </a>
                <span>•</span>
                <span>Powered by Hugging Face</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
