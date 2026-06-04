import React, { useState } from 'react'
import { Github, ExternalLink, X, Play, Star } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeVideo, setActiveVideo] = useState(0)

  const openProject = (project) => {
    setActiveVideo(0)
    setSelectedProject(project)
  }

  const getVideos = (project) => {
    if (project?.videos && project.videos.length) return project.videos
    if (project?.video) return [{ label: 'Demo', src: project.video }]
    return []
  }
  
  // Helper para rutas correctas en producción
  const getAssetPath = (path) => {
    return import.meta.env.BASE_URL + path
  }
  const projects = [
    {
      title: 'Facturamerica.com — Intelligent Accounting & Invoicing',
      description: 'Decoupled multi-company accounting and invoicing platform built for the Salvadoran market. Spring Boot 3.2 backend with Spring Security + JWT, Spring Data JPA, MyBatis, PostgreSQL and Redis. Angular 18 + TypeScript + TailwindCSS frontend. Deployed on AWS (RDS, ElastiCache, S3, SES, CloudWatch) with Docker, Liquibase migrations and OpenAPI/Swagger.',
      technologies: ['Angular 18', 'TypeScript', 'TailwindCSS', 'Spring Boot 3.2', 'Spring Security', 'JWT', 'JPA', 'MyBatis', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      github: null,
      demo: 'https://facturamerica.com',
      image: 'images/projects/facturamerica/facturamerica1.png',
      videos: [
        { label: 'Overview', src: 'images/projects/facturamerica/facturamerica1.mp4' },
        { label: 'Walkthrough', src: 'images/projects/facturamerica/facturamerica1-1.mp4' }
      ],
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
      video: 'images/projects/chess/project-chess.mp4'
    },
    {
      title: 'Bidding Management System - Legacy Project',
      description: 'Comprehensive bidding management system developed in 2012 with Java 7 and Microsoft Access database. Includes advanced reporting capabilities with JasperReports for generating detailed bidding documentation.',
      technologies: ['Java 7', 'Microsoft Access', 'JasperReports', 'Swing'],
      github: null,
      demo: null,
      image: 'images/projects/licitaciones/licitaciones.png',
      video: 'images/projects/licitaciones/project-licitaciones.mp4'
    }
  ]

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-gradient">Projects</span>
          </h2>
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">A selection of full-stack projects showcasing Spring Boot, Angular and cloud deployments.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const hasVideo = (project.videos && project.videos.length) || project.video
            return (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
            >
              {project.featured && (
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-primary-600/90 backdrop-blur text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  <Star size={12} className="fill-current" /> Featured
                </span>
              )}
              <div 
                className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center overflow-hidden relative cursor-pointer"
                onClick={() => hasVideo && openProject(project)}
              >
                {project.image ? (
                  <>
                    <img 
                      src={getAssetPath(project.image)} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {hasVideo && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary-600 rounded-full p-4 shadow-lg">
                          <Play className="w-8 h-8 text-white fill-current" />
                        </div>
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
            )
          })}
        </div>
      </div>
    </section>

    {/* Video Modal */}
    {selectedProject && getVideos(selectedProject).length > 0 && (
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute -top-10 right-0 text-white hover:text-primary-400 transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col min-h-0">
            {getVideos(selectedProject).length > 1 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-950 border-b border-gray-800 sticky top-0 z-10">
                {getVideos(selectedProject).map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVideo(i)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeVideo === i ? 'bg-primary-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
            <div className="overflow-y-auto min-h-0">
            <video
              key={getVideos(selectedProject)[activeVideo].src}
              controls
              autoPlay
              className="w-full max-h-[60vh] bg-black"
            >
              <source src={getAssetPath(getVideos(selectedProject)[activeVideo].src)} type="video/mp4" />
              Your browser does not support the video tag.
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
      </div>
    )}
  </>
  )
}

export default Projects
