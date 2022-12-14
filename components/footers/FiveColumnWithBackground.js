import React from 'react';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import Logo from '../../assets/images/logo.png';
import SvgDecoratorBlob1 from '../../assets/images/svg-decorator-blob-9.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import YoutubeIcon from '../../assets/images/youtube-icon.svg';
import InstagramBlack from '../../assets/images/InstagramBlack.svg';
import LinkedinBlack from '../../assets/images/LinkedinBlack.svg';
import FooterSVG from '../../assets/images/FooterSVG.svg';
// const Container = tw.div`relative bg-primary-500 text-gray-100 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
// const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
// const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

// const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

// const ColumnHeading = tw.h5`uppercase font-bold`;

// const LinkList = tw.ul`mt-6 text-sm font-medium`;
// const LinkListItem = tw.li`mt-3`;
// const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

// const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

// const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

// const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
// const LogoImg = tw.img`w-8`;
// const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

// const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

// const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
// const SocialLink = styled.a`
//   ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
//   svg {
//     ${tw`w-4 h-4`}
//   }
// `;

// const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
// const DecoratorBlob1 = tw(
//   SvgDecoratorBlob1
// )`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
// const DecoratorBlob2 = tw(
//   SvgDecoratorBlob1
// )`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default () => {
  const handleFaq = (id) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className=" overflow-hidden">
      <div className="relative bg-primary-500 text-gray-100 px-8 py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
          <div className="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Main</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="/Blog"
                >
                  Blog
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300 cursor-pointer"
                  onClick={() => handleFaq('faq')}
                >
                  FAQs
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Support
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Product</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Log In
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Personal
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Business
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Press</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Logos
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Events
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Stories
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Office
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Team</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Career
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Founders
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Culture
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Onboarding
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Legal</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  GDPR
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300"
                  href="#"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-16 border-b-2 w-full" /> */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center justify-center md:justify-start">
              <FooterSVG alt="footer-svg" />
            </div>
            <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium ">
              &copy; 2022 Whiten App Solutions
            </p>
            <div className="mt-8 md:mt-0 flex">
              <a
                className="cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0"
                href="https://www.facebook.com/profile.php?id=100088241919758"
                target="_blank"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                className="cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0"
                href="https://www.linkedin.com/company/whiten-app-solutions/"
                target="_blank"
              >
                <LinkedinBlack className="w-4 h-4" />
              </a>
              <a
                className="cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0"
                href="https://www.instagram.com/whiten_apps/"
                target="_blank"
              >
                <InstagramBlack className="w-4 h-4" />
              </a>
              <a
                className="cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0"
                href="https://twitter.com/WhitenApps"
                target="_blank"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                className="cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0"
                href="https://www.youtube.com/@whitenappssolutions"
                target="_blank"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <SvgDecoratorBlob1 className="absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50" />
          <SvgDecoratorBlob1 className="absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50" />
        </div>
      </div>
    </div>
  );
};
