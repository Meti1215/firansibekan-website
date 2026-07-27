'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle,
  Stethoscope, Terminal, Activity, Cpu, Globe
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { brand, departments as brandDepartments } from '@/lib/brand'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const departmentIconMap = {
  'health-hospitals': Stethoscope,
  'it-consulting': Terminal,
  'electromechanical': Activity,
  'medical-imaging': Cpu,
} as const

const departmentPalette = ['blue', 'amber', 'red', 'charcoal', 'blue', 'amber', 'red', 'charcoal'] as const

// Page-local authoritative departments list (do not modify shared brand data)
const departments = [
  {
    id: 'health-hospitals',
    title: 'Healthcare Technology & Medical Equipment',
    tagline: 'Healthcare Technology & Medical Equipment',
    description:
      'Firansibekan supplies and services clinical-grade medical equipment and integrated healthcare technologies. We support hospitals and health facilities with procurement, proven system integration, installation, and certified technical support to ensure dependable clinical operation.',
    features: [
      'Procurement of medical devices and systems',
      'Installation, calibration and commissioning',
      'Clinical workflow integration and training',
      'Comprehensive after-sales technical support',
    ],
    benefits: [
      'Improved clinical uptime and equipment reliability',
      'Local technical expertise and rapid response',
      'Vendor-managed service capability',
      'Regulatory and standards compliance support',
    ],
    image: brandDepartments.find((d) => d.id === 'health-hospitals')?.image || brandDepartments[0].image,
    image2: brandDepartments.find((d) => d.id === 'health-hospitals')?.image2 || brandDepartments[0].image2,
    icon: departmentIconMap['health-hospitals'],
    color: 'blue',
    highlights: [],
  },
  {
    id: 'electromechanical',
    title: 'Engineering & Electromechanical Works',
    tagline: 'Engineering & Electromechanical Works',
    description:
      'Our engineering team delivers electromechanical installations, preventive maintenance, and project execution for critical facilities. We serve hospitals, commercial sites and institutional clients that require robust, code-compliant electrical and mechanical systems.',
    features: [
      'Electromechanical installation and commissioning',
      'Preventive and corrective maintenance',
      'Project management and site supervision',
      'Systems testing and performance validation',
    ],
    benefits: [
      'Reduced operational downtime',
      'Safer, code-compliant installations',
      'Measured performance and warranty-backed delivery',
      'Single-vendor accountability for complex systems',
    ],
    image: brandDepartments.find((d) => d.id === 'electromechanical')?.image || brandDepartments[2].image,
    image2: brandDepartments.find((d) => d.id === 'electromechanical')?.image2 || brandDepartments[2].image2,
    icon: departmentIconMap['electromechanical'],
    color: 'amber',
    highlights: [],
  },
  {
    id: 'it-consulting',
    title: 'IT Solutions & Consulting',
    tagline: 'IT Solutions & Consulting',
    description:
      "We provide tailored IT strategy, infrastructure deployment, and systems integration to public and private organisations. Our focus is resilient networks, secure data management, and practical technology roadmaps that support operational objectives.",
    features: [
      'IT strategy and consulting',
      'Network and infrastructure deployment',
      'Systems integration and cybersecurity basics',
      'Ongoing technical support and SLA options',
    ],
    benefits: [
      'Improved business continuity and uptime',
      'Scalable, maintainable IT infrastructure',
      'Aligned technology to operational needs',
      'Local support and accountable service levels',
    ],
    image: brandDepartments.find((d) => d.id === 'it-consulting')?.image || brandDepartments[1].image,
    image2: brandDepartments.find((d) => d.id === 'it-consulting')?.image2 || brandDepartments[1].image2,
    icon: departmentIconMap['it-consulting'],
    color: 'red',
    highlights: [],
  },
  {
    id: 'medical-imaging',
    title: 'Medical Imaging Solutions',
    tagline: 'Medical Imaging Solutions',
    description:
      'Firansibekan supplies and services diagnostic imaging systems and supports clinical teams with installation, calibration, and technical training. We enable hospitals to deliver reliable diagnostic imaging with local service capability and documented quality assurance.',
    features: [
      'Digital radiography and imaging systems',
      'Installation, calibration and quality assurance',
      'Clinical application support and training',
      'Preventive maintenance and spare parts supply',
    ],
    benefits: [
      'Consistent diagnostic image quality',
      'Faster clinical workflows and throughput',
      'Local service and parts availability',
      'Vendor-neutral clinical support where required',
    ],
    image: brandDepartments.find((d) => d.id === 'medical-imaging')?.image || brandDepartments[3].image,
    image2: brandDepartments.find((d) => d.id === 'medical-imaging')?.image2 || brandDepartments[3].image2,
    icon: departmentIconMap['medical-imaging'],
    color: 'charcoal',
    highlights: [],
  },
]

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string; light: string }> = {
  blue: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]', border: 'border-[#0F2A4A]/25', light: 'bg-[#0F2A4A]' },
  amber: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]', border: 'border-[#0F2A4A]/25', light: 'bg-[#0F2A4A]' },
  red: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]', border: 'border-[#0F2A4A]/25', light: 'bg-[#0F2A4A]' },
  charcoal: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]', border: 'border-[#0F2A4A]/25', light: 'bg-[#0F2A4A]' },
}

function DeptImageCarousel({ image1, image2, title, isEven, expandSingleImage = false }: { image1: string; image2: string; title: string; isEven: boolean; expandSingleImage?: boolean }) {
  // Use only one unique high-quality image per department to avoid duplicate/gallery repetition.
  const uniqueImages = Array.from(new Set([image1, image2].filter(Boolean)))
  const primary = uniqueImages[0] || image1

  return (
    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
      {/* Mobile: single image */}
      <div className="md:hidden relative">
        <div className="relative h-48 rounded-sm overflow-hidden shadow-xl">
          <Image src={primary} alt={title} fill className="object-cover" unoptimized />
        </div>
      </div>

      {/* Desktop: single larger image */}
      <div className="hidden md:block">
        <div className={`relative ${expandSingleImage ? 'h-[35rem]' : 'h-80'} rounded-sm overflow-hidden shadow-xl`}>
          <Image src={primary} alt={title} fill className="object-cover" unoptimized />
        </div>
      </div>
    </div>
  )
}

export default function DepartmentsPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F4F6]">
      <Navigation />

      {/* Hero */}
      <section className="pt-navbar pb-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0F2A4A]/14 text-[#0F2A4A] text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Our Departments
            </div>
            <h1 className="text-2xl md:text-6xl font-bold text-black mb-3 md:mb-6 font-heading">
              Integrated Solutions, One Trusted Partner
            </h1>
            <p className="text-xs md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore Firansibekan Trade and Investment PLC's core service areas—healthcare technology, engineering, IT solutions, and medical imaging—delivering reliable, high-quality solutions for hospitals, healthcare facilities, government institutions, NGOs, private organizations, and businesses across Ethiopia.
            </p>
          </motion.div>

          {/* Quick Nav */}
          <div className="mt-6 md:mt-12 flex flex-wrap justify-center gap-1.5 md:gap-3">
            {departments.map((dept) => {
              const colors = colorMap[dept.color]
              return (
                <button
                  key={dept.id}
                  onClick={() => {
                    const el = document.getElementById(dept.id)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`inline-flex items-center gap-1 md:gap-2 px-2.5 py-1.5 md:px-5 md:py-2.5 rounded-sm ${colors.badge} text-white text-[10px] md:text-sm font-semibold hover:shadow-md transition-all border ${colors.border}`}
                >
                  <dept.icon className="w-3 h-3 md:w-4 md:h-4" />
                  {dept.title}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Department Sections */}
      {departments.map((dept, idx) => {
        const colors = colorMap[dept.color]
        const isEven = idx % 2 === 0

        return (
          <section
            key={dept.id}
            id={dept.id}
            className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-[#F3F4F6]`}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div {...fadeIn}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-sm ${colors.badge} flex items-center justify-center`}>
                    <dept.icon className={`w-5 h-5 text-white`} />
                  </div>
                  <span className={`text-sm font-semibold ${colors.text} uppercase tracking-wider`}>{dept.tagline}</span>
                </div>
                <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8">{dept.title}</h2>

                {/* Content Grid */}
                <div className={`grid lg:grid-cols-2 gap-5 md:gap-10 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <p className="text-xs md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-8">
                      {dept.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                      {dept.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-1.5 md:gap-3">
                          <CheckCircle className={`w-3.5 h-3.5 md:w-5 md:h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-[10px] md:text-sm text-gray-700">{h}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="mt-8"
                      onClick={() => {
                        const el = document.getElementById('contact')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                        else window.location.href = '/#contact'
                      }}
                    >
                      Inquire About {dept.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <DeptImageCarousel
                    image1={dept.image}
                    image2={dept.id === 'distribution' || dept.id === 'paper' ? dept.image : dept.image2}
                    title={dept.title}
                    isEven={isEven}
                    expandSingleImage={dept.id === 'distribution' || dept.id === 'paper'}
                  />
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F2A4A] to-[#0F2A4A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-white">Ready to Work With Us?</h2>
            <p className="text-xs md:text-lg text-white/80 mb-4 md:mb-8">
              Whether you are exploring distribution, hospitality, industrial supply, agriculture, or export opportunities, {brand.shortName} is ready to build meaningful partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#0F2A4A] hover:bg-gray-100"
                onClick={() => window.location.href = '/partnerships'}
              >
                Why Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => window.location.href = '/#contact'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
