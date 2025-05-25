import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Cloud, GitBranch, Brain, Workflow, Cpu, Code, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="p-6 bg-white rounded-xl shadow-sm service-card"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-gradient-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold font-heading">{title}</h3>
      <p className="mb-4 text-secondary-600">{description}</p>
      <Link to="/services" className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600">
        Learn more <ChevronRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Server size={20} />,
      title: 'IT Infrastructure Automation',
      description: 'Modernize your IT infrastructure with automation solutions that reduce manual effort and increase reliability.',
    },
    {
      icon: <Cloud size={20} />,
      title: 'Cloud Engineering',
      description: 'Expert cloud solutions across OpenShift, OpenStack, AWS, and Azure platforms to optimize your operations.',
    },
    {
      icon: <GitBranch size={20} />,
      title: 'DevOps Consulting',
      description: 'Implement DevOps practices that improve collaboration, streamline workflows, and increase deployment frequency.',
    },
    {
      icon: <Brain size={20} />,
      title: 'AI & Workflow Automation',
      description: 'Leverage AI to automate complex workflows, reduce errors, and free up your team for higher-value work.',
    },
    {
      icon: <Workflow size={20} />,
      title: 'Business Process Optimization',
      description: 'Analyze and optimize your business processes to eliminate bottlenecks and improve efficiency.',
    },
    {
      icon: <Cpu size={20} />,
      title: 'IoT Solutions',
      description: 'Custom IoT solutions for smart industry and agriculture that provide real-time insights and control.',
    },
    {
      icon: <Code size={20} />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to address your specific business challenges and opportunities.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive technology solutions to drive your business forward"
          center
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;