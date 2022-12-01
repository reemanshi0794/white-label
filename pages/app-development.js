import React, { useEffect } from "react"
import ReactGA from "react-ga"
// import AppBanner from '../assets/images/AppDevelopment/Appbanner.svg';
import MobileApp from "../assets/images/AppDevelopment/mobileapp1.png"
import Android from "../assets/images/AppDevelopment/icon/android.png"
import Apple from "../assets/images/AppDevelopment/icon/apple.png"
import ReactNative from "../assets/images/AppDevelopment/icon/reactNative.png"
import Flutter from "../assets/images/AppDevelopment/icon/Flutter.png"
import Xamarin from "../assets/images/AppDevelopment/icon/Xamarin.png"
import Ecommerce from "../assets/images/AppDevelopment/icon/ecommerce.svg"
import Education from "../assets/images/AppDevelopment/icon/education.svg"
import Travel from "../assets/images/AppDevelopment/icon/travel.svg"
import Fintech from "../assets/images/AppDevelopment/icon/fintech.svg"
import HealthCare from "../assets/images/AppDevelopment/icon/healthcare.svg"
import Fitness from "../assets/images/AppDevelopment/icon/fitness.svg"
import Business from "../assets/images/AppDevelopment/icon/business.png"
import Social from "../assets/images/AppDevelopment/icon/social.png"
import FoodBag from "../assets/images/AppDevelopment/icon/foodbag.png"
import WhiteLablePartner from "../assets/images/AppDevelopment/whitelable-partner.png"
import HireDevloper from "../assets/images/AppDevelopment/hireDev.png"
import Head from "next/head"
import Header from "../components/headers/light.js"
import BannerImage from "../assets/images/BannerImage.png"
import CustomersLogoStripImage from "../assets/images/Partnerslogo.svg"
import SvgDecoratorBlob1 from "../assets/images/svg-decorator-blob-1.svg"
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js"
import { SectionDescription } from "../components/misc/Typography.js"
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../components/misc/Headings.js"
import CustomizeIconImage from "../assets/images/customize-icon.svg"
import FastIconImage from "../assets/images/fast-icon.svg"
import ReliableIconImage from "../assets/images/reliable-icon.svg"
import ShieldIconImage from "../assets/images/shield-icon.svg"
import SimpleIconImage from "../assets/images/simple-icon.svg"
import SupportIconImage from "../assets/images/support-icon.svg"
import SvgDecoratorBlob3 from "../assets/images/svg-decorator-blob-3.svg"
import Footer from "../components/footers/FiveColumnWithBackground.js"
import LeadingMobileApp from "../assets/images/LeadingMobileApp.png"
import CustomMobileapps from "../assets/images/CustomMobileapps.png"
import AppPartners from "../assets/images/AppPartners.png"

// import Link from 'next/link';

const AppDevelopment = ({
  cards = null,
  heading = "Our Apps are what you need!",
  description = "We have delivered 100+ mobile applications for Android and iOS Platforms. For the past 10+ years, White Label has been engaged in developing and delivering the most exquisite mobile apps that have over 100k+ end users.",
  Subheading = "We are all ears for your brilliant app idea of yours.",
  text = "Developers all over the world are happily using Whiten App Solutions.",
  primaryLinkText = "Get Started",
  primaryLinkUrl = "/contact-us",
  secondaryLinkText = "Contact Us",
  secondaryLinkUrl = "/contact-us",
  pushDownFooter = true,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    ReactGA.pageview(window.location.pathname)
  }, [])

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "App Development",
      description:
        "An app for your Brand. We fix your business challenges by creating premium mobile apps for Android and iOS customers. ",
    },
    {
      imageSrc: SupportIconImage,
      title: "Enterprise Softwares",
      description:
        "We develop solutions that solve real problems that are beyond the capabilities of traditional ERP systems. Build feature rich CMS, CRM, POS, ERP, CDP with us.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Blockchain Development",
      description:
        "World-class companies enjoy the benefits of blockchain technology with us through Cryptocurrency, Smart-Contracts, crypto wallets, DeFi and enterprise Blockchain app development and more with the most efficient internal process.",
    },
    {
      imageSrc: ReliableIconImage,
      title: "eCommerce Development",
      description:
        "We back startups and young entrepreneurs with exclusive stores by increasing their brand loyalty and authenticity with custom build eCommerce Stores.",
    },
    {
      imageSrc: FastIconImage,
      title: "Web Development",
      description:
        "We build and shape beautiful websites for individuals and businesses to meet all their online business demands.",
    },
    {
      imageSrc: SimpleIconImage,
      title: "Metaverse Development",
      description:
        "The potential use cases of Metaverse are designed and developed at White Label to help our clients tap into endless opportunities of the new era internet with Blockchain, AI and AR/VR.",
    },
  ]
  if (!cards) cards = defaultCards

  return (
    <div>
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

      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <div className="relative mt-32 2xl:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto items-center">
            <div className="relative text-center lg:text-left">
              <h1 className="font-bold text-lg md:text-3xl 2xl:text-5xl leading-tight">
                Leading Mobile App
                <br /> Development Company
              </h1>
              <p className="my-4 text-sm md:text-base 2xl:text-lg lg:pr-[132px]">
                The potential an app withhold is our key to developing stunning
                mobile applications.
              </p>
            </div>
            <div className="relative mt-8 md:mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img
                  tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                  src={LeadingMobileApp.src}
                  alt="Design Illustration"
                />
              </div>
            </div>
          </div>
          <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3" />
        </div>

        <Container>
          <ContentWithPaddingXl className=" !pt-8 !pb-16 !2xl:py-24">
            {heading && (
              <SectionHeading className="!text-3xl !2xl:text-5xl">
                {heading}
              </SectionHeading>
            )}
            {description && (
              <SectionDescription className="text-center mx-auto">
                {description}
              </SectionDescription>
            )}
            {Subheading && (
              <h5 className="mb-4 font-bold text-primary-500 mt-[20px] text-center">
                {Subheading}
              </h5>
            )}
            <div className="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto">
              <div className="max-w-md text-center mx-auto lg:mx-0 flex justify-center lg:justify-start">
                <a
                  className="w-full bg-primary-500 text-gray-100 font-bold rounded-full p-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none  transition duration-300"
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </ContentWithPaddingXl>
          {/* <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40" /> */}
        </Container>

        <div className="relative mb-12 2xl:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-screen-xl mx-auto">
            <div className="relative text-center lg:text-left">
              <h1 className="font-bold text-lg md:text-3xl 2xl:text-5xl leading-tight">
                Custom Mobile apps
                <br /> Not Just for businesses
                {/* <span className="text-primary-500">for you.</span> */}
              </h1>
              <p className="my-4 text-sm md:text-base 2xl:text-lg px-0 md:px-20 lg:pl-0 lg:pr-16">
                People have the idea that apps are just for business. Let us
                stop you there. Mobile apps are meant for all domains. We just
                do not build apps for business, but for domains with a variety
                of purposes.
                <p>
                  We offer mobile app development services for brands, Diverse
                  organizations, individuals, startups, businesses and more. A
                  team of mobile app developers who are well-equipped with
                  futuristic technical skills works behind every app that leaves
                  our doors.
                </p>
                <p>
                  We ensure reliability, scalability and compactness in all the
                  apps that are developed at Whiten app Label.
                </p>
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img
                  tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                  src={CustomMobileapps.src}
                  alt="Design Illustration"
                />
              </div>
            </div>
          </div>
          <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3" />
        </div>

        <div className="relative ß mb-16">
          <h1 className="font-bold text-lg md:text-3xl 2xl:text-5xl leading-tight pt-0 md:pt-4 text-center">
            Industry-wise App development Solutions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 md:mt-12 px-4 2xl:px-[17rem] gap-8 xl:gap-16 ">
            {cards.map((card, i) => {
              const IconImage = card.imageSrc
              return (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left ">
                    <span className="border text-center rounded-full p-[13px] 2xl:p-5 flex-shrink-0">
                      <IconImage />
                    </span>
                    <span className="sm:ml-4 mt-4 sm:mt-2">
                      <span className="mt-4 tracking-wide font-bold text-base md:text-lg 2xl:text-2xl leading-none">
                        {card.title || "Fully Secure"}
                      </span>
                      <p className=" text-sm md:text-[15px] 2xl:text-lg mt-2 2xl:mt-4 font-medium text-secondary-100 leading-[26px] 2xl:leading-loose">
                        {card.description ||
                          "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                      </p>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48" />
        </div>

        <div className="relative mb-12 2xl:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-screen-xl mx-auto">
            <div className="relative text-center lg:text-left">
              <h1 className="font-bold text-lg md:text-3xl 2xl:text-5xl leading-tight">
                Whiten App Solutions as your mobile
                <br /> app development partners
                {/* <span className="text-primary-500">for you.</span> */}
              </h1>
              <p className="my-4 text-sm md:text-base 2xl:text-lg px-0 md:px-20 lg:pl-0 lg:pr-16">
                As the Leading Highperformace app developer, Whiten App has
                always been able to deliver the best app solutions for all our
                client’s requirements. Our pricing has always been a highlight.
                Prices are unmatched for our services, but this doesn’t mean we
                compromise in quality of our service. We just happen to be
                reasonable.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img
                  tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                  src={AppPartners.src}
                  alt="Design Illustration"
                />
              </div>
            </div>
          </div>
          <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AppDevelopment
