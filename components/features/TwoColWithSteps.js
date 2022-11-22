import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import SvgDotPattern from "../../assets/images/dot-pattern.svg"
import Laptop from "../../assets/images/laptop1.png"
import TeamIllustrationSrc from "../../assets/images/team-illustration-2.svg"
import ProcessImage from "../../assets/images/ProcessImage.png"

// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
// const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 `;
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
])

// const DecoratorBlob = styled(SvgDotPattern)(() => [
//   tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
// ]);

// const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(
//   SectionHeading
// )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

// const Steps = tw.ul`mt-12`;
// const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
// const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
// const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
// const StepHeading = tw.h6`leading-none text-xl font-semibold`;
// const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by{" "}
      <span className="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description:
        "Let us know more about your expectations, resources and time. Our Customer success will connect you with respective tech leads and will sit together with you for evaluation before prototyping.",
    },
    {
      heading: "Development",
      description:
        "Once we are on the same page, a dedicated team of managers, developers, testers and support is assigned to your project to ensure transparency in each step of development from design to deployment.",
    },
    {
      heading: "Support and Scale",
      description:
        "A business needs updating. We assist with free-of-cost post-delivery support and product scaling with the growth of your business.",
    },
  ]

  if (!steps) steps = defaultSteps

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pt-4 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative w-full max-w-md mx-auto md:max-w-none md:mx-0 pt-12 pb-24 md:pt-0 md:pb-0">
          <img src={ProcessImage.src} alt="process" />
          {imageDecoratorBlob && (
            <SvgDotPattern
              className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10"
              css={decoratorBlobCss}
            />
          )}
        </div>
        <div
          className="md:w-6/12 mt-16 md:mt-0 w-full max-w-md mx-auto md:max-w-none md:ml-16 order-first md:order-last"
          textOnLeft={textOnLeft}
        >
          <div className="lg:py-8 text-center md:text-left">
            <h5 className="text-center md:text-left font-bold text-primary-500">
              {subheading}
            </h5>
            <h2 className="text-4xl sm:text-5xl tracking-wide  mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
              {heading}
            </h2>
            <ul className="mt-12">
              {steps.map((step, index) => (
                <li
                  className="mt-8 flex flex-col md:flex-row items-center md:items-start"
                  key={index}
                >
                  <div className="font-semibold text-4xl leading-none text-gray-400">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-6">
                    <h6 className="leading-none text-xl font-semibold">
                      {step.heading}
                    </h6>
                    <p className="mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
