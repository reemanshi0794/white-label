import React from "react"
import BannerImage from "../../assets/images/BannerImage.png"
import CustomersLogoStripImage from "../../assets/images/Partnerslogo.svg"
import SvgDecoratorBlob1 from "../../assets/images/svg-decorator-blob-1.svg"
//eslint-disable-next-line
// import { css } from "styled-components/macro";

// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
// const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
// const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

// const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
// const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

// const Actions = styled.div`
//   ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
//   input {
//     ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
//   }
//   button {
//     ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
//   }
// `;

// const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 `}
// `;

// const CustomersLogoStrip = styled.div`
//   ${tw`mt-12 lg:mt-20`}
//   p {
//     ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
//   }
//   img {
//     ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
//   }
// `;

export default () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pb-20 pt-32 md:pb-24 md:pt-32">
          <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
            <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
              Bridging business into
              <br /> Digital Sphere
              {/* <span className="text-primary-500">for you.</span> */}
            </h1>
            <p className="my-4 text-base xl:text-lg">
              A one-stop development Studio to gear up your business demands for
              today and tomorrow.
            </p>
            <div className="max-w-md text-center mx-auto lg:mx-0 flex justify-center lg:justify-start">
              <a
                className="w-full bg-primary-500 text-gray-100 font-bold rounded-full p-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none  transition duration-300"
                href="/contact-us"
              >
                Get Started
              </a>
            </div>
            <div className=" mt-4 xl:mt-8 flex flex-col items-center lg:items-start">
              <p className="uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500">
                Our TRUSTED Customers
              </p>
              <CustomersLogoStripImage
                alt="partners-logo"
                className="mr-3 mt-2"
              />
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
            <div className="flex justify-center lg:justify-end items-center">
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={BannerImage.src}
                alt="Design Illustration"
              />
            </div>
          </div>
        </div>
        <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3" />
      </div>
    </>
  )
}
