import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Title from '../components/blog/Title';
import Description from '../components/blog/Description';
import Image from '../components/blog/Image';
import { MobileAppsData } from '../helpers/utils';
import Footer from '../components/footers/FiveColumnWithInputForm.js';

const MobileApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  const Components = {
    Title,
    Description,
    Image,
  };

  const getComponent = (type, content) => {
    const Render = Components[type];
    return <Render content={content} />;
  };
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
      <br />
      <div className="relative">
        <div className="max-w-screen-xl mx-auto pb-24 pt-[11rem]">
          <div className="inner-sec">
            <div
              className="banner size"
              style={{
                // backgroundImage: `url(${CostDevelopBanner.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className="container">
                <div className="row m-0">
                  <div className="col">
                    {/* <h1 className="text-[#151514] text-[60px] font-bold mb-10">
                  A complete guide for developing Crowdfunding App in 2022
                </h1> */}
                  </div>
                </div>
              </div>
            </div>
            {MobileAppsData.map(({ type, content, className }) => (
              <div className={className}>{getComponent(type, content)}</div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileApps;