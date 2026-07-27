'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  ArrowUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand } from '@/lib/brand'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Partners', href: '/partnerships' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/#contact' }
  ]

  const stakeholders = [
    { name: 'Health & Hospital Solutions', href: '/departments#health-hospitals' },
    { name: 'IT & IT Consulting', href: '/departments#it-consulting' },
    { name: 'Electromechanical Works', href: '/departments#electromechanical' },
    { name: 'Medical Imaging Solutions', href: '/departments#medical-imaging' },
    { name: 'News & Articles', href: '/articles' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' }
  ]

  const legalLinks = [
    { name: 'Compliance', href: '/compliance/' },
    { name: 'Privacy Policy', href: '/privacy/' },
    { name: 'Terms of Use', href: '/terms/' },
    { name: 'Disclaimer', href: '/disclaimer/' }
  ]

  const services = [
    'Healthcare & Hospital Solutions',
    'IT & IT Consulting Services',
    'Electromechanical Works & Engineering',
    'Medical Imaging & Diagnostic Technology',
    'Technical Support & Professional Services'
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href
        return
      }
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    window.location.href = href
  }

  return (
    <footer className="bg-[#2B2B2B] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-2"
          >
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-sm flex items-center justify-center overflow-hidden">
                <img 
                  src={brand.logoPath} 
                  alt={`${brand.name} Logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base md:text-2xl font-bold text-white">{brand.name}</h3>
                <p className="text-[10px] md:text-base text-gray-400 italic">{brand.tagline}</p>
              </div>
            </div>
            
            <p className="text-[10px] md:text-base text-white mb-3 md:mb-6 leading-relaxed">
              A diversified Ethiopian business group with a story that spans consumer distribution, paper products, hospitality, wellness, real estate, mining, agriculture, and export growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E63946]" />
                <span className="text-[10px] md:text-base text-gray-300">{brand.phone}</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E63946]" />
                <span className="text-[10px] md:text-base text-gray-300">{brand.emailLabel}</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <MapPin className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E63946]" />
                <span className="text-[10px] md:text-base text-gray-300">{brand.location}</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Clock className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#E63946]" />
                <span className="text-[10px] md:text-base text-gray-300">{brand.hours}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs md:text-lg font-semibold mb-2 md:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-1 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[10px] md:text-base text-gray-300 hover:text-[#0F2A4A] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stakeholders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="text-xs md:text-lg font-semibold mb-2 md:mb-6 text-white">Departments</h4>
            <ul className="space-y-1 md:space-y-3">
              {stakeholders.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[10px] md:text-base text-gray-300 hover:text-[#0F2A4A] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-14 p-5 md:p-7 bg-white/5 border border-[#E63946]/35 rounded-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-3 md:mb-0">
              <h4 className="text-sm md:text-xl font-bold mb-1 md:mb-2 text-white">Work With Us</h4>
              <p className="text-[10px] md:text-base text-white/80">Contact us to discuss partnerships, hospitality, agriculture, real estate, mining, or export opportunities.</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(brand.phoneHref)}
              className="bg-[#E63946] text-white border-[#E63946] hover:bg-[#0F2A4A] hover:border-[#0F2A4A] text-[10px] md:text-sm px-3 py-1.5 md:px-4 md:py-2 whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-3.5 h-3.5 md:w-5 md:h-5 mr-1.5 md:mr-2" />
              Call Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <p className="text-gray-400 text-[9px] md:text-sm">
                © 2026 {brand.name}. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <button
                onClick={() => window.open('https://facebook.com/')}
                className="text-gray-400 hover:text-[#0F2A4A] transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-[#0F2A4A] transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between text-[9px] md:text-xs text-gray-500">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                {legalLinks.map((link, idx) => (
                  <React.Fragment key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-[#0F2A4A] transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                    {idx !== legalLinks.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-[#0F2A4A]" />
                <span>for long-term value</span>
              </div>
            </div>
            
            {/* Developer Credit */}
            <div className="mt-4 md:mt-8 flex justify-center">
              <a 
                href="https://elevateadds.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative px-2.5 py-1 md:px-4 md:py-2 overflow-hidden rounded-sm bg-[#1B1B1B] border border-[#0F2A4A]/20 transition-all duration-300 hover:bg-[#2B2622] hover:shadow-[0_0_20px_rgba(210,180,140,0.28)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E6D0B0] via-[#0F2A4A] to-[#0F2A4A] opacity-25 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                <span className="relative text-[9px] md:text-sm bg-gradient-to-r from-[#E6D0B0] via-[#0F2A4A] to-[#0F2A4A] bg-clip-text text-transparent font-bold tracking-wider group-hover:text-white transition-colors duration-300">
                  Developed by Elevate Marketing & Advertising
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
