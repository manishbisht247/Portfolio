"use client";
import Image from 'next/image';
import React from 'react';
import { Mail, ExternalLink, Code2, Database, BarChart3, GraduationCap, Award, Phone } from 'lucide-react';

// Safe SVG Icons for GitHub and LinkedIn to avoid library version errors
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      desc: "A content-based filtering engine that suggests movies based on metadata similarity and user preferences.",
      tech: ["Python", "Streamlit", "Pandas", "Scikit-Learn"],
      link: "https://movie-recommendation-manish.streamlit.app",
      metrics: "Live Demo Available"
    },
    {
      title: "Telecom Churn Prediction",
      desc: "Machine Learning model to predict customer attrition using historical usage patterns and demographic data.",
      tech: ["Python", "Machine Learning", "EDA", "Scikit-Learn"],
      link: "https://github.com/manishbisht247",
      metrics: "84% Precision | 92% Accuracy"
    },
    {
      title: "Face Recognition Attendance",
      desc: "Computer vision system that identifies faces in real-time and automatically updates Excel attendance logs.",
      tech: ["OpenCV", "Python", "Pandas", "NumPy"],
      link: "https://github.com/manishbisht247",
      metrics: "Automated Excel Logging"
    }
  ];

  const skills = ['Python', 'SQL', 'Pandas', 'Scikit-Learn', 'Excel', 'EDA', 'Machine Learning', 'NLP', 'Git/GitHub'];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter text-blue-600 uppercase">Manish Bisht</h1>
          <nav className="flex gap-5">
            <a href="mailto:manishbisht.tech@gmail.com" className="hover:text-blue-600 transition-colors"><Mail size={20}/></a>
            <a href="https://github.com/manishbisht247" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/manish-bisht-connect" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><LinkedinIcon /></a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            Available for Data Analyst Roles
          </div>
<div className="mb-6">
   <Image src="/profile.jpg" alt="Manish" width={120} height={120} className="rounded-full border-4 border-blue-50" />
</div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            I build <span className="text-blue-600">data-driven</span> solutions.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            7th-semester B.Tech CSE student at JCBOSE University. Specialized in transforming raw datasets into actionable insights using Machine Learning and Statistical Analysis.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-8 flex items-center gap-2">
            <Code2 size={18} /> Technical Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-medium hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-24">
          <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-8 flex items-center gap-2">
            <BarChart3 size={18} /> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{proj.title}</h4>
                    <a href={proj.link} target="_blank" className="p-2 rounded-full bg-white text-slate-400 hover:text-blue-600 shadow-sm transition-all"><ExternalLink size={20}/></a>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map(t => <span key={t} className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t}</span>)}
                  </div>
                </div>
                <div className="text-sm font-bold text-blue-600 bg-blue-50 self-start px-4 py-1 rounded-lg">
                  {proj.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <div className="grid md:grid-cols-2 gap-16">
          <section>
            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-8 flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </h3>
            <div className="space-y-10">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-blue-100">
                <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-blue-600"></div>
                <h4 className="text-lg font-bold">B.Tech in Computer Science</h4>
                <p className="text-slate-600">JCBOSE University (Formerly YMCA)</p>
                <p className="text-slate-500 text-sm italic">Satyug Darshan Institute of Engineering and Technology</p>
                <div className="mt-2 flex gap-4 text-sm font-bold">
                   <span className="text-blue-600">CGPA: 8.0</span>
                   <span className="text-slate-400 underline decoration-blue-200">7th Semester</span>
                </div>
              </div>
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-100">
                <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-slate-300"></div>
                <h4 className="text-lg font-bold">Class XII (CBSE)</h4>
                <p className="text-slate-600 text-sm">VM SR. SEC. School</p>
                <p className="text-blue-600 font-bold text-sm mt-1">Score: 91.2%</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-8 flex items-center gap-2">
              <Award size={18} /> Certifications
            </h3>
            <div className="space-y-4">
              {['Kaggle Data Science Certifications', 'Data Science Professional Certificate', 'NPTEL: Privacy & Security', 'NPTEL: Leadership Effectiveness'].map((cert) => (
                <div key={cert} className="p-4 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-blue-200 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600"><Award size={20}/></div>
                  <span className="font-medium text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t mt-32 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-8 text-blue-600 uppercase">Let's connect and talk data.</h3>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-medium">
             <a href="tel:+918505899724" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Phone size={18}/> +91 8505899724</a>
             <a href="mailto:manishbisht.tech@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Mail size={18}/> manishbisht.tech@gmail.com</a>
<a 
  href="/Manish_Bisht_Resume.pdf" 
  download 
  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
>
  Download Resume
</a>
          </div>
          <p className="mt-12 text-slate-400 text-sm">© {new Date().getFullYear()} Manish Bisht</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;