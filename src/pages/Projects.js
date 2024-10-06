import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, shortDescription, status, id, imageUrl }) => {
  const statusColors = {
    'realizace': 'bg-blue-500',
    'dokončeno': 'bg-green-500',
    'v přípravě': 'bg-yellow-500'
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" loading="lazy" />
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
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.status === activeFilter);

  const filterButtons = [
    { label: 'Všechny projekty', value: 'all' },
    { label: 'V přípravě', value: 'v přípravě' },
    { label: 'V realizaci', value: 'realizace' },
    { label: 'Dokončené', value: 'dokončeno' }
  ];

  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Naše projekty</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeFilter === button.value
                ? 'bg-extradevelop-blue text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveFilter(button.value)}
          >
            {button.label}
          </button>
        ))}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project} 
            imageUrl={`/images/projects/projekt${project.id}_optimized.jpg`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;