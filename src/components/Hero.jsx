import React from 'react'
import { Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react'

const Hero = () => {
  const stack = ['Java 21', 'Spring Boot 3', 'Angular 18', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker']
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Luis Transito Hernandez Navarrete</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 mb-6 flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="text-primary-400" size={28} />
            Full-Stack Developer · Spring Boot &amp; Angular
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Full-Stack Developer with solid experience designing, developing and deploying end-to-end web applications.
            Specialized in robust and secure backend services with Java and Spring Boot, and dynamic, responsive UIs with Angular and TypeScript.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {stack.map((tech) => (
              <span key={tech} className="bg-gray-800/80 border border-gray-700 text-primary-300 px-3 py-1 rounded-full text-sm">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume/Resume Luis Navarrete.pdf`}
            download
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/gokuweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:gokuweb@gmail.com"
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
