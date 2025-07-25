import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
    const [expandedItems, setExpandedItems] = useState({});

    const experiences = [
        {
            id: 1,
            title: "Web Development Intern",
            company: "Pyonix Technology",
            location: "Ahmadabad, Gujarat, IN",
            duration: "Jul 2025 (15-day Internship)",
            type: "Internship",
            description: "Completed a short-term internship focused on learning the fundamentals of web development. Gained introductory experience with core frontend technologies and basic Python programming.",
            achievements: [
                "Learned the basics of HTML and CSS for structuring and styling web pages",
                "Explored basic JavaScript for adding simple interactivity",
                "Practiced writing simple Python scripts and understanding core concepts",
                "Gained exposure to code editing tools and development best practices"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "Python"],
            companyUrl: "https://www.pyonix.in/",
            status:'completed'
        },

        {
            id: 2,
            title: "Data Analyst Intern",
            company: "Pyonix Technology",
            location: "Ahmadabad, Gujarat, IN",
            duration: "Sep 2024 - Dec 2024",
            type: "Internship",
            description: "Completed a 4-month internship focused on learning the fundamentals of data analysis. Gained hands-on experience with spreadsheet tools, basic Python for data handling, and introductory data visualization techniques.",
            achievements: [
                "Learned to clean and organize datasets using Excel and Python",
                "Explored basic data analysis techniques such as filtering, grouping, and summarizing",
                "Created simple charts and graphs to visualize data insights",
                "Understood the basics of data-driven decision-making and reporting"
            ],
            technologies: ["Excel", "Python ", "Numpy", "Pandas", "Matplotlib", "Seaborn", "SQL", "Power BI"],
            companyUrl: "https://www.pyonix.in/",
            status:'completed'

        },
        {
            id: 3,
            title: "MERN Stack Developer Intern",
            company: "N R CREW Software Development Company",
            location: "Remote",
            duration: "Feb 2025 - Present",
            type: "Internship",
            description: "Currently undergoing a 6-month internship focused on full-stack web development using the MERN (MongoDB, Express.js, React, Node.js) stack. Building real-world applications and improving skills in both frontend and backend technologies.",
            achievements: [
                "Developing responsive web applications using React and Tailwind CSS",
                "Creating RESTful APIs with Node.js and Express.js",
                "Working with MongoDB for data storage and retrieval",
                "Gaining practical experience with full-stack architecture and project deployment"
            ],
            technologies: ["React", "Typescript", "Node", "Tailwind CSS", "Material UI", "Mongo DB", "SQL", "Postgre SQL"],
            companyUrl: "https://www.nrcrew.com/",
            status:'active'
        }

    ];

    const toggleExpand = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <section>
            <div className="max-w-4xl mx-auto">

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2d3748]"></div>

                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative mb-12 last:mb-0">
                            {/* Timeline Dot */}
                           <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-100 bg-[#2d3748] ">
                               {exp.status === 'active' && (
                                <div className='absolute -inset-1.5 bg-[#2d3748] rounded-full animate-ping '>
                                    
                                </div>
                               )}
                            </div>

                            {/* Experience Card */}
                            <div className="ml-20 bg-[#2d3748] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#e6e6e6] mb-1"
                                            style={{ fontFamily: 'Lato' }}>
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-[#e6e6e6] text-base sm:text-lg  mb-2 hover:underline" style={{ fontFamily: 'Lato' }}>
                                                <span>{exp.company}</span>
                                               <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"> <ExternalLink className="w-4 h-4" /></a>
                                            </div>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-[#e6e6e6] text-[#2d3748]text-base sm:text-lg  rounded-full " style={{ fontFamily: 'Lato' }}>
                                            {exp.type}
                                        </span>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap gap-4 mb-4 text-base sm:text-lg  text-[#e6e6e6] " style={{ fontFamily: 'Lato' }}>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#e6e6e6] mb-4 text-base sm:text-lg  leading-relaxed" style={{ fontFamily: 'Lato' }}>
                                        {exp.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-[#e6e6e6] text-[#2d3748] text-base sm:text-lg rounded-full hover:bg-gray-200 transition-colors" style={{ fontFamily: 'Lato' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Expand/Collapse Button */}
                                    <button
                                        onClick={() => toggleExpand(exp.id)}
                                        className="flex items-center gap-2 text-[#e6e6e6] hover:underline text-base sm:text-lg  transition-colors" style={{ fontFamily: 'Lato' }}
                                    >
                                        <span className=''>
                                            {expandedItems[exp.id] ? 'Hide' : 'Show'} Key Achievements
                                        </span>
                                        {expandedItems[exp.id] ? (
                                            <ChevronUp className="w-4 h-4" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                    </button>

                                    {/* Expandable Achievements */}
                                    {expandedItems[exp.id] && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                                            <h4 className="text-base sm:text-lg  text-[#e6e6e6] mb-3" style={{ fontFamily: 'Lato' }}>Key Achievements:</h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <li
                                                        key={achIndex}
                                                        className="flex items-start gap-3 text-base sm:text-lg  text-[#e6e6e6]" style={{ fontFamily: 'Lato' }}
                                                    >
                                                        <div className="w-2 h-2 bg-[#e6e6e6] rounded-full mt-2 flex-shrink-0"></div>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}

            </div>
        </section>
    );
};

export default ExperienceSection;