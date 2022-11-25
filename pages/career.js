import ReactGA from 'react-ga';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import BannerImage from '../assets/images/BannerImage.png';
import SvgDecoratorBlob1 from '../assets/images/svg-decorator-blob-1.svg';
import { useEffect } from 'react';
import CustomerSatisfaction from '../assets/images/CustomerSatisfaction.svg';
import Support from '../assets/images/Support.svg';
import StrongTeams from '../assets/images/StrongTeams.svg';
import Footer from '../components/footers/FiveColumnWithInputForm.js';

// import Header from '../src/components/Header';
// import { CareerPageItemToDisplay } from '../src/data/data';
// import Career from '../src/assets/images/career.png';

const CareerPage = ({
  cards = [
    {
      imageSrc: <StrongTeams />,
      title: 'Innovation',
      description: 'Curiosity and passion without limits',
    },
    {
      imageSrc: <Support />,
      title: 'Teamwork',
      description: 'Different people forming a unique team',
    },
    {
      imageSrc: <CustomerSatisfaction />,
      title: 'Creativity',
      description: 'Creative people who love design',
    },
    {
      imageSrc: <CustomerSatisfaction />,
      title: 'Motivation',
      description: 'Commitment to the project',
    },
  ],
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div id="career">
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
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-screen-xl mx-auto pt-32 px-8 lg:px-0">
          <div className="flex justify-center lg:justify-start items-center text-center lg:text-left">
            <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              Are you the talent
              <br /> that we are looking for?
              {/* <span className="text-primary-500">for you.</span> */}
            </h1>
          </div>
          <div className="mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
            <div className="flex justify-center lg:justify-end items-center">
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={BannerImage.src}
                alt="Design Illustration"
              />
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto pt-16 pb-8">
          <div className=" text-center">
            <h2 className=" text-[40px] font-extrabold mb-4">Open Positions</h2>
            <h4 className="  text-2xl font-bold mb-4">Join Us Today</h4>
            <h5 className=" text-2xl font-bold mb-4">Drop your resume's at</h5>
            <a className=" text-[32px] font-bold mb-4">hr@white-label.io</a>
          </div>

          <div className=" mx-auto w-[94%] md:w-4/5 mt-8 md:mt-16">
            <div className=" mb-4 md:mb-[28px] p-[14px] md:px-4 md:py-5 flex justify-between items-center bg-white shadow-[0_0px_20px_rgba(95,125,149,30%)]">
              <div>
                <h4 className=" font-bold text-base md:text-[28px] text-black mb-[2px] md:mb-2">
                  Senior React Developer
                </h4>
                <h5 className=" text-sm md:text-lg text-[#a7a7a7]">Remote</h5>
              </div>
              <a
                href="/contact-us"
                className=" text-sm md:text-base lg:mx-0 py-[7px] px-5 md:px-8 md:py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
              >
                Apply Now
              </a>
            </div>
            <div className=" mb-4 md:mb-[28px] p-[14px] md:px-4 md:py-5 flex justify-between items-center bg-white shadow-[0_0px_20px_rgba(95,125,149,30%)]">
              <div>
                <h4 className=" font-bold text-base md:text-[28px] text-black mb-[2px] md:mb-2">
                  Senior React Developer
                </h4>
                <h5 className=" text-sm md:text-lg text-[#a7a7a7]">Remote</h5>
              </div>
              <a
                href="/contact-us"
                className=" text-sm md:text-base lg:mx-0 py-[7px] px-5 md:px-8 md:py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
              >
                Apply Now
              </a>
            </div>
            <div className=" mb-4 md:mb-[28px] p-[14px] md:px-4 md:py-5 flex justify-between items-center bg-white shadow-[0_0px_20px_rgba(95,125,149,30%)]">
              <div>
                <h4 className=" font-bold text-base md:text-[28px] text-black mb-[2px] md:mb-2">
                  Senior React Developer
                </h4>
                <h5 className=" text-sm md:text-lg text-[#a7a7a7]">Remote</h5>
              </div>
              <a
                href="/contact-us"
                className=" text-sm md:text-base lg:mx-0 py-[7px] px-5 md:px-8 md:py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
              >
                Apply Now
              </a>
            </div>
            <div className=" mb-4 md:mb-[28px] p-[14px] md:px-4 md:py-5 flex justify-between items-center bg-white shadow-[0_0px_20px_rgba(95,125,149,30%)]">
              <div>
                <h4 className=" font-bold text-base md:text-[28px] text-black mb-[2px] md:mb-2">
                  Senior React Developer
                </h4>
                <h5 className=" text-sm md:text-lg text-[#a7a7a7]">Remote</h5>
              </div>
              <a
                href="/contact-us"
                className=" text-sm md:text-base lg:mx-0 py-[7px] px-5 md:px-8 md:py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto md:py-8">
          <div className="text-center">
            <h2 className=" text-[28px] md:text-5xl font-bold mb-4">
              Be a part of something special
            </h2>
            <p class="text-center mx-auto text-lg">
              Working together, everything is possible.
            </p>
          </div>
          <div className="md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-[94%] md:w-4/5  mx-auto">
            {cards.map((card, i) => (
              <div key={i}>
                <a
                  className="flex flex-col items-center text-center h-full mx-4 px-4 pt-8 lg:py-8 rounded transition-transform duration-300  transform hover:scale-105"
                  href={card.url}
                >
                  <span className="text-center rounded-full p-4 bg-gray-100">
                    {card.imageSrc}
                  </span>
                  <span className="mt-4 font-bold text-xl leading-none">
                    {card.title}
                  </span>
                  <p className="mt-4 text-sm font-medium text-secondary-300">
                    {card.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
