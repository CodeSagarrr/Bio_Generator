// import React from 'react';
import { Heart, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const socialLink = [
        { id:1 , title: 'Twitter' , url : 'https://www.x.com/dev_sagar_7' , icon:Twitter},
        { id:1 , title: 'Instagram' , url : 'https://www.instagram.com/dev.sgr_/' , icon:Instagram},
        { id:1 , title: 'Github' , url : 'https://github.com/CodeSagarrr/' , icon:Github},
    ]
  return (
    <footer className="bg-black text-white py-12 font-heebo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-signika text-xl font-bold">BioGenerator</h3>
            <p className="text-gray-400">Create stunning social media bios in seconds with our AI-powered generator.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-sky-300 transition-colors">Home</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-sky-300 transition-colors">Templates</Link></li>
              <li><Link to="/analytics" className="text-gray-400 hover:text-sky-300 transition-colors">Analytics</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sky-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-300 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold">Connect</h4>
            <div className="flex space-x-4">
            { socialLink.map((item , i) => (
                 <a href={item.url} key={i} className="text-gray-400 hover:text-sky-300 transition-colors">
                 <item.icon size={20} />
               </a>
              )) }
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8  border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-sky-300" /> by Sagar Vishwakarma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;