import React from 'react'
import { Code2, Database, Cloud, Shield } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Spring Boot Backend',
      description: 'Spring Boot 3.2, Spring Data JPA, MyBatis and RESTful APIs'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Angular Frontend',
      description: 'Angular 18, TypeScript, RxJS and TailwindCSS for modern UIs'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'AWS (RDS, ElastiCache, S3, SES, CloudWatch), Docker and Liquibase'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Quality',
      description: 'Spring Security, JWT, OpenAPI/Swagger, Clean Code and SOLID'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Full-Stack Developer with solid experience designing, developing and deploying end-to-end web
              applications. Specialized in robust and secure backend services with Java and Spring Boot, and
              dynamic, responsive interfaces with Angular and TypeScript.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              I have architected and shipped the intelligent accounting and invoicing system
              <span className="text-primary-400"> Facturamerica.com</span> using Spring Boot 3.2 and Angular 18,
              along with internal bidding systems for The Church of Jesus Christ of Latter-day Saints, e-commerce
              platforms and educational content reaching thousands of students.
            </p>
            <p className="text-lg text-gray-300">
              I combine deep technical knowledge with 6+ years of customer-facing experience, allowing me to
              translate business requirements into clean, scalable solutions deployed on AWS with Docker, Liquibase,
              JWT and OpenAPI/Swagger.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="text-primary-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
