import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-extradevelop-dark">Projekt nebyl nalezen</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-24 pb-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img src={`/images/projects/projekt${project.id}_optimized.jpg`} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center px-4 shadow-text">{project.title}</h1>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-extradevelop-dark">O projektu</h2>
              <p className="text-lg mb-6 text-extradevelop-gray">{project.longDescription}</p>
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-extradevelop-dark">Klíčové vlastnosti</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-extradevelop-gray">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div className="bg-extradevelop-light p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-extradevelop-dark">Detaily projektu</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Stav:</p>
                    <p className="text-extradevelop-gray">{project.status}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Lokace:</p>
                    <p className="text-extradevelop-gray">{project.location}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Rozloha:</p>
                    <p className="text-extradevelop-gray">{project.area} m²</p>
                  </div>
                  <div>
                    <p className="font-semibold">Zahájení:</p>
                    <p className="text-extradevelop-gray">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Dokončení:</p>
                    <p className="text-extradevelop-gray">{project.endDate}</p>
                  </div>
                </div>
              </div>
              <div className="bg-extradevelop-blue text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Máte zájem o tento projekt?</h3>
                <p className="mb-4">Kontaktujte nás pro více informací nebo prohlídku.</p>
                <a href="/contact" className="inline-block bg-white text-extradevelop-blue font-bold py-2 px-4 rounded hover:bg-extradevelop-light transition duration-300">
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </div>
          
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-extradevelop-dark">Galerie projektu</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.gallery.map((image, index) => (
                  <img 
                    key={index} 
                    src={`/images/projects/gallery/${image}`} 
                    alt={`${project.title} - obrázek ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;