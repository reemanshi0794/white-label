import React from 'react';

const Subheading = ({ content }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-24 2xl:px-0">
      <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
        {content}
      </h2>
    </div>
  );
};

export default Subheading;
