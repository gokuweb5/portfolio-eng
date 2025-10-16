import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Developer & Instructor',
      company: 'Virtual Mentors (Programación y Desarrollo Web)',
      period: 'January 2020 - Present',
      description: 'Full-stack web application development and creation of educational content for online learning platforms.',
      achievements: [
        'Developed POS and billing system for Facturamerica.com with React, Spring Boot, and MySQL',
        'Created bidding system for the Church of Jesus Christ with Spring Boot and JasperReports',
        'Developed e-commerce platform for "Deschavetados" YouTubers with Spring and Thymeleaf',
        'Created and taught Udemy course: "Master JavaScript: Create a Fullstack Chess Application"',
        'Developed responsive website for E.M.A Auto Repair in Virginia'
      ]
    },
    {
      type: 'work',
      title: 'Customer Service Representative',
      company: 'Various Call Centers (Teleperformance, FUSION BPO)',
      period: 'November 2014 - October 2020',
      description: 'High-quality customer service and technical support for major accounts.',
      achievements: [
        'Cricket (Teleperformance) - Technical support and customer service',
        'AT&T Internet, Cable & Phone (FUSION BPO) - Specialized technical support',
        'Choice Hotels (Teleperformance) - Customer service and reservations',
        '6 years of experience developing effective communication skills'
      ]
    },
    {
      type: 'work',
      title: 'Java Programmer',
      company: 'Aeroman (Consultant for Contacts and Opportunities)',
      period: 'January - November 2009',
      description: 'Enterprise application development in Aeroman\'s IT department.',
      achievements: [
        'Development with Java Struts Framework',
        'Use of JDeveloper and Oracle SQL Developer',
        'Version control with TortoiseSVN',
        'On-site work on enterprise projects'
      ]
    }
  ]

  const education = [
    {
      type: 'education',
      title: 'Java Developer - J2EE Technologies',
      institution: 'Centre of Excellence for Information Technology India-El Salvador (ITCA)',
      period: 'October 2008',
      description: 'Specialization in enterprise application development using J2EE technologies. Final exam and project completed successfully.'
    },
    {
      type: 'education',
      title: 'Bachelor\'s Degree in Computer Science',
      institution: 'Universidad Doctor Andrés Bello',
      period: 'November 2005',
      description: 'Fourth year of bachelor\'s degree in computer science. General area of study: Computer Science.'
    },
    {
      type: 'education',
      title: 'Continuous Training - Udemy',
      institution: 'Udemy (2009-2025)',
      period: '2009 - 2025',
      description: 'Multiple certifications in modern technologies: Spring Framework 6, Spring Boot 3, React, Angular, JavaFX, and more. Over 80 hours of specialized training.'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary-400" />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  <p className="text-primary-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-3">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                  <p className="text-primary-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
