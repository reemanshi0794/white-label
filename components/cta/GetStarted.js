import { Container, ContentWithPaddingXl } from '../../components/misc/Layouts';

import React from 'react';
import SvgDecoratorBlob1 from '../../assets/images/svg-decorator-blob-9.svg';
import styled from 'styled-components'; //eslint-disable-line
import tw from 'twin.macro';
// import { css } from "styled-components/macro"; //eslint-disable-line

// const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-primary-500 rounded-lg relative`;
// const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

// const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
// const TextContainer = tw(ColumnContainer)``;
// const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

// const LinksContainer = tw(
//   ColumnContainer
// )`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

// const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
// const PrimaryLink = tw(
//   Link
// )`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

// const SecondaryLink = tw(
//   Link
// )`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

// const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
// const DecoratorBlob1 = tw(
//   SvgDecoratorBlob1
// )`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`;
// const DecoratorBlob2 = tw(
//   SvgDecoratorBlob1
// )`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`;
export default ({
  text = 'Developers all over the world are happily using Whiten App Solutions.',
  primaryLinkText = 'Get Started',
  primaryLinkUrl = '/contact-us',
  secondaryLinkText = 'Contact Us',
  secondaryLinkUrl = '/contact-us',
  pushDownFooter = true,
}) => {
  return (
    <div className="relative" css={pushDownFooter && tw`mb-0`}>
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="py-20 lg:py-24 bg-primary-500 rounded-lg relative">
          <div className="px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left">
            <div className="lg:w-1/2 max-w-lg">
              <h5 className="text-gray-100 text-2xl sm:text-3xl font-bold">
                {text}
              </h5>
            </div>
            <div className="lg:w-1/2 max-w-lg flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row">
              <a
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200"
                href={primaryLinkUrl}
              >
                {primaryLinkText}
              </a>
              <a
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500"
                href={secondaryLinkUrl}
              >
                {secondaryLinkText}
              </a>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <SvgDecoratorBlob1 className="absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50" />
            <SvgDecoratorBlob1 className="absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};
