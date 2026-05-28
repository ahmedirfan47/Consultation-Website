'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react'

export default function Transformation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      icon: Search,
      title: 'Discovery & Diagnosis',
      description: 'Comprehensive assessment of current state, challenges, and opportunities through data analysis and stakeholder interviews.',
      duration: '2-4 weeks'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Design',
      description: 'Development of tailored transformation roadmap with clear milestones, KPIs, and resource requirements.',
      duration: '3-5 weeks'
    },
    {
      icon: Code,
      title: 'Implementation',
      description: 'Agile deployment of solutions with hands-on support, change management, and continuous optimization.',
      duration: '8-16 weeks'
    },
    {
      icon: Rocket,
      title: 'Scale & Optimize',
      description: 'Performance monitoring, refinement, and expansion across organization with knowledge transfer.',
      duration: 'Ongoing'
    },
  ]

  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-4 py-2 rounded-full mb-6">
            <span className="text-champagne font-mono text-sm">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            How We Transform Businesses
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            A proven, repeatable framework that delivers measurable results while building 
            internal capabilities for sustained excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne via-amber to-champagne hidden lg:block" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-5/12">
                    <div className={`glass-effect p-8 rounded-2xl ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="inline-block bg-champagne/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-champagne text-sm font-mono">
                          {step.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-cool-gray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-champagne to-amber rounded-full flex items-center justify-center shadow-2xl shadow-champagne/20">
                      <Icon className="w-10 h-10 text-deep-navy" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
            Guaranteed Outcomes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Measurable ROI within 12 months',
              'Executive dashboards & KPI tracking',
              'Knowledge transfer & capability building'
            ].map((outcome, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-champagne flex-shrink-0 mt-1" />
                <span className="text-cool-gray">{outcome}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}