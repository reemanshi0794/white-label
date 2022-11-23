import React, { useEffect } from "react";
import ReactGA from "react-ga";
import QualityBanner from "../assets/images/QualityAssurance/qualityBanner.svg";
// import { QualityAppPageItemToDisplay } from "../src/data/data";
import Head from "next/head";
import Header from "../components/headers/light.js";
// import Link from "next/link";
import WebAppTestingImg from "../assets/images/QualityAssurance/webAppTesting.png";
import MobileAppTestingImg from "../assets/images/QualityAssurance/mobileAppTesting.png";
import GameTestingImg from "../assets/images/QualityAssurance/gameTesting.png";
import DesktopTestingImg from "../assets/images/QualityAssurance/desktopTesting.png";
import CloudTestingImg from "../assets/images/QualityAssurance/cloudTesting.png";
import Features from "../components/features/ThreeColSimple.js";
import MainServices from "../components/MainServices";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

const QualityAppPageItemToDisplay = [
  {
    id: `1`,
    Imgurl: WebAppTestingImg,
    heading: `Web App Testing`,
    desc: `We have adopted top web app testing methods and tools to Deliver the highest quality web apps. Deep and intelligent web scanning is done to provide complete coverage and Zero false positives.`,
    textOnLeft: true,

    testingType1: `Functional & Security Testing`,
    testingType2: `Browser Compatibility Testing`,
    testingType3: `Performance & Usability Testing`,
  },
  {
    id: `2`,
    Imgurl: MobileAppTestingImg,
    heading: `Mobile App Testing`,
    desc: `Improve the user experience for your mobile application with our 7-step testing including interruption and memory leak testing. We have written over 400 test cases and have developed a test automation framework. Our highlighted mobile app testing services include`,
    textOnLeft: false,

    testingType1: `Regression Testing`,
    testingType2: `Exploratory Testing`,
    testingType3: `Interruption Testing`,
  },
  {
    id: `3`,
    Imgurl: GameTestingImg,
    heading: `Game Testing Service`,
    desc: `Arm your games with proper testing. An adequately functioning game is critical for its persistence. Our Experience in developing and testing numerous games has helped us gain relevant skillsets in game testing`,
    textOnLeft: true,

    testingType1: `Game Play Testing ( Online & Network Testing)`,
    testingType2: `Mobile and Platform Testing ( Experience Testing)`,
    testingType3: `Multi-Platform Testing ( Compatibility Testing)`,
  },

  {
    id: `4`,
    Imgurl: DesktopTestingImg,
    heading: `Desktop App Testing`,
    desc: `To provide Impeccable quality software we offer full-cycle software testing for your desktop apps ensuring security, performance and speed. We target GUI testing and validate business logic by prioritizing test activities by classifying them into high-risk modules, customer complaint-prone segments and more.`,
    textOnLeft: false,

    testingType1: `System Integration testing`,
    testingType2: `Migration testing & Installation, Deployment testing`,
    testingType3: `Interoperability Testing`,
  },

  {
    id: `5`,
    Imgurl: CloudTestingImg,
    heading: `Cloud Solution Testing`,
    desc: `To ensure cloud scalability and system flexibility we provide the most appropriate cloud solution testing as a whole and assess internal features as well. Our Cloud Solution testing provides better risk management and automated and insightful analytics with increased performance.`,
    textOnLeft: true,

    testingType1: `System testing`,
    testingType2: `User acceptance testing`,
    testingType3: `Interoperability testing`,
  },
];

const QualityAssurance = () => {
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

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-32 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                QA Solutions &
                <br /> Software Testing
              </h1>
              <p className="my-4 text-base xl:text-lg">
                Deliver Quality assured Software with our 100% test coverage.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <QualityBanner />
              </div>
            </div>
          </div>
        </div>

        {/* <Features
          heading="Providing unparalleled QA Solutions"
          description="Deploying software in the fittest of its form takes a lot of
          procedures. We at White Label have breakdown them into a small and
          efficient Testing process to ensure time-saving and error-free
          software solutions."
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
        </div> */}

        <Features
          heading="Our Software Quality Assurance services are further classified
          as"
          description=""
          linkText=""
          cards={[]}
        />

        <div className="flex">
          <div className="col-lg-6">
            <div className="cnt mb-4 mb-lg-0">
              <h4>Software Testing Services</h4>
              <p>
                A multitude of Software Testing methods is implemented to
                enhance the quality and performance of the software. The steps
                comprise Unit testing to complete regression testing for
                accelerating the software quality.
              </p>
            </div>
          </div>
          <div className="cnt">
            <h4>QA Automation</h4>
            <p>
              To back your Business Objectives Whitelabel’s test Automation
              service brings you strategy alignment. Our Automation Methodology
              is well regulated to Agile and DevOps domain enhancing the
              software development cycle
            </p>
          </div>
        </div>

        <Features
          heading="Our Top-notch Quality Assurance services"
          description="We implement the most effective and zero-error software testing
          to ensure the apps and software that walk out of our door are at
          their prime. We combine Both Manual and automated testing to
          provide the best quality assurance service."
          linkText=""
          cards={[]}
        />

        {QualityAppPageItemToDisplay.map((element) => {
          return (
            <MainServices
              heading={element.heading}
              imageSrc={element.Imgurl.src}
              description={element.desc}
              textOnLeft={element.textOnLeft}
            />
          );
        })}

        <Features
          heading="Providing unparalleled QA Solutions"
          description="Deploying software in the fittest of its form takes a lot of
          procedures. We at White Label have breakdown them into a small and
          efficient Testing process to ensure time-saving and error-free
          software solutions."
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
        {/* <Features
          heading="Our QA and Software Testing Solutions"
          description=""
          linkText=""
          cards={[]}
        /> */}
        {/* <div>
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="row m-0">
              <div className="col-md-6">
                <div className="cnt">
                  <h4>QA Outsourcing</h4>
                  <p>
                    White Label accepts QA service requests and provides
                    multiple services. Our solutions include designing a QA
                    strategy and a test plan. Followed by ROI Calculation and
                    creating a set of test activities for the development life
                    cycle. We produce frequent test reports on the performance
                    to guarantee the best Quality Assurance service.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cnt">
                  <h4>QA Consulting</h4>
                  <p>
                    To overcome the challenges and achieve the best QA
                    efficiency we offer QA audit and process setup. We also
                    provide test consulting for test automation and software
                    testing and recommend the most suited testing activities to
                    achieve a well-equipped QA team. constraints, and achieve
                    higher QA maturity and efficiency by providing the following
                    services.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cnt">
                  <h4>Managed Testing Solution</h4>
                  <p>
                    For complex software, we provide managed testing services by
                    consolidating all test activities, and licenses so it
                    becomes easier to keep track. This leads to cost-cutting and
                    provides flexibility. Our Managed Testing services run under
                    an advanced Test ecosystem which helps reduce delivery time.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cnt">
                  <h4>One Time Testing</h4>
                  <p>
                    As some software requires only a single round of testing we
                    provide one-time testing services including functional,
                    localization , reliability, usability, compatibility and
                    performance testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default QualityAssurance;
