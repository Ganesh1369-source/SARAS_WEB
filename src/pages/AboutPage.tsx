import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import CircuitLines from '../components/ui/CircuitLines';
import ContactCTA from '../components/home/ContactCTA';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="relative pt-32 pb-20 circuit-bg bg-primary-50 md:pt-40 md:pb-32">
        <CircuitLines />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-4xl font-bold tracking-tight text-dark md:text-5xl lg:text-6xl font-heading"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Learn more about SARAS INFOSTRATS and our mission to help businesses innovate, automate, and scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How SARAS INFOSTRATS came to be"
              />
              <p className="mb-6 text-secondary-600">
                Founded in 2018, SARAS INFOSTRATS began with a simple mission: to help businesses leverage technology to achieve their goals. Our founders, with backgrounds in software development, cloud infrastructure, and business process optimization, saw a gap in the market for a technology consulting firm that truly understood both the technical and business aspects of digital transformation.
              </p>
              <p className="mb-6 text-secondary-600">
                Since then, we've grown into a comprehensive technology and automation consulting firm, working with clients across various industries, from startups to established enterprises. Our team of experts brings together a diverse set of skills and experiences, united by a passion for innovation and excellence.
              </p>
              <p className="text-secondary-600">
                Today, SARAS INFOSTRATS is recognized as a leader in IT infrastructure automation, cloud engineering, DevOps consulting, and more. We continue to expand our capabilities and service offerings to meet the evolving needs of our clients in an increasingly digital world.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team meeting"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 circuit-bg bg-primary-50">
        <CircuitLines />
        <div className="container relative z-10">
          <SectionHeading
            title="Mission & Vision"
            subtitle="Guiding principles that drive our work"
            center
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-xl shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-bold font-heading">Our Mission</h3>
              <p className="text-secondary-600">
                To empower organizations through innovative technology solutions that drive efficiency, productivity, and growth. We strive to be a trusted partner for our clients, helping them navigate the complexities of digital transformation and emerge stronger, more agile, and better equipped for the future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-white rounded-xl shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-bold font-heading">Our Vision</h3>
              <p className="text-secondary-600">
                To be the leading technology and automation consulting firm, known for our expertise, innovation, and unwavering commitment to client success. We envision a world where technology is not just a tool, but a strategic asset that enables organizations to achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            center
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from the solutions we develop to the service we provide.',
              },
              {
                title: 'Innovation',
                description: 'We embrace new ideas, technologies, and approaches to solve complex problems and create value.',
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and respect for our clients, partners, and each other.',
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partnership to achieve the best possible outcomes.',
              },
              {
                title: 'Client-Centricity',
                description: 'We put our clients at the center of everything we do, focusing on their needs, goals, and long-term success.',
              },
              {
                title: 'Continuous Learning',
                description: 'We are committed to ongoing growth and development, staying at the forefront of technology trends and best practices.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <h3 className="mb-2 text-xl font-bold font-heading">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 circuit-bg bg-gray-50">
        <CircuitLines />
        <div className="container relative z-10">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the experts behind SARAS INFOSTRATS"
            center
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Rajesh Patel',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Anita Sharma',
                role: 'CTO',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Vikram Singh',
                role: 'Head of Cloud Services',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Neha Gupta',
                role: 'DevOps Lead',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-full aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold font-heading">{member.name}</h3>
                <p className="text-secondary-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </motion.div>
  );
};

export default AboutPage;