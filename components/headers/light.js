import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import LogoSVG from '../../assets/images/logo.svg';
import useWindowDimensions from '../../helpers/getWindowDimensions';
import Link from 'next/link';
import ChevronDown from '../../assets/images/down-arrow.png';
import Appdev from '../../assets/images/Appdev.svg';
import BlockChain from '../../assets/images/BlockChain.svg';
import EnterpriceSoftwares from '../../assets/images/EnterpriceSoftwares.svg';
import Ecommerce from '../../assets/images/Ecommerce.svg';
import Webdevelopment from '../../assets/images/Webdevelopment.svg';
import Design from '../../assets/images/Design.svg';
import QA from '../../assets/images/QA.svg';
import Nft from '../../assets/images/Nft.svg';
import GreenApp from '../../assets/images/GreenApp.svg';
import GreenBlockchain from '../../assets/images/GreenBlockchain.svg';
import GreenDesign from '../../assets/images/GreenDesign.svg';
import GreenEcommerce from '../../assets/images/GreenEcommerce.svg';
import GreenEnterprise from '../../assets/images/GreenEnterprise.svg';
import GreenNFT from '../../assets/images/GreenNFT.svg';
import GreenQA from '../../assets/images/GreenQA.svg';
import GreenWeb from '../../assets/images/GreenWeb.svg';
import { useRouter } from 'next/router';

const ServicesPages = [
  {
    greenImage: <GreenApp />,
    image: <Appdev />,
    title: 'App Development',
    link: '/app-development',
    alt: 'App Development',
  },
  {
    greenImage: <GreenEnterprise />,
    image: <EnterpriceSoftwares />,
    title: 'Enterprise Softwares',
    link: '/enterprise-softwares',
    alt: 'Enterprise Softwares',
  },
  {
    greenImage: <GreenEcommerce />,
    image: <Ecommerce />,
    title: 'eCommerce Development',
    link: '/eCommerce-development',
    alt: 'eCommerce Development',
  },
  {
    greenImage: <GreenWeb />,
    image: <Webdevelopment />,
    title: 'Web Development',
    link: '/web-development',
    alt: 'Web Development',
  },
  {
    greenImage: <GreenBlockchain />,
    image: <BlockChain />,
    title: 'Blockchain Services',
    link: '/blockchain-services',
    alt: 'Blockchain Services',
  },
  {
    greenImage: <GreenDesign />,
    image: <Design />,
    title: 'Design Services',
    link: '/design-services',
    alt: 'Design Services',
  },
  {
    greenImage: <GreenQA />,
    image: <QA />,
    title: 'Quality Assurance',
    link: '/quality-assurance',
    alt: 'Quality Assurance',
  },
  {
    greenImage: <GreenNFT />,
    image: <Nft />,
    title: 'NFT Marketplace Development',
    link: 'nft-marketplace-development',
    alt: 'NFT Marketplace Development',
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

  const router = useRouter();
  const defaultLogoLink = (
    <div className="my-2 lg:text-sm lg:my-0 tracking-wide transition duration-300 pb-1 border-transparent hover:border-primary-500 hocus:text-primary-500 flex items-center font-black border-b-0 xl:text-2xl ml-0!">
      <LogoSVG alt="logo" className="mr-3" />
    </div>
  );

  logoLink = logoLink || defaultLogoLink;

  const [isToggle, setIsToggle] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const hideServiceDropdown = () => {
    setOpenServices(false);
  };

  const handleShowDropdown = () => {
    setOpenServices(!openServices);
  };

  const showServiceDropdown = () => {
    setOpenServices(true);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const getServicesLink = () => {
    return ServicesPages.map((service) => service.link);
  };

  return (
    width !== 0 && (
      <>
        <Header
          className={className || 'header-light'}
          onMouseLeave={hideServiceDropdown}
        >
          <div
            className={
              width > 768
                ? 'flex flex-1 justify-between items-center max-w-screen-xl'
                : 'flex-1 justify-between items-center max-w-screen-xl'
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
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <div className="flex flex-col p-4 mt-4 font-semibold md:flex-row md:space-x-8 md:mt-0 text-lg lg:text-sm items-center">
                <a
                  href="/about-us"
                  className={
                    router.asPath === '/about-us'
                      ? 'text-lg my-2 text-black lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent border-primary-500 focus:text-primary-500'
                      : 'text-lg my-2 text-black  lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 focus:text-primary-500'
                  }
                  aria-current="page"
                  onMouseLeave={hideServiceDropdown}
                >
                  About
                </a>

                <div className="flex">
                  <a
                    href="/app-development"
                    onClick={handleShowDropdown}
                    onMouseEnter={showServiceDropdown}
                    className={
                      getServicesLink().includes(router.asPath)
                        ? 'text-lg my-2 lg:text-sm lg:mr-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent border-primary-500 focus:text-primary-500'
                        : 'text-lg my-2 lg:text-sm lg:mr-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500'
                    }
                  >
                    Services
                  </a>

                  {
                    <div
                      className={
                        openServices
                          ? 'show absolute w-full  top-[80%] max-w-[673px] text-sm grid grid-cols-2 gap-x-4 translate-x-[-17rem] bg-white p-[30px] shadow-[0_0_72px_0_rgba(0,0,0,11%)]'
                          : 'hidden'
                      }
                      onMouseLeave={hideServiceDropdown}
                    >
                      {ServicesPages.map((serviceItems, index) => {
                        const { image, title, link, alt, greenImage } =
                          serviceItems;
                        console.log();
                        return (
                          <div className="w-full">
                            <Link
                              legacyBehavior
                              style={{ textDecoration: 'none' }}
                              className=""
                              href={link}
                            >
                              <a
                                className="flex items-center mb-4 text-base font-medium"
                                onMouseEnter={() => setSelectedService(index)}
                                onMouseLeave={() => setSelectedService(null)}
                              >
                                {selectedService === index ? (
                                  <>
                                    <div className="pr-4">{image}</div>
                                    <div className="pr-4 text-primary-500">
                                      {title}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className=" pr-4">{greenImage}</div>
                                    {title}
                                  </>
                                )}
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  }
                </div>
                <a
                  href="/blog-post"
                  onMouseLeave={hideServiceDropdown}
                  className={
                    router.asPath === '/blog-post'
                      ? 'text-lg my-2 text-black lg:text-sm lg:mx-6 !mr-8 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent border-primary-500 focus:text-primary-500'
                      : 'text-lg my-2 text-black lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 focus:text-primary-500'
                  }
                >
                  Blog
                </a>
                <a
                  href="/portfolio"
                  className={
                    router.asPath === '/portfolio'
                      ? 'text-lg lg:text-sm my-2 lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 text-[#212529]pb-1 border-b-2 border-transparent border-primary-500 hocus:text-primary-500'
                      : 'text-lg lg:text-sm my-2 lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 text-[#212529]pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500'
                  }
                >
                  Portfolio
                </a>
                <a
                  href="/career"
                  onMouseLeave={hideServiceDropdown}
                  className={
                    router.asPath === '/career'
                      ? 'text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent border-primary-500 focus:text-primary-500'
                      : 'text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500'
                  }
                >
                  Careers
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
                <div className="flex flex-col p-4 font-semibold md:flex-row md:space-x-8 md:mt-0 text-lg lg:text-sm items-start bg-white text-black rounded-lg">
                  <a
                    href="/about-us"
                    className={
                      router.asPath === '/about-us'
                        ? 'text-lg my-2 text-black lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent border-primary-500 Focus:text-primary-500'
                        : 'text-lg my-2 text-black lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 Focus:text-primary-500'
                    }
                    aria-current="page"
                  >
                    About
                  </a>

                  <div className="flex flex-col items-start">
                    <div
                      onClick={handleShowDropdown}
                      className="flex items-center"
                    >
                      <a
                        className={
                          getServicesLink().includes(router.asPath)
                            ? 'text-lg lg:text-sm my-2 lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 text-[#212529]pb-1 border-b-2 border-transparent border-primary-500 hocus:text-primary-500'
                            : 'text-lg lg:text-sm my-2 lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 text-[#212529]pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500'
                        }
                      >
                        Services
                      </a>
                      <img
                        src={ChevronDown.src}
                        alt="ChevronDown"
                        className="w-[20px] ml-[6px]"
                      />
                    </div>
                    <div
                      className={
                        openServices
                          ? 'show w-full max-w-[585px] text-sm grid grid-cols-1 gap-4 bg-white p-4 shadow-[1px_4px_6px_2px_rgba(4,4,4,13%)]'
                          : 'hidden'
                      }
                    >
                      {ServicesPages.map((serviceItems) => {
                        const { image, title, link, alt } = serviceItems;
                        return (
                          <div className="w-full">
                            <Link
                              legacyBehavior
                              style={{ textDecoration: 'none' }}
                              className=""
                              href={link}
                            >
                              <a
                                onClick={hideServiceDropdown}
                                onMouseEnter={showServiceDropdown}
                                className="flex items-center"
                              >
                                {image}
                                <p className=" ml-[10px]">{title}</p>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <a
                    href="/blog-post"
                    className={
                      router.asPath === '/blog-post'
                        ? 'text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent border-primary-500 hocus:text-primary-500'
                        : 'text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500'
                    }
                  >
                    Blog
                  </a>

                  <a
                    href="/career"
                    className={
                      router.asPath === '/career'
                        ? 'text-lg lg:text-sm my-2 lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 text-[#212529]pb-1 border-b-2 border-transparent border-primary-500 hocus:text-primary-500'
                        : 'text-lg lg:text-sm my-2 lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 text-[#212529]pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500'
                    }
                  >
                    Careers
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
    )
  );
};
