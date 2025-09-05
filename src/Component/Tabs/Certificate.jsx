
import { useState } from 'react'

const Certificate = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [activeTab, setActiveTab] = useState('technical');

    const certificates = [
        { name: 'Databricks Data Engineer Associate (In-Line)', category: 'Microsoft' },
        { name: 'Fabric Analytics Engineer Associate (DP-600), Microsoft', category: 'Microsoft' },
        { name: 'Snowflake: SnowPro Core Certified', category: 'Snowflake' },
        { name: 'Azure Data Fundamentals (DP-900) , Microsoft', category: 'Microsoft' },
        { name: 'Azure Fundamentals (AZ-900) , Microsoft', category: 'Microsoft' },
        { name: 'Data Science Master Certification Program, FingerTips', category: 'FingerTips' },
    ];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left - 25,
            y: e.clientY - rect.top - 25,
        });
    };

    // const currentSkills = activeTab === 'technical' ? technicalSkills : operationalSkills;

    return (
        <div className="w-full">
            {/* Tab Navigation */}
         

            {/* Skills Grid */}
            <div className="flex flex-wrap text-center gap-x-4 gap-y-4">
                {certificates.map((skill, index) => (
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

export default Certificate;