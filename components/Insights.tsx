'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react'

export default function Insights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const insights = [
    {
      category: 'AI Transformation',
      title: 'The Executive's Guide to Enterprise AI: Moving Beyond Pilot Projects',
      excerpt: 'How leading organizations are scaling AI from experimentation to operational excellence across the enterprise.',
      date: 'May 15, 2026',
      readTime: '8 min read'
    },
    {
      category: 'Supply Chain',
      title: 'Supply Chain Resilience in 2026: Strategies for Navigating Uncertainty',
      excerpt: 'Building adaptive supply chains that thrive amid disruption through intelligent automation and predictive analytics.',
      date: 'May 10, 2026',
      readTime: '6 min read'
    },
    {
      category: 'Operations',
      title: 'Restaurant Tech Stack 2026: The Definitive Guide for Multi-Unit Operators',
      excerpt: 'Comprehensive analysis of technology platforms driving operational efficiency and customer experience in food service.',
      date: 'May 5, 2026',
      readTime: '10 min read'
    },
  ]

  return (
    <section id="insights" ref={ref} className="py-32 relative bg-gradient-to-b from-deep-navy to-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
            <span className="text-champagne font-mono text-sm">THOUGHT LEADERSHIP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Executive Insights
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Strategic perspectives on transformation, innovation, and operational excellence 
            from our consulting practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-champagne/20 to-amber/20 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-champagne opacity-50" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-champagne text-sm font-semibold">
                    {insight.category}
                  </span>
                  <div className="flex items-center text-cool-gray text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {insight.date}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-champagne transition-colors">
                  {insight.title}
                </h3>

                <p className="text-cool-gray text-sm mb-4 leading-relaxed">
                  {insight.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-cool-gray text-xs">{insight.readTime}</span>
                  <div className="flex items-center text-champagne text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}