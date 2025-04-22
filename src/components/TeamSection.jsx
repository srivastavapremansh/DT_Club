import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { teamMembers } from '../components/about';

export function TeamSection({ members = teamMembers, layout = 'grid' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const filteredMembers = members.filter(member => 
    activeCategory === 'all' || member.category === activeCategory
  );

  const totalSlides = filteredMembers.length; // One slide per member
  const visibleCards = 4; // Show 4 cards at a time on desktop

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    console.log('Next slide, currentIndex:', currentIndex, 'totalSlides:', totalSlides, 'filteredMembers.length:', filteredMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    console.log('Prev slide, currentIndex:', currentIndex, 'totalSlides:', totalSlides, 'filteredMembers.length:', filteredMembers.length);
  };

  // Adjust cardsPerSlide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerSlide(1); // 1 card on mobile
      } else {
        setCardsPerSlide(visibleCards); // 4 cards visible on desktop
      }
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (layout === 'carousel') {
    return (
      <div className="my-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => {
              setActiveCategory('all');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Members
          </button>
          <button
            onClick={() => {
              setActiveCategory('president');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'president' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            President
          </button>
          <button
            onClick={() => {
              setActiveCategory('leads');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'leads' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Leads
          </button>
          <button
            onClick={() => {
              setActiveCategory('co-leads');
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === 'co-leads' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Co-leads
          </button>
        </div>

        {/* Carousel */}
        {filteredMembers.length > 0 && (
          <div className="relative">
            <div className="flex items-center justify-center">
              <button 
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="w-full max-w-6xl mx-auto overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
                  {filteredMembers.map((member, index) => (
                    <div key={index} className="w-[25%] flex-shrink-0 px-0">
                      <div className="group relative rounded-lg border bg-white shadow-md w-full h-[500px] mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <div className="relative w-full h-full">
                          <div className="w-full h-[70%] flex items-center justify-center p-2 bg-gray-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="p-4 text-center h-[30%] relative">
                            <p className="text-xl font-bold text-gray-900">{member.name}</p>
                            <p className="text-md font-semibold text-red-600">{member.position}</p>
                            <p className="text-sm text-gray-600">{member.quote}</p>
                          </div>
                          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:bg-opacity-80 group-hover:opacity-100 transition-all duration-300 text-white">
                            <div className="text-center mb-4">
                              <p className="text-xl font-bold">{member.name}</p>
                              <p className="text-md font-semibold text-red-400">{member.position}</p>
                            </div>
                            <p className="text-sm text-center mb-4">{member.bio}</p>
                            <a href={member.linkedin} className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors">
                              View Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: filteredMembers.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index >= currentIndex && index < currentIndex + visibleCards ? 'bg-red-600' : 'bg-gray-300'}`}
                  aria-label={`Go to card ${index + 1}`}   
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default grid layout
  return (
    <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
      {members.map((user) => (
        <div className="rounded-md border" key={user.name}>
          <img
            src={user.image}
            alt={user.name}
            className="h-[300px] w-full rounded-lg object-cover"
          />
          <div className="p-4 text-center">
            <p className="mt-6 w-full text-xl font-semibold text-gray-900">{user.name}</p>
            <p className="w-full text-md font-semibold text-red-600">{user.position}</p>
            <p className="text-sm italic text-gray-600">"{user.quote}"</p>
            <p className="text-sm text-gray-600">{user.bio}</p>
            <a href={user.linkedin} className="mt-4 inline-block px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors">
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
