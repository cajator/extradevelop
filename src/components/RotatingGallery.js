import React, { useState, useEffect } from 'react';

const RotatingGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Mění obrázek každých 5 sekund

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  const handleImageError = (index) => {
    console.error(`Failed to load image at index ${index}`);
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative w-full h-96">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex && loadedImages.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => handleImageLoad(index)}
          onError={() => handleImageError(index)}
        />
      ))}
    </div>
  );
};

export default RotatingGallery;