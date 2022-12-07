import React from 'react';
import SvgDecoratorBlob1 from '../../assets/images/svg-decorator-blob-9.svg';

const Heading = ({ content }) => {
  return (
    <>
      <div className=" py-12 md:py-24 2xl:py-32 bg-primary-500 relative mb-8 lg:mb-16">
        <div className="px-8 max-w-screen-xl mx-auto flex justify-center relative">
          <h1 className="text-gray-100 text-xl md:text-[45px] 2xl:text-[60px] font-bold text-center">
            {content}
          </h1>
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <SvgDecoratorBlob1 className="absolute bottom-0 left-0 w-32 md:w-40 lg:w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50" />
          <SvgDecoratorBlob1 className="absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50" />
        </div>
      </div>
    </>
  );
};

export default Heading;
