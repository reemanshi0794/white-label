import React from 'react';
// import tw from 'twin.macro';
import SvgDotPattern from '../../assets/images/dot-pattern.svg';
import QualityWork from '../../assets/images/QualityWork.png';
import TeamIllustrationSrc from '../../assets/images/team-illustration-2.svg';

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
  subheading = 'Our Expertise',
  heading = (
    <>
      Your Prudential Tech partners for today and hereafter
      {/* <span className="text-primary-500">Professionals.</span> */}
    </>
  ),
  description = 'Know how it is to be developed by experts in the industry. We give a seamless experience for our clients with exceptional design, development and process that is best suited to their needs and requirements.',
  primaryButtonText = 'Learn More',
  primaryButtonUrl = 'https://timerse.com',
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative w-full max-w-md mx-auto md:max-w-none">
          <img
            css={imageCss}
            src={QualityWork.src}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
          {imageDecoratorBlob && (
            <SvgDotPattern
              className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10"
              css={imageDecoratorBlobCss}
            />
          )}
        </div>
        {textOnLeft === true ? (
          <div className="md:w-6/12 mt-16 md:mt-0 w-full max-w-md mx-auto md:max-w-none order-first mr-16">
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
              <button
                className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none transition duration-300"
                buttonRounded={buttonRounded}
                as="a"
                href={primaryButtonUrl}
              >
                {primaryButtonText}
              </button>
            </div>
          </div>
        ) : (
          <div className="md:w-6/12 mt-16 md:mt-0 w-full max-w-md mx-auto md:max-w-none order-last mr-16">
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
              <button
                className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none transition duration-300"
                buttonRounded={buttonRounded}
                as="a"
                href={primaryButtonUrl}
              >
                {primaryButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
