import React from "react";
// import tw from 'twin.macro';
import SvgDotPattern from "../../assets/images/dot-pattern.svg";
import ModernDesign from "../../assets/images/ModernDesign.png";
import YourPrudentialImage from "../../assets/images/YourPrudentialImage.png";

import Aim from "../../assets/images/AimImage.png";
import TeamIllustrationSrc from "../../assets/images/team-illustration-2.svg";

// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
// const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
// const TextColumn = styled(Column)((props) => [
//   tw`md:w-6/12 mt-16 md:mt-0`,
//   props.textOnLeft
//     ? tw`md:mr-12 lg:mr-16 md:order-first`
//     : tw`md:ml-12 lg:ml-16 md:order-last`,
// ]);

// const Image = styled.img((props) => [props.imageRounded && tw`rounded`, props.imageBorder && tw`border`, props.imageShadow && tw`shadow`]);

// const DecoratorBlob = styled(SvgDotPattern)((props) => [
//   tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
// ]);

// const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
//   props.buttonRounded && tw`rounded-full`,
// ]);

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Your Prudential Tech partners for today and hereafter
      {/* <span className="text-primary-500">Professionals.</span> */}
    </>
  ),

  description = "Know how it is to be developed by experts in the industry. We give a seamless experience for our clients with exceptional design, development and process that is best suited to their needs and requirements.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
  isModernDesignImage,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between max-w-screen-xl mx-auto ${
          isModernDesignImage ? "px-8 lg:px-0" : "pt-40 md:pt-40 lg:pt-40"
        } py-8 pb-0 md:py-12 md:pb-24 lg:py-16 lg:pb-8  items-center`}
      >
        {textOnLeft === true ? (
          <div className=" flex-shrink-0 relative lg:ml-16 border border-[#f2f2f2] p-1">
            {isModernDesignImage ? (
              <img
                src={YourPrudentialImage.src}
                alt="YourPrudentialImage-png"
                className="w-full"
              />
            ) : (
              <img
                src={ModernDesign.src}
                alt="modernDesign-png"
                className="w-full"
              />
            )}

            {imageDecoratorBlob && (
              <SvgDotPattern
                className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10"
                css={imageDecoratorBlobCss}
              />
            )}
          </div>
        ) : (
          <div className=" flex-shrink-0 relative lg:mr-16 border border-[#f2f2f2] p-1">
            <img src={Aim.src} alt="Aim-image" className="w-full" />
            {imageDecoratorBlob && (
              <SvgDotPattern
                className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10"
                css={imageDecoratorBlobCss}
              />
            )}
          </div>
        )}
        {textOnLeft === true ? (
          <div className="mt-0 order-first ">
            <div className="lg:py-8 text-center md:text-left">
              <h5 className="text-center md:text-left font-bold text-primary-500">
                {subheading}
              </h5>
              <h2 className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight text-4xl sm:text-5xl tracking-wide text-center">
                {heading}
              </h2>
              <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
              {/* <button
                className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none transition duration-300"
                buttonRounded={buttonRounded}
                as="a"
                href={primaryButtonUrl}
              >
                {primaryButtonText}
              </button> */}
            </div>
          </div>
        ) : (
          <div className="mt-16 md:mt-0 mx-auto order-first md:order-last">
            <div className="lg:py-8 text-center md:text-left">
              <h5 className="text-center md:text-left font-bold text-primary-500">
                {subheading}
              </h5>
              <h2 className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight text-4xl sm:text-5xl tracking-wide text-center">
                {heading}
              </h2>
              <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
              {/* <button
                className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none transition duration-300"
                buttonRounded={buttonRounded}
                as="a"
                href={primaryButtonUrl}
              >
                {primaryButtonText}
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
