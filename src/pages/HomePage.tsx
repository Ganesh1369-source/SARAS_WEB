import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ValuePropositionSection from '../components/home/ValuePropositionSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import BlogSection from '../components/home/BlogSection';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuePropositionSection />
      <CaseStudiesSection />
      <BlogSection />
      <ContactCTA />
    </motion.div>
  );
};

export default HomePage;