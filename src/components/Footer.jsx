import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Luis Transito Hernandez Navarrete. Made with <Heart className="inline w-4 h-4 text-red-500" /> using React & TailwindCSS
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/gokuweb3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="tel:+50370523646"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              title="Phone"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gokuweb@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              title="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
