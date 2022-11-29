import React from 'react';

const Image = ({ content }) => {
  return <img src={content.src} alt="post1" className="img-fluid" />;
};

export default Image;
