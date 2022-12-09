import React from 'react';
import { PortfolioData } from '../helpers/utils';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
// import VideoFile from '../public/videos/punpun.mp4';
import ReactPlayer from 'react-player';

const portfolio = () => {
  console.log('PortfolioData', PortfolioData);
  return (
    <div id="portfolio">
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
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <div className="max-w-screen-xl mx-auto mt-40">
          <div className="text-center pb-[60px]">
            <h4 className=" text-2xl">Our Portfolio</h4>
          </div>
          {PortfolioData.map((item, index) => {
            const { id, logo, url, type, message } = item;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-4">
                <>
                  {index % 2 === 0 ? (
                    <>
                      <div
                        className=" border-[#747474] border p-[10px] rounded-[20px]"
                        key={id}
                      >
                        {type.toLowerCase().includes('img') ? (
                          <div>
                            {/* <Loader /> */}
                            <img
                              src={url.src}
                              alt={url}
                              className="rounded-[20px] object-cover w-full"
                            />
                          </div>
                        ) : (
                          <>
                            {/* <Loader /> */}
                            <video
                              controls
                              src={'/assets/videos/punpun.mp4'}
                              loop
                              autoPlay
                              muted
                            />
                          </>
                        )}
                      </div>

                      <div className="flex flex-col items-start h-full justify-center">
                        <img src={logo.src} alt={logo} />
                        <p className="text-xl text-[#363636] leading-7 py-[26px]">
                          {message}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-start h-full justify-center">
                        <img src={logo.src} alt={logo} />
                        <p className="text-xl text-[#363636] leading-7 py-[26px]">
                          {message}
                        </p>
                      </div>

                      <div>
                        <div className=" border-[#747474] border p-[10px] rounded-[20px]">
                          {url.toLowerCase().includes('img') ? (
                            <div>
                              {/* <Loader /> */}
                              <img
                                src={url}
                                alt={url}
                                className="rounded-[20px] object-cover w-full"
                              />
                            </div>
                          ) : (
                            <>
                              {/* <Loader /> */}
                              <video
                                src={'/assets/videos/foodclub.mp4'}
                                loop
                                autoPlay
                                muted
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default portfolio;
