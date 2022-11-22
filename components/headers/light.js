import MenuIcon from "feather-icons/dist/icons/menu.svg";
import CloseIcon from "feather-icons/dist/icons/x.svg";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LogoSVG from "../../assets/images/logo.svg";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import useWindowDimensions from "../../helpers/getWindowDimensions";

const Header = tw.header`
  flex justify-center items-center
  fixed bg-white top-0 w-full z-20 p-8 md:px-24 2xl:p-8 mx-auto w-full
`;

export const NavLinks = tw.div`flex flex-col items-center lg:flex-row lg:inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-secondary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center max-w-screen-xl
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const { width } = useWindowDimensions();
  useEffect(() => {
    width > 768 && setIsToggle(false);
  }, [width]);

  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/about-us">About</NavLink>
      <NavLink href="/blog-post">Blog</NavLink>
      <PrimaryLink
        css={roundedHeaderButton && tw`rounded-full`}
        href="/contact-us"
      >
        Contact Us
      </PrimaryLink>
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/#">
        Sign Up
      </PrimaryLink> */}
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <a
      className="my-2 lg:text-sm lg:my-0 tracking-wide transition duration-300 pb-1 border-transparent hover:border-primary-500 hocus:text-primary-500 flex items-center font-black border-b-0 xl:text-2xl ml-0!"
      href="/"
    >
      {/* <Logo alt="logo" className="mr-3" /> */}
      {/* <img src={logo.src} /> */}
      <LogoSVG alt="logo" className="mr-3" />
    </a>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      {/* <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header> */}

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

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
