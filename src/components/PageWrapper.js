import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      {children}
    </div>
  );
};

export default PageWrapper;