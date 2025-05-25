import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import CircuitLines from '../ui/CircuitLines';

const AboutSection: React.FC = () => {
  const benefits = [
    'Industry-leading expertise in automation',
    'End-to-end implementation support',
    'Technology-agnostic solutions',
    'Proven track record of success',
  ];

  return (
    <section className="relative py-20 circuit-bg bg-gray-50">
      <CircuitLines />
      
      <div className="container relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="About SARAS INFOSTRATS"
              subtitle="Your trusted technology partner for innovation and growth"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-secondary-600"
            >
              SARAS INFOSTRATS LLP is a technology and automation consulting firm dedicated to helping businesses leverage the power of technology to achieve their goals. With expertise spanning IT infrastructure, cloud engineering, DevOps, AI, and more, we provide comprehensive solutions tailored to your specific needs.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-secondary-600"
            >
              Our mission is to empower organizations through innovative technology solutions that drive efficiency, productivity, and growth. We believe in building long-term partnerships with our clients, working collaboratively to address challenges and capitalize on opportunities.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 space-y-3"
            >
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 mr-2 text-primary-500" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="p-2 bg-white rounded-xl shadow-md">
              <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-md w-48 md:w-64">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <p className="font-medium">Innovation</p>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                <p className="font-medium">Automation</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                <p className="font-medium">Scalability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;