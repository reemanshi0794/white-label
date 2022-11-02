import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line

import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../../components/misc/Headings.js";
import {
  Container,
  ContentWithPaddingXl,
} from "../../components/misc/Layouts.js";
import loveIllustrationImageSrc from "../../assets/images/love-illustration.svg";
// import { ReactComponent as StarIconBase } from "../../assets/images/star-icon.svg";
import ArrowLeftIcon from "../../assets/images/arrow-left-3-icon.svg";
import ArrowRightIcon from "../../assets/images/arrow-right-3-icon.svg";
import OurClient from "../../assets/images/OurClient.png";

// const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
// const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
// const TextColumn = styled(Column)((props) => [
//   tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
//   props.textOnLeft
//     ? tw`md:pr-12 lg:pr-16 md:order-first`
//     : tw`md:pl-12 lg:pl-16 md:order-last`,
// ]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

// const TestimonialSlider = styled(Slider)`
//   ${tw`w-full mt-10 text-center md:text-left`}
//   .slick-track {
//     ${tw`flex`}
//   }
//   .slick-slide {
//     ${tw`h-auto flex justify-center mb-1`}
//   }
// `;

// const Testimonial = tw.div`outline-none h-full flex! flex-col`;
// const StarsContainer = styled.div``;
// const StarIcon = tw(
//   StarIconBase
// )`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
// const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
// const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

// const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

// const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
// const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
// const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
// const CustomerName = tw.h5`font-bold text-xl`;
// const CustomerTitle = tw.p`font-medium text-secondary-100`;

// const Controls = styled.div`
//   ${tw`flex mt-8 sm:mt-0`}
//   .divider {
//     ${tw`my-3 border-r`}
//   }
// `;
// const ControlButton = styled.button`
//   ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
//   svg {
//     ${tw`w-4 h-4 stroke-3`}
//   }
// `;

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "Testimonials",
  heading = "Our Clients Love Us.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
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
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
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
