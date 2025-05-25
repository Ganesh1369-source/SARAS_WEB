import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="circuit-bg">
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Logo variant="light" />
              </div>
              <p className="mb-6 text-secondary-300">
                SARAS INFOSTRATS is a leading technology and automation consulting firm focused on helping businesses innovate, automate, and scale.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary-300 hover:text-primary-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary-300 hover:text-primary-300">
                  <Twitter size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-300 hover:text-primary-300">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-300 hover:text-primary-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white font-heading">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-secondary-300 transition-colors hover:text-primary-300">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="text-secondary-300 transition-colors hover:text-primary-300">Our Services</Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-secondary-300 transition-colors hover:text-primary-300">Case Studies</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-secondary-300 transition-colors hover:text-primary-300">Blog & Insights</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-secondary-300 transition-colors hover:text-primary-300">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white font-heading">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services#infrastructure" className="text-secondary-300 transition-colors hover:text-primary-300">IT Infrastructure Automation</Link>
                </li>
                <li>
                  <Link to="/services#cloud" className="text-secondary-300 transition-colors hover:text-primary-300">Cloud Engineering</Link>
                </li>
                <li>
                  <Link to="/services#devops" className="text-secondary-300 transition-colors hover:text-primary-300">DevOps Consulting</Link>
                </li>
                <li>
                  <Link to="/services#ai" className="text-secondary-300 transition-colors hover:text-primary-300">AI & Workflow Automation</Link>
                </li>
                <li>
                  <Link to="/services#iot" className="text-secondary-300 transition-colors hover:text-primary-300">IoT Solutions</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white font-heading">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin className="flex-shrink-0 mr-3 text-primary-300" size={20} />
                  <span className="text-secondary-300">123 Tech Park, Innovation Road<br />Bangalore, 560001</span>
                </li>
                <li className="flex">
                  <Mail className="flex-shrink-0 mr-3 text-primary-300" size={20} />
                  <a href="mailto:info@sarasinfostrats.com" className="text-secondary-300 transition-colors hover:text-primary-300">info@sarasinfostrats.com</a>
                </li>
                <li className="flex">
                  <Phone className="flex-shrink-0 mr-3 text-primary-300" size={20} />
                  <a href="tel:+919876543210" className="text-secondary-300 transition-colors hover:text-primary-300">+91 9876 543 210</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-6 border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-center text-secondary-400 md:text-left">
              &copy; {currentYear} SARAS INFOSTRATS LLP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-secondary-400 hover:text-primary-300">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-secondary-400 hover:text-primary-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;