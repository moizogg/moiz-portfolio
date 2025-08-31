
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import Layout from './Layout';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:moiz@example.com",
      color: "hover:text-green-primary"
    }
  ];

  return (
    <Layout 
      backgroundDensity="light" 
      className="section-padding bg-gradient-to-br from-dark-bg to-slate-900 text-white"
    >
      <section id="contact" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gradient font-orbitron">NEURAL_CONTACT_SYSTEM</h2>
            <p className="text-xl text-gray-300 text-center mb-4 max-w-3xl mx-auto font-rajdhani">
              Ready to collaborate on next-generation data science projects? Initialize communication protocol.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span className="font-orbitron">MULTAN, PAKISTAN</span>
            </div>
          </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="relative">
              {/* Holographic Form Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-primary/15 via-green-accent/10 to-green-secondary/5 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-900/95 via-black/90 to-slate-800/85 backdrop-blur-xl border border-green-accent/40 rounded-2xl p-6">
                
                {/* Form Header */}
                <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-3 mb-6 rounded-t-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                      <span className="text-green-accent font-orbitron text-xs tracking-wider">MESSAGE_PROTOCOL</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-accent rounded-full animate-ping" />
                      <span className="text-green-accent text-xs font-orbitron">SECURE</span>
                    </div>
                  </div>
                </div>
            
                <h3 className="text-2xl font-bold text-green-accent mb-6 font-orbitron">INITIATE_CONTACT</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-accent focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-accent focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-accent focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

                <button
                  type="submit"
                  className="btn-plasma flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Transmit Message</span>
                </button>
              </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="relative">
              {/* Holographic Info Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-primary/15 via-green-accent/10 to-green-secondary/5 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-900/95 via-black/90 to-slate-800/85 backdrop-blur-xl border border-green-accent/40 rounded-2xl p-6">
                
                {/* Info Header */}
                <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-3 mb-6 rounded-t-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                    <span className="text-green-accent font-orbitron text-xs tracking-wider">CONNECTION_HUB</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-green-accent mb-6 font-orbitron">NETWORK_ACCESS</h3>
                  <p className="text-gray-300 leading-relaxed mb-8 font-rajdhani">
                    Ready to establish communication channels for collaborative AI/ML projects and data science initiatives. 
                    All transmission protocols are secure and optimized for rapid response.
                  </p>
                </div>

              {/* Social Links */}
              <div className="space-y-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-green-accent/50 ${link.color} group`}
                  >
                    <div className="text-gray-400 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <span className="font-semibold">{link.label}</span>
                    </div>
                  </a>
                ))}
              </div>

                {/* Additional Info */}
                <div className="p-4 bg-green-primary/10 border border-green-primary/20 rounded-xl mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-accent font-orbitron text-sm">RESPONSE_TIME</h4>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                      <span className="text-green-accent font-orbitron text-xs">OPTIMAL</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 font-rajdhani">
                    Average response latency: 12-24 hours. Priority channels available for urgent data science collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactSection;
