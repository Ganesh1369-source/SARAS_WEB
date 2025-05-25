import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CircuitLines from '../components/ui/CircuitLines';

interface BlogPost {
  image: string;
  date: string;
  author: string;
  readTime: string;
  title: string;
  excerpt: string;
  categories: string[];
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      image: 'https://images.pexels.com/photos/7100/iphone-desk-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 15, 2025',
      author: 'Rahul Sharma',
      readTime: '5 min read',
      title: 'How DevOps is Transforming Software Development',
      excerpt: 'Explore how DevOps practices are reshaping the way organizations develop, deliver, and maintain software applications. This article delves into the key principles, benefits, and implementation strategies of DevOps.',
      categories: ['DevOps', 'Software Development', 'Agile'],
    },
    {
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 8, 2025',
      author: 'Priya Patel',
      readTime: '7 min read',
      title: 'The Future of Cloud Computing: Trends to Watch',
      excerpt: 'A look at emerging trends in cloud computing and how they will impact businesses in the coming years. From serverless architecture to multi-cloud strategies, discover what\'s next in cloud technology.',
      categories: ['Cloud', 'Technology Trends', 'IT Strategy'],
    },
    {
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 30, 2025',
      author: 'Amit Kumar',
      readTime: '6 min read',
      title: 'Implementing IoT Solutions for Smart Agriculture',
      excerpt: 'How Internet of Things technology is revolutionizing farming practices and improving agricultural outcomes. Learn about real-world applications, benefits, and challenges of IoT in agriculture.',
      categories: ['IoT', 'Agriculture', 'Sustainability'],
    },
    {
      image: 'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 22, 2025',
      author: 'Neha Gupta',
      readTime: '8 min read',
      title: 'Artificial Intelligence in Business Process Automation',
      excerpt: 'Discover how AI is transforming business process automation and creating new opportunities for efficiency and innovation. This article explores practical applications, implementation strategies, and future possibilities.',
      categories: ['AI', 'Automation', 'Business'],
    },
    {
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 15, 2025',
      author: 'Vikram Singh',
      readTime: '4 min read',
      title: 'Security Best Practices for Cloud Environments',
      excerpt: 'Essential security measures and best practices for protecting your cloud infrastructure and data. Learn about common vulnerabilities, compliance considerations, and proactive security strategies.',
      categories: ['Security', 'Cloud', 'Compliance'],
    },
    {
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'March 7, 2025',
      author: 'Rajesh Patel',
      readTime: '6 min read',
      title: 'Building a Successful DevOps Culture in Your Organization',
      excerpt: 'Beyond tools and technologies, a successful DevOps implementation requires a shift in organizational culture. This article provides insights on fostering collaboration, continuous improvement, and shared responsibility.',
      categories: ['DevOps', 'Culture', 'Leadership'],
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
              Blog & Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Latest thoughts, ideas, and insights from our team of experts
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-8">
            {/* Main Content */}
            <div className="lg:col-span-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`mb-12 ${index !== blogPosts.length - 1 ? 'pb-12 border-b border-gray-200' : ''}`}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                    <div className="md:col-span-5">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-64 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-secondary-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="mb-3 text-2xl font-bold transition-colors font-heading hover:text-primary-500">
                        <a href="#">{post.title}</a>
                      </h2>
                      <p className="mb-4 text-secondary-600">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((category, i) => (
                          <span key={i} className="flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full">
                            <Tag size={12} className="mr-1" />
                            {category}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium transition-colors text-primary-500 hover:text-primary-600"
                      >
                        Read more
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav aria-label="Blog pagination">
                  <ul className="flex space-x-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-secondary-600 transition-colors border border-gray-200 rounded-md hover:bg-primary-500 hover:text-white hover:border-primary-500"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors border border-primary-500 rounded-md bg-primary-500"
                        aria-current="page"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-secondary-600 transition-colors border border-gray-200 rounded-md hover:bg-primary-500 hover:text-white hover:border-primary-500"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-secondary-600 transition-colors border border-gray-200 rounded-md hover:bg-primary-500 hover:text-white hover:border-primary-500"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <span className="flex items-center justify-center w-10 h-10 text-secondary-600">
                        ...
                      </span>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-secondary-600 transition-colors border border-gray-200 rounded-md hover:bg-primary-500 hover:text-white hover:border-primary-500"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 mb-8 bg-white rounded-xl shadow-sm"
              >
                <h3 className="mb-4 text-xl font-bold font-heading">Categories</h3>
                <ul className="space-y-2">
                  {['Cloud', 'DevOps', 'Security', 'IoT', 'AI', 'Automation', 'IT Strategy'].map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-secondary-600 transition-colors hover:text-primary-500"
                      >
                        <span>{category}</span>
                        <span className="px-2 py-1 text-xs text-white rounded-full bg-primary-500">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 mb-8 bg-white rounded-xl shadow-sm"
              >
                <h3 className="mb-4 text-xl font-bold font-heading">Popular Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <li key={index} className="flex space-x-3">
                      <div className="flex-shrink-0 w-16 h-16">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium transition-colors hover:text-primary-500">
                          <a href="#">{post.title}</a>
                        </h4>
                        <p className="text-xs text-secondary-500">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Subscribe */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-primary-50 rounded-xl"
              >
                <h3 className="mb-4 text-xl font-bold font-heading">Subscribe</h3>
                <p className="mb-4 text-sm text-secondary-600">
                  Stay updated with our latest insights and news.
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white rounded-md bg-primary-500 hover:bg-primary-600"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;