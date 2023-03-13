import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">404 Not Found</h1>
        <p className="text-lg text-gray-700">Sorry, the page you requested could not be found.</p>
      </div>
    </div>
  );
};

export default PageNotFound
