import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Heading from '../components/blog/Heading';
import Description from '../components/blog/Description';
import Image from '../components/blog/Image';
import { MobileAppsData } from '../helpers/utils';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import SubsubHeading from '../components/blog/SubsubHeading';
import Subheading from '../components/blog/Subheading';
import List from '../components/blog/List';
import BulletList from '../components/blog/BulletList';

const MobileApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  const Components = {
    List,
    Description,
    Image,
    Heading,
    SubsubHeading,
    Subheading,
    BulletList,
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
      <div className="relative">
        <div className="pt-40">
          <div className="max-w-screen-xl mx-auto px-8 md:px-24 2xl:px-0">
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
