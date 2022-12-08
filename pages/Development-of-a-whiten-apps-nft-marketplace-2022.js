import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from '../components/headers/light.js';
import { NFTMarketplace } from '../helpers/utils';
import Head from 'next/head';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import SvgDecoratorBlob1 from '../assets/images/svg-decorator-blob-9.svg';
import NFT1 from '../assets/images/NFT1.png';
import NFT2 from '../assets/images/NFT2.png';
import NFT3 from '../assets/images/NFT3.png';

const NftMarketplace = () => {
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
                nft marketplace
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
                {NFTMarketplace.Introduction.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.Introduction.content}
              </p>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.Introduction.content1}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-4 md:mb-8 lg:mb-20">
              <div>
                <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                  {NFTMarketplace.Subheading.heading}
                </h2>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                  {NFTMarketplace.Subheading.content}
                </p>
              </div>
              <div>
                <img
                  src={NFT1.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                {NFTMarketplace.Description.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.Description.content}
              </p>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.Description.content1}
              </p>
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                {NFTMarketplace.Subsubheading.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.Subsubheading.content}
              </p>
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                {NFTMarketplace.marketplace.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.marketplace.content}
              </p>
              <img src={NFT2.src} alt="" />
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                {NFTMarketplace.popularity.heading}
              </h2>
              <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                {NFTMarketplace.popularity.content}
              </p>
            </div>

            <div className="mb-4 md:mb-8">
              <ul className="list-decimal text-[#151514] px-8 text-lg md:text-[22px] capitalize xl:text-[30px] font-bold">
                {NFTMarketplace.trading.map((content) => {
                  return (
                    <li className="pl-[10px]">
                      <h3 className="text-[#151514] text-lg md:text-[22px] capitalize xl:text-[30px] font-bold mb-[14px]">
                        {content.heading}
                      </h3>
                      <p className="text-[#6e6e6e] font-normal text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                        {content.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mb-4 md:mb-8">
              <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                HOW TO CREATE AN NFT MARKETPLACE?
              </h2>
              <ul className="list-decimal text-[#151514] px-8 text-lg md:text-[22px] capitalize xl:text-[30px] font-bold">
                {NFTMarketplace.nftCreate.map((item) => {
                  return (
                    <li className="pl-[10px]">
                      <h3 className="text-[#151514] text-lg md:text-[22px] capitalize xl:text-[30px] font-bold mb-[14px]">
                        {item.heading}
                      </h3>
                      <p className="text-[#6e6e6e] font-normal text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                        {item.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-4 md:my-8 lg:my-20">
              <div>
                <img
                  src={NFT3.src}
                  alt="post1"
                  className="h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-[#151514] text-xl md:text-2xl 2xl:text-[40px] font-bold mb-[14px]">
                  {NFTMarketplace.features.heading}
                </h2>
                <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 ">
                  {NFTMarketplace.features.content}
                </p>
              </div>
            </div>

            <div>
              <ul className="list-decimal text-[#151514] px-8 text-base md:text-[18px] xl:text-[20px] capitalize ">
                {NFTMarketplace.features1.map((item) => {
                  return (
                    <li className="pl-[10px]">
                      <h3 className="text-[#151514] text-base md:text-[18px] xl:text-[20px] capitalize mb-[14px]">
                        {item.heading}
                      </h3>
                      <p className="text-[#6e6e6e] font-normal text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                        {item.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="text-[#6e6e6e] font-normal text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                The following are some of the main attributes of our Whiten
                Appsl NFT Marketplace Clone:
              </p>
              <ul className=" list-disc mb-4  px-8">
                {NFTMarketplace.Attributes.map((item) => {
                  return (
                    <li className="text-[#727272] text-base 2xl:text-lg pl-[5px] leading-[35px]">
                      {item.content}
                    </li>
                  );
                })}
              </ul>
              {NFTMarketplace.outro.map((item) => {
                return (
                  <p className="text-[#6e6e6e] font-normal text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4">
                    {item.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NftMarketplace;
