import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const SwipeableImageGallery = ({ images = [], content }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);

    

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 100;

        if (translateX > threshold && currentIndex > 0) {
            prevSlide();
        } else if (translateX < -threshold && currentIndex < images.length - 1) {
            nextSlide();
        }

        setTranslateX(0);
    };

    useEffect(() => {
        const handleMouseUp = () => handleDragEnd();
        const handleTouchEnd = () => handleDragEnd();

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, translateX, currentIndex]);

    if (!images || images.length === 0) {
        return (
            <div className="text-center text-gray-400 p-10 bg-gray-900 rounded-xl">
                No images available.
            </div>
        );
    }

    return (
        <div className='w-full mx-auto max-w-7xl'>

            <div className=' bg-[#2d3748] mt-19 rounded-xl overflow-hidden shadow-2xl'>

                <div ref={containerRef} className='relative h-[600px] overflow-hidden cursor-grab active:cursor-grabbing select-none' onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}>
                    <div className='flex h-full transition-transform duration-300 ease-out' style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
                    }}>

                        {images.map((src, index) => (
                            <div key={index} className='w-full h-full flex-shrink-0'>
                                <img src={src}
                                    alt={`Slide ${index + 1}`}
                                    className='w-full h-full '
                                />

                            </div>
                        ))}

                    </div>
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === images.length - 1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {currentIndex + 1} / {images.length}
                    </div>

                </div>
            </div>
            <div className='mt-10 text-base text-justify sm:text-lg leading-relaxed text-[#4a5568]'      style={{ fontFamily: 'Lato' }}>
                {content}
            </div>
        </div>
    )
}

export default SwipeableImageGallery 
