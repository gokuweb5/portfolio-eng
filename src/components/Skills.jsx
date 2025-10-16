import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      skills: [
        { name: 'Java & J2EE', level: 90 },
        { name: 'Spring Framework 6', level: 90 },
        { name: 'Spring Boot 3', level: 90 },
        { name: 'Spring Data JPA', level: 85 },
        { name: 'Spring Security', level: 85 },
        { name: 'Node.js & Express.js', level: 80 },
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React 18', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'Bootstrap 4', level: 85 },
        { name: 'Thymeleaf', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'JavaFX & Swing', level: 75 },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Oracle SQL', level: 80 },
        { name: 'JasperReports', level: 75 },
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git & SVN', level: 85 },
        { name: 'Vite', level: 85 },
        { name: 'Maven', level: 80 },
        { name: 'iText (PDF)', level: 80 },
        { name: 'WordPress', level: 75 },
        { name: 'JDeveloper', level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary-400">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
