import React from 'react';

const Image = ({ content }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-4 md:mb-8 lg:mb-20">
      <div>
        <img src={content.src} alt="post1" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Image;
