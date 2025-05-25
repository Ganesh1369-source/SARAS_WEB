import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, GitBranch, Brain, Workflow, Cpu, Code } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CircuitLines from '../components/ui/CircuitLines';
import ContactCTA from '../components/home/ContactCTA';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'infrastructure',
      icon: <Server size={24} />,
      title: 'IT Infrastructure Automation',
      description: 'We help organizations automate their IT infrastructure to reduce manual effort, minimize errors, and improve reliability. Our approach combines industry best practices with cutting-edge tools to create efficient, scalable, and resilient infrastructure solutions.',
      benefits: [
        'Reduced operational costs through automation',
        'Improved system reliability and uptime',
        'Faster response to infrastructure needs',
        'Standardized configurations and processes',
      ],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'cloud',
      icon: <Cloud size={24} />,
      title: 'Cloud Engineering',
      description: 'Our cloud engineering services span multiple platforms, including OpenShift, OpenStack, AWS, and Azure. We help clients design, build, and manage cloud environments that align with their business objectives, ensuring optimal performance, security, and cost-effectiveness.',
      benefits: [
        'Flexible, scalable infrastructure',
        'Reduced capital expenditures',
        'Enhanced disaster recovery capabilities',
        'Access to cutting-edge technologies',
      ],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'devops',
      icon: <GitBranch size={24} />,
      title: 'DevOps Consulting',
      description: 'We help organizations adopt DevOps practices to improve collaboration between development and operations teams, streamline workflows, and increase deployment frequency. Our DevOps consulting services focus on implementing the right tools, processes, and cultural changes to drive continuous improvement.',
      benefits: [
        'Faster time-to-market for new features',
        'Improved code quality and reliability',
        'Better collaboration between teams',
        'More frequent and reliable deployments',
      ],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'ai',
      icon: <Brain size={24} />,
      title: 'AI & Workflow Automation',
      description: 'We leverage artificial intelligence and machine learning to automate complex workflows, reduce errors, and free up your team for higher-value work. Our AI solutions are designed to be practical, delivering tangible business value rather than just technological novelty.',
      benefits: [
        'Automated decision-making processes',
        'Predictive analytics for better planning',
        'Reduced manual work and human error',
        'Insights from complex data sets',
      ],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'bpo',
      icon: <Workflow size={24} />,
      title: 'Business Process Optimization',
      description: 'We analyze and optimize your business processes to eliminate bottlenecks, reduce waste, and improve efficiency. Our approach combines process analysis, technology implementation, and change management to deliver sustainable improvements.',
      benefits: [
        'Streamlined operations and reduced costs',
        'Improved customer satisfaction',
        'Enhanced visibility and control',
        'Scalable processes that grow with your business',
      ],
      image: 'https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'iot',
      icon: <Cpu size={24} />,
      title: 'IoT Solutions',
      description: 'We develop Internet of Things (IoT) solutions for smart industry and agriculture that provide real-time insights and control. Our IoT services cover everything from sensor selection and deployment to data collection, analysis, and visualization.',
      benefits: [
        'Real-time monitoring and control',
        'Data-driven decision making',
        'Preventative maintenance',
        'Resource optimization',
      ],
      image: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'development',
      icon: <Code size={24} />,
      title: 'Custom Software Development',
      description: 'We create tailored software solutions designed to address your specific business challenges and opportunities. Our development team follows agile methodologies to deliver high-quality, maintainable code that meets your requirements.',
      benefits: [
        'Solutions tailored to your exact needs',
        'Integration with existing systems',
        'Scalable architecture for future growth',
        'Ongoing support and maintenance',
      ],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Comprehensive technology solutions to help your business innovate, automate, and scale
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Our Service Offerings"
            subtitle="Explore our range of specialized services designed to address your technology needs"
            center
          />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-primary-50"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-gradient-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading">{service.title}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={index}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'circuit-bg bg-gray-50'}`}
        >
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-gradient-primary">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold font-heading">{service.title}</h2>
                </div>
                <p className="mb-6 text-lg text-secondary-600">
                  {service.description}
                </p>
                <h3 className="mb-4 text-xl font-bold font-heading">Key Benefits:</h3>
                <ul className="mb-6 space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-xl shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </motion.div>
  );
};

export default ServicesPage;