import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, status, imageUrl, id }) => {
  const statusColors = {
    'realizace': 'bg-blue-500',
    'dokončeno': 'bg-green-500',
    'v přípravě': 'bg-yellow-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
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

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.status === filter);

  return (
    <div className="container mx-auto px-4 py-16 pt-24"> {/* Přidáno pt-24 */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Naše projekty</h1>
      
      <div className="mb-8">
        <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">Filtrovat podle stavu:</label>
        <select
          id="status-filter"
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-extradevelop-blue focus:border-extradevelop-blue"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Všechny projekty</option>
          <option value="v přípravě">V přípravě</option>
          <option value="realizace">V realizaci</option>
          <option value="dokončeno">Dokončené</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;