
import { useState } from 'react'

const Skill = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [activeTab, setActiveTab] = useState('technical');

    const technicalSkills = [
        // Data Warehouse
        { name: 'Snowflake', category: 'Data Warehouse' },
        { name: 'Microsoft Fabric', category: 'Data Warehouse' },

        // Cloud Tech
        { name: 'Microsoft Azure', category: 'Cloud Tech' },

        // BI Tools
        { name: 'Power BI', category: 'BI Tools' },
        { name: 'Tableau', category: 'BI Tools' },

        // ETL Tools
        { name: 'Azure Data Factory', category: 'ETL Tools' },

        // Database
        { name: 'MySQL', category: 'Database' },
        { name: 'Azure SQL', category: 'Database' },
        { name: 'Excel', category: 'Database' },

        // Languages
        { name: 'SQL', category: 'Language' },
        { name: 'Python (Basic)', category: 'Language' },

        // Repository / Storage
        { name: 'GitHub', category: 'Repository' },
        { name: 'OneDrive', category: 'Repository' },
    ];

    const operationalSkills = [
        { name: 'Client Communication', category: 'Communication' },
        { name: 'Client Engagement', category: 'Communication' },
        { name: 'Team Management', category: 'Management' },
        { name: 'Project Management', category: 'Management' },
        { name: 'Business Analysis', category: 'Analysis' },
        { name: 'Insight & Reporting', category: 'Analysis' },
    ];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left - 25,
            y: e.clientY - rect.top - 25,
        });
    };

    const currentSkills = activeTab === 'technical' ? technicalSkills : operationalSkills;

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex mb-8 bg-[#7d7d7d2b] rounded-lg p-1 w-fit mx-auto">
                <button
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                        activeTab === 'technical'
                            ? 'bg-[#2d3748] text-white shadow-lg'
                            : 'text-[#2d3748] '
                    }`}
                    onClick={() => setActiveTab('technical')}
                >
                    Technical Skills
                </button>
                <button
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                        activeTab === 'operational'
                            ? 'bg-[#2d3748] text-white shadow-lg'
                            : 'text-[#2d3748] '
                    }`}
                    onClick={() => setActiveTab('operational')}
                >
                    Operational Skills
                </button>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap text-center gap-x-4 gap-y-4">
                {currentSkills.map((skill, index) => (
                    <div
                        key={`${activeTab}-${index}`}
                        className="relative w-full md:w-[32%] p-4 py-7 bg-[#7d7d7d2b] text-[#2d3748] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:text-[#2d3748]"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        {hoveredSkill === index && (
                            <div
                                className="absolute w-19 h-19 bg-[#2d3748] rounded-full transition-all duration-100 blur-sm"
                                style={{
                                    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                                }}
                            />
                        )}

                        <div className="relative z-10 flex flex-col justify-center items-center h-full">
                            <div
                                className="text-xl font-semibold text-center mb-2"
                                style={{ fontFamily: 'Roboto' }}
                            >
                                {skill.name}
                            </div>
                          
                        </div>

                        {/* Subtle gradient overlay */}
                        <div
                            className={`absolute inset-0 bg-[#7d7d7d2b] opacity-5 transition-opacity duration-300 ${
                                hoveredSkill === index ? 'opacity-10' : ''
                            }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;