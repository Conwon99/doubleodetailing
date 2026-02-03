import { useState, useEffect } from 'react';

export const HeroSlideshow = () => {
  const images = [
    '/hero/WhatsApp Image 2026-02-02 at 11.18.23 PM.jpeg',
    '/hero/WhatsApp Image 2026-02-02 at 11.18.23 PM (1).jpeg',
    '/hero/WhatsApp Image 2026-02-02 at 11.18.23 PM (2).jpeg',
    '/hero/WhatsApp Image 2026-02-02 at 11.18.23 PM (3).jpeg',
    '/hero/WhatsApp Image 2026-02-02 at 11.18.23 PM (4).jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden={index !== currentIndex}
        />
      ))}
    </div>
  );
};
