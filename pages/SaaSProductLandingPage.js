import { ReactComponent as BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as MoneyIcon } from 'feather-icons/dist/icons/dollar-sign.svg';
import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import heroScreenshotImageSrc from '../assets/images/hero-screenshot-1.png';
import macHeroScreenshotImageSrc from '../assets/images/hero-screenshot-2.png';
import prototypeIllustrationImageSrc from '../assets/images/prototype-illustration.svg';
import GetStarted from '../components/cta/GetStarted';
import FAQ from '../components/faqs/SingleCol.js';
import Features from '../components/features/ThreeColWithSideImage.js';
import MainFeature from '../components/features/TwoColWithButton.js';
import FeatureWithSteps from '../components/features/TwoColWithSteps.js';
import MainFeature2 from '../components/features/TwoColWithTwoHorizontalFeaturesAndButton.js';
import Footer from '../components/footers/FiveColumnWithBackground.js';
// import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from '../components/hero/TwoColumnWithInput.js';
import Pricing from '../components/pricing/ThreePlans.js';
import Testimonial from '../components/testimonials/TwoColumnWithImageAndRating.js';
import Header from '../components/headers/light';
import Head from 'next/head';
import Collaborate from '../assets/images/Collaborate.png';
import ContactUsSrc from '../assets/images/contact-us.png';
import { PrimaryButton as PrimaryButtonBase } from '../components/misc/Buttons.js';
import close from '../assets/images/close.png';

const SaaSProductLandingPage = ({
  subheading = 'Contact Us Feel free to get in touch with us.',
  heading = <></>,
  description = "Let's collaborate",
  submitButtonText = 'Send',
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const webDevelopment = 'Web Development';
  const [contactInfo, setContactInfo] = useState({ service: webDevelopment });
  const [showLoader, setShowLoader] = useState(false);
  const [displayMessage, setDisplayMessage] = useState({
    message: '',
    type: '',
  });

  const handleChange = (key, value) => {
    setContactInfo({ ...contactInfo, [key]: value });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function sendMail() {
    return new Promise((resolve, reject) => {
      try {
        if (!contactInfo) return;
        fetch('https://email-innow8.herokuapp.com/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              projectName: 'Whiten-App Solutions',
              to: ['kapilbindal1@gmail.com'],
              from: 'contact@innow8apps.com',
              subject: 'contact form White Label',
              text: JSON.stringify(contactInfo),
              htmlText: JSON.stringify(contactInfo),
            } || ''
          ),
        })
          .then((res) => {
            console.log('result: ', res);
            resolve();
          })
          .catch((error) => {
            console.log('send mail api error', error);
            reject();
          });
      } catch (error) {
        console.log('send mail try catch error', error);
        reject();
      }
    });
  }

  const addContactInfo = async () => {
    return sendMail();
  };

  const emptyFieldValidationCheck =
    !contactInfo.name ||
    !contactInfo.email ||
    !contactInfo.phoneNumber ||
    !contactInfo.service;
  const handleSubmit = (event) => {
    setShowLoader(true);
    addContactInfo()
      .then((res) => {
        setDisplayMessage({
          message: '** Submitted successfully **',
          type: 'success',
        });
        setShowLoader(false);
        setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
      })
      .catch((err) => {
        setDisplayMessage({
          message: '** An error occurred **',
          type: 'error',
        });
        setShowLoader(false);
        setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
      });
    setContactInfo({ service: webDevelopment });
    event.preventDefault();
  };

  return (
    <>
      <Header roundedHeaderButton={true} />
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <Head>
          <title>
            Software Development Company | Custom App Developer | Whiten App
            Solutions
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

        <Hero />
        <Features
          subheading={
            <span className="uppercase tracking-widest font-bold text-primary-500">
              Services
            </span>
          }
          heading={
            <>
              COUNT ON <span className="text-primary-500">US.</span>
            </>
          }
        />
        <MainFeature
          subheading={
            <span className="uppercase tracking-widest font-bold text-primary-500">
              Code Jugglers
            </span>
          }
          imageSrc={heroScreenshotImageSrc}
          imageBorder={true}
          imageDecoratorBlob={true}
          isModernDesignImage={true}
        />
        <FeatureWithSteps
          subheading={
            <span className="uppercase tracking-widest font-bold text-primary-500">
              {' '}
              <>
                Take the easy <span className="text-primary-500">way out</span>
              </>
            </span>
          }
          heading={<>Our Process</>}
          textOnLeft={false}
          imageSrc={macHeroScreenshotImageSrc}
          imageDecoratorBlob={true}
          decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />
        <MainFeature2
          // subheading={<span className="uppercase tracking-widest font-bold text-primary-500">4 C’s</span>}
          // heading={
          //   <>
          //     We Always Abide by Our <span className="text-primary-500">Principles.</span>
          //   </>
          // }
          imageSrc={prototypeIllustrationImageSrc}
          showDecoratorBlob={false}
          features={[
            {
              Icon: MoneyIcon,
              title: 'Affordable',
              description:
                'We promise to offer you the best rate we can - at par with the industry standard.',
              iconContainerCss: tw`bg-green-300 text-green-800`,
            },
            {
              Icon: BriefcaseIcon,
              title: 'Professionalism',
              description:
                'We assure you that our templates are designed and created by professional designers.',
              iconContainerCss: tw`bg-red-300 text-red-800`,
            },
          ]}
        />
        <Pricing
          subheading={
            <span className="uppercase tracking-widest font-bold text-primary-500">
              A developer would do?
            </span>
          }
          heading={
            <>
              Find the best Developers{' '}
              <span className="text-primary-500">here.</span>
            </>
          }
          plans={[
            {
              name: 'Technology',
              price: '$17.99',
              duration: 'Monthly',
              mainFeature: 'Individuals',
              features: [
                '30 Templates',
                '7 Landing Pages',
                '12 Internal Pages',
                'Basic Assistance',
              ],
            },
            {
              name: 'Total Developers',
              price: '$37.99',
              duration: 'Monthly',
              mainFeature: 'Startups',
              features: [
                '60 Templates',
                '15 Landing Pages',
                '22 Internal Pages',
                'Priority Assistance',
              ],
              featured: true,
            },
            {
              name: 'To be allocated',
              price: '$57.99',
              duration: 'Monthly',
              mainFeature: 'Enterprises',
              features: [
                '90 Templates',
                '27 Landing Pages',
                '37 Internal Pages',
                'Personal Assistance',
              ],
            },
          ]}
        />
        {/* <Testimonial
        subheading={
          <span className="uppercase tracking-widest font-bold text-primary-500">
            Testimonials
          </span>
        }
        heading={
          <>
            Our Clients <span className="text-primary-500">speak for us.</span>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
            heading: 'Amazing User Experience',
            quote:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            customerName: 'Charlotte Hale',
            customerTitle: 'Director, Delos Inc.',
          },
          {
            stars: 5,
            profileImageSrc:
              'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
            heading: 'Love the Developer Experience and Design Principles !',
            quote:
              'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            customerName: 'Adam Cuppy',
            customerTitle: 'Founder, EventsNYC',
          },
        ]}
      /> */}

        <div className="relative">
          <div className="max-w-screen-xl mx-auto mt-[60px]">
            <div className="flex items-center justify-center">
              <img
                src={Collaborate.src}
                alt={'Collaboration Icon'}
                className="w-full md:w-[50%] lg:w-[40%]"
              />
            </div>
            <div className=" py-[60px] text-center">
              <h3 className=" text-[40px] mb-8 font-extrabold">
                Two names, One crew
              </h3>
              <p className=" text-xl leading-7">
                With their bars set high in the software development service,
                Innow8 and Whiten App solutions continue to disrupt the
                technology landscape in unity. We together are a clever team of
                developers, designers and technologists across two offices in
                India and Canada operating since 2015.
              </p>
            </div>
          </div>
        </div>

        <FAQ
          subheading={
            <span className="uppercase tracking-widest font-bold text-primary-500">
              FAQS
            </span>
          }
          heading={
            <>
              Do You have a <span className="text-primary-500">Question ?</span>
            </>
          }
          faqs={[
            {
              question: 'What are the technologies that you use ?',
              answer:
                'At Whiten App Solutions we continuously update our tech stack to meet the demand of our clients. Presently we work with technologies including - React, React Native, Flutter, Angular, Golang, Nodejs, Swift, Java, Android, Power BI, UI/UX, Quality Assurance, MongoDB',
            },
            {
              question: 'How Does your Pricing work?',
              answer:
                'All our solutions and services are 100% custom and are built according to the need of our clients. The pricing of each solution varies as its purely dependent on the demands and feature requirements.',
            },
            {
              question: 'Can I hire only one developer?',
              answer:
                'Yes, If you already have a team and are behind a developer, you can hire our top developers to work with your team. We provide contract hiring services to help clients finish their projects quickly by not making commitments and avoiding permanent hires for temporary needs.',
            },
            {
              question: 'What time zone do we follow?',
              answer:
                'Our clients are all around the globe and thereby each project is handled carefully by assigning a team who works on our clients timeline to avoid communication gaps and to be well synchronized with your team.',
            },
          ]}
        />
        <GetStarted />
      </div>
      <Footer />
      {show && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bg-[#56565699] z-50 p-4 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
          <div className="relative w-full max-w-[88%] 2xl:max-w-[61%] h-full lg:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 p-12 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={close.src}
                    className="text-center rounded-full p-4 bg-gray-100"
                  />
                  <img
                    src={ContactUsSrc.src}
                    alt="contact-us"
                    className="w-[67%] m-auto lg:w-full"
                  />
                </div>
                <div
                  className={` md:mx-0  mt-12 md:mt-0 lg:mr-16 lg:order-first`}
                >
                  <div className="text-center md:text-left">
                    {subheading && (
                      <h5 className="font-bold text-3xl text-primary-500 text-center lg:text-left">
                        Feel free to get in touch with us.
                      </h5>
                    )}
                    {description && (
                      <p className="mt-4 text-center lg:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                        {description}
                      </p>
                    )}
                    <form
                      action=""
                      method="post"
                      className="mt-4 md:mt-10 text-sm flex flex-col lg:max-w-sm mx-auto md:mx-0"
                    >
                      <input
                        type="text"
                        name="name"
                        value={contactInfo.name || ''}
                        placeholder="Full Name"
                        className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                        id="exampleInputEmail1"
                        required
                        aria-describedby="emailHelp"
                        onChange={(event) =>
                          handleChange('name', event.target.value)
                        }
                        autoComplete="off"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={contactInfo.email || ''}
                        placeholder="Email Address"
                        className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) =>
                          handleChange('email', event.target.value)
                        }
                        autoComplete="off"
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={contactInfo.phoneNumber || ''}
                        placeholder="Phone Number"
                        className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) =>
                          handleChange(
                            'phoneNumber',
                            event.target.value >= 0 ? event.target.value : 0
                          )
                        }
                        autoComplete="off"
                      />
                      <textarea
                        className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                        name="message"
                        required
                        value={contactInfo.message || ''}
                        placeholder="Message"
                        id="exampleFormControlTextarea1"
                        rows="2"
                        onChange={(event) =>
                          handleChange('message', event.target.value)
                        }
                      />
                      {showLoader ? (
                        <div className="text-center loader py-2">
                          <div
                            className="spinner-border text-secondary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <div className={`message-${displayMessage.type}`}>
                          <span>{displayMessage.message}</span>
                        </div>
                      )}
                      <PrimaryButtonBase
                        className="inline-block mt-8"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={emptyFieldValidationCheck}
                      >
                        {submitButtonText}
                      </PrimaryButtonBase>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaaSProductLandingPage;
