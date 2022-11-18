import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import tw from "twin.macro";
// import { ReactComponent as StarIconBase } from "../../assets/images/star-icon.svg";
import ArrowLeftIcon from "../../assets/images/arrow-left-3-icon.svg";
import ArrowRightIcon from "../../assets/images/arrow-right-3-icon.svg";
import loveIllustrationImageSrc from "../../assets/images/love-illustration.svg";
import OurClient from "../../assets/images/OurClient.png";

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "Testimonials",
  heading = "Our Clients Love Us.",
  description = "Settle not. Hear what our clients have to say about their experience working with us and how our digital solutions have helped them turn things around. ",
  textOnLeft = false,
  testimonials = [
    {
      stars: 5,
      profileImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Amazing User Experience",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      customerName: "Charlotte Hale",
      customerTitle: "CEO, Delos Inc.",
    },
    {
      stars: 5,
      profileImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      heading: "Love the Developer Experience and Design Principles !",
      quote:
        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      customerName: "Adam Cuppy",
      customerTitle: "Founder, EventsNYC",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);
  const ImageDemo = imageSrc;

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 xl:w-6/12 flex-shrink-0 relative">
            <img
              src={OurClient.src}
              imageBorder={imageBorder}
              imageShadow={imageShadow}
              imageRounded={imageRounded}
            />
            {/* <ImageDemo /> */}
          </div>
          <div
            className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 xl:w-6/12 mt-16 md:mt-0 pl-16"
            textOnLeft={textOnLeft}
          >
            <h5 className="font-bold text-primary-500 text-center md:text-left">
              {subheading}
            </h5>
            <h2 className="text-4xl sm:text-5xl tracking-wide mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
              {heading}
            </h2>
            <p className="mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
              {description}
            </p>
            <Slider
              className="w-full mt-10 text-center md:text-left"
              arrows={false}
              ref={setSliderRef}
            >
              {testimonials.map((testimonial, index) => (
                <div className="outline-none h-full flex! flex-col" key={index}>
                  <div>
                    {Array.from({ length: testimonial.stars }).map(
                      (_, indexIcon) => (
                        <>*</>
                        // <StarIcon key={indexIcon} />
                      )
                    )}
                  </div>
                  <div className="mt-4 text-xl font-bold">
                    {testimonial.heading}
                  </div>
                  <blockquote className="mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-auto flex justify-between items-center flex-col sm:flex-row">
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                      <img
                        className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
                        src={testimonial.profileImageSrc}
                        alt={testimonial.customerName}
                      />
                      <div className="text-center md:text-left sm:ml-6 mt-2 sm:mt-0">
                        <h5 className="font-bold text-xl">
                          {testimonial.customerName}
                        </h5>
                        <p className="font-medium text-secondary-100">
                          {testimonial.customerTitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-8 sm:mt-0">
                      <button
                        className="mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline"
                        onClick={sliderRef?.slickPrev}
                      >
                        <ArrowLeftIcon className="w-4 h-4 stroke-3" />
                      </button>
                      <div className="divider" />
                      <button
                        className="mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline"
                        onClick={sliderRef?.slickNext}
                      >
                        <ArrowRightIcon className="w-4 h-4 stroke-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
