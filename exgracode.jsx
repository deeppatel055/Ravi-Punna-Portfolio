import React, { useState } from 'react'

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Message sent successfully!');
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <footer className='mt-16 md:mt-20'>
            <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
                <div className='flex-1'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d3748] leading-tight"
                        style={{ fontFamily: 'Lato' }}>
                        Let's Connect & Develop
                    </h1>
                    <p className="mt-3 md:mt-4 text-base sm:text-lg leading-relaxed text-[#4a5568]"
                        style={{ fontFamily: 'Lato' }}>
                        Let's create digital solutions that speak to your audience.
                    </p>
                </div>
                
                <div className='flex-1 max-w-md lg:max-w-lg'>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-[#2d3748] mb-2' 
                                   style={{ fontFamily: 'Lato' }}>
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-[#2d3748]'
                                style={{ fontFamily: 'Lato' }}
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-[#2d3748] mb-2'
                                   style={{ fontFamily: 'Lato' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-[#2d3748]'
                                style={{ fontFamily: 'Lato' }}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className='block text-sm font-medium text-[#2d3748] mb-2'
                                   style={{ fontFamily: 'Lato' }}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-[#2d3748]'
                                style={{ fontFamily: 'Lato' }}
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className='block text-sm font-medium text-[#2d3748] mb-2'
                                   style={{ fontFamily: 'Lato' }}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="4"
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical text-[#2d3748]'
                                style={{ fontFamily: 'Lato' }}
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className='w-full bg-[#2d3748] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#4a5568] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
                            style={{ fontFamily: 'Lato' }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer




import { useState } from 'react';

const Skill = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left - 10, // center circle
      y: e.clientY - rect.top - 10,
    });
  };

  return (
    <div
      className="relative w-96 h-96 bg-gray-200 rounded-lg overflow-hidden "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          className="absolute w-19 h-19 bg-blue-400 opacity-60 rounded-full pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
          }}
        />
      )}
      <div className="flex justify-center items-center h-full text-lg font-semibold bg-black text-gray-700">
        Hover me ✨
      </div>
      <div className="flex justify-center items-center h-full text-lg font-semibold bg-black text-gray-700">
        Hover me ✨
      </div>
    </div>
  );
};

export default Skill;



import React, { useState } from 'react'

const Skill = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientReact();
        setCursorPos({
            x: e.clientX - rect.left - 10,
            x: e.clientX - rect.top - 10,
        })
    }
    return (
        <div className="flex flex-wrap text-center gap-x-4 gap-y-4">
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isHovering && (
                    <div
                        className="absolute w-19 h-19 bg-blue-400 opacity-60 rounded-full pointer-events-none transition-transform duration-75"
                        style={{
                            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                        }}
                    />
                )}
                <div className="flex justify-center items-center h-full text-lg font-semibold bg-black text-gray-700">HTML</div>

            </div>
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 2</div>
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 3</div>

            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 1</div>
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 2</div>
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 3</div>

            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 1</div>
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 2</div>
            <div className="w-full md:w-[32%] p-4 bg-[#2d3748] text-[#e6e6e6]">Column 3</div>
        </div>


    )
}

export default Skill