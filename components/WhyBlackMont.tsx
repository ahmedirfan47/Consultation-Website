'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Users, Trophy, Sparkles, Globe, Lock } from 'lucide-react'

export default function WhyBlackMont() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const reasons = [
    {
      icon: Trophy,
      title: 'Proven Excellence',
      description: 'Track record of delivering measurable results for Fortune 500 companies and high-growth enterprises across 45+ countries.'
    },
    {
      icon: Brain,
      title: 'Strategic Intelligence',
      description: 'Proprietary methodologies combining AI-powered analytics with deep industry expertise to uncover hidden opportunities.'
    },
    {
      icon: Users,
      title: 'Elite Team',
      description: 'Former executives from McKinsey, BCG, Amazon, and Google bringing world-class strategic and operational expertise.'
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Cutting-edge AI and automation capabilities integrated with proven management consulting frameworks.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International presence with deep local market knowledge and cultural intelligence across all major economies.'
    },
    {
      icon: Lock,
      title: 'Confidentiality & Trust',
      description: 'Bank-level security protocols and ironclad NDAs protecting your most sensitive strategic information.'
    },
  ]

  return (
    <section ref={ref} className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
            <span className="text-champagne font-mono text-sm">WHY BLACKMONT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            The BlackMont Advantage
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            We combine strategic rigor with operational excellence to deliver transformative 
            outcomes that create lasting competitive advantage.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-effect p-8 rounded-2xl hover:scale-105 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-champagne to-amber rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Icon className="w-8 h-8 text-deep-navy" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-cool-gray leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}