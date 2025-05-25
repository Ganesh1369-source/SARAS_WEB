import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface BlogCardProps {
  image: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, author, title, excerpt, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden bg-white rounded-xl shadow-sm group hover:shadow-md"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-secondary-500">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary-500 font-heading">
          {title}
        </h3>
        <p className="mb-4 text-secondary-600">
          {excerpt}
        </p>
        <Link to="/blog" className="flex items-center text-sm font-medium transition-colors text-primary-500 hover:text-primary-600">
          Read more <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image: 'https://images.pexels.com/photos/7100/iphone-desk-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 15, 2025',
      author: 'Rahul Sharma',
      title: 'How DevOps is Transforming Software Development',
      excerpt: 'Explore how DevOps practices are reshaping the way organizations develop, deliver, and maintain software applications.',
    },
    {
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 8, 2025',
      author: 'Priya Patel',
      title: 'The Future of Cloud Computing: Trends to Watch',
      excerpt: 'A look at emerging trends in cloud computing and how they will impact businesses in the coming years.',
    },
    {
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 30, 2025',
      author: 'Amit Kumar',
      title: 'Implementing IoT Solutions for Smart Agriculture',
      excerpt: 'How Internet of Things technology is revolutionizing farming practices and improving agricultural outcomes.',
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Blog & Insights"
          subtitle="Latest thoughts, ideas, and insights from our team of experts"
          center
        />
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              author={blog.author}
              title={blog.title}
              excerpt={blog.excerpt}
              index={index}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;