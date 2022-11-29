import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { NFTMarketplace } from "../helpers/utils";
import Title from "../components/blog/Title";
import Description from "../components/blog/Description";
import Image from "../components/blog/Image";
import Head from "next/head";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
const NftMarketplace = () => {
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
    <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
      <Head>
        <title>
          Software Development Company | Custom App Developer | Whiten App
          Solutions
        </title>
        <meta
          name="description"
          content="Looking for a best Custom app Development & Design Company? Contact us; our experience app developers create unique app design as your requirement."
        />
        <meta
          name="keyword"
          content="mobile app development company,app development,app developers,mobile application development services"
        />
      </Head>
      <Header />
      <div className="inner-sec">
        <div
          className="banner size"
          style={{
            // backgroundImage: `url(${CostDevelopBanner.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
        {NFTMarketplace.map(({ type, content, className }) => (
          <div className={className}>{getComponent(type, content)}</div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NftMarketplace;
