'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield, Globe, TrendingUp, Building2, MapPin,
  Users, ArrowRight, Gem, Heart
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { brand, partnershipReasons, departments, brandMedia } from '@/lib/brand'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}


const whyReasons = partnershipReasons.map((reason, index) => ({
  icon: [Building2, Globe, TrendingUp, Shield, MapPin, Users][index],
  title: reason.title,
  description: reason.description,
}))


export default function PartnershipsPage() {
  return (
    <main className="relative min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-navbar pb-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={brandMedia.ventures.distribution}
            alt="Firansibekan partnerships"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/10 backdrop-blur-sm text-[#0F2A4A] text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Global Partnerships
            </div>
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-[#0F2A4A] mb-3 md:mb-6 font-heading">
              Growing Through Partnership
            </h1>
            <p className="text-xs md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We build trusted relationships with manufacturers, suppliers, institutions, and organizations to create reliable solutions, shared opportunities, and lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Focus Areas */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="space-y-8 md:space-y-12">
            {/* Built Through Partnership */}
            <div className="text-center">
              <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 md:mb-8">
                Built Through Partnership
              </h2>
              <blockquote className="text-base md:text-xl text-gray-700 leading-relaxed italic border-l-4 border-[#0F2A4A] pl-4 md:pl-8 py-2">
                <p>
                  <strong>We believe meaningful growth is built through strong relationships. Firansibekan Trade and Investment works with manufacturers, suppliers, institutions, and organizations to connect reliable products, technologies, and expertise with real market needs.</strong>
                </p>
              </blockquote>
            </div>

            {/* We Welcome Partnerships In */}
            <div className="text-center">
              <h3 className="text-xl md:text-3xl font-bold text-black mb-6 md:mb-8">
                We Welcome Partnerships In
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
                {[
                  'Healthcare & Medical Solutions',
                  'IT & Technology',
                  'Medical Imaging',
                  'Electromechanical Services',
                  'Healthcare & Personal Care Products',
                  'Distribution & Supply'
                ].map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-gradient-to-r from-[#0F2A4A]/8 to-[#0F2A4A]/5 rounded-sm p-4 md:p-6 border-2 border-[#0F2A4A]/20 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-sm md:text-lg font-bold text-[#0F2A4A]">{area}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeIn}>
                <Button
                  className="bg-[#E63946] hover:bg-[#D62828] text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-sm flex items-center justify-center gap-2 mx-auto"
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                    else window.location.href = '/#contact'
                  }}
                >
                  Let's Build Something Meaningful Together
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section — All In One image + description */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Mindray Healthcare Technology Partnership Section */}
          <motion.div {...fadeIn}>
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-shrink-0 w-full lg:w-1/2 relative rounded-sm overflow-hidden shadow-xl border border-gray-100 bg-white">
                <Image
                  src="/assets/gallery/mindray-partnership.png"
                  alt="Mindray Healthcare Technology Partnership"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain p-6 md:p-10"
                  unoptimized
                />
              </div>
              <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0F2A4A]/10 text-[#0F2A4A] text-sm font-semibold">
                  <Shield className="w-4 h-4" />
                  OUR HEALTHCARE TECHNOLOGY PARTNER
                </div>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Healthcare Technology. Trusted Solutions.
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Through trusted healthcare technology partnerships, Firansibekan provides reliable medical imaging solutions that support healthcare institutions and contribute to improved diagnostic capabilities.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Our work with medical imaging technology includes equipment supply, installation, setup, testing, calibration, and user training.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment to the Future */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-8 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0F2A4A]/10 text-[#0F2A4A] text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" />
              Our Purpose
            </div>
            <h2 className="text-xl md:text-5xl font-bold text-black mb-2 md:mb-4">
              Our Commitment to the Future
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div {...fadeIn} className="space-y-4 md:space-y-5 text-gray-600 leading-relaxed text-sm md:text-lg">
              <p>
                {brand.name} was built to respond to real market needs through disciplined entrepreneurship. From practical trade to diversified ventures, the group continues to grow with a focus on relevance, durability, and value.
              </p>
              <p>
                We take pride in building ventures that create jobs, strengthen service quality, and open new pathways for collaboration across Ethiopia and beyond.
              </p>
              <p>
                Our commitment is rooted in service, stewardship, and long-term thinking. Growth, for us, is measured not only by scale, but by impact and sustainability.
              </p>
              <p>
                As we continue to expand across multiple sectors, our purpose remains clear: to strengthen the markets we enter and contribute to meaningful progress through trusted partnerships.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              className="relative h-64 md:h-[480px] rounded-sm overflow-hidden shadow-xl"
            >
              <Image
                src={brandMedia.ventures.hotel}
                alt="Firansibekan commitment to the future"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-sm p-3 md:p-4 border border-white/20">
                <p className="text-white text-xs md:text-sm font-medium leading-snug">
                  &ldquo;Growth, for us, is measured not only by scale, but by impact.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner With Vanguard XIE */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-8 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0F2A4A]/10 text-[#0F2A4A] text-sm font-semibold mb-4">
              <Gem className="w-4 h-4" />
              Partnership Value
            </div>
            <h2 className="text-xl md:text-5xl font-bold text-black mb-2 md:mb-4">
              Why Partner With {brand.shortName}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyReasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-white rounded-sm p-5 md:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-[#0F2A4A]/10 flex items-center justify-center mb-3 md:mb-4">
                  <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-[#0F2A4A]" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{reason.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <Gem className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-6 text-white/80" />
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-white">Become a Partner</h2>
            <p className="text-xs md:text-lg text-white/80 mb-4 md:mb-8 leading-relaxed">
              If you are exploring investment, supply, operating collaboration, or export growth, let&apos;s discuss how we can build a long-term partnership with shared ambition.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => window.location.href = '/#contact'}
                className="px-7 py-3.5 md:px-9 md:py-4 bg-[#0F2A4A] text-white rounded-sm font-semibold text-sm md:text-base shadow-xl shadow-[#0F2A4A]/30 hover:bg-[#0F2A4A] transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => window.location.href = '/about'}
              >
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
