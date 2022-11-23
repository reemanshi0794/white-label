import React from "react";

function MainServices({ heading, imageSrc, description, textOnLeft }) {
  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between max-w-screen-xl mx-auto py-8 pb-0 md:py-12 md:pb-24 lg:py-16 lg:pb-8  items-center`}
      >
        {textOnLeft === true ? (
          <div className=" flex-shrink-0 relative lg:ml-16 border border-[#f2f2f2] p-1">
            <img src={imageSrc} alt="" className="w-full" />
          </div>
        ) : (
          <div className=" flex-shrink-0 relative lg:mr-16 border border-[#f2f2f2] p-1">
            <img src={imageSrc} alt="" className="w-full" />
          </div>
        )}
        {textOnLeft === true ? (
          <div className="mt-0 order-first ">
            <div className="lg:py-8 text-center md:text-left">
              <h2 className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight text-4xl sm:text-5xl tracking-wide text-center">
                {heading}
              </h2>
              <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-16 md:mt-0 mx-auto order-first md:order-last">
            <div className="lg:py-8 text-center md:text-left">
              <h2 className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight text-4xl sm:text-5xl tracking-wide text-center">
                {heading}
              </h2>
              <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainServices;
