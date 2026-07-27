'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/brand'

const Testimonials = () => {
  const items = [...testimonials]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [items.length])

  const goTo = (index: number) => setActive((index + items.length) % items.length)

  const current = items[active]

  return (
    <section id="testimonials" className="relative py-12 md:py-24 overflow-hidden bg-[#F3F4F6]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-[#0F2A4A]/20 rounded-sm blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F2A4A]/10 rounded-sm blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-14"
        >
          <p className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-black font-semibold mb-2 md:mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-5xl font-bold font-heading text-black">
            What Our <span className="text-black">Customers Think</span>
          </h2>
          <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 md:mt-5">
            Real words from the partners and facilities who work with {''}
            Firansibekan Trade and Investment every day.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl bg-white border border-[#E5E7EB] rounded-sm p-6 md:p-12 text-center shadow-lg"
            >
              <Quote className="w-8 h-8 md:w-12 md:h-12 text-[#0F2A4A] mx-auto mb-4 md:mb-6" />

              <div className="flex items-center justify-center gap-1 mb-4 md:mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#0F2A4A] fill-[#0F2A4A]" />
                ))}
              </div>

              <p className="text-base md:text-2xl text-gray-900 font-heading italic leading-relaxed mb-6 md:mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-gradient-to-br from-[#0F2A4A] to-[#0F2A4A] flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3">
                  {current.name.charAt(0)}
                </div>
                <div className="text-sm md:text-lg font-semibold text-gray-900">{current.name}</div>
                <div className="text-xs md:text-sm text-[#0F2A4A]">{current.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6 md:mt-10">
            <button
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 md:w-12 md:h-12 rounded-sm border border-gray-200 text-gray-700 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((item, index) => (
                <button
                  key={`${item.name}-${index}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-1.5 rounded-sm transition-all duration-300 ${
                    index === active ? 'w-8 bg-[#0F2A4A]' : 'w-3 bg-gray-300 hover:bg-[#0F2A4A]/45'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              className="w-10 h-10 md:w-12 md:h-12 rounded-sm border border-gray-200 text-gray-700 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
