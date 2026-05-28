'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-champagne" />
            <span className="text-sm font-medium text-white">Trusted by Global Leaders</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            Transforming
            <br />
            <span className="text-gradient">Complexity</span> into
            <br />
            Competitive Advantage
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cool-gray max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Strategic intelligence and operational excellence for enterprises navigating 
            digital transformation, AI integration, and global scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-champagne to-amber text-deep-navy px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 premium-shadow hover:shadow-2xl transition-all"
            >
              <span>Schedule Executive Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-12 text-sm text-cool-gray"
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-champagne" />
              <span>$2.4B+ Value Created</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-champagne" />
              <span>200+ Enterprises Transformed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-champagne" />
              <span>45+ Countries Served</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-champagne/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-champagne rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}