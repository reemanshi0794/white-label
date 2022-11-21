import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// import BriefcaseIcon from "feather-icons/dist/icons/briefcase.svg";
// import MoneyIcon from "feather-icons/dist/icons/dollar-sign.svg";
import BriefcaseIcon from '../../assets/icons/brief-case.svg';
import MoneyIcon from '../../assets/icons/dollar.svg';
import SvgDotPattern from '../../assets/images/dot-pattern.svg';
import Principles from '../../assets/images/Principles.png';
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

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

// const DecoratorBlob = tw(
//   SvgDotPattern
// )`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

// const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

// const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
// const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

// const FeatureHeadingContainer = tw.div`flex items-center`;
// const FeatureIconContainer = styled.div`
//   ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
//   ${(props) => [
//     props.iconRoundedFull && tw`rounded-full`,
//     props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
//   ]}
//   svg {
//     ${tw`w-5 h-5`}
//   }
// `;
// const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

// const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
//   props.buttonRounded && tw`rounded-full`,
// ]);

export default ({
  subheading = 'Our Expertise',
  heading = (
    <>
      {' '}
      4 C's
      {/* Designed & Developed by
      <span className="text-primary-500">Professionals.</span> */}
    </>
  ),
  description = 'We are Committed, Creative and Classy Coders empowering our clients businesses with custom Technology solutions. We pride ourselves on building holistic digital solutions with edge-cutting technology and tools that are future-proof. ',
  primaryButtonText = 'Learn More',
  primaryButtonUrl = 'https://timerse.com',
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: MoneyIcon,
      title: 'Affordable',
      description:
        'Our clients enjoy reasonable pricing for all our solutions and one will see it as the best rates in the industry.',
      iconContainerCss: tw`bg-red-300 text-red-800`,
    },
    {
      Icon: BriefcaseIcon,
      title: 'Seasoned',
      description:
        'Our Team is well-seasoned and skilled people who hear out your idea and make the right move to bring it into reality within a short time.',
      iconContainerCss: tw`bg-teal-300 text-teal-800`,
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pt-20 md:pt-4 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative w-full max-w-md mx-auto md:max-w-none md:mx-0">
          <img
            src={Principles.src}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />

          {showDecoratorBlob && (
            <SvgDotPattern className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10" />
          )}
        </div>
        <div
          className="md:w-6/12 flex-shrink-0 relative mt-16 md:mt-0 order-first mr-16"
          textOnLeft={textOnLeft}
        >
          <div className="lg:py-8 text-center md:text-left">
            <h5 className="font-bold text-primary-500 text-center md:text-left">
              {subheading}
            </h5>
            <h2 className="text-4xl sm:text-5xl tracking-wide mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
              {heading}
            </h2>
            <p className="mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
              {description}
            </p>
            <div className="mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none">
              {defaultFeatures.map((feature, index) => {
                const FeatureIcon = feature.Icon;
                return (
                  <div
                    className="mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0"
                    key={index}
                  >
                    <div className="flex items-center">
                      {/* <div
                        className="mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0"
                        iconFilled={iconFilled}
                        iconRoundedFull={iconRoundedFull}
                        css={feature.iconContainerCss || iconContainerCss}
                      > */}
                      <FeatureIcon />
                      {/* </div> */}
                      <div className="ml-3 font-bold text-xl">
                        {feature.title}
                      </div>
                    </div>
                    <div className="mt-4 text-center md:text-left text-gray-600 leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <button
              className="px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none transition duration-300 mt-12 text-sm inline-block mx-auto md:mx-0"
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
