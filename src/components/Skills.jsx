import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend (Java / Spring)',
      skills: [
        { name: 'Java 17 / 21', level: 92 },
        { name: 'Spring Boot 3.2', level: 92 },
        { name: 'Spring Framework 6', level: 90 },
        { name: 'Spring Data JPA / MyBatis', level: 88 },
        { name: 'Spring Security + JWT', level: 88 },
        { name: 'REST APIs / OpenAPI (Swagger)', level: 90 },
        { name: 'Node.js & Express.js', level: 78 },
      ]
    },
    {
      category: 'Frontend (Angular / TS)',
      skills: [
        { name: 'Angular 18', level: 88 },
        { name: 'TypeScript', level: 88 },
        { name: 'RxJS', level: 80 },
        { name: 'TailwindCSS', level: 88 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'React 18', level: 80 },
        { name: 'Bootstrap / Thymeleaf', level: 82 },
      ]
    },
    {
      category: 'Databases & Reporting',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 90 },
        { name: 'Redis (cache)', level: 78 },
        { name: 'Liquibase (migrations)', level: 80 },
        { name: 'Oracle SQL', level: 78 },
        { name: 'JasperReports 6', level: 82 },
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (RDS, S3, SES, CloudWatch)', level: 82 },
        { name: 'AWS ElastiCache (Redis)', level: 78 },
        { name: 'Docker', level: 82 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'Maven', level: 85 },
        { name: 'CI/CD basics', level: 75 },
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
