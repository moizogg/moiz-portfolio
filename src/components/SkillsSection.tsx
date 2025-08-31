
import React from 'react';
import { Brain, Code, BarChart3, Database, Cpu, TrendingUp } from 'lucide-react';
import Layout from './Layout';

const SkillsSection = () => {
  const skills = [
    {
      icon: <Brain className="text-green-accent" size={32} />,
      title: "Machine Learning",
      description: "Building predictive models, classification algorithms, and intelligent systems using cutting-edge ML techniques.",
      technologies: ["Scikit-learn", "TensorFlow", "PyTorch"]
    },
    {
      icon: <Code className="text-green-accent" size={32} />,
      title: "Programming",
      description: "Proficient in multiple programming languages for data science, web development, and software engineering.",
      technologies: ["Python", "Java", "JavaScript", "R"]
    },
    {
      icon: <BarChart3 className="text-green-accent" size={32} />,
      title: "Data Visualization",
      description: "Creating compelling visual narratives from complex datasets using modern visualization libraries.",
      technologies: ["Matplotlib", "Seaborn", "Plotly", "D3.js"]
    },
    {
      icon: <Database className="text-green-accent" size={32} />,
      title: "Data Analysis",
      description: "Extracting insights from large datasets through statistical analysis and exploratory data techniques.",
      technologies: ["Pandas", "NumPy", "SQL", "Excel"]
    },
    {
      icon: <Cpu className="text-green-accent" size={32} />,
      title: "Deep Learning",
      description: "Designing and training neural networks for computer vision, NLP, and complex pattern recognition tasks.",
      technologies: ["CNN", "RNN", "LSTM", "Transformers"]
    },
    {
      icon: <TrendingUp className="text-green-accent" size={32} />,
      title: "Statistical Modeling",
      description: "Applying statistical methods and probability theory to solve real-world data science problems.",
      technologies: ["Statistics", "Probability", "A/B Testing"]
    }
  ];

  return (
    <Layout 
      backgroundDensity="medium" 
      className="section-padding bg-gradient-to-b from-black to-dark-bg"
    >
      <section id="skills" className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient font-orbitron">SKILLS_&_TECHNOLOGIES</h2>
          <p className="section-subtitle font-rajdhani">
            Building expertise across the data science and AI ecosystem with robotic precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="relative group animate-float-gentle" style={{ animationDelay: `${index * 0.3}s` }}>
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-primary/25 via-green-accent/15 to-green-secondary/10 rounded-2xl blur-xl transform rotate-2 scale-105 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Main Skill Card */}
              <div className="neural-card">
                
                {/* Card Header */}
                <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="group-hover:scale-125 transition-transform duration-300 text-green-accent">
                        {skill.icon}
                      </div>
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                    </div>
                    <div className="text-green-accent text-xs font-orbitron">SKILL_MODULE</div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-accent transition-colors font-orbitron tracking-wide">
                    {skill.title.toUpperCase()}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed font-rajdhani">
                    {skill.description}
                  </p>
                  
                  {/* Technologies Grid */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-accent/30 rounded-full animate-pulse" />
                      <span className="text-green-accent text-xs font-orbitron tracking-wider">TECHNOLOGIES</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-green-accent/50 to-transparent" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-green-primary/15 border border-green-accent/30 text-green-accent text-xs rounded font-medium group-hover:bg-green-accent/20 group-hover:text-green-accent transition-colors font-orbitron"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Analysis */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400 font-rajdhani">PROFICIENCY_LEVEL</span>
                      <span className="text-green-accent font-orbitron">
                        {Math.floor(Math.random() * 20) + 80}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-primary to-green-accent rounded-full relative"
                        style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Experience Indicator */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-rajdhani">EXPERIENCE</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                        <span className="text-green-accent font-orbitron">{Math.floor(Math.random() * 3) + 1}Y</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Footer */}
                <div className="bg-gradient-to-r from-green-primary/10 to-green-accent/5 border-t border-green-accent/30 p-3">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-accent font-orbitron">STATUS: ACTIVE</span>
                      <div className="w-1 h-1 bg-green-accent rounded-full animate-ping" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="text-green-accent" size={10} />
                      <span className="text-green-accent font-orbitron">IMPROVING</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Indicators */}
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-r from-green-accent/40 to-cyber-blue/30 rounded-full animate-pulse blur-sm" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-primary/25 rounded-full animate-neural-pulse" />
              <div className="absolute top-2 right-2 w-1 h-1 bg-green-accent rounded-full animate-ping" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SkillsSection;
