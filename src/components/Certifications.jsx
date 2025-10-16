import React, { useState } from 'react'
import { Award, X, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  
  // Helper para rutas correctas en producción
  const getAssetPath = (path) => {
    return import.meta.env.BASE_URL + path
  }

  const certifications = [
    {
      title: 'Spring Framework 6 & Spring Boot 3 from Zero to Expert',
      institution: 'Udemy',
      date: 'October 2025',
      hours: '40.5 hours',
      image: 'images/diplomas/Certificado Spring Framework 6 y SpringBoot 3 de cero a experto.jpg',
      description: 'Complete course on Spring Framework 6 and Spring Boot 3'
    },
    {
      title: 'Spring Framework Master Class - Java Spring the Modern Way',
      institution: 'Udemy',
      date: 'October 2025',
      hours: '14 hours',
      image: 'images/diplomas/Spring Framework Master Class the Modern Way.jpg',
      description: 'Spring Framework Master Class with modern approach'
    },
    {
      title: 'Angular and Spring Boot: Create your first Full Stack App',
      institution: 'Udemy',
      date: 'October 2025',
      hours: '3.5 hours',
      image: 'images/diplomas/Certificado de Angular y Spring Boot.jpg',
      description: 'Full Stack development with Angular and Spring Boot'
    },
    {
      title: 'JavaFX, Swing, and Spring Boot – Create your first GUI with Java',
      institution: 'Udemy',
      date: 'October 2025',
      hours: '3.5 hours',
      image: 'images/diplomas/Certificado Java FX y Spring.jpg',
      description: 'Creating graphical interfaces with Java'
    },
    {
      title: 'Get Started as Full Stack with Spring Boot and React',
      institution: 'Udemy',
      date: 'October 2024',
      hours: '11.5 hours',
      image: 'images/diplomas/Certificado Full Stack con React y Spring.jpg',
      description: 'Full Stack development with Spring Boot and React'
    },
    {
      title: 'Create a WordPress website with Hostinger',
      institution: 'Udemy',
      date: 'November 2022',
      hours: '1.5 hours',
      image: 'images/diplomas/Crear WordPress Website con Hostinger.jpg',
      description: 'Creating websites with WordPress'
    },
    {
      title: 'Certified Java Programmer Course I',
      institution: 'Udemy',
      date: 'July 2018',
      hours: '7.5 hours',
      image: 'images/diplomas/certificacion Java I.png',
      description: 'Java Programmer Certification level I'
    },
    {
      title: 'Developing Enterprise-wide Application using J2EE Technologies',
      institution: 'Centre of Excellence for Information Technology India-El Salvador (ITCA)',
      date: 'October 2008',
      hours: 'Complete program',
      image: 'images/diplomas/certificado Java 2 ITCA.jpg',
      description: 'Enterprise application development with J2EE'
    },
    {
      title: 'Java Developer Certification',
      institution: 'ITCA',
      date: '2008',
      hours: 'Complete program',
      image: 'images/diplomas/certificado Java 1 ITCA.jpg',
      description: 'Java Developer Certification'
    },
    {
      title: 'PathwayConnect Certificate',
      institution: 'BYU-Pathway Worldwide',
      date: '2020',
      hours: 'Complete program',
      image: 'images/diplomas/Pathway Connect.png',
      description: 'PathwayConnect Certificate'
    }
  ]

  return (
    <>
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Continuous training and professional certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48 bg-gray-900 overflow-hidden">
                  <img
                    src={getAssetPath(cert.image)}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold line-clamp-2">{cert.title}</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p className="text-primary-400 font-medium">{cert.institution}</p>
                    <div className="flex justify-between text-gray-400">
                      <span>{cert.date}</span>
                      <span>{cert.hours}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    Ver Certificado
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para ver certificado completo */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={getAssetPath(selectedCert.image)}
                alt={selectedCert.title}
                className="w-full h-auto"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-primary-400 mb-2">{selectedCert.institution}</p>
                <div className="flex gap-4 text-gray-400">
                  <span>{selectedCert.date}</span>
                  <span>•</span>
                  <span>{selectedCert.hours}</span>
                </div>
                <p className="text-gray-300 mt-4">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certifications
