import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import WebdevBanner from '../assets/images/WebdevBanner.png';
import Head from 'next/head';

import WebDevImg from '../assets/images/WebDevImg.png';
import ECommerceDevImg from '../assets/images/ECommerceDevImg.png';
import ProgressiveWebImg from '../assets/images/ProgressiveWebImg.png';
import EnterpriseWebImg from '../assets/images/EnterpriseWebImg.png';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import MainServices from '../components/MainServices';
import Features from '../components/features/ThreeColSimple.js';
import Features1 from '../components/features/ThreeColWithSideImage.js';

const WebAppPageItemToDisplay = [
  {
    id: `1`,
    Imgurl: WebDevImg,
    heading: `Website Development`,
    desc: `We make websites that guarantee conversion. When Build with the most attractive UI and enhanced features for your website, it becomes irresistible to leave your web page.`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: ECommerceDevImg,
    heading: `eCommerce Website Development`,
    desc: `Top performing eCommerce platforms are leveraged to create stunning stores with easy navigation and a shopping experience.`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: ProgressiveWebImg,
    heading: `Progressive Web App Development`,
    desc: `We create High Performace PWA that runs seamlessly over all screens by delivering a native app-like experience for companies and startups that look forward to kickstarting their online presence.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: EnterpriseWebImg,
    heading: `Enterprise Web Development`,
    desc: `A non-compromised Stellar website is one of the many best features of top companies. Our team of designers and developers sit with you for a brainstorming session to build the best version of your site from scratch.`,
    textOnLeft: false,
  },
];
const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <Head>
          <title>
            Custom Web Developers | Website Design Company | Whiten App
            Technologies
          </title>
          <meta
            name="description"
            content="Looking for a best Custom Web Development & Design Company? Contact us; our experience web developers create unique website design as your requirement."
          />
          <meta
            name="keyword"
            content="web development company website developers website development services, custom web design"
          />
        </Head>

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-32 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                Web Application
                <br /> Development Company
              </h1>
              <p className="my-4 text-base xl:text-lg">
                Delivering the most exquisite Web development services by
                coupling skills with top-notch technology.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img src={WebdevBanner.src} alt="WebdevBanner image" />
              </div>
            </div>
          </div>
        </div>

        <Features
          heading="Web Development services we Provide"
          description="A Website is the first impression that a business makes online.
          And business who value brand, wouldn’t want to mess it up. For
          driving in optimal results we create websites that work best for
          your users and Google, driving in more traffic that are our
          customer’s potential business leads"
          linkText=""
          cards={[]}
        />
        {/* <div className="flex items-center justify-center">
          <a
            href="/contact-us"
            className="lg:mx-0 px-8 py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
          >
            Contact Us
          </a>
        </div> */}

        {WebAppPageItemToDisplay.map((element) => {
          return (
            <MainServices
              heading={element.heading}
              imageSrc={element.Imgurl.src}
              description={element.desc}
              textOnLeft={element.textOnLeft}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
