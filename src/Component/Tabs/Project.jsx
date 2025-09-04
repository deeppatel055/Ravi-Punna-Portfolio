

import React from 'react';
import { MapPin, Users, BarChart, Database, Monitor, ShoppingCart } from 'lucide-react';

const Project = () => {
    const projects = [
        {
            id: 1,
            title: "Production Support ",
            location: "US",
            description: "Lead a production support team of 6 members, handling post-deployment issues, production data changes, and BI/business team requests.",
            skills: ["Production Support", "Team Leadership", "Issue Resolution", "BI Support"],
            icon: <Users className="w-8 h-8" />,
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "BI  Development - Dev & Prod Comparison",
            location: "US",
            description: "Developed a Power BI dashboard combining Dev and Prod environments to provide structure verification and performance comparison.",
            skills: ["Power BI", "Dashboard Development", "Data Validation", "Environment Comparison"],
            icon: <BarChart className="w-8 h-8" />,
            color: "bg-green-500"
        },
        {
            id: 3,
            title: "Observability BI Solution",
            location: "US",
            description: "Collaborated with ETL team to gather ADF, SQL, and pipeline logs and built a Power BI observability dashboard for monitoring data pipelines.",
            skills: ["ADF", "SQL", "ETL", "Power BI", "Observability"],
            icon: <Monitor className="w-8 h-8" />,
            color: "bg-purple-500"
        },
        {
            id: 4,
            title: "Retail & Supply Chain BI Solution",
            location: "US",
            description: "Designed and developed Power BI reports and dashboards for a US-based retail chain store, providing insights into retail and supply chain operations.",
            skills: ["MSSQL", "Power BI", "Retail Analytics", "Supply Chain Reporting"],
            icon: <ShoppingCart className="w-8 h-8" />,
            color: "bg-orange-500"
        },
        {
            id: 5,
            title: "Data Center Service & Visit BI Solution",
            location: "US",
            description: "Created a Power BI dashboard integrated with SharePoint to track data center service requests and visits across US operations.",
            skills: ["Power BI", "SharePoint", "Data Visualization", "Service Monitoring"],
            icon: <Database className="w-8 h-8" />,
            color: "bg-red-500"
        },
        {
            id: 6,
            title: "Sales Data Management & Reporting",
            location: "India",
            description: "Built an end-to-end sales data management solution. Created MySQL database, automated data dumping into SharePoint using Power Automate, and developed multiple Power BI dashboards including Sales, Employee Performance, Dealer Management, and Scheme Dashboards. Delivered solutions for clients like OnePlus, Apple, Gionee, HOM TV, and Realme (Narzo).",
            skills: ["Power BI", "SharePoint", "Power Automate", "MySQL", "Dashboard Development", "Sales Analytics", "ETL Automation"],
            icon: <BarChart className="w-8 h-8" />,
            color: "bg-indigo-500"
        }
    ];

    return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
              

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl bg-[#7d7d7d2b] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                        >
                            {/* Background Gradient Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                            {/* Icon with Gradient Background */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#2d3748] text-[#e6e6e6] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {project.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Title and Location */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-[#2d3748] flex-1" style={{ fontFamily: 'Roboto' }}>
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-sm text-[#2d3748] bg-[#e6e6e6] px-3 py-1 rounded-full ml-4">
                                        <MapPin className="w-3 h-3" />
                                        {project.location}
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg text-[#2d3748] leading-relaxed mb-6" style={{ fontFamily: 'Roboto' }}>
                                    {project.description}
                                </p>

                                {/* Skills */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-[#2d3748] mb-3" style={{ fontFamily: 'Roboto' }}>
                                        Key Technologies & Skills
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#2d3748] text-[#e6e6e6] transition-all duration-300 "
                                                style={{ fontFamily: 'Roboto' }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/30 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {/* <div className="text-center mt-16">
                    <button className="inline-flex items-center px-8 py-4 bg-[#2d3748] text-[#e6e6e6] font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" style={{ fontFamily: 'Roboto' }}>
                        View All Projects
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div> */}
            </div>
    );
};

export default Project;