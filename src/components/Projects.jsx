import React, { useState } from 'react'
import { Github, ExternalLink, X, Play } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Helper para rutas correctas en producción
  const getAssetPath = (path) => {
    return import.meta.env.BASE_URL + path
  }
  const projects = [
    {
      title: 'POS and Billing System - Facturamerica.com',
      description: 'Complete point-of-sale and billing system developed for Virtual Mentors. Frontend with React 18.2.0, Vite 5.0.8, and TailwindCSS 3.3.6. Backend with Spring Boot 3.2.0, Spring Data JPA, Spring Security, MySQL, iText, and Lombok.',
      technologies: ['React', 'Vite', 'TailwindCSS', 'Spring Boot', 'MySQL', 'Spring Security', 'iText'],
      github: 'https://github.com/gokuweb5/punto-ventas-web',
      demo: 'https://facturamerica.com',
      image: 'images/projects/punto-ventas/pos1.png',
      video: 'images/projects/punto-ventas/project punto de venta.mp4',
      featured: true
    },
    {
      title: 'Bidding System - Church of Jesus Christ',
      description: 'Comprehensive bidding system developed with Spring Boot 3.2.3 and MySQL. Includes support for PostgreSQL as a secondary database and reporting capabilities with JasperReports 6.20.6.',
      technologies: ['Spring Boot', 'MySQL', 'PostgreSQL', 'JasperReports', 'Spring Data JPA'],
      github: 'https://github.com/gokuweb5/LicitacionesOH_EN',
      demo: null,
      image: 'images/projects/bidding-system/bidding1.png',
      video: 'images/projects/bidding-system/project bidding system.mp4',
      featured: true
    },
    {
      title: 'E.M.A Auto Repair Website',
      description: 'Fully responsive website developed for E.M.A Auto Repair in Winchester, Virginia. Built with HTML, CSS, JavaScript, and PHP.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: null,
      demo: 'https://www.ematires.com/',
      image: 'images/projects/ematires/ematires1.png',
      video: 'images/projects/ematires/project ematires.mp4',
      featured: true
    },
    {
      title: 'Udemy Course: Master JavaScript - Fullstack Chess Application',
      description: 'Complete Udemy course where I teach how to create a fullstack chess application. Covers modern HTML5, CSS with Flexbox/CSS Grid, advanced JavaScript, backend with Node.js/Express.js, and PostgreSQL database.',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/gokuweb5/chess1',
      demo: 'https://www.udemy.com/course/domina-javascript-crea-una-aplicacion-fullstack-de-ajedrez/learn/lecture/49426537#overview',
      image: 'images/projects/curso-javascript/curso1.png',
      featured: true
    },
    {
      title: 'Chess System - Educational Project',
      description: 'Complete implementation of chess game with fullstack architecture. Includes backend with Spring Boot, frontend with React, and application of design patterns.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Design Patterns'],
      github: 'https://github.com/gokuweb5/chess1',
      demo: null,
      image: 'images/projects/chess/chess1.png',
      video: 'images/projects/chess/project chess1.mp4'
    },
    {
      title: 'E-commerce Platform - Deschavetados',
      description: 'E-commerce platform for Salvadoran YouTubers. Built with Spring, Bootstrap 4, Thymeleaf, HTML5, and jQuery 3, using MySQL as database.',
      technologies: ['Spring', 'Bootstrap', 'Thymeleaf', 'MySQL', 'jQuery', 'HTML5'],
      github: null,
      demo: null,
      image: null
    }
  ]

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-gradient">Projects</span>
          </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div 
                className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                onClick={() => project.video && setSelectedProject(project)}
              >
                {project.image ? (
                  <>
                    <img 
                      src={getAssetPath(project.image)} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.video && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-primary-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Modal de Video */}
    {selectedProject && selectedProject.video && (
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <div className="relative max-w-5xl w-full">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <video
              controls
              autoPlay
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={getAssetPath(selectedProject.video)} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-primary-400 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Projects
