import React, { useState } from 'react';

const ProjectGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Naše realizace</h2>
      {images && images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openLightbox(image)}>
              <img 
                src={image.thumbnail} 
                alt={image.alt} 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:opacity-80 transition duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg'; // Náhradní obrázek
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Žádné realizace k zobrazení.</p>
      )}
      
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="max-w-3xl max-h-full p-4">
            <img 
              src={selectedImage.full} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/placeholder.jpg'; // Náhradní obrázek
              }}
            />
            <p className="text-white text-center mt-4">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;