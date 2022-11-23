import React, { useEffect } from "react";
import ReactGA from "react-ga";
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
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import MainServices from "../components/MainServices";
import Features from "../components/features/ThreeColSimple.js";
import Features1 from "../components/features/ThreeColWithSideImage.js";

const EnterpriseServicePageItemToDisplay = [
  {
    id: `1`,
    Imgurl: B2c,
    heading: `Custom Enterprise Softwares`,
    desc: `Back your business activities by digitizing and automating activities. We create custom software for businesses to meet their needs. Our well-versed industry experts are at your service to build the most functional Enterprise software solutions.Back your business activities by digitizing and automating activities. We create custom software for businesses to meet their needs. Our well-versed industry experts are at your service to build the most functional Enterprise software solutions.`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: B2b,
    heading: `Enterprise Mobility Services`,
    desc: `Our enterprise mobility solution achieves effective usage of mobile devices in the work environment. We provide P2P enterprise mobility solutions that can withhold a large number of users.`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: MultiVender,
    heading: `Data Management`,
    desc: `We create software that is a perfect platform for data aggregation, analytics and Intelligent automation for providing effective data management throughout its life cycle for corporate.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: CMS,
    heading: `Digital Transformation`,
    desc: `With Minimal IT risks, we help you transform your existing Enterprise software. The Transformation will be well-aligned with your business with edge-cutting technologies that can enhance the workforce for your business environment.`,
    textOnLeft: false,
  },
  {
    id: `5`,
    Imgurl: Migration,
    heading: `Software Integration`,
    desc: `Challenges involved in adapting new technology are well addressed at White Label. We learn the transition process and implement the best practices in integrating new software with the old system.`,
    textOnLeft: true,
  },
  {
    id: `6`,
    Imgurl: ApiIntegration,
    heading: `Modernizing Legacy Applications`,
    desc: `Without interrupting the business flow, we modernize existing technology with the latest software to create a powerful system. We assist in updating IT Stacks to achieve corporate goals. This includes platform migration,re-design and architecture and simplifying the business process with automation.`,
  },
];

const EnterpriseCards = [
  {
    imageSrc: Agile,
    title: "Agile Approach",
    description:
      " Our Agile Development method brings the best in less time helping our clients launch their eCommerce platforms in no time.",
  },
  {
    imageSrc: Platform,
    title: "Platform Independent",
    description:
      "All our eCommerce web solutions are made to adapt the  screen and features of all types of devices making them  usable on multiple platforms with consistency ",
  },
  {
    imageSrc: BestUi,
    title: "Best User Interface",
    description:
      "We deliver all our eCommerce solutions with top-notch UI/UX designs to assure the best user experience ",
  },
  {
    imageSrc: FeatureRich,
    title: "Feature-rich",
    description:
      "We never stop upgrading our feature support as we believe one factor for the best-performing website is evaluated by the feature it supports.",
  },
  {
    imageSrc: TechStack,
    title: "Best Technology Stacks",
    description:
      "As the tech stack is the foundation of any software, we make sure that we use only the best-suited technologystack for our eCommerce solutions. This helps us come up with the best architecture and layout for your eCommerce needs",
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

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-32 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                Enterprise Software
                <br /> Development
              </h1>
              <p className="my-4 text-base xl:text-lg">
                Agile solutions for your Enterprise Demands
              </p>
              <div className="mt-3 flex flex-col items-center lg:items-start">
                <p className="text-sm lg:text-md tracking-wider font-bold text-[#5b5b5b]">
                  Whiten App offers you the most reliable enterprise solutions
                  to streamline all business requirements and deliver the
                  perfect user experience.
                </p>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <EcommerceBanner />
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
              <span className="text-primary-500"> eCommerce Development?</span>
            </>
          }
          description=""
          cards={EnterpriseCards}
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

export default EnterpriseSoftwares;
