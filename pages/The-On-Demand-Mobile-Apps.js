import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import SvgDecoratorBlob1 from '../assets/images/svg-decorator-blob-9.svg';
import Mobile1 from '../assets/images/Mobile1.png';
import Mobile2 from '../assets/images/Mobile2.png';
import Mobile3 from '../assets/images/Mobile3.png';
import Mobile4 from '../assets/images/Mobile4.png';
import { MobileAppsData } from '../helpers/utils.js';

const MobileApps = () => {
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
                mobile development
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
                {MobileAppsData.Introduction.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {MobileAppsData.Introduction.content}
              </p>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {MobileAppsData.Introduction.content1}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 lg:gap-16 mb-4 md:mb-8 lg:mb-20">
              <div>
                <h2 className="text-[#151514] capitalize text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                  {MobileAppsData.Subheading.heading}
                </h2>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                  {MobileAppsData.Subheading.content}
                </p>
              </div>
              <div>
                <img
                  src={Mobile1.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] capitalize text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                {MobileAppsData.Question.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {MobileAppsData.Question.content}
              </p>
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] capitalize text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                what makes on-demand apps stand out?
              </h2>
              <div>
                <div className="my-8">
                  <img
                    src={Mobile2.src}
                    alt="post1"
                    className="h-full object-cover"
                  />
                </div>
                <h4 className=" capitalize font-medium text-xl xl:text-[28px] mb-[14px] text-[#777]">
                  {MobileAppsData.Services.heading}
                </h4>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                  {MobileAppsData.Services.Description}
                </p>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                  {MobileAppsData.Services.Description1}
                </p>
              </div>
              <div className="my-8">
                <img
                  src={Mobile3.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
              <h4 className=" capitalize font-medium text-xl xl:text-[28px] mb-[14px] text-[#777]">
                for customers:
              </h4>
              {MobileAppsData.Customers.map((data) => {
                return (
                  <div>
                    <h5 className="font-medium text-lg md:text-[23px] mb-[14px] text-[#0f7568]">
                      {data.heading}
                    </h5>
                    <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                      {data.Description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] capitalize text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                STEPS TO FOLLOW:
              </h2>
              <div className="my-8">
                <img
                  src={Mobile4.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
              <ul className="list-disc px-8 text-xl">
                {MobileAppsData.Steps.map((data) => {
                  return (
                    <li className="pl-[10px]">
                      <h3 className="text-[#151514] text-lg md:text-[22px] xl:text-[30px] font-bold mb-[14px]">
                        {data.heading}
                      </h3>
                      <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                        {data.Description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] capitalize text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                here’s a list of on-demand app ideas:
              </h2>
              <ul className="list-decimal text-[#151514] px-8 text-lg md:text-[22px] capitalize xl:text-[30px] font-bold">
                {MobileAppsData.Ideas.map((data) => {
                  return (
                    <li className="pl-[10px]">
                      <h3 className="text-[#151514] text-lg md:text-[22px] capitalize xl:text-[30px] font-bold mb-[14px]">
                        {data.heading}
                      </h3>
                      <p className="text-[#6e6e6e] font-normal text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                        {data.Description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mb-4 md:mb-8 lg:mb-20">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[30px] font-bold mb-[14px]">
                {MobileAppsData.Outro.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                {MobileAppsData.Outro.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileApps;
