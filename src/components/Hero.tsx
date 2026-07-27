'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { brand } from '@/lib/brand'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = [...brand.heroRotatingTexts]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-[84svh] flex-col justify-start overflow-hidden bg-black sm:min-h-screen">
      {/* Background Video */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-full w-full object-cover object-top"
>
  <source src="/videos/firansibekan-hero.mp4" type="video/mp4" />
</video>

 <div className="absolute inset-0 bg-black/45 z-[1]"></div>   

      <div className="relative z-10 w-full px-4 pb-12 pt-10 -translate-y-12 sm:px-6 sm:pb-0 sm:pt-0 sm:translate-y-0 lg:px-8 flex flex-col justify-center min-h-[84svh] sm:min-h-screen">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-7 md:gap-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 md:w-16 bg-[#E63946]" />
              <span className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-white/70">
                PROFESSIONAL ENGINEERING, HEALTHCARE TECHNOLOGY, AND IT SOLUTIONS FOR ETHIOPIA
              </span>
            </div>

            <h1 className="text-[2.1rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] uppercase">
              <span className="block text-white">
  Firansibekan
</span>
            </h1>

            <div className="min-h-[2rem] sm:min-h-[2.75rem] md:min-h-[3.5rem] max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm sm:text-lg md:text-2xl text-white/85 font-light leading-snug"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap items-start justify-start gap-3 sm:gap-4 md:gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex w-fit items-center justify-start gap-2 self-start px-5 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-sm md:px-9 md:py-4 md:text-base bg-[#E63946] text-white rounded-sm font-semibold shadow-xl shadow-[#E63946]/30 hover:bg-[#0F2A4A] transition-all duration-300"
              >
                Our Story
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex w-fit items-center justify-center self-start px-5 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-sm md:px-9 md:py-4 md:text-base bg-[#E63946] text-white rounded-sm font-semibold shadow-xl shadow-[#E63946]/30 hover:bg-[#0F2A4A] transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-wider">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-sm flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-sm mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
