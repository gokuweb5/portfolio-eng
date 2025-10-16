import React from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Luis Transito Hernandez Navarrete</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 mb-6">
            Full-Stack Developer | Java & Spring Boot | React
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Full-Stack Developer with solid experience in designing, developing, and implementing end-to-end web applications.
            Specialized in creating robust and secure backend services with Java and Spring Boot, and dynamic, responsive user interfaces with React.
          </p>
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
