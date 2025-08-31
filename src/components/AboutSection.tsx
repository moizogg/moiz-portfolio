
import React from 'react';
import { GraduationCap, MapPin, Calendar, Zap } from 'lucide-react';
import Layout from './Layout';

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-green-accent" size={24} />,
      title: "Education",
      description: "Student at Beaconhouse School, Multan"
    },
    {
      icon: <Calendar className="text-green-accent" size={24} />,
      title: "Age",
      description: "17 years old"
    },
    {
      icon: <MapPin className="text-green-accent" size={24} />,
      title: "Location",
      description: "Multan, Pakistan"
    },
    {
      icon: <Zap className="text-green-accent" size={24} />,
      title: "Focus",
      description: "AI, ML & Data Science"
    }
  ];

  return (
    <Layout 
      backgroundDensity="light" 
      className="section-padding bg-gradient-to-b from-dark-bg to-slate-900"
    >
      <section id="about" className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient font-orbitron">ABOUT_ME</h2>
          <p className="section-subtitle font-rajdhani">
            Passionate about turning complex data into meaningful insights using robotic precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="relative">
              {/* Holographic Text Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-primary/15 via-green-accent/10 to-green-secondary/5 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-900/95 via-black/90 to-slate-800/85 backdrop-blur-xl border border-green-accent/40 rounded-2xl p-6 font-rajdhani">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-3 mb-4 rounded-t-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
                    <span className="text-green-accent font-orbitron text-xs tracking-wider">PERSONAL_DATA</span>
                  </div>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    I'm a 17-year-old student from <strong className="text-green-accent">Beaconhouse School, Multan</strong>, deeply passionate about 
                    the intersection of data science, artificial intelligence, and machine learning. My journey into 
                    the world of data began with a curiosity about how we can extract meaningful patterns from complex information.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    Currently exploring various aspects of <strong className="text-green-accent">Data Science, AI, and ML</strong>, I'm constantly 
                    learning new techniques and applying them to real-world problems. From building predictive models 
                    to creating intelligent applications, I enjoy the challenge of transforming raw data into actionable insights.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    When I'm not coding or analyzing datasets, you'll find me working on innovative projects that 
                    combine technology with practical solutions. I believe in the power of data to drive positive 
                    change and create smarter, more efficient systems.
                  </p>
                </div>

                {/* Status Footer */}
                <div className="bg-gradient-to-r from-green-primary/10 to-green-accent/5 border-t border-green-accent/30 p-2 mt-4 rounded-b-xl">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-green-accent font-orbitron">STATUS: LEARNING</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-accent rounded-full animate-ping" />
                      <span className="text-green-accent font-orbitron">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
            <div key={index} className="relative group animate-float-gentle" style={{ animationDelay: `${index * 0.4}s` }}>
                {/* Holographic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-primary/20 via-green-accent/10 to-green-secondary/5 rounded-2xl blur-lg transform rotate-1 scale-105 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="neural-card">
                  
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-3">
                    <div className="flex items-center justify-between">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 text-center relative">
                    {/* Mini Data Stream */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-accent/30 to-transparent animate-pulse" />
                    
                    <h3 className="font-semibold text-white group-hover:text-green-accent transition-colors font-orbitron tracking-wide text-sm mb-2">
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-400 text-xs font-rajdhani mb-3">{item.description}</p>
                    
                    {/* Mini Progress Bar */}
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-gradient-to-r from-green-primary to-green-accent rounded-full animate-pulse"
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      />
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-green-primary/10 to-green-accent/5 border-t border-green-accent/30 p-2">
                    <div className="flex justify-between items-center text-center">
                      <span className="text-green-accent font-orbitron text-xs">VERIFIED</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-green-accent rounded-full animate-ping" />
                        <span className="text-green-accent font-orbitron text-xs">SYNC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-accent/40 to-green-primary/30 rounded-full animate-pulse blur-sm" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-accent/40 rounded-full animate-neural-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutSection;
