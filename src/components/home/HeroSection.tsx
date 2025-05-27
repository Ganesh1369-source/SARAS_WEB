import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CircuitLines from '../ui/CircuitLines';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 hero-gradient md:pt-40 md:pb-32">
      <CircuitLines />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <svg width="120" height="120" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="248" fill="#E0E5EC" stroke="#2B85C6" strokeWidth="8"/>
              <path d="M256 150C256 150 220 165 200 190C180 215 175 240 175 265C175 290 185 315 200 335C215 355 250 370 256 370" stroke="#2B85C6" strokeWidth="24" strokeLinecap="round" className="circuit-line"/>
              <path d="M256 150C256 150 292 165 312 190C332 215 337 240 337 265C337 290 327 315 312 335C297 355 262 370 256 370" stroke="#101820" strokeWidth="24" strokeLinecap="round" className="circuit-line"/>
              <circle cx="360" cy="210" r="8" fill="#3293E9" className="glow-dot"/>
              <circle cx="152" cy="210" r="8" fill="#3293E9" className="glow-dot"/>
              <circle cx="256" cy="150" r="8" fill="#3293E9" className="glow-dot"/>
              <circle cx="256" cy="370" r="8" fill="#3293E9" className="glow-dot"/>
            </svg>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight text-dark md:text-5xl lg:text-6xl font-heading"
          >
            SARAS INFOSTRATS
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 text-xl font-medium text-secondary-500 md:text-2xl lg:text-3xl font-heading"
          >
            INNOVATE AUTOMATE SCALE
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mb-10 text-lg text-secondary-600"
          >
            We are a leading technology and automation consulting firm dedicated to helping businesses transform their operations through cutting-edge solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <Link to="/services" className="btn btn-primary">
              Explore Our Services
              <ChevronRight size={16} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 50L60 58.3C120 66.7 240 83.3 360 83.3C480 83.3 600 66.7 720 54.2C840 41.7 960 33.3 1080 41.7C1200 50 1320 75 1380 87.5L1440 100H1380H1320H1200H1080H960H840H720H600H480H360H240H120H60H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;