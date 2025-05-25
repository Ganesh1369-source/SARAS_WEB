import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CircuitLines from '../components/ui/CircuitLines';

const ContactPage: React.FC = () => {
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Get in touch with our team to discuss how we can help your business
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
              />
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-secondary-700">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-secondary-700">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondary-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-secondary-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-secondary-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-secondary-700">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-secondary-700">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white rounded-md bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out to us directly using the information below"
              />
              
              <div className="mb-8 space-y-6">
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold font-heading">Office Address</h3>
                    <p className="text-secondary-600">
                      123 Tech Park, Innovation Road<br />
                      Bangalore, 560001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold font-heading">Email Us</h3>
                    <p className="text-secondary-600">
                      <a href="mailto:info@sarasinfostrats.com" className="transition-colors hover:text-primary-500">
                        info@sarasinfostrats.com
                      </a><br />
                      <a href="mailto:support@sarasinfostrats.com" className="transition-colors hover:text-primary-500">
                        support@sarasinfostrats.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold font-heading">Call Us</h3>
                    <p className="text-secondary-600">
                      <a href="tel:+919876543210" className="transition-colors hover:text-primary-500">
                        +91 9876 543 210
                      </a><br />
                      <a href="tel:+918012345678" className="transition-colors hover:text-primary-500">
                        +91 8012 345 678
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-full bg-gradient-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold font-heading">Business Hours</h3>
                    <p className="text-secondary-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="overflow-hidden rounded-xl shadow-sm h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932209024816!2d77.59557531482196!3d12.970970990855642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1624926036879!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="SARAS INFOSTRATS Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 circuit-bg bg-primary-50">
        <CircuitLines />
        <div className="container relative z-10">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
            center
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What industries do you specialize in?',
                answer: 'We work with clients across a variety of industries, including finance, healthcare, manufacturing, retail, agriculture, and more. Our technology solutions are adaptable to different business contexts and requirements.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope, complexity, and specific requirements. A small automation project might take a few weeks, while a comprehensive cloud migration could take several months. We provide detailed timelines during the initial consultation.',
              },
              {
                question: 'Do you offer ongoing support after project completion?',
                answer: 'Yes, we offer various support and maintenance options to ensure your systems continue to run smoothly after implementation. We can provide training, documentation, and ongoing technical support based on your needs.',
              },
              {
                question: 'How do you approach data security and privacy?',
                answer: 'We prioritize data security and privacy in all our solutions. We implement industry best practices, comply with relevant regulations, and incorporate security measures throughout the development lifecycle. We can also help clients meet specific compliance requirements.',
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models, including project-based, time and materials, and retainer arrangements. The most appropriate model depends on your specific needs, project scope, and timeline. We provide detailed proposals after initial consultations.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <details className="p-6 bg-white rounded-xl shadow-sm group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold font-heading">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 text-primary-500 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </summary>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;