'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Wrench, MonitorSmartphone, Microscope, Handshake, Sparkles, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { brand } from '@/lib/brand'

export default function CareersPage() {
  const values = [
    {
      title: 'Healthcare Technology',
      description: 'Advanced medical equipment and diagnostic technologies that improve healthcare delivery and operational efficiency.',
      icon: Stethoscope,
    },
    {
      title: 'Engineering Excellence',
      description: 'Reliable electromechanical engineering, installation, maintenance, and technical solutions for healthcare and commercial facilities.',
      icon: Wrench,
    },
    {
      title: 'Information Technology Solutions',
      description: 'Professional IT consulting, networking, digital infrastructure, and technology services that support business growth.',
      icon: MonitorSmartphone,
    },
  ]

  const openings = [
    { title: 'Medical Imaging Solutions', description: 'Integrated imaging technologies and support services designed for modern diagnostic and clinical environments.', icon: Microscope },
    { title: 'Electromechanical Engineering', description: 'Specialized engineering services covering installation, maintenance, and reliable system performance.', icon: Wrench },
    { title: 'Healthcare Equipment Supply', description: 'Trusted sourcing and delivery of medical equipment that strengthens healthcare operations and patient care.', icon: Stethoscope },
    { title: 'IT Consulting & Digital Infrastructure', description: 'Practical technology planning, networking, and infrastructure solutions tailored to growing organizations.', icon: MonitorSmartphone },
    { title: 'Technical Support & Maintenance', description: 'Responsive maintenance and support services that keep equipment, systems, and facilities running smoothly.', icon: Sparkles },
    { title: 'Strategic Partnerships', description: 'Collaborative delivery models that connect public and private sector stakeholders through dependable expertise.', icon: Handshake },
  ]

  return (
    <main className="relative min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-navbar pb-8 md:pb-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-6xl font-bold text-black mb-3 md:mb-5 font-heading">
              Engineering, Healthcare & IT Solutions
            </h1>
            <p className="text-xs md:text-xl text-gray-600 max-w-4xl mx-auto">
              {brand.shortName} is a trusted provider of engineering services, healthcare technology, electromechanical solutions, medical equipment, and professional IT consulting.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-10 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2 md:gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-sm md:rounded-sm border border-gray-100 shadow-sm p-3 md:p-8"
            >
              <div className="inline-flex w-8 h-8 md:w-12 md:h-12 rounded-sm md:rounded-sm bg-[#0F2A4A]/10 items-center justify-center">
                <item.icon className="w-4 h-4 md:w-6 md:h-6 text-[#0F2A4A]" />
              </div>
              <h2 className="text-[11px] md:text-xl font-bold text-gray-900 mt-2 md:mt-4">{item.title}</h2>
              <p className="text-[9px] md:text-base text-gray-600 mt-1 md:mt-2 leading-snug md:leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-4 md:mt-10 bg-white rounded-sm md:rounded-sm border border-gray-100 shadow-lg p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <div>
              <h2 className="text-base md:text-2xl font-bold text-gray-900">Our Core Services</h2>
              <p className="text-[10px] md:text-base text-gray-600 mt-1 md:mt-2">
                Explore the specialized services that enable Firansibekan to deliver reliable engineering, healthcare, and technology solutions across Ethiopia.
              </p>
            </div>
            <Button className="group" onClick={() => (window.location.href = '/#contact')}>
              Contact Our Team
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-4 md:mt-8 grid grid-cols-2 gap-2 md:gap-5">
            {openings.map((service) => (
              <div key={service.title} className="rounded-sm md:rounded-sm bg-gray-50 border border-gray-100 p-3 md:p-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="inline-flex w-8 h-8 md:w-10 md:h-10 rounded-sm bg-[#0F2A4A]/10 items-center justify-center">
                    <service.icon className="w-4 h-4 md:w-5 md:h-5 text-[#0F2A4A]" />
                  </div>
                  <div className="text-[10px] md:text-base font-semibold text-gray-900">{service.title}</div>
                </div>
                <div className="text-[9px] md:text-sm text-gray-600 mt-2 md:mt-3 leading-snug md:leading-relaxed">{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
