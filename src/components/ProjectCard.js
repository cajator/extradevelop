import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, status, imageUrl }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'v přípravě': return 'bg-yellow-500';
      case 'realizace': return 'bg-blue-500';
      case 'dokončeno': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className={`absolute top-0 right-0 m-2 ${getStatusColor(status)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
          {status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-extradevelop-dark">{title}</h3>
        <p className="text-extradevelop-gray text-base mb-4">{description}</p>
        <Link 
          to={`/project/${id}`}
          className="inline-block bg-extradevelop-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Více informací
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;