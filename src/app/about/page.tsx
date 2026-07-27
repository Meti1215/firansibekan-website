'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Award, Building2, Heart, Globe, Shield, Target, Eye,
  MapPin, ArrowRight, CheckCircle, Briefcase,
  Factory, Coffee
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { brand, founderStory, departments, brandMedia } from '@/lib/brand'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function AboutPage() {
  const sectorIcons = [Briefcase, Award, Heart, Building2, Factory, Factory, Target, Coffee]

  const sectors = departments.slice(0, 8).map((department, index) => ({
    icon: sectorIcons[index] || Building2,
    name: department.title,
  }))

  const stats = [
    { value: '4', label: 'Core Departments' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'Commitment to Quality' },
    { value: '1', label: 'Growing Partnership' },
  ]

  const offices = [
    { country: 'Addis Ababa', role: 'Headquarters & Operations', city: '' },
    { country: 'Healthcare', role: 'Hospital & Medical Solutions', city: '' },
    { country: 'Medical Imaging', role: 'Diagnostic Technology', city: '' },
    { country: 'IT & Consulting', role: 'Digital Solutions', city: '' },
    { country: 'Electromechanical', role: 'Technical Services', city: '' },
  ]

  const journeyHighlights = founderStory.slice(0, 4)

  return (
    <main className="relative min-h-screen bg-[#F3F4F6]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-navbar pb-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2B2B2B] via-[#3d352d] to-[#2B2B2B] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={brandMedia.ventures.distribution}
            alt="Firansibekan business group"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/10 backdrop-blur-sm text-[#0F2A4A] text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              About {brand.shortName}
            </div>
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-[#0F2A4A] mb-3 md:mb-6 font-heading">
              Connecting Needs. Creating Value.
            </h1>
            <p className="text-xs md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Firansibekan Trade and Investment brings together diverse capabilities across healthcare, technology, and technical services to deliver reliable products and practical solutions. Built on quality, integrity, innovation, and partnership, we continue to grow by responding to real needs and creating lasting value for our clients, partners, and communities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => window.location.href = '/partnerships'}>
                Why Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" onClick={() => window.location.href = '/leadership'}>
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-6 md:-mt-10 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-sm md:rounded-sm shadow-xl border border-[#E5E7EB] p-3 md:p-6 text-center"
              >
                <div className="text-lg md:text-4xl font-bold text-[#0F2A4A]">{stat.value}</div>
                <div className="text-[10px] md:text-sm font-semibold text-[#2B2B2B] mt-0.5 md:mt-1">{stat.label}</div>
                <div className="text-[9px] md:text-xs text-gray-500 mt-0.5">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-4xl font-bold text-black mb-3 md:mb-6">
                Our <span className="text-black">Story</span>
              </h2>
              <div className="space-y-2 md:space-y-4 text-xs md:text-base text-gray-600 leading-relaxed">
                <p>
                  {brand.name} is a founder-led business group shaped by real market needs and long-term investment thinking. Keria Ahmed began with a simple import business in 1997 and steadily built trust by serving everyday demand across Ethiopia.
                </p>
                <p>
                  That early momentum expanded into rural distribution, paper and sanitary products leadership, wellness and hospitality brands, premium real estate, industrial ventures, agriculture, and export-focused growth.
                </p>
                <p>
                  Today, the group continues to grow as a structured platform for operational execution, strategic partnerships, and long-term value creation rooted in Ethiopia and increasingly connected to global markets.
                </p>
              </div>
            </div>
            <div className="relative h-48 md:h-[420px] rounded-sm md:rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={brandMedia.founder.portrait}
                alt="Keria Ahmed portrait"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Foundation */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-48 md:h-[420px] rounded-sm md:rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={brandMedia.founder.beginnings}
                alt="Founder journey and venture foundations"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-sm bg-[#0F2A4A]/10 text-[#0F2A4A] text-[10px] md:text-sm font-semibold mb-2 md:mb-4">
                <Heart className="w-3 h-3 md:w-4 md:h-4" />
                Founder Journey
              </div>
              <h2 className="text-xl md:text-4xl font-bold text-black mb-3 md:mb-6">
                From Humble Beginnings to <span className="text-black">Diversification</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-base text-gray-600 leading-relaxed">
                {journeyHighlights.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#0F2A4A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2B2B2B]">{item.title} <span className="text-gray-500">({item.year})</span></p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-[#111111]">
              Our Commitment
            </h2>
            <p className="text-xs md:text-lg text-[#333333] max-w-3xl mx-auto">
              {brand.name} operates with a long-term vision rooted in resilience, trust, and meaningful growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#E5E5E5] rounded-sm md:rounded-sm p-3 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-sm md:rounded-sm bg-[#0F2A4A]/20 flex items-center justify-center mb-2 md:mb-6">
                <Target className="w-4 h-4 md:w-7 md:h-7 text-[#0F2A4A]" />
              </div>
              <h3 className="text-[11px] md:text-xl font-bold mb-1 md:mb-3 text-[#111111]">Our Mission</h3>
              <p className="text-[9px] md:text-base text-[#333333] leading-snug md:leading-relaxed">
                To deliver reliable products, technologies, and practical solutions that respond to real needs and create lasting value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[#E5E5E5] rounded-sm md:rounded-sm p-3 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-sm md:rounded-sm bg-[#0F2A4A]/20 flex items-center justify-center mb-2 md:mb-6">
                <Eye className="w-4 h-4 md:w-7 md:h-7 text-[#0F2A4A]" />
              </div>
              <h3 className="text-[11px] md:text-xl font-bold mb-1 md:mb-3 text-[#111111]">Our Vision</h3>
              <p className="text-[9px] md:text-base text-[#333333] leading-snug md:leading-relaxed">
                To become a trusted Ethiopian company known for quality, reliability, expertise, and meaningful impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[#E5E5E5] rounded-sm md:rounded-sm p-3 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-sm md:rounded-sm bg-[#0F2A4A]/20 flex items-center justify-center mb-2 md:mb-6">
                <Shield className="w-4 h-4 md:w-7 md:h-7 text-[#0F2A4A]" />
              </div>
              <h3 className="text-[11px] md:text-xl font-bold mb-1 md:mb-3 text-[#111111]">Our Values</h3>
              <p className="text-[9px] md:text-base text-[#333333] leading-snug md:leading-relaxed">
                Quality, Integrity, Innovation, and Partnership guide how we work and how we build lasting relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Operations */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-6 md:mb-16">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-sm bg-[#0F2A4A]/10 text-[#0F2A4A] text-[10px] md:text-sm font-semibold mb-2 md:mb-4">
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
              Growth Footprint
            </div>
            <h2 className="text-xl md:text-4xl font-bold text-black mb-2 md:mb-4">
              Operational Presence & <span className="text-black">Expansion</span>
            </h2>
            <p className="text-xs md:text-lg text-gray-600 max-w-3xl mx-auto">
              From our base in Addis Ababa, Firansibekan continues to build its presence through sector-focused expertise, trusted partnerships, and practical solutions that serve the evolving needs of businesses and institutions across Ethiopia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-12">
            {offices.map((office, i) => (
              <motion.div
                key={`${office.country}-${office.role}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-sm md:rounded-sm border border-[#E5E7EB] shadow-lg p-3 md:p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-sm md:rounded-sm bg-[#0F2A4A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-6 md:h-6 text-[#0F2A4A]" />
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-lg font-bold text-[#2B2B2B]">{office.country}</h3>
                    <p className="text-[9px] md:text-sm text-[#0F2A4A] font-semibold">{office.role}</p>
                    {office.city && <p className="text-[9px] md:text-sm text-gray-500 mt-0.5 md:mt-1">{office.city}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="bg-[#0F2A4A]/5 rounded-sm md:rounded-sm p-4 md:p-10">
            <p className="text-xs md:text-lg text-gray-700 leading-relaxed">
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diversified Sectors */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-6 md:mb-16">
            <h2 className="text-xl md:text-4xl font-bold text-black mb-2 md:mb-4">
              Diversified <span className="text-black">Sectors</span>
            </h2>
            <p className="text-xs md:text-lg text-gray-600 max-w-3xl mx-auto">
              {brand.name} grows through multiple complementary ventures, reflecting a business model built on diversification, market understanding, and long-term value creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-sm md:rounded-sm p-3 md:p-6 hover:bg-[#0F2A4A]/5 transition-all border border-[#E5E7EB] hover:border-[#0F2A4A]/20 shadow-sm"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-sm md:rounded-sm bg-[#0F2A4A]/10 group-hover:bg-[#0F2A4A]/20 flex items-center justify-center mb-2 md:mb-4 transition-colors">
                  <sector.icon className="w-4 h-4 md:w-6 md:h-6 text-[#0F2A4A]" />
                </div>
                <h3 className="text-[10px] md:text-lg font-bold text-[#2B2B2B]">{sector.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-6 md:mt-12 text-center">
            <p className="text-xs md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each venture contributes to a broader group strategy grounded in discipline, brand building, and sustainable growth. From distribution and hospitality to industrial and export activity, the group is structured to expand with clarity and purpose.
            </p>
            <Button 
              size="lg" 
              className="mt-8"
              onClick={() => window.location.href = '/departments'}
            >
              Explore Our Departments
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Commitment to Future */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F2A4A] to-[#0F2A4A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <Heart className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-6 text-white/80" />
            <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-6 !text-white">Our Commitment to the Future</h2>
            <div className="space-y-2 md:space-y-4 text-xs md:text-lg !text-white leading-relaxed">
              <p className="!text-white">
                {brand.name} is built on the belief that disciplined entrepreneurship can create lasting value for customers, communities, partners, and future generations.
              </p>
              <p className="!text-white">
                We take pride in growing ventures that respond to real needs, create jobs, and strengthen Ethiopia's presence across local and international markets.
              </p>
              <p className="!text-white font-semibold text-sm md:text-xl mt-4 md:mt-8">
                {brand.signatureLine}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#0F2A4A] hover:bg-gray-100"
                onClick={() => window.location.href = '/partnerships'}
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => window.location.href = '#contact'}
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
