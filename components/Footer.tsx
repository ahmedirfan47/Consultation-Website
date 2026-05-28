'use client'

import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  Globe
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-champagne to-amber rounded-lg flex items-center justify-center">
                <span className="text-deep-navy font-display font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl">BlackMont</h3>
                <p className="text-champagne text-xs font-mono">CONSULTING</p>
              </div>
            </div>
            <p className="text-cool-gray text-sm leading-relaxed mb-6">
              Transforming complexity into competitive advantage through strategic 
              intelligence and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cool-gray hover:text-champagne transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-cool-gray hover:text-champagne transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-cool-gray hover:text-champagne transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'AI Transformation',
                'Supply Chain Optimization',
                'Workflow Automation',
                'Enterprise Strategy',
                'Digital Transformation',
                'Operations Consulting'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-cool-gray hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              {[
                'Logistics & Transportation',
                'Supply Chain',
                'Restaurants & Cafés',
                'Manufacturing',
                'Wholesale & Distribution',
                'Enterprise & Fortune 500'
              ].map((industry) => (
                <li key={industry}>
                  <a href="#industries" className="text-cool-gray hover:text-white transition-colors text-sm">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-cool-gray text-sm">Email</p>
                  <a href="mailto:contact@blackmont.com" className="text-white hover:text-champagne transition-colors text-sm">
                    contact@blackmont.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-cool-gray text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-champagne transition-colors text-sm">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-cool-gray text-sm">Global HQ</p>
                  <p className="text-white text-sm">New York • London • Singapore</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cool-gray text-sm">
            © {currentYear} BlackMont Consulting Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cool-gray hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-cool-gray hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-cool-gray hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}