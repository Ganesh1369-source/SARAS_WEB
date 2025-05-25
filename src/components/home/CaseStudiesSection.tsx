import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface CaseStudyCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, category, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden bg-white rounded-xl shadow-sm group hover:shadow-md"
    >
      <div className="relative overflow-hidden h-60">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 px-3 py-1 mt-4 ml-4 text-xs font-medium text-white rounded-full bg-primary-500">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary-500 font-heading">
          {title}
        </h3>
        <p className="mb-4 text-secondary-600">
          {description}
        </p>
        <Link to="/case-studies" className="flex items-center text-sm font-medium transition-colors text-primary-500 hover:text-primary-600">
          Read case study <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Cloud Engineering',
      title: 'Cloud Migration for Financial Services Firm',
      description: 'Seamless migration to AWS cloud infrastructure, reducing operational costs by 40% and improving system reliability.',
    },
    {
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'DevOps',
      title: 'CI/CD Pipeline Implementation',
      description: 'Streamlined software delivery process for a healthcare provider, reducing deployment time from days to minutes.',
    },
    {
      image: 'https://images.pexels.com/photos/8850713/pexels-photo-8850713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'IoT',
      title: 'Smart Agriculture Monitoring System',
      description: 'IoT solution for real-time crop monitoring, helping farmers increase yield and reduce resource usage.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionHeading
          title="Case Studies"
          subtitle="See how we've helped our clients achieve their technology goals"
          center
        />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              category={study.category}
              title={study.title}
              description={study.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/case-studies" className="btn btn-outline">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;