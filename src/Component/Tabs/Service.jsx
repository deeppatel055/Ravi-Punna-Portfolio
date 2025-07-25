// import React from 'react'

// const Service = () => {
//     return (
//         <div className='max-w-6xl mx-auto px-4'>

//             Services
//         </div>
//     )
// }

// export default Service

import React from 'react';
import { Code, Globe, ShoppingCart, Settings, ChevronRight, Zap, Palette, Database, Shield } from 'lucide-react';

const Service = () => {


    const services = [
        {
            id: 1,
            title: "Custom Website & Frontend Development",
            description: "I design and build modern, responsive websites tailored to your needs using HTML, CSS, JavaScript, React, and Tailwind CSS. From personal portfolios to business landing pages, I focus on clean design and great user experience.",
            icon: <Code className="w-8 h-8" />,
            features: ["Responsive Design", "Modern UI/UX", "React & Tailwind", "Performance Optimized"],

        },
        {
            id: 2,
            title: "Full-Stack Web Application Development",
            description: "I develop full-stack applications using technologies like React, Node.js, Express, and MongoDB/MySQL. This includes everything from user authentication to dynamic dashboards and API integration.",
            icon: <Database className="w-8 h-8" />,
            features: ["React & Node.js", "Database Design", "API Development", "User Authentication"],

        },
        {
            id: 3,
            title: "E-Commerce & Admin Panel Solutions",
            description: "I create fully functional e-commerce platforms and admin panels with features like product management, cart systems, online/offline payments, user roles, and order tracking – optimized for both users and business owners.",
            icon: <ShoppingCart className="w-8 h-8" />,
            features: ["Payment Integration", "Product Management", "Order Tracking", "Admin Dashboard"],

        },
        {
            id: 4,
            title: "Maintenance, Optimization, API Integration & Deployment",
            description: "I provide ongoing support for bug fixes, performance tuning, SEO improvements, third-party API integration (like payment gateways or email services), and deployment services to ensure your website runs smoothly and scales effectively.",
            icon: <Settings className="w-8 h-8" />,
            features: ["Bug Fixes",  "SEO Optimization", "API Integration", "Deployment"],




        }
    ];

    return (
        <section className="\ ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group relative overflow-hidden rounded-2xl  bg-[#7d7d7d2b] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2`}

                        >
                            {/* Background Gradient Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon with Gradient Background */}
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#2d3748] text-[#e6e6e6] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-[#2d3748] mb-4 " style={{ fontFamily: 'Lato' }}>
                                    {service.title}
                                </h3>

                                <p className="text-[#2d3748] text-justify leading-relaxed mb-6" style={{ fontFamily: 'Lato' }}>
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {service.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 text-sm text-[#2d3748]"
                                        style={{ fontFamily: 'Lato' }}>
                                            <div className={`w-1.5 h-1.5 rounded-full bg-[#2d3748] ${service.color}`}></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                {/* <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300`}>
                                        Learn More
                                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`} />
                                    </button> */}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/30 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}

            </div>
        </section>
    );
};

export default Service;


// import React from 'react'

// const Service = () => {
//     return (
//         <div className='max-w-6xl mx-auto px-4'>

//             Services
//         </div>
//     )
// }

// export default Service

// import React, { useState } from 'react';
// import { Code, Globe, ShoppingCart, Settings, ChevronRight, Zap, Palette, Database, Shield } from 'lucide-react';

// const Service = () => {
//     const [hoveredCard, setHoveredCard] = useState(null);

//     const services = [
//         {
//             id: 1,
//             title: "Custom Website & Frontend Development",
//             description: "I design and build modern, responsive websites tailored to your needs using HTML, CSS, JavaScript, React, and Tailwind CSS. From personal portfolios to business landing pages, I focus on clean design and great user experience.",
//             icon: <Code className="w-8 h-8" />,
//             features: ["Responsive Design", "Modern UI/UX", "React & Tailwind", "Performance Optimized"],
//             color: "from-blue-500 to-cyan-500",
//             bgColor: "bg-[#7d7d7d2b]",
//             borderColor: "bg-[#2d3748]"
//         },
//         {
//             id: 2,
//             title: "Full-Stack Web Application Development",
//             description: "I develop full-stack applications using technologies like React, Node.js, Express, and MongoDB/MySQL. This includes everything from user authentication to dynamic dashboards and API integration.",
//             icon: <Database className="w-8 h-8" />,
//             features: ["React & Node.js", "Database Design", "API Development", "User Authentication"],
//             color: "from-purple-500 to-pink-500",
//             bgColor: "bg-purple-50",
//             borderColor: "border-purple-200"
//         },
//         {
//             id: 3,
//             title: "E-Commerce & Admin Panel Solutions",
//             description: "I create fully functional e-commerce platforms and admin panels with features like product management, cart systems, online/offline payments, user roles, and order tracking – optimized for both users and business owners.",
//             icon: <ShoppingCart className="w-8 h-8" />,
//             features: ["Payment Integration", "Product Management", "Order Tracking", "Admin Dashboard"],
//             color: "from-green-500 to-emerald-500",
//             bgColor: "bg-green-50",
//             borderColor: "border-green-200"
//         },
//         {
//             id: 4,
//             title: "Maintenance, Optimization & API Integration",
//             description: "I provide ongoing support for bug fixes, performance tuning, SEO improvements, and integrating third-party APIs like payment gateways or email services to enhance functionality and scalability.",
//             icon: <Settings className="w-8 h-8" />,
//             features: ["Bug Fixes", "Performance Tuning", "SEO Optimization", "API Integration"],
//             color: "from-orange-500 to-red-500",
//             bgColor: "bg-orange-50",
//             borderColor: "border-orange-200"
//         }
//     ];

//     return (
//         <section className="\ ">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {services.map((service) => (
//                         <div
//                             key={service.id}
//                             className={`group relative overflow-hidden rounded-2xl  bg-[#2d3748] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2`}
//                             onMouseEnter={() => setHoveredCard(service.id)}
//                             onMouseLeave={() => setHoveredCard(null)}
//                         >
//                             {/* Background Gradient Overlay */}
//                             <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

//                             {/* Icon with Gradient Background */}
//                             <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#e6e6e6] text-[#2d3748] mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                                 {service.icon}
//                             </div>

//                             {/* Content */}
//                             <div className="relative z-10">
//                                 <h3 className="text-2xl font-bold text-[#e6e6e6] mb-4 ">
//                                     {service.title}
//                                 </h3>

//                                 <p className="text-[#e6e6e6] leading-relaxed mb-6">
//                                     {service.description}
//                                 </p>

//                                 {/* Features */}
//                                 <div className="grid grid-cols-2 gap-3 mb-6">
//                                     {service.features.map((feature, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex items-center gap-2 text-sm text-[#e6e6e6]"
//                                         >
//                                             <div className={`w-1.5 h-1.5 rounded-full bg-[#e6e6e6] ${service.color}`}></div>
//                                             {feature}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* CTA Button */}
//                                     {/* <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300`}>
//                                         Learn More
//                                         <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`} />
//                                     </button> */}
//                             </div>

//                             {/* Decorative Elements */}
//                             <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
//                             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/30 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="text-center mt-16">
//                     <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-8 shadow-xl shadow-blue-500/10 border border-gray-100">
//                         <div className="flex items-center gap-3">
//                             <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//                                 <Palette className="w-6 h-6 text-white" />
//                             </div>
//                             <div className="text-left">
//                                 <h3 className="text-xl font-bold text-gray-900">Ready to Start Your Project?</h3>
//                                 <p className="text-gray-600">Let's discuss your vision and bring it to life</p>
//                             </div>
//                         </div>
//                         <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
//                             Get In Touch
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Service;