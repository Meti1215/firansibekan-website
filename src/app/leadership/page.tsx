'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Shield, Heart, Briefcase, Building2, BarChart3 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { brand, brandMedia } from '@/lib/brand'

type TeamMember = {
  name: string
  title: string
  image?: string
  bio?: string
  badges?: string[]
}

type Division = {
  id: string
  title: string
  icon: React.ElementType
  color: string
  members: TeamMember[]
}

const divisions: Division[] = [
  {
    id: 'executive-leadership',
    title: 'Executive Leadership',
    icon: Shield,
    color: 'blue',
    members: [
      {
        name: 'Executive Leadership',
        title: 'Strategic Direction',
        bio: "Provides direction across the company's growth strategy, strategic partnerships, operational excellence, and commitment to delivering quality engineering, healthcare, IT, and trading solutions throughout Ethiopia.",
        badges: ['Strategic Direction', 'Corporate Leadership'],
      },
    ],
  },
  {
    id: 'engineering-and-healthcare',
    title: 'Engineering & Healthcare Solutions',
    icon: Briefcase,
    color: 'amber',
    members: [
      {
        name: 'Engineering & Service Delivery',
        title: 'Technical Solutions',
        bio: 'Supports engineering, electromechanical installation, healthcare technology, medical equipment supply, preventive maintenance, and technical support services for clients across Ethiopia.',
        badges: ['Technical Solutions', 'Healthcare Technology'],
      },
    ],
  },
  {
    id: 'it-and-digital-solutions',
    title: 'IT & Digital Solutions',
    icon: Building2,
    color: 'red',
    members: [
      {
        name: 'Technology & Infrastructure',
        title: 'IT Consulting',
        bio: 'Delivers IT consulting, infrastructure deployment, network solutions, system integration, digital transformation, and technology support aligned with client business needs.',
        badges: ['IT Consulting', 'Digital Infrastructure'],
      },
    ],
  },
  {
    id: 'client-partnerships',
    title: 'Client Partnerships',
    icon: BarChart3,
    color: 'charcoal',
    members: [
      {
        name: 'Commercial & Partnership Team',
        title: 'Client Relations',
        bio: 'Builds long-term relationships with hospitals, government institutions, NGOs, private organizations, suppliers, and business partners through trusted service and responsive support.',
        badges: ['Client Relations', 'Strategic Partnerships'],
      },
    ],
  },
]

const colorMap: Record<string, { bg: string; text: string; badge: string; gradient: string }> = {
  blue: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]/14', gradient: 'from-[#0F2A4A] to-[#0F2A4A]' },
  amber: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]/14', gradient: 'from-[#0F2A4A] to-[#0F2A4A]' },
  red: { bg: 'bg-[#0F2A4A]/8', text: 'text-[#0F2A4A]', badge: 'bg-[#0F2A4A]/14', gradient: 'from-[#0F2A4A] to-[#0F2A4A]' },
  charcoal: { bg: 'bg-gray-100', text: 'text-gray-900', badge: 'bg-gray-200', gradient: 'from-gray-800 to-black' },
}

export default function LeadershipPage() {
  const [activeDiv, setActiveDiv] = useState(divisions[0]?.id ?? '')

  const totalMembers = divisions.reduce((sum, d) => sum + d.members.length, 0)
  const companyEstablished = 2012
  const serviceCommitment = '100%'

  return (
    <main className="relative min-h-screen bg-[#F3F4F6]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-navbar pb-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={brandMedia.ventures.distribution}
            alt="Firansibekan business group"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/10 backdrop-blur-sm text-medical-blue text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Leadership & Governance
            </div>
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-6 font-heading">
              Leadership Driving Innovation & Growth
            </h1>
            <p className="text-xs md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the experienced leadership team guiding Firansibekan Trade and Investment PLC in delivering reliable engineering, healthcare technology, electromechanical, and IT solutions with professionalism, integrity, and long-term commitment.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mt-6 md:mt-12 grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-sm md:rounded-sm border border-white/10 p-2.5 md:p-5">
              <div className="text-xl md:text-3xl font-bold text-white">{companyEstablished}</div>
              <div className="text-[10px] md:text-sm text-gray-400">Company Established</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-sm md:rounded-sm border border-white/10 p-2.5 md:p-5">
              <div className="text-xl md:text-3xl font-bold text-white">{divisions.length}</div>
              <div className="text-[10px] md:text-sm text-gray-400">Core Business Divisions</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-sm md:rounded-sm border border-white/10 p-2.5 md:p-5">
              <div className="text-xl md:text-3xl font-bold text-white">{serviceCommitment}</div>
              <div className="text-[10px] md:text-sm text-gray-400">Commitment to Quality & Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Division Tabs */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 hide-scrollbar">
            {divisions.map((div) => {
              const colors = colorMap[div.color]
              const isActive = activeDiv === div.id
              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => {
                    setActiveDiv(div.id)
                    const el = document.getElementById(`div-${div.id}`)
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                    isActive
                      ? `${colors.badge} ${colors.text} shadow-sm`
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{div.title}</span>
                  <span className="sm:hidden">{div.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder Section — text-only, full-width executive profile (no image) */}
      <section className="py-8 md:py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg border border-gray-100 shadow-lg p-6 md:p-10"
          >
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0F2A4A]/14 text-[#0F2A4A] text-sm font-semibold mb-3">
                <Shield className="w-4 h-4" />
                Founder
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">{brand.founderName}</h2>
              <p className="text-sm md:text-lg text-[#0F2A4A] font-semibold mb-4">{brand.founderTitle}</p>
              <div className="prose prose-sm md:prose-lg text-gray-700">
                <p>
                  Established in 2012, Firansibekan Trade and Investment PLC focuses on engineering solutions, healthcare technology, electromechanical works, IT solutions, and general trading. Under the strategic guidance of the founder, the company delivers technical excellence, dependable service delivery, and long-term partnerships with hospitals, government institutions, NGOs, and private organizations across Ethiopia.
                </p>
                <p>
                  The founder brings a depth of industry experience and a commitment to operational quality, strategic partnerships, and sustainable growth. Firansibekan’s leadership emphasizes client-centric engineering solutions, integrity in sourcing and installations, and continuous technical development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Groups — page-local responsive horizontal card layout */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {divisions.map((div) => {
              const colors = colorMap[div.color]
              const member = div.members[0]
              return (
                <div key={div.id} id={`div-${div.id}`} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className={`h-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between transform transition-transform hover:-translate-y-2 hover:shadow-lg`}>

                    {/* Top label + title */}
                    <div className="px-4 pt-4">
                      <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${colors.text}`}>
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center ${colors.bg}`}>
                          <div.icon className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <span>CORE FOCUS</span>
                      </div>
                      <h3 className="mt-3 text-lg md:text-xl font-extrabold text-gray-900">{div.title}</h3>
                    </div>

                    {/* Dark navy image/header area */}
                    <div className="mt-4">
                      <div className="bg-[#0F2A4A] h-28 md:h-36 w-full flex items-center justify-center">
                        <Users className="w-10 h-10 text-white/90" />
                      </div>

                      {/* White content card that overlaps slightly for premium look */}
                      <div className="bg-white px-4 pb-4 pt-6 -mt-6">
                        <div className="text-sm font-semibold text-gray-800">{member.name}</div>
                        <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">{member.title}</div>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="px-4 pb-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {(member.badges || []).map((b) => (
                          <span key={b} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-gray-800 bg-gray-100">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-6 h-6 md:w-10 md:h-10 mx-auto mb-3 md:mb-6 text-white/80" />
            <blockquote className="text-xs md:text-2xl font-medium leading-relaxed text-white/90 italic">
              &ldquo;{brand.signatureLine}&rdquo;
            </blockquote>
            <p className="mt-6 text-white/80 text-sm">
              Firansibekan’s leadership approach is grounded in professionalism, reliability, and a strong commitment to serving hospitals, healthcare facilities, government institutions, NGOs, private organizations, and businesses across Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
