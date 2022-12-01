import React, { useEffect } from "react"
import ReactGA from "react-ga"
import QualityBanner from "../assets/images/QualityBanner.png"
// import { QualityAppPageItemToDisplay } from "../src/data/data";
import Head from "next/head"
import Header from "../components/headers/light.js"
// import Link from "next/link";
import WebAppTestingImg from "../assets/images/WebAppTestingImg.png"
import MobileAppTestingImg from "../assets/images/MobileAppTestingImg.png"
import GameTestingImg from "../assets/images/GameTestingImg.png"
import DesktopTestingImg from "../assets/images/DesktopTestingImg.png"
import CloudTestingImg from "../assets/images/CloudTestingImg.png"
import Features from "../components/features/ThreeColSimple.js"
import MainServices from "../components/MainServices"
import Footer from "../components/footers/FiveColumnWithInputForm.js"

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
]

const QualityAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <>
      <Header />

      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <Head>
          <title>
            Software Quality Assurance | Web & Mobile Testing Specialist |
            Whiten App Solutions
          </title>
          <meta
            name="description"
            content="We offer premium Software Quality Assurance. Get Website, Mobile apps, Performance, Functional & API QA testing at a competitive price. Contact us for services."
          />
          <meta
            name="keyword"
            content="quality software assurance,quality assurance testing, mobile app quality assurance, web quality assurance"
          />
        </Head>

        <div className="relative mt-32 2xl:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto items-center">
            <div className="relative text-center lg:text-left">
              <h1 className="font-extrabold text-[22px] md:text-3xl 2xl:text-5xl leading-tight">
                QA Solutions &
                <br /> Software Testing
              </h1>
              <p className="my-4 text-sm md:text-base 2xl:text-lg lg:pr-[132px] font-medium leading-relaxed text-secondary-100">
                Deliver Quality assured Software with our 100% test coverage.
              </p>
            </div>
            <div className="relative mt-8 md:mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img src={QualityBanner.src} alt="QualityBanner" />
              </div>
            </div>
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
          )
        })}
        <div>
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
        </div>
      </div>
      <Footer />
    </>
  )
}

export default QualityAssurance
