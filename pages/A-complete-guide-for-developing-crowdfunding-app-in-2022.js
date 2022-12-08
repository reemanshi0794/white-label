import React, { useEffect } from 'react';
import SvgDecoratorBlob1 from '../assets/images/svg-decorator-blob-9.svg';
import ReactGA from 'react-ga';
import { CrowdFundingAppData } from '../helpers/utils';
import Header from '../components/headers/light.js';
import Head from 'next/head';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import Crowdfunding2 from '../assets/images/Crowdfunding2.png';
import Crowdfunding1 from '../assets/images/Crowdfunding1.png';
import Crowdfunding3 from '../assets/images/Crowdfunding3.png';

const Howmuchcosttodevelop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Software Development Company | Custom App Developer | White Label
          Technologies
        </title>
        <meta
          name="description"
          content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
        />
        <meta
          name="keyword"
          content="custom mobile app development company, software development company,custom software development,software app developer"
        />
      </Head>
      <Header />
      <div className="relative">
        <div className="pt-40">
          <div className=" py-12 md:py-24 2xl:py-32 bg-primary-500 relative mb-8 lg:mb-16">
            <div className="px-8 max-w-screen-xl mx-auto flex justify-center relative">
              <h1 className="text-gray-100 uppercase text-xl md:text-[45px] 2xl:text-[60px] font-bold text-center">
                A complete guide for developing <br />
                Crowdfunding App in 2022
              </h1>
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <SvgDecoratorBlob1 className="absolute bottom-0 left-0 w-32 md:w-40 lg:w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50" />
              <SvgDecoratorBlob1 className="absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50" />
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto px-8 md:px-24 2xl:px-0">
            <div className="mb-4 md:mb-8 lg:mb-20">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                {CrowdFundingAppData.Introduction.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {CrowdFundingAppData.Introduction.content}
              </p>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {CrowdFundingAppData.Introduction.content1}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-4 md:mb-8 lg:mb-20">
              <div>
                <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                  {CrowdFundingAppData.Outline.heading}
                </h2>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                  {CrowdFundingAppData.Outline.content}
                </p>
              </div>
              <div>
                <img
                  src={Crowdfunding1.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-8 lg:mb-20">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                What is crowdfunding and how does it work?
              </h2>
              <ol className="list-decimal px-8">
                {CrowdFundingAppData.Crowdfunding.map((content) => {
                  return (
                    <li className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 pl-2">
                      {content.Licontent}
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-4 md:mb-8 lg:mb-20">
              <div>
                <img
                  src={Crowdfunding3.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                  {CrowdFundingAppData.Development.heading}
                </h2>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                  {CrowdFundingAppData.Development.content}
                </p>
              </div>
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                STEPS TO FOLLOW:
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                A crowdfunding platform development business must be consulted
                while building a crowdfunding website. To succeed in the market
                and stand out from the competition, you must take into account
                each of the next phases in the creation of your crowdsourcing
                campaign individually. Check out what's below:
              </p>
              <img
                src={Crowdfunding2.src}
                className="h-full object-cover my-5"
              />
              <ul className=" list-none">
                {CrowdFundingAppData.Steps.map((steps) => {
                  return (
                    <li>
                      <h3 className="text-[#0f7568] text-lg md:text-[22px] xl:text-[30px] font-bold mb-[14px]">
                        {steps.heading}
                      </h3>
                      <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                        {steps.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-4 md:mb-8 lg:mb-20">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[30px] font-bold mb-[14px]">
                Final Words
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                For startup businesses, launching a new crowdfunding platform
                may be a profitable venture. Sure, it's not always easy to build
                a successful firm. However, the success stories of industry
                leaders like Kickstarter or GoFundMe demonstrate that starting
                to materialise ideas is the only appropriate course of action.
              </p>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                In general, the following actions can facilitate the website
                construction process:
              </p>
              <ul className=" list-disc mb-4 px-4">
                {CrowdFundingAppData.FinalWords.map((words) => {
                  return (
                    <li className="text-[#727272] text-base 2xl:text-lg pl-[5px] leading-[35px]">
                      {words.content}
                    </li>
                  );
                })}
              </ul>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                Whiten App Solutions has a long history of creating internet
                platforms. Since the beginning, one of our areas of competence
                has been fintech. This made it possible for our team to gather
                enough data and expertise so that we could succeed.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Howmuchcosttodevelop;
