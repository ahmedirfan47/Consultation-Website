'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react'

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const caseStudies = [
    {
      industry: 'Global Logistics',
      client: 'Fortune 500 Logistics Provider',
      challenge: 'Inefficient route planning causing 30% excess fuel costs and delivery delays',
      solution: 'AI-powered route optimization and predictive maintenance system',
      results: [
        { icon: DollarSign, metric: '$45M', label: 'Annual Savings' },
        { icon: TrendingUp, metric: '35%', label: 'Efficiency Gain' },
        { icon: Clock, metric: '22%', label: 'Faster Deliveries' },
      ],
      testimonial: 'BlackMont transformed our operations. The ROI exceeded expectations in just 6 months.',
      author: 'Chief Operations Officer'
    },
    {
      industry: 'Restaurant Chain',
      client: 'Multi-Unit Restaurant Group',
      challenge: 'Food waste at 25% of revenue and inconsistent operational standards across locations',
      solution: 'Integrated inventory management and kitchen operations platform',
      results: [
        { icon: DollarSign, metric: '$8.2M', label: 'Cost Reduction' },
        { icon: TrendingUp, metric: '60%', label: 'Less Waste' },
        { icon: Users, metric: '4.8/5', label: 'Customer Rating' },
      ],
      testimonial: 'Our margins improved dramatically while maintaining quality. Game-changing partnership.',
      author: 'CEO, Restaurant Group'
    },
    {
      industry: 'Manufacturing',
      client: 'Enterprise Manufacturer',
      challenge: 'Supply chain disruptions causing production delays and inventory issues',
      solution: 'End-to-end supply chain visibility and demand forecasting AI',
      results: [
        { icon: DollarSign, metric: '$120M', label: 'Value Created' },
        { icon: TrendingUp, metric: '40%', label: 'Inventory Reduction' },
        { icon: Clock, metric: '95%', label: 'On-Time Delivery' },
      ],
      testimonial: 'BlackMont gave us supply chain resilience we never thought possible.',
      author: 'VP of Operations'
    },
  ]

  return (
    <section ref={ref} className="py-32 relative bg-gradient-to-b from-charcoal to-deep-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
            <span className="text-champagne font-mono text-sm">CLIENT SUCCESS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Transformation Stories
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Real results from enterprise partnerships that redefined operational excellence 
            and competitive positioning.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-8 md:p-12 rounded-3xl hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Info */}
                <div className="lg:w-1/2">
                  <div className="inline-block bg-champagne/10 px-3 py-1 rounded-full mb-4">
                    <span className="text-champagne text-sm font-semibold">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {study.client}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-champagne font-semibold mb-2">Challenge</h4>
                      <p className="text-cool-gray">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-champagne font-semibold mb-2">Solution</h4>
                      <p className="text-cool-gray">{study.solution}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-2 border-champagne pl-4 mt-6">
                    <p className="text-white italic mb-2">"{study.testimonial}"</p>
                    <p className="text-cool-gray text-sm">— {study.author}</p>
                  </div>
                </div>

                {/* Right: Results */}
                <div className="lg:w-1/2">
                  <h4 className="text-champagne font-semibold mb-6">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => {
                      const Icon = result.icon
                      return (
                        <div key={i} className="bg-midnight/50 p-6 rounded-xl text-center">
                          <Icon className="w-6 h-6 text-champagne mx-auto mb-3" />
                          <div className="text-3xl font-display font-bold text-white mb-1">
                            {result.metric}
                          </div>
                          <div className="text-cool-gray text-xs">
                            {result.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}