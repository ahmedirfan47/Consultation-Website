'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Workflow, 
  TrendingUp, 
  Network, 
  Boxes, 
  Utensils,
  Building2,
  Zap,
  ArrowRight
} from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Brain,
      title: 'AI Transformation',
      description: 'Enterprise AI strategy, implementation, and integration to unlock operational intelligence and competitive advantage.',
      features: ['AI Strategy', 'ML Implementation', 'Intelligent Automation', 'Predictive Analytics']
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'End-to-end process optimization and intelligent automation to eliminate inefficiencies and scale operations.',
      features: ['Process Mining', 'RPA Integration', 'Digital Workflows', 'System Integration']
    },
    {
      icon: Network,
      title: 'Supply Chain Optimization',
      description: 'Advanced supply chain strategy, visibility, and optimization for resilient global operations.',
      features: ['Network Design', 'Demand Planning', 'Inventory Optimization', 'Risk Management']
    },
    {
      icon: Boxes,
      title: 'Logistics Excellence',
      description: 'Transportation optimization, warehouse efficiency, and last-mile delivery transformation.',
      features: ['Route Optimization', 'Fleet Management', 'Warehouse Systems', 'Distribution Strategy']
    },
    {
      icon: Utensils,
      title: 'Restaurant & Café Operations',
      description: 'Comprehensive operational systems for food service enterprises seeking efficiency and scale.',
      features: ['Kitchen Operations', 'Inventory Systems', 'Staff Optimization', 'Multi-unit Strategy']
    },
    {
      icon: TrendingUp,
      title: 'Enterprise Growth Strategy',
      description: 'Strategic planning, market expansion, and performance optimization for sustainable growth.',
      features: ['Market Analysis', 'Growth Planning', 'M&A Strategy', 'Performance Management']
    },
    {
      icon: Building2,
      title: 'Business Infrastructure',
      description: 'Technology architecture, organizational design, and operational infrastructure for enterprise scale.',
      features: ['Tech Architecture', 'Org Design', 'Change Management', 'Governance']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Comprehensive digital strategy and technology enablement for competitive advantage.',
      features: ['Digital Strategy', 'Cloud Migration', 'Data Architecture', 'Innovation Labs']
    },
  ]

  return (
    <section id="services" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
            <span className="text-champagne font-mono text-sm">OUR CAPABILITIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Comprehensive consulting services designed for global enterprises navigating 
            complexity and pursuing operational excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-champagne/20 to-amber/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-champagne" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-cool-gray text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-cool-gray">
                      <ArrowRight className="w-3 h-3 text-champagne mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}