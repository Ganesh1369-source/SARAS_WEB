import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import CircuitLines from '../components/ui/CircuitLines';
import ContactCTA from '../components/home/ContactCTA';

interface CaseStudy {
  title: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: 'Cloud Migration for Financial Services Firm',
      category: 'Cloud Engineering',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      challenge: 'A leading financial services firm was struggling with outdated on-premises infrastructure that was becoming increasingly expensive to maintain and was limiting their ability to scale quickly in response to market demands.',
      solution: 'We designed and implemented a comprehensive cloud migration strategy to AWS, focusing on security, compliance, and minimal disruption to operations. The solution included automated infrastructure provisioning, robust security controls, and optimized cloud resource allocation.',
      results: [
        'Reduced operational costs by 40%',
        'Improved system reliability and uptime to 99.99%',
        'Enhanced disaster recovery capabilities',
        'Enabled rapid scaling to support business growth',
      ],
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD Pipeline'],
    },
    {
      title: 'CI/CD Pipeline Implementation',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      challenge: 'A healthcare software provider was experiencing long lead times for deploying new features and updates, with manual processes leading to errors and inconsistencies across environments.',
      solution: 'We implemented a comprehensive CI/CD pipeline using industry-leading tools, automating the build, test, and deployment processes. The solution included infrastructure as code, automated testing, and monitoring to ensure reliable and consistent deployments.',
      results: [
        'Reduced deployment time from days to minutes',
        'Decreased production issues by 65%',
        'Increased deployment frequency from monthly to weekly',
        'Improved developer productivity and satisfaction',
      ],
      technologies: ['GitLab', 'Jenkins', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    },
    {
      title: 'Smart Agriculture Monitoring System',
      category: 'IoT',
      image: 'https://images.pexels.com/photos/8850713/pexels-photo-8850713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      challenge: 'A large agricultural cooperative needed a way to monitor soil conditions, weather patterns, and crop health across thousands of acres to optimize irrigation and resource usage.',
      solution: 'We developed a comprehensive IoT solution with custom sensors, a secure data collection infrastructure, and an intuitive dashboard for real-time monitoring and analytics. The system provided alerts, trends, and actionable insights to improve farming practices.',
      results: [
        'Reduced water usage by 30%',
        'Increased crop yields by 22%',
        'Optimized fertilizer application',
        'Provided early detection of potential crop issues',
      ],
      technologies: ['Arduino', 'LoRaWAN', 'AWS IoT', 'Node.js', 'React', 'Time Series Database'],
    },
    {
      title: 'AI-Powered Customer Service Automation',
      category: 'AI & Workflow Automation',
      image: 'https://images.pexels.com/photos/7795638/pexels-photo-7795638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      challenge: 'An e-commerce company was struggling to handle increasing customer service inquiries, leading to long wait times, customer dissatisfaction, and high support costs.',
      solution: 'We implemented an AI-powered customer service solution that combined natural language processing, machine learning, and workflow automation to handle routine inquiries and escalate complex issues to human agents.',
      results: [
        'Automated response to 75% of routine inquiries',
        'Reduced average response time from hours to minutes',
        'Improved customer satisfaction scores by 35%',
        'Decreased support costs while handling more inquiries',
      ],
      technologies: ['NLP', 'Machine Learning', 'Python', 'Node.js', 'React', 'MongoDB'],
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
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Explore how we've helped our clients achieve their technology goals
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'circuit-bg bg-gray-50'}`}
        >
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white rounded-full bg-primary-500">
                  {study.category}
                </div>
                <h2 className="mb-6 text-3xl font-bold font-heading">{study.title}</h2>
                
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-bold font-heading">The Challenge</h3>
                  <p className="text-secondary-600">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-bold font-heading">Our Solution</h3>
                  <p className="text-secondary-600">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-bold font-heading">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-bold font-heading">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <img
                  src={study.image}
                  alt={study.title}
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

export default CaseStudiesPage;