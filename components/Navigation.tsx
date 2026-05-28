'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Insights', href: '#insights' },
    { name: 'About', href: '#about' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-champagne to-amber rounded-lg flex items-center justify-center">
              <span className="text-deep-navy font-display font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-white font-display font-bold text-xl tracking-tight">
                BlackMont
              </h1>
              <p className="text-champagne text-xs font-mono tracking-wider">CONSULTING</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cool-gray hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-champagne to-amber text-deep-navy px-6 py-2.5 rounded-full font-semibold text-sm flex items-center space-x-2 hover:shadow-lg hover:shadow-champagne/20 transition-all"
            >
              <span>Book Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-cool-gray hover:text-white transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-champagne to-amber text-deep-navy px-6 py-3 rounded-full font-semibold text-center"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}