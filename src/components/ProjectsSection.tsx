
import React from 'react';
import { ExternalLink, Github, Activity, Zap } from 'lucide-react';
import Layout from './Layout';

const ProjectsSection = () => {
  const projects = [
    {
      title: "TagPlugin",
      description: "AI-enhanced Minecraft plugin that uses machine learning algorithms to create intelligent tag-based systems and automated gameplay features.",
      tech: ["Java", "AI/ML", "Minecraft API"],
      category: "AI Development"
    },
    {
      title: "MoodBloom",
      description: "AI-powered mood detection and journaling application that analyzes emotional patterns and provides personalized insights for mental wellness.",
      tech: ["Python", "NLP", "Emotion AI"],
      category: "AI Application"
    },
    {
      title: "HomeCalc",
      description: "Intelligent household expense predictor using machine learning to forecast monthly budgets and optimize spending patterns.",
      tech: ["Python", "Scikit-learn", "Data Analysis"],
      category: "Predictive Analytics"
    },
    {
      title: "Data Science Internship",
      description: "Comprehensive project involving exploratory data analysis, predictive modeling, and advanced data visualization for business insights.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "Data Science"
    },
    {
      title: "Deep Learning Experiments",
      description: "Collection of neural network implementations including image classification, recommendation systems, and natural language processing models.",
      tech: ["TensorFlow", "PyTorch", "CNN", "RNN"],
      category: "Deep Learning"
    },
    {
      title: "Taqdeer-e-Naw Website",
      description: "NGO website with integrated data analytics dashboard providing actionable insights for community impact measurement and donor engagement.",
      tech: ["React", "Data Visualization", "Analytics"],
      category: "Web Development"
    }
  ];

  return (
    <Layout 
      backgroundDensity="medium" 
      className="section-padding bg-black"
    >
      <section id="projects" className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient font-orbitron">FEATURED_PROJECTS</h2>
          <p className="section-subtitle font-rajdhani">
            Exploring the boundaries of AI, ML, and Data Science through advanced robotic solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group animate-float-gentle" style={{ animationDelay: `${index * 0.5}s` }}>
              {/* Holographic Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-primary/20 via-green-accent/10 to-green-secondary/5 rounded-2xl blur-xl transform rotate-1 scale-105 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tl from-green-accent/15 via-transparent to-green-primary/10 rounded-2xl blur-lg transform -rotate-1 scale-102 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Main Project Card */}
              <div className="neural-card">
                
                {/* Card Header */}
                <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                      <span className="text-green-accent font-orbitron text-xs">{project.category.toUpperCase()}</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-red-500/80 rounded-full" />
                      <div className="w-1 h-1 bg-yellow-500/80 rounded-full" />
                      <div className="w-1 h-1 bg-green-accent rounded-full animate-neural-pulse" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 relative">
                  {/* Holographic Data Stream */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-green-accent/50 via-transparent to-green-accent/50 animate-pulse" />
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-accent transition-colors font-orbitron tracking-wide">
                        {project.title.toUpperCase()}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                        <span className="text-green-accent text-xs font-orbitron">ONLINE</span>
                      </div>
                    </div>
                    
                    {/* Project ID */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-gray-500 text-xs font-orbitron">PROJECT_ID:</span>
                      <span className="text-green-accent text-xs font-orbitron">#{(index + 1).toString().padStart(3, '0')}</span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4 font-rajdhani">
                      {project.description}
                    </p>
                  </div>

                  {/* Performance Metrics */}
                  <div className="mb-4 p-3 bg-green-primary/5 border border-green-accent/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-accent text-xs font-orbitron">PERFORMANCE</span>
                      <span className="text-green-accent text-xs font-orbitron">{Math.floor(Math.random() * 20) + 80}%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-primary to-green-accent rounded-full animate-pulse"
                        style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                      />
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-accent/30 rounded-full animate-pulse" />
                      <span className="text-green-accent text-xs font-orbitron tracking-wider">TECH_STACK</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-green-accent/50 to-transparent" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-primary/15 border border-green-accent/30 text-green-accent text-xs rounded-full font-medium transition-all duration-300 hover:bg-green-accent/20 hover:scale-105 font-orbitron"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Status */}
                  <div className="flex items-center justify-center pt-4 border-t border-green-accent/20">
                    <div className="flex items-center space-x-1">
                      <Activity className="text-green-accent animate-pulse" size={12} />
                      <span className="text-green-accent text-xs font-orbitron">ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-gradient-to-r from-green-primary/10 to-green-accent/5 border-t border-green-accent/30 p-3">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-accent font-orbitron">STATUS: DEPLOYED</span>
                      <div className="flex items-center space-x-1">
                        <Zap className="text-green-accent" size={10} />
                        <span className="text-green-accent font-orbitron">OPTIMIZED</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-green-accent rounded-full animate-ping" />
                      <span className="text-green-accent font-orbitron">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-green-accent/40 to-green-primary/40 rounded-full animate-pulse blur-sm" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-accent/30 rounded-full animate-neural-pulse" />
              <div className="absolute top-4 right-4 w-1 h-1 bg-green-accent rounded-full animate-ping" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsSection;
