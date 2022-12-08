import React from 'react';

const Subheading = ({ content }) => {
  return (
    <>
      <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
        {content}
      </h2>
    </>
  );
};

export default Subheading;
