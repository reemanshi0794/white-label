import React, { useEffect } from "react";
import ReactGA from "react-ga";
// import { EcommerceServicePageItemToDisplay } from "../data/data";
import EcommerceBanner from "../assets/images/EcommerceDev/Ecommerce-banner.svg";
import Agile from "../assets/images/EcommerceDev/icons/AgileApproach.png";
import Platform from "../assets/images/EcommerceDev/icons/platformIndep.png";
import BestUi from "../assets/images/EcommerceDev/icons/bestUi.png";
import FeatureRich from "../assets/images/EcommerceDev/icons/featureRich.png";
import TechStack from "../assets/images/EcommerceDev/icons/besttechstack.png";
import B2b from "../assets/images/EcommerceDev/b2b.png";
import B2c from "../assets/images/EcommerceDev/b2c.svg";
import MultiVender from "../assets/images/EcommerceDev/multivender.png";
import CMS from "../assets/images/EcommerceDev/cmsintegration.png";
import Migration from "../assets/images/EcommerceDev/migrationsupport.png";
import ApiIntegration from "../assets/images/EcommerceDev/apiIntegration.png";
import Head from "next/head";
import Header from "../components/headers/light.js";

// import Link from "next/link";

const EcommerceServicePageItemToDisplay = [
  {
    id: `1`,
    Imgurl: B2c,
    heading: `B2C eCommerce Platforms`,
    desc: `Power up your online store with our feature-rich and high-performance eCommerce websites and Apps. We aim for customer retention for you to hit 4X sales. For Smooth navigation throughout we provide OTP/ Social Logins, multilingual and multiple payment integrations.`,
  },
  {
    id: `2`,
    Imgurl: B2b,
    heading: `B2B Marketplace`,
    desc: `Reach out to potential business partners and customers with our B2B Marketplace. We build the most reliable and sustainable B2B Marketplaces where you can easily showcase and trade your products for global clients.`,
  },
  {
    id: `3`,
    Imgurl: MultiVender,
    heading: `Multi-Vender Platforms`,
    desc: `Build your eCommerce empire with multiple vendors. Create the perfect platform for small to big businesses to sell their product in a single platform. We assure security and user-friendliness despite the size of the platform.`,
  },
  {
    id: `4`,
    Imgurl: CMS,
    heading: `CMS Integration`,
    desc: `We help integrate the worlds leading eCommerce CMS to enhance your online store. We provide integration support for Shopify, WooCommerce, BigCommerce, Magento, Prestashop, OpenCart, and osCommerce to take your store to the next level.`,
  },
  {
    id: `5`,
    Imgurl: Migration,
    heading: `Migration and Support`,
    desc: `Supporting businesses to scale and upgrade their eCommerce platforms to much-enhanced features and functionality. Advanced edge-cutting technologies are used to meet the demands and standards of the eCommerce industry.`,
  },
  {
    id: `6`,
    Imgurl: ApiIntegration,
    heading: `API Integration`,
    desc: `Feature-packed eCommerce solutions are always sustainable. We integrate top-most APIs including Google Analytics and PayPal. FedEx and more to support our client's best interests.`,
  },
];

const EcommerceDev = () => {
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
      <div className="EcommerceDev">
        <div className="Dev EnterpriseDev">
          <div className="heroBanner">
            <div className="col-lg-10 col-md-11 mx-auto">
              <div className="row heroBannerInner">
                <div className="col-lg-6">
                  <div className="cnt">
                    <h1>eCommerce Development Service</h1>
                    <p className="me-0">
                      Developing global-level eCommerce Stores for future
                    </p>
                    <h5>
                      Whitelabel is a leading eCommerce development company
                      offering eCommerce web and mobile development solutions.
                      Leveraging handpicked tools and platforms we create
                      eCommerce solutions from the ground up.
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image">
                    <img
                      src={EcommerceBanner.src}
                      alt="EnterpriseBanner"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* EnterpriseSoftSolution  */}
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="mainHeading">
              <h2>eCommerce Development Solutions we offer</h2>
              <p>
                Hundreds of blooming businesses have kickstarted their eCommerce
                business with Whitelabel. We provide eCommerce solutions beyond
                B2C websites. Our fully packed eCommerce solution is just what
                you need to succeed in the eCommerce Arena.
              </p>
              {/* <Link
              style={{ textDecoration: "none" }}
              className="nav-link"
              href="/contact-us"
            >
              <a
                href="/"
                className="btn-custom text-decoration-none mx-auto btn-size"
              >
                Contact Us
              </a>
            </Link> */}
            </div>
          </div>
          {/* ltorSec */}
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="mainltorsec">
              {EcommerceServicePageItemToDisplay.map((element) => {
                return (
                  <div className="row serviceWrap" key={element.id}>
                    <div className="col-lg-6">
                      <div className="serviceImg">
                        <img
                          src={element.Imgurl.src}
                          alt="WebDev"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="serviceCnt">
                        <h4>{element.heading}</h4>
                        <p>{element.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* whitelabelEcommerce  */}
          <section className="whiteLabel-ecommerce">
            <div className="col-lg-10 col-md-11 mx-auto">
              <div className="top">
                <h3>
                  What makes Whitelabel the best in eCommerce Development?
                </h3>
              </div>
              <div className="row m-0">
                {/* 1 */}
                <div className="col-md-6">
                  <div className="cnt">
                    <img src={Agile.src} alt="Agile" />
                    <h5>Agile Approach</h5>
                    <p>
                      Our Agile Development method brings the best in less time
                      helping our clients launch their eCommerce platforms in no
                      time.
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-md-6">
                  <div className="cnt ms-auto">
                    <img src={Platform.src} alt="Platform" />
                    <h5>Platform Independent</h5>
                    <p>
                      All our eCommerce web solutions are made to adapt the
                      screen and features of all types of devices making them
                      usable on multiple platforms with consistency.
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-6">
                  <div className="cnt">
                    <img src={BestUi.src} alt="BestUi" />
                    <h5>Best User Interface</h5>
                    <p>
                      We deliver all our eCommerce solutions with top-notch
                      UI/UX designs to assure the best user experience.
                    </p>
                  </div>
                </div>
                {/* 4 */}
                <div className="col-md-6">
                  <div className="cnt ms-auto">
                    <img src={FeatureRich.src} alt="FeatureRich" />
                    <h5>Feature-rich</h5>
                    <p>
                      We never stop upgrading our feature support as we believe
                      one factor for the best-performing website is evaluated by
                      the feature it supports.
                    </p>
                  </div>
                </div>
                {/* 5 */}
                <div className="col-md-6">
                  <div className="cnt">
                    <img src={TechStack.src} alt="TechStack" />
                    <h5>Best Technology Stacks</h5>
                    <p>
                      As the tech stack is the foundation of any software, we
                      make sure that we use only the best-suited technology
                      stack for our eCommerce solutions. This helps us come up
                      with the best architecture and layout for your eCommerce
                      needs.
                    </p>
                  </div>
                </div>
                {/* end  */}
              </div>
            </div>
          </section>
          {/* well-know  */}
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
                      We have been Serving the eCommerce Domain for a long time.
                      This has exposed us to challenges that have led us to
                      mould into the best eCommerce Developers.
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
                      Time is money, For us and as well as for our customers. We
                      get things are done within the estimated time that was
                      handed over to our clients at the beginning of the
                      project.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cnt infoCard darkorange">
                    <h4>Post delivery support and Maintenance</h4>
                    <p>
                      We know the game begins when the store is up and running.
                      To assure smooth running and scaling we provide 24/7
                      support and extended maintenance service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDev;
