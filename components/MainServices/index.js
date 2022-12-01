import React from "react"

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
            <div className="lg:py-8 text-center lg:text-left">
              <h2 className="font-extrabold text-[22px] md:text-3xl 2xl:text-5xl leading-tight">
                {heading}
              </h2>
              <p className="my-4 text-sm md:text-base 2xl:text-lg px-0 md:px-20 lg:pl-0 lg:pr-16 font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
            </div>
          </div>
        ) : (
          <div className=" order-first md:order-last">
            <div className="lg:py-8 text-center lg:text-left">
              <h2 className="font-extrabold text-[22px] md:text-3xl 2xl:text-5xl leading-tight">
                {heading}
              </h2>
              <p className="my-4 text-sm md:text-base 2xl:text-lg px-0 md:px-20 lg:pl-0 lg:pr-16 font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainServices
