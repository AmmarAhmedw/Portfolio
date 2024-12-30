'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SocialLink 
              href="https://www.linkedin.com/in/ammar-ahmed-200470279/"
              icon={<Linkedin size={24} />}
              label="LinkedIn"
              bgColor="bg-blue-600"
              hoverColor="hover:bg-blue-700"
            />
            <SocialLink 
              href="https://github.com/AmmarAhmadww"
              icon={<Github size={24} />}
              label="GitHub"
              bgColor="bg-gray-700"
              hoverColor="hover:bg-gray-600"
            />
            <SocialLink 
              href="ammarhamza960@gmail.com"
              icon={<Mail size={24} />}
              label="Email"
              bgColor="bg-red-600"
              hoverColor="hover:bg-red-700"
            />
          </motion.div>
          <motion.div 
            className="text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p>&copy; {currentYear} Ammar Ahmad. All rights reserved.</p>
            <p className="mt-2">Crafted with passion and code.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, bgColor, hoverColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center space-x-2 ${bgColor} ${hoverColor} px-4 py-2 rounded-full text-white text-sm transition-colors duration-300`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </motion.a>
);

export default Footer;

