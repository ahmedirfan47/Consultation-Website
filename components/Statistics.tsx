'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { value: '200+', label: 'Enterprise Clients', suffix: '' },
    { value: '2.4', label: 'Billion in Value Created', suffix: 'B+' },
    { value: '45+', label: 'Countries Worldwide', suffix: '' },
    { value: '98', label: 'Client Satisfaction', suffix: '%' },
  ]

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-midnight to-deep-navy opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass-effect p-8 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-cool-gray text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}