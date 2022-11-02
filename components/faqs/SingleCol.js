import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line

import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../../components/misc/Headings.js";
import { SectionDescription } from "../../components/misc/Typography.js";
import {
  Container,
  ContentWithPaddingXl,
} from "../../components/misc/Layouts.js";
import ChevronDownIcon from "feather-icons/dist/icons/chevron-down.svg";
import SvgDecoratorBlob1 from "../../assets/images/svg-decorator-blob-7.svg";
import SvgDecoratorBlob2 from "../../assets/images/svg-decorator-blob-8.svg";

// const Subheading = tw(SubheadingBase)`mb-4 text-center`;
// const Heading = tw(SectionHeading)`w-full`;
// const Description = tw(SectionDescription)`w-full text-center`;

// const Column = tw.div`flex flex-col items-center`;
// const HeaderContent = tw.div``;

// const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
// const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
// const Question = tw.dt`flex justify-between items-center`;
// const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
// `;
// const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
// `;

export default ({
  subheading = "FAQS",
  heading = "You have Questions ?",
  description = "And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  faqs = [
    {
      question: "Is lunch provided free of cost ?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.",
    },
    {
      question: "Do you have 2 Bedroom suites ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Are Wi-Fi costs included in the price ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Where can I reach you for support ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="flex flex-col items-center">
          <div>
            {subheading && (
              <h5 className="font-bold text-primary-500 mb-4 text-center">
                {subheading}
              </h5>
            )}
            <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center w-full">
              {heading}
            </h2>
            {description && (
              <p className="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl w-full text-center">
                {description}
              </p>
            )}
          </div>
          <dl className="mt-12 max-w-4xl relative">
            {faqs.map((faq, index) => (
              <div
                className="cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300"
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                // className="group"
              >
                <dt className="flex justify-between items-center">
                  <span className="text-lg lg:text-xl font-semibold">
                    {faq.question}
                  </span>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </dt>
                <Answer
                  // className="pointer-events-none text-sm sm:text-base leading-relaxed"
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <SvgDecoratorBlob1 className="pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400" />
      <SvgDecoratorBlob2 className="pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500" />
    </div>
  );
};
