'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Award, 
  Users, 
  Heart,
  Shield,
  Eye,
  Globe,
  Stethoscope,
  Scale,
  MapPin,
  Building2,
  ShieldCheck,
  ShoppingBag,
  Scroll,
  Dumbbell,
  Hotel,
  Home,
  Factory,
  Sprout,
  TrendingUp,
  Terminal
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { brand, brandMedia } from '@/lib/brand'
const ventures = [
  {
    image: "/assets/hero/hero-placeholder-2.jpg",
    alt: "Health & Hospital Solutions",
    title: "Health & Hospital Solutions",
    description: "Diagnostic systems for better care",
  },
  {
    image: "/assets/hero/hero-placeholder-4.jpg",
    alt: "IT & IT Consulting",
    title: "IT & IT Consulting",
    description: "Technology that supports the work",
  },
  {
    image: "/assets/hero/hero-placeholder-3.jpg",
    alt: "Electromechanical Works",
    title: "Electromechanical Works",
    description: "Reliable systems for daily operations",
  },
  {
    image: "/assets/hero/hero-placeholder-1.jpg",
    alt: "Medical Imaging Solutions",
    title: "Medical Imaging Solutions",
    description: "Mindray DigiEye 330 Digital X-Ray System",
  },
];
const About = () => {
  const visionMission = {
    vision: {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a trusted and respected Ethiopian company, connecting people, businesses, and institutions with reliable products, innovative technologies, and practical solutions that contribute to sustainable growth and development.'
    },
    mission: {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver reliable products, technologies, and sector-focused solutions that respond to real needs, while building strong partnerships, maintaining high standards of quality and integrity, and creating lasting value for our clients, partners, and the communities we serve.'
    }
  }

  const coreValues = [
    {
      icon: Heart,
      title: 'Quality',
      description: 'We are committed to delivering reliable products and solutions that meet high standards and create lasting value.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, accountability, and respect.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously seek better technologies, ideas, and approaches to solve real challenges and improve the way we serve our clients.'
    },
    {
      icon: Scale,
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, collaboration, mutual respect, and shared success.'
    }
  ]

  const stats = [
    { icon: Award, value: '2024', label: 'Founded', color: 'text-[#0F2A4A]' },
    { icon: MapPin, value: 'Addis Ababa', label: 'Headquarters', color: 'text-[#0F2A4A]' },
    { icon: Building2, value: 'Partnership', label: 'Company Type', color: 'text-[#0F2A4A]' },
    { icon: Globe, value: 'Trade', label: 'Business Focus', color: 'text-[#0F2A4A]' }
  ]

  const milestones = [
    {
      year: '2012',
      title: 'Company Beginnings',
      description: 'Established in 2012, Firansibekan started with a core objective to bridge gaps in local service delivery.',
      icon: ShoppingBag
    },
    {
      year: '',
      title: 'Health & Medical Equipment',
      description: 'Expanded into advanced medical systems, specializing in sourcing and installing diagnostic solutions.',
      icon: Heart
    },
    {
      year: '',
      title: 'Electromechanical Projects',
      description: 'Built strong capabilities in industrial electrical installation, complex wiring, and equipment support.',
      icon: Building2
    },
    {
      year: '',
      title: 'IT Consulting Services',
      description: 'Established a dedicated IT consulting team to design structured network configurations and database systems.',
      icon: Terminal
    }
  ]

  return (
    <section id="about" className="py-10 md:py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold font-heading mb-3 md:mb-6 text-black">
            About <span className="text-black">{brand.name}</span>
          </h2>
          <p className="text-xs md:text-xl text-gray-600 max-w-3xl mx-auto">
            {brand.name} tells the story of our growth from a small 2012 trading business into a diversified technical solutions provider spanning healthcare systems, IT consulting, electromechanical works, and medical imaging.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-sm bg-[#0F2A4A] mb-2 md:mb-4 shadow-sm">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="relative overflow-hidden rounded-sm md:rounded-sm shadow-xl">
              <img
                src={brandMedia.founder.beginnings}
                alt="Our founder's beginnings"
                className="w-full h-40 md:h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">The Story of Our Company</h3>
              <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed">
                Firansibekan Trade and Investment was established in 2012 with a vision to connect businesses and communities in Ethiopia with reliable engineering, healthcare, and IT solutions.
              </p>
              <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed">
                By focusing on high-resolution diagnostic equipment and structured electromechanical works, we help medical facilities and businesses run dependable day-to-day operations.
              </p>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                Today, we continue to build strategic partnerships and deliver standard services, including state-of-the-art Mindray DigiEye 330 Digital X-Ray systems and professional IT consulting setups.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 mb-10 md:mb-20">
          {Object.values(visionMission).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border border-transparent shadow-sm hover-lift bg-white">
                <CardContent className="p-3 md:p-8 text-center">
                  <div className="w-10 h-10 md:w-20 md:h-20 mx-auto rounded-sm bg-[#0F2A4A] flex items-center justify-center mb-2 md:mb-6 shadow-sm">
                    <item.icon className="w-5 h-5 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold text-[#111111] mb-1 md:mb-4">{item.title}</h3>
                  <p className="text-[10px] md:text-lg text-[#333333] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
        >
          <div className="bg-white rounded-sm md:rounded-sm p-4 md:p-12 text-center shadow-xl">
            <p className="text-[10px] md:text-sm uppercase tracking-widest text-[#0F2A4A] mb-2 md:mb-3">Our Promise</p>
            <h3 className="text-base md:text-4xl lg:text-5xl font-bold text-[#111111] italic">
              &ldquo;{brand.tagline}&rdquo;
            </h3>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-12"
          >
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Our Core Values</h3>
            <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at {brand.name}.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5">
            {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full border border-transparent shadow-sm hover-lift bg-white">
                <CardContent className="p-4 md:p-5 lg:p-6 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto rounded-sm bg-[#0F2A4A] flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-xs md:text-sm lg:text-base font-bold text-[#111111] mb-2 md:mb-3 line-clamp-2">{value.title}</h3>
                  <p className="text-[10px] md:text-xs lg:text-sm text-[#333333] leading-relaxed line-clamp-3">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Facility Showcase */}
        <div className="mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-12"
          >
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Our Ventures in Focus</h3>
            <p className="text-xs md:text-lg text-gray-600 max-w-2xl mx-auto">
              Signature divisions and solutions that define the Firansibekan Trade and Investment portfolio.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
  {ventures.map((venture, index) => (
    <motion.div
      key={venture.title}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
      }}
      className="relative overflow-hidden rounded-sm shadow-xl group"
    >
     <img
  src={venture.image}
  alt={venture.alt}
  className="
    w-full
    h-40
    sm:h-52
    md:h-60
    lg:h-64
    object-cover
    group-hover:scale-105
    transition-transform
    duration-500
  "
/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="
        absolute 
        bottom-3 
        left-3 
        md:bottom-5 
        md:left-5 
        text-white
      ">
        <h4 className="
          text-sm 
          text-white
          md:text-lg 
          lg:text-xl 
          font-bold 
          mb-1
        ">
          {venture.title}
        </h4>

        <p className="
          text-xs 
          md:text-sm 
          text-white
        ">
          {venture.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
          
        </div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-3xl font-bold text-black mb-3 md:mb-4">
              Our Commitment
            </h3>
            <p className="text-xs md:text-lg text-gray-600 max-w-3xl mx-auto">
              Building trusted partnerships that create lasting value across healthcare solutions, electromechanical works, IT consulting, and medical imaging.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative w-full p-3 md:p-6 lg:p-8 rounded-sm transition-all duration-300 ease-in-out"
              >
                <div className="absolute inset-0 rounded-sm border border-transparent group-hover:border-[#0F2A4A] transition-all duration-300 ease-in-out" />
                <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 shadow-lg transition-all duration-300 ease-in-out" />
                
                {milestone.year && (
                  <div className="text-[#0F2A4A] font-bold text-[10px] md:text-sm lg:text-base mb-1 md:mb-3 lg:mb-4">
                    {milestone.year}
                  </div>
                )}
                {!milestone.year && (
                  <div className="h-3 mb-1 md:mb-3 lg:mb-4" />
                )}
                
                <div className="flex items-center mb-2 md:mb-4 lg:mb-5">
                  <div className="w-7 h-7 md:w-10 lg:w-12 md:h-10 lg:h-12 rounded-sm bg-[#0F2A4A]/10 flex items-center justify-center group-hover:bg-[#0F2A4A]/20 transition-all duration-300 ease-in-out">
                    <milestone.icon className="w-3.5 h-3.5 md:w-5 lg:w-6 md:h-5 lg:h-6 text-[#0F2A4A]" />
                  </div>
                </div>
                
                <h4 className="font-bold text-[11px] md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 lg:mb-3">
                  {milestone.title}
                </h4>
                <p className="text-[9px] md:text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
