'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Truck, 
  Package, 
  Coffee, 
  Building, 
  Factory, 
  ShoppingBag,
  Warehouse,
  Rocket
} from 'lucide-react'

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const industries = [
    {
      icon: Truck,
      name: 'Logistics & Transportation',
      description: 'Route optimization, fleet management, and last-mile delivery transformation.',
      stats: '40% efficiency gain'
    },
    {
      icon: Package,
      name: 'Supply Chain & Distribution',
      description: 'End-to-end supply chain visibility, demand planning, and network optimization.',
      stats: '35% cost reduction'
    },
    {
      icon: Coffee,
      name: 'Restaurants & Cafés',
      description: 'Kitchen operations, inventory management, and multi-unit expansion strategy.',
      stats: '50% waste reduction'
    },
    {
      icon: ShoppingBag,
      name: 'Wholesale & Retail',
      description: 'Inventory optimization, demand forecasting, and omnichannel distribution.',
      stats: '45% inventory improvement'
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Production optimization, quality systems, and supply chain integration.',
      stats: '30% productivity increase'
    },
    {
      icon: Warehouse,
      name: 'Warehousing & 3PL',
      description: 'Warehouse automation, layout optimization, and technology integration.',
      stats: '60% throughput increase'
    },
    {
      icon: Rocket,
      name: 'Startups & Scale-ups',
      description: 'Growth strategy, operational infrastructure, and market expansion.',
      stats: '3x faster scaling'
    },
    {
      icon: Building,
      name: 'Enterprise & Fortune 500',
      description: 'Digital transformation, AI integration, and enterprise-wide optimization.',
      stats: '$100M+ value created'
    },
  ]

  return (
    <section id="industries" ref={ref} className="py-32 relative bg-gradient-to-b from-deep-navy via-charcoal to-deep-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
            <span className="text-champagne font-mono text-sm">INDUSTRIES WE TRANSFORM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Sector Expertise
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Deep industry knowledge combined with cross-sector innovation to deliver 
            breakthrough results across diverse markets.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-champagne" />
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {industry.name}
                  </h3>
                  
                  <p className="text-cool-gray text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="inline-block bg-champagne/10 px-3 py-1 rounded-full">
                    <span className="text-champagne text-xs font-mono font-semibold">
                      {industry.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}