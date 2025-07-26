

const Project = () => {
  return (
    <div className='mx-5 '>

      {/* Header */}
      {/* <section 
        id="hero1" 
        className="hero bg-fixed bg-center bg-cover rounded-2xl" 
        style={{
          backgroundImage: "url(https://4.bp.blogspot.com/_AQ0vcRxFu0A/S9shDGGyMTI/AAAAAAAAAYk/kn3WTkY2LoQ/s1600/IMG_0714.JPG)",
        }}
      >
        <div className="inner relative min-h-[300px]">
          <div className="absolute top-1/2 left-0 w-full h-[5em] -mt-[5em] text-white text-center">
            <h1 className="m-0 text-[32px] font-normal px-5 font-['Robotoo_Slab']">
              Choice mountains bro
            </h1>
            <p className="text-sm px-5 font-['Noto_Sans']">
              Its like im actually there! But sitting at a computer. Wow, the future is intense!
            </p>
          </div>
        </div>
      </section> */}
      <section
        id="hero1"
        className="hero bg-fixed bg-center bg-cover rounded-2xl w-[70%]"
        style={{
          backgroundImage: "url(https://4.bp.blogspot.com/_AQ0vcRxFu0A/S9shDGGyMTI/AAAAAAAAAYk/kn3WTkY2LoQ/s1600/IMG_0714.JPG)",
        }}
      >
        <div className="inner relative min-h-[300px]">
          <div className="absolute top-1/2 left-0 w-full h-[5em] -mt-[5em] text-white text-center">
            <h1 className="m-0 text-[32px] font-normal px-5 font-['Robotoo_Slab']">
              Choice mountains bro
            </h1>
            <p className="text-sm px-5 font-['Noto_Sans']">
              Its like im actually there! But sitting at a computer. Wow, the future is intense!
            </p>
          </div>
        </div>
      </section>
      <section>
        thii is hello
      </section>

      {/* Hero 2 */}
      {/* <section 
        id="hero2" 
        className="hero bg-fixed  bg-center bg-cover rounded-4xl " 
        style={{
          backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/21555/Melissani-cave-natural.jpg)",
          width:'70%'
        }}
      >
        <div className="inner relative min-h-[200px]  bg-repeat">
          <div className="absolute top-1/2 left-0 w-full h-[10em] -mt-[5em] text-white text-center">
            <h1 className="m-0 text-[32px] font-normal px-5 font-['Robotoo_Slab']">
              Dem some big ass caves
            </h1>
            <p className="text-sm px-5 font-['Noto_Sans']">
              You could probably fit in there ;
            </p>
          </div>
        </div>
      </section> */}
      <section
        id="hero2"
        className="hero bg-fixed bg-center bg-cover rounded-4xl " // mx-auto to center the section
        style={{
          backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/21555/Melissani-cave-natural.jpg)",
          width: "70%",
        }}
      >
        <div className="inner relative min-h-[200px] bg-repeat">
          <div className="absolute top-1/2 left-0 w-full h-[10em] -mt-[5em] text-white text-center">
            <h1 className="m-0 text-[32px] font-normal px-5 font-['Robotoo_Slab']">
              Dem some big ass caves
            </h1>
            <p className="text-sm px-5 font-['Noto_Sans']">
              You could probably fit in there ;
            </p>
          </div>
        </div>
      </section>

      {/* Content 2 */}

    </div>
  );
};

export default Project;



import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwipeableImageGallery = ({ images = [], content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
    setTranslateX(0);
  };

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
   <div>

    <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <div
        ref={containerRef}
        className="relative h-96 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
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

      <div className="flex space-x-2 p-4 bg-gray-800 overflow-x-auto">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? 'border-blue-500 ring-2 ring-blue-500/30'
                : 'border-transparent hover:border-gray-500'
            }`}
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center space-x-2 p-4 bg-gray-800">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
    <div>
      
    </div>
    </div>
  );
};

export default SwipeableImageGallery;
