import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import EnterpriseBanner from '../assets/images/EnterpriseBanner.png';
import AgileFill from '../assets/images/AgileFill.png';
import Platform from '../assets/images/Platform.png';
import BestUi from '../assets/images/BestUi.png';
import FeatureRich from '../assets/images/FeatureRich.png';
import TechStack from '../assets/images/TechStack.png';
import B2bEnterprise from '../assets/images/B2bEnterprise.png';
import B2cEnterprise from '../assets/images/B2cEnterprise.png';
import MultiVenderEnterprise from '../assets/images/MultiVenderEnterprise.png';
import CMSEnterprise from '../assets/images/CMSEnterprise.png';
import MigrationEnterprise from '../assets/images/MigrationEnterprise.png';
import ApiIntegrationEnterprise from '../assets/images/ApiIntegrationEnterprise.png';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import MainServices from '../components/MainServices';
import Features from '../components/features/ThreeColSimple.js';
import Features1 from '../components/features/ThreeColWithSideImage.js';

const EnterpriseServicePageItemToDisplay = [
  {
    id: `1`,
    Imgurl: B2cEnterprise,
    heading: `Custom Enterprise Softwares`,
    desc: `Back your business activities by digitizing and automating activities. We create custom software for businesses to meet their needs. Our well-versed industry experts are at your service to build the most functional Enterprise software solutions.Back your business activities by digitizing and automating activities. We create custom software for businesses to meet their needs. Our well-versed industry experts are at your service to build the most functional Enterprise software solutions.`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: B2bEnterprise,
    heading: `Enterprise Mobility Services`,
    desc: `Our enterprise mobility solution achieves effective usage of mobile devices in the work environment. We provide P2P enterprise mobility solutions that can withhold a large number of users.`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: MultiVenderEnterprise,
    heading: `Data Management`,
    desc: `We create software that is a perfect platform for data aggregation, analytics and Intelligent automation for providing effective data management throughout its life cycle for corporate.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: CMSEnterprise,
    heading: `Digital Transformation`,
    desc: `With Minimal IT risks, we help you transform your existing Enterprise software. The Transformation will be well-aligned with your business with edge-cutting technologies that can enhance the workforce for your business environment.`,
    textOnLeft: false,
  },
  {
    id: `5`,
    Imgurl: MigrationEnterprise,
    heading: `Software Integration`,
    desc: `Challenges involved in adapting new technology are well addressed at White Label. We learn the transition process and implement the best practices in integrating new software with the old system.`,
    textOnLeft: true,
  },
  {
    id: `6`,
    Imgurl: ApiIntegrationEnterprise,
    heading: `Modernizing Legacy Applications`,
    desc: `Without interrupting the business flow, we modernize existing technology with the latest software to create a powerful system. We assist in updating IT Stacks to achieve corporate goals. This includes platform migration,re-design and architecture and simplifying the business process with automation.`,
  },
];

const EnterpriseCards = [
  {
    imageSrc: AgileFill,
    title: 'Agile Approach',
    description:
      ' Our Agile Development method brings the best in less time helping our clients launch their eCommerce platforms in no time.',
  },
  {
    imageSrc: Platform,
    title: 'Platform Independent',
    description:
      'All our eCommerce web solutions are made to adapt the  screen and features of all types of devices making them  usable on multiple platforms with consistency. ',
  },
  {
    imageSrc: BestUi,
    title: 'Best User Interface',
    description:
      'We deliver all our eCommerce solutions with top-notch UI/UX designs to assure the best user experience. ',
  },
  {
    imageSrc: FeatureRich,
    title: 'Feature-rich',
    description:
      'We never stop upgrading our feature support as we believe one factor for the best-performing website is evaluated by the feature it supports.',
  },
  {
    imageSrc: TechStack,
    title: 'Best Technology Stacks',
    description:
      'As the tech stack is the foundation of any software, we make sure that we use only the best-suited technologystack for our eCommerce solutions. This helps us come up with the best architecture and layout for your eCommerce needs.',
  },
];

const EnterpriseSoftwares = () => {
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
            Enterprise Software Development Services | Whiten App Solutions
          </title>
          <meta
            name="description"
            content="We offer you the most reliable Enterprise Software Development Services to streamline all business requirements and deliver the perfect user experience."
          />
          <meta
            name="keyword"
            content="Enterprise Software Development Service, Software Developers"
          />
        </Head>

        <div className="relative mt-32 2xl:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto items-center">
            <div className="relative text-center lg:text-left">
              <h1 className="font-extrabold text-[22px] md:text-3xl 2xl:text-5xl leading-tight">
                Enterprise Software
                <br /> Development
              </h1>
              <p className="my-4 text-base xl:text-lg">
                Agile solutions for your Enterprise Demands
              </p>
              <p className="my-4 text-sm md:text-base 2xl:text-lg px-0 md:px-20 lg:pl-0 lg:pr-16 font-medium leading-relaxed text-secondary-100">
                Whiten App offers you the most reliable enterprise solutions to
                streamline all business requirements and deliver the perfect
                user experience.
              </p>
            </div>
            <div className="relative mt-8 md:mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img src={EnterpriseBanner.src} alt="EnterpriseBanner image" />
              </div>
            </div>
          </div>
        </div>

        <Features
          heading="Whiten App Enterprise software solutions"
          description="The need to build an enterprise solution varies with the company. To meet the demands of all sized firms we have categorised enterprise solutions into the following categories."
          linkText=""
          cards={[]}
        />
        <div className="flex items-center justify-center">
          <a
            href="/contact-us"
            className="lg:mx-0 px-8 py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
          >
            Contact Us
          </a>
        </div>
        {EnterpriseServicePageItemToDisplay.map((element) => {
          return (
            <MainServices
              heading={element.heading}
              imageSrc={element.Imgurl.src}
              description={element.desc}
              textOnLeft={element.textOnLeft}
            />
          );
        })}

        <Features1
          subheading={
            <span className="uppercase tracking-wider text-sm"></span>
          }
          heading={
            <>
              What makes Whiten App the best in
              <h6 className="text-primary-500"> eCommerce Development?</h6>
            </>
          }
          description=""
          cards={EnterpriseCards}
          isEcommerse={true}
        />
      </div>
      <Footer />
    </>
  );
};

export default EnterpriseSoftwares;
