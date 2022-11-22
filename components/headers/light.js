import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import LogoSVG from "../../assets/images/logo.svg";
import useWindowDimensions from "../../helpers/getWindowDimensions";

const servicesPages = [
  {
    image: "",
    title: "App Development",
    link: "/app-development",
  },
  {
    image: "",
    title: "Enterprise Softwares",
    link: "/enterprise-softwares",
  },
  {
    image: "",
    title: "eCommerce Development",
    link: "/eCommerce-development",
  },
  {
    image: "",
    title: "Web Development",
    link: "/web-development",
  },
  {
    image: "",
    title: "Blockchain Services",
    link: "/blockchain-services",
  },
  {
    image: "",
    title: "Design Services",
    link: "/design-services",
  },
  {
    image: "",
    title: "Quality Assurance",
    link: "/quality-assurance",
  },
  {
    image: "",
    title: "NFT Marketplace Development",
    link: "nft-marketplace-development",
  },
];
const Header = tw.header`
  flex justify-center items-center
  fixed bg-white top-0 w-full z-20 p-4 md:px-24 2xl:p-8 mx-auto w-full
`;

export default ({ logoLink, className }) => {
  const { width } = useWindowDimensions();
  useEffect(() => {
    width > 768 && setIsToggle(false);
  }, [width]);

  const defaultLogoLink = (
    <a
      className="my-2 lg:text-sm lg:my-0 tracking-wide transition duration-300 pb-1 border-transparent hover:border-primary-500 hocus:text-primary-500 flex items-center font-black border-b-0 xl:text-2xl ml-0!"
      href="/"
    >
      <LogoSVG alt="logo" className="mr-3" />
    </a>
  );

  logoLink = logoLink || defaultLogoLink;

  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Header className={className || "header-light"}>
        <div
          className={
            width > 768
              ? "flex flex-1 justify-between items-center max-w-screen-xl"
              : "flex-1 justify-between items-center max-w-screen-xl"
          }
        >
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              {logoLink}
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex flex-col p-4 mt-4 font-semibold md:flex-row md:space-x-8 md:mt-0 text-lg lg:text-sm items-center">
              <a
                href="/about-us"
                className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
                font-semibold tracking-wide transition duration-300
                pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500"
                aria-current="page"
              >
                About
              </a>

              <a
                href="/blog-post"
                className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
                font-semibold tracking-wide transition duration-300
                pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500"
              >
                Blog
              </a>

              <a
                href="/contact-us"
                className="lg:mx-0
                px-8 py-3 bg-primary-500 text-gray-100
                hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline
                border-b-0 rounded-full"
              >
                Contact Us
              </a>
            </div>
          </div>
          {isToggle && (
            <div>
              <div className="flex flex-col p-4 font-semibold md:flex-row md:space-x-8 md:mt-0 text-lg lg:text-sm items-center bg-white text-black rounded-lg">
                <a
                  href="/about-us"
                  className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
                font-semibold tracking-wide transition duration-300
                pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500"
                  aria-current="page"
                >
                  About
                </a>

                <a
                  href="/blog-post"
                  className="text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
                font-semibold tracking-wide transition duration-300
                pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500"
                >
                  Blog
                </a>
                <a
                  href="/contact-us"
                  className="lg:mx-0
                px-8 py-3 bg-primary-500 text-gray-100
                hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline
                border-b-0 rounded-full"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </Header>
    </>
  );
};
