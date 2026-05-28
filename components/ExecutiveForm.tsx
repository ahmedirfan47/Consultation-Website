'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle, Sparkles } from 'lucide-react'

export default function ExecutiveForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    position: '',
    website: '',
    email: '',
    whatsapp: '',
    services: [] as string[],
    industry: '',
    country: '',
    comments: ''
  })

  const serviceOptions = [
    'AI Transformation',
    'Workflow Automation',
    'Supply Chain Optimization',
    'Logistics Excellence',
    'Restaurant Operations',
    'Enterprise Growth Strategy',
    'Business Infrastructure',
    'Digital Transformation'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would integrate with your backend/CRM
    // Example: await fetch('/api/consultation', { method: 'POST', body: JSON.stringify(formData) })
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        companyName: '',
        position: '',
        website: '',
        email: '',
        whatsapp: '',
        services: [],
        industry: '',
        country: '',
        comments: ''
      })
    }, 5000)
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  if (submitted) {
    return (
      <section id="consultation" className="py-32 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect p-12 rounded-3xl text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-champagne to-amber rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-deep-navy" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Thank You for Your Interest
            </h3>
            <p className="text-cool-gray text-lg">
              Our executive team will review your request and contact you within 24 hours 
              to schedule your consultation.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="consultation" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-champagne" />
            <span className="text-champagne font-mono text-sm">EXCLUSIVE ACCESS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Book Executive Consultation
          </h2>
          <p className="text-xl text-cool-gray max-w-2xl mx-auto">
            Schedule a confidential session with our strategy team to explore how BlackMont 
            can transform your enterprise.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-effect p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Full Name <span className="text-champagne">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Company Name <span className="text-champagne">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="Acme Corporation"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Your Position <span className="text-champagne">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="Chief Executive Officer"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Company Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="https://acmecorp.com"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Professional Email <span className="text-champagne">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="john.smith@acmecorp.com"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-white font-semibold mb-2">
                WhatsApp Number <span className="text-champagne">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Industry <span className="text-champagne">*</span>
              </label>
              <select
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-champagne focus:outline-none transition-colors"
              >
                <option value="">Select Industry</option>
                <option value="logistics">Logistics & Transportation</option>
                <option value="supply-chain">Supply Chain & Distribution</option>
                <option value="restaurant">Restaurants & Food Service</option>
                <option value="wholesale">Wholesale & Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="warehouse">Warehousing & 3PL</option>
                <option value="startup">Startup / Scale-up</option>
                <option value="enterprise">Enterprise / Fortune 500</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Country / Region <span className="text-champagne">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors"
                placeholder="United States"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mt-6">
            <label className="block text-white font-semibold mb-4">
              Services of Interest <span className="text-champagne">*</span>
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {serviceOptions.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`px-4 py-3 rounded-xl text-left transition-all ${
                    formData.services.includes(service)
                      ? 'bg-gradient-to-r from-champagne to-amber text-deep-navy font-semibold'
                      : 'bg-midnight/50 border border-white/10 text-cool-gray hover:border-champagne'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="mt-6">
            <label className="block text-white font-semibold mb-2">
              Tell us about your business requirements
            </label>
            <textarea
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              rows={4}
              className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-cool-gray focus:border-champagne focus:outline-none transition-colors resize-none"
              placeholder="Share your goals, challenges, or specific areas where you're seeking transformation..."
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 bg-gradient-to-r from-champagne to-amber text-deep-navy py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 premium-shadow hover:shadow-2xl transition-all"
          >
            <span>Request Consultation</span>
            <Send className="w-5 h-5" />
          </motion.button>

          <p className="text-cool-gray text-sm text-center mt-6">
            By submitting, you agree to our confidentiality policy. We typically respond within 24 hours.
          </p>
        </motion.form>
      </div>
    </section>
  )
}