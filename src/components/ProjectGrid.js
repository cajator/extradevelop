import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects = [] }) => {
  const [filter, setFilter] = useState('all');

  // Kontrola, zda projects je pole
  if (!Array.isArray(projects)) {
    console.error('Projects prop is not an array:', projects);
    return <div>Chyba: Nelze načíst projekty.</div>;
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Všechny
        </button>
        <button 
          onClick={() => setFilter('v přípravě')} 
          className={`px-4 py-2 rounded-full ${filter === 'v přípravě' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          V přípravě
        </button>
        <button 
          onClick={() => setFilter('realizace')} 
          className={`px-4 py-2 rounded-full ${filter === 'realizace' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          V realizaci
        </button>
        <button 
          onClick={() => setFilter('dokončeno')} 
          className={`px-4 py-2 rounded-full ${filter === 'dokončeno' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Dokončené
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;