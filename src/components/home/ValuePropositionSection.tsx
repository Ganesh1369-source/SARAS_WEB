import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Target } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import CircuitLines from '../ui/CircuitLines';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-gradient-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold font-heading">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </motion.div>
  );
};

const ValuePropositionSection: React.FC = () => {
  const values = [
    {
      icon: <Zap size={20} />,
      title: 'Accelerate Innovation',
      description: 'We help you adopt new technologies faster and more effectively, giving you a competitive edge in your industry.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Minimize Risk',
      description: 'Our methodical approach to technology implementation reduces risk and ensures smooth transitions.',
    },
    {
      icon: <Users size={20} />,
      title: 'Expert Team',
      description: 'Access to a team of specialists with deep expertise across multiple technology domains and platforms.',
    },
    {
      icon: <Target size={20} />,
      title: 'Results-Focused',
      description: 'We measure success by the tangible business outcomes we deliver, not just technical implementations.',
    },
  ];

  return (
    <section className="relative py-20 circuit-bg bg-primary-50">
      <CircuitLines />
      
      <div className="container relative z-10">
        <SectionHeading
          title="Why Choose Us?"
          subtitle="What sets SARAS INFOSTRATS apart from other technology consultants"
          center
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;