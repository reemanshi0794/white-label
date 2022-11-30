import React from 'react';

const Description = ({ content }) => {
  return (
    <p className="text-[#323232] text-xl leading-[45px] text-justify mb-4">
      {content}
    </p>
  );
};

export default Description;
