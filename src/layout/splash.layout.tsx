import React from 'react';

const SplashLayout = () => {
  return (
    <div className="w-full h-screen bg-secondary">
      <div className="w-full h-full app-row justify-center items-center p-6 bg-secondary">
        <div className="relative rounded-full bg-secondary animate-spin h-56 w-56 border-8 border-b-primary border-t-primary border-l-secondary border-r-secondary" />
        <div className="absolute">Logo</div>
      </div>
    </div>
  );
};

export default SplashLayout;
