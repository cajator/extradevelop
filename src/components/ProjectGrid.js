import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, shortDescription, status, imageUrl }) => {
  const statusColors = {
    'realizace': 'bg-blue-500',
    'dokončeno': 'bg-green-500',
    'v přípravě': 'bg-yellow-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className={`${statusColors[status]} text-white text-sm font-bold px-3 py-1 rounded-full`}>
            {status}
          </span>
          <Link to={`/project/${id}`} className="text-extradevelop-blue hover:underline">
            Více informací
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = ({ projects, showFilters = true }) => {
  return (
    <div>
      {showFilters && (
        <div className="flex justify-center space-x-4 mb-8">
          <button className="px-4 py-2 rounded-full bg-extradevelop-blue text-white">Všechny projekty</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700">V přípravě</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700">V realizaci</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700">Dokončené</button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project} 
            imageUrl={`/images/projects/projekt${project.id}_optimized.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;