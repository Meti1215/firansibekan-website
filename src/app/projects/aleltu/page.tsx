'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Cpu, Zap, CheckCircle, Server } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

export default function AleltuProjectPage() {
  const heroImage = '/assets/gallery/gallery-placeholder-4.jpg'

  const sections = [
    {
      title: 'Project Overview',
      icon: Briefcase,
      description:
        'Our IT and Electromechanical engineering teams successfully deployed a comprehensive office infrastructure system. The build out integrated structured network wiring with backup diesel generators, ensuring 100% uptime for corporate operations.',
      image: '/assets/gallery/gallery-placeholder-4.jpg',
    },
    {
      title: 'Structured Network Cabling',
      icon: Cpu,
      description:
        'Engineers installed Cat6 structured cabling throughout the client facility, designing server racks, switches, patch panels, and firewalls to manage data traffic safely.',
      image: '/assets/hero/hero-placeholder-4.jpg',
    },
    {
      title: 'Power & Generator Setup',
      icon: Zap,
      description:
        'To protect against grid fluctuations, we integrated a dedicated electromechanical backup generator. Automatic transfer switches (ATS) were configured to instantly route power to critical server lines during outages.',
      image: '/assets/hero/hero-placeholder-3.jpg',
    },
    {
      title: 'Inspection & Handover',
      icon: CheckCircle,
      description:
        'Comprehensive load tests, data throughput assessments, and electrical grounding audits were conducted to verify system compliance prior to client sign-off.',
      image: '/assets/hero/hero-placeholder-1.jpg',
    },
  ]

  const highlights = [
    {
      title: 'Structured Integration',
      icon: Cpu,
      description: 'Seamless combination of electrical backup systems with local software configurations.',
    },
    {
      title: 'High Availability',
      icon: Zap,
      description: 'Backup systems load-tested for continuous power delivery and database integrity.',
    },
    {
      title: 'Certified Support',
      icon: CheckCircle,
      description: 'Pre-handover inspection and training provided to the client’s internal IT team.',
    },
  ]

  return (
    <main className="relative min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-navbar pb-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0F2A4A]/10 text-[#0F2A4A] text-sm font-semibold">
                <Briefcase className="w-4 h-4" />
                IT &amp; Electromechanical
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-5 font-heading">
                Corporate <span className="text-[#0F2A4A]">Network &amp; Power Systems Build</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Integrated structured office wiring, backup generators, and server setups to support uptime and day-to-day operations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button onClick={() => (window.location.href = '/gallery/')}
                >
                  View media
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = '/projects/')}
                >
                  Projects overview
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-sm shadow-xl bg-gray-200"
            >
              <div className="relative aspect-[16/11]">
                <img
                  src={encodeURI(heroImage)}
                  alt="Aleltu project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-sm bg-white border border-gray-100 shadow-sm p-7"
              >
                <div className="inline-flex w-12 h-12 rounded-sm bg-[#0F2A4A]/10 items-center justify-center">
                  <h.icon className="w-6 h-6 text-[#0F2A4A]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-4">{h.title}</h2>
                <p className="text-gray-600 mt-2 leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            {sections.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="grid lg:grid-cols-2 gap-8 items-center rounded-sm bg-white border border-gray-100 shadow-lg p-7 md:p-10"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gray-50 border border-gray-100 text-gray-700 text-sm font-semibold">
                    <s.icon className="w-4 h-4 text-[#0F2A4A]" />
                    Section
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">{s.title}</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">{s.description}</p>
                </div>

                <div className="relative overflow-hidden rounded-sm bg-gray-200 shadow">
                  <div className="relative aspect-[16/10]">
                    <img
                      src={encodeURI(s.image)}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-sm bg-gradient-to-r from-[#0F2A4A] to-[#0F2A4A] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 text-white text-sm font-semibold">
                <Briefcase className="w-4 h-4" />
                Media
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mt-4">Explore engineering &amp; infrastructure build photos</h3>
              <p className="text-white/80 mt-2 leading-relaxed max-w-2xl">
                View cabling setups, generator calibrations, server integration, and client handover milestones.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = '/gallery/')}
              className="bg-white text-[#0F2A4A] border-white hover:bg-gray-100"
            >
              Open gallery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
