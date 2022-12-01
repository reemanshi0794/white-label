import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import EcommerceBanner from '../assets/images/EcommerceBanner.png';
import AgileFill from '../assets/images/AgileFill.png';
import Platform from '../assets/images/Platform.png';
import BestUi from '../assets/images/BestUi.png';
import FeatureRich from '../assets/images/FeatureRich.png';
import TechStack from '../assets/images/TechStack.png';
import B2b from '../assets/images/B2b.png';
import B2c from '../assets/images/B2c.png';
import MultiVender from '../assets/images/MultiVender.png';
import CMS from '../assets/images/CMS.png';
import Migration from '../assets/images/Migration.png';
import ApiIntegration from '../assets/images/ApiIntegration.png';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import MainServices from '../components/MainServices';
import Features from '../components/features/ThreeColSimple.js';
import Features1 from '../components/features/ThreeColWithSideImage.js';

const EcommerceServicePageItemToDisplay = [
  {
    id: `1`,
    Imgurl: B2c,
    heading: `B2C eCommerce Platforms`,
    desc: `Power up your online store with our feature-rich and high-performance eCommerce websites and Apps. We aim for customer retention for you to hit 4X sales. For Smooth navigation throughout we provide OTP/ Social Logins, multilingual and multiple payment integrations.`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: B2b,
    heading: `B2B Marketplace`,
    desc: `Reach out to potential business partners and customers with our B2B Marketplace. We build the most reliable and sustainable B2B Marketplaces where you can easily showcase and trade your products for global clients.`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: MultiVender,
    heading: `Multi-Vender Platforms`,
    desc: `Build your eCommerce empire with multiple vendors. Create the perfect platform for small to big businesses to sell their product in a single platform. We assure security and user-friendliness despite the size of the platform.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: CMS,
    heading: `CMS Integration`,
    desc: `We help integrate the worlds leading eCommerce CMS to enhance your online store. We provide integration support for Shopify, WooCommerce, BigCommerce, Magento, Prestashop, OpenCart, and osCommerce to take your store to the next level.`,
    textOnLeft: false,
  },
  {
    id: `5`,
    Imgurl: Migration,
    heading: `Migration and Support`,
    desc: `Supporting businesses to scale and upgrade their eCommerce platforms to much-enhanced features and functionality. Advanced edge-cutting technologies are used to meet the demands and standards of the eCommerce industry.`,
    textOnLeft: true,
  },
  {
    id: `6`,
    Imgurl: ApiIntegration,
    heading: `API Integration`,
    desc: `Feature-packed eCommerce solutions are always sustainable. We integrate top-most APIs including Google Analytics and PayPal. FedEx and more to support our client's best interests.`,
  },
];

const EcommerseCards = [
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
      'All our eCommerce web solutions are made to adapt the  screen and features of all types of devices making them  usable on multiple platforms with consistency ',
  },
  {
    imageSrc: BestUi,
    title: 'Best User Interface',
    description:
      'We deliver all our eCommerce solutions with top-notch UI/UX designs to assure the best user experience ',
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
      'As the tech stack is the foundation of any software, we make sure that we use only the best-suited technologystack for our eCommerce solutions. This helps us come up with the best architecture and layout for your eCommerce needs',
  },
];

const EcommerceDev = () => {
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
            Software Development Company | Custom App Developer | Whiten App
            Solutions
          </title>
          <meta
            name="description"
            content="Create Ecommerce Websites and Apps that drive sales. Our best eCommerce developers work together to ensure the websites are built to boost conversion rates."
          />
          <meta
            name="keyword"
            content="Ecommerce website developer, Ecommerce App Development, ecommerce development services."
          />
        </Head>

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-32 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                eCommerce
                <br /> Development Service
              </h1>
              <p className="my-4 text-base xl:text-lg">
                Developing global-level eCommerce Stores for future
              </p>
              <div className="mt-3 flex flex-col items-center lg:items-start">
                <p className="text-sm lg:text-md tracking-wider font-bold text-[#5b5b5b]">
                  Whiten App is a leading eCommerce development company offering
                  eCommerce web and mobile development solutions. Leveraging
                  handpicked tools and platforms we create eCommerce solutions
                  from the ground up.
                </p>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img src={EcommerceBanner.src} alt="EcommerceBanner image" />
              </div>
            </div>
          </div>
        </div>

        <Features
          heading="eCommerce Development Solutions we offer"
          description="Hundreds of blooming businesses have kickstarted their eCommerce
          business with Whitelabel. We provide eCommerce solutions beyond B2C
          websites. Our fully packed eCommerce solution is just what you need
          to succeed in the eCommerce Arena."
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

        {EcommerceServicePageItemToDisplay.map((element) => {
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
              <span className="text-primary-500"> eCommerce Development?</span>
            </>
          }
          description=""
          cards={EcommerseCards}
          isEcommerse={true}
        />

        {/* <div className="EcommerceDev">
          <div className="Dev EnterpriseDev">
            <section className="well-know">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="row infoCards m-0">
                  <div className="top">
                    <h3>We are well-known for…</h3>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard darkorange">
                      <h4>Domain experts</h4>
                      <p>
                        We have been Serving the eCommerce Domain for a long
                        time. This has exposed us to challenges that have led us
                        to mould into the best eCommerce Developers.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard golden">
                      <h4>Agile Work Flow</h4>
                      <p>
                        From prototype building to delivery of the product, we
                        follow an agile methodology that served us with superior
                        quality, control, satisfaction and reduced risk.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard golden ">
                      <h4>Timely delivery</h4>
                      <p>
                        Time is money, For us and as well as for our customers.
                        We get things are done within the estimated time that
                        was handed over to our clients at the beginning of the
                        project.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard darkorange">
                      <h4>Post delivery support and Maintenance</h4>
                      <p>
                        We know the game begins when the store is up and
                        running. To assure smooth running and scaling we provide
                        24/7 support and extended maintenance service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default EcommerceDev;
