import React from 'react'
import { Code2, Database, Server, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Experience in Java, Spring Boot and RESTful architectures'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Databases',
      description: 'MySQL, PostgreSQL, MongoDB and query optimization'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Microservices',
      description: 'Design and implementation of distributed architectures'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Best Practices',
      description: 'Clean Code, SOLID, design patterns and testing'
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
              Full-Stack Developer with solid experience in designing, developing, and implementing complete web applications.
              Specialized in creating robust and secure backend services with Java and Spring Boot, and building dynamic
              and responsive user interfaces with React and JavaScript.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              My experience includes developing point-of-sale systems, e-commerce platforms, bidding systems,
              and enterprise applications. I have worked with technologies such as Spring Framework, MySQL, PostgreSQL,
              React, and modern development tools.
            </p>
            <p className="text-lg text-gray-300">
              With over 6 years of customer service experience and solid technical training, I combine technical
              skills with a deep understanding of end-user needs to create efficient and scalable solutions
              that exceed expectations.
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
