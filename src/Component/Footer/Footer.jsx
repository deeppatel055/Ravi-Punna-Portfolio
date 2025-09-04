import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Copy, ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const [copiedIndex, setCopiedIndex] = useState(null);
    // const [hoveredContact, setHoveredContact] = useState(null);
    // const [hoveredSocial, setHoveredSocial] = useState(null);
    const footerRef = useRef(null);

    // Intersection Observer for scroll-triggered animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);



    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "ravi.k.punna@gmail.com",
            href: "mailto:ravi.k.punna@gmail.com",
            copyValue: "ravi.k.punna@gmail.com",
            gradient: "from-blue-500 to-purple-600"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 7434999369",
            href: "tel:+917434999369",
            copyValue: "+917434999369",
            gradient: "from-green-500 to-teal-600"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Ahmedabad, India",
            href: null,
            copyValue: "Ahmedabad, India",
            gradient: "from-orange-500 to-red-600"
        }
    ];

    const socialLinks = [
      
        {
            icon: Linkedin,
            link: 'https://www.linkedin.com/in/ravi-punna-6973a3217/',
            name: 'LinkedIn',
           
        },
       
    ];

    return (
        <footer
            ref={footerRef}
            className={`mt-16 mb-8 px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
            <div className='flex flex-col items-center text-center space-y-8'>
                
                {/* Main Heading */}
                <div className={`transition-all duration-1200 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
                }`} style={{ transitionDelay: '200ms' }}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  bg-clip-text text-[#2d3748] leading-tight mb-4"
                        style={{ fontFamily: 'Roboto' }}>
                        Let's Connect
                    </h1>
                    <div className="w-24 h-1 bg-[#2d3748] mx-auto rounded-full mb-6"></div>
                    <p className="text-lg sm:text-xl md:text-2xl text-[#4a5568] leading-relaxed max-w-3xl"
                        style={{ fontFamily: 'Roboto' }}>
                        Ready to create something amazing together? Let's turn your vision into reality.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`} style={{ transitionDelay: '400ms' }}>
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group relative bg-[#7d7d7d2b] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform  overflow-hidden ${
                                isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-3'
                            }`}
                            // style={{ transitionDelay: `${600 + index * 150}ms` }}
                         
                        >
                            {/* Background Gradient */}
                            {/* <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div> */}
                            
                            {/* Icon */}
                            <div className={`relative flex justify-center mb-4 transition-all duration-300 `}>
                                {/* <div className={`p-4 rounded-full bg-gradient-to-r ${info.gradient} shadow-lg transition-all duration-300 ${hoveredContact === index ? 'shadow-2xl' : ''}`}> */}
                                    <info.icon className="text-[#2d3748] w-6 h-6" />
                                {/* </div> */}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-[#2d3748] mb-3 transition-colors duration-300"
                                style={{ fontFamily: 'Roboto' }}>
                                {info.title}
                            </h3>

                            {/* Value */}
                            <div className="relative">
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="text-base text-[#4a5568] hover:text-[#2d3748] transition-colors duration-300 inline-flex items-center gap-2  cursor-text"
                                        style={{ fontFamily: 'Roboto' }}
                                    >
                                        {info.value}
                                        {/* <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                                    </a>
                                ) : (
                                    <p className="text-base text-[#4a5568]" style={{ fontFamily: 'Roboto' }}>
                                        {info.value}
                                    </p>
                                )}
                            </div>

                            {/* Copy Button */}
                            {/* <button
                                onClick={() => handleCopy(info.copyValue, index)}
                                className={`absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-90 hover:scale-100 ${
                                    copiedIndex === index ? 'bg-green-100 text-green-600' : 'text-gray-600'
                                }`}
                                title={copiedIndex === index ? 'Copied!' : 'Copy to clipboard'}
                            >
                                <Copy className="w-4 h-4" />
                            </button>

                            {copiedIndex === index && (
                                <div className="absolute top-16 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-md animate-bounce">
                                    Copied!
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className={`transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`} style={{ transitionDelay: '800ms' }}>
                    {/* <h3 className="text-2xl font-semibold text-[#2d3748] mb-6" style={{ fontFamily: 'Roboto' }}>
                        Follow My Journey
                    </h3> */}
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-4 rounded-2xl bg-[#7d7d7d2b] text-[#2d3748] shadow-lg hover:shadow-2xl"
                                style={{ transitionDelay: `${1000 + index * 100}ms` }}
                            
                            >
                                <social.icon className={`w-6 h-6 transition-all duration-300 `} />
                               
                            </a>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
               

                {/* Copyright */}
                <p className={`text-base text-[#4a5568] transition-all duration-800 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                    style={{
                        fontFamily: 'Roboto',
                        transitionDelay: '1400ms'
                    }}
                >
                    © 2025 Ravi Punna. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;