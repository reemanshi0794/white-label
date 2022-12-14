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
import Hero from '../components/hero/TwoColumnWithInput.js';
import Pricing from '../components/pricing/ThreePlans.js';
import Header from '../components/headers/light';
import Head from 'next/head';
import Collaborate from '../assets/images/Collaborate.png';
import ContactModal from '../components/ContactModal';

const SaaSProductLandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

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
              Count Us <span className="text-primary-500">on</span>
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
          // subheading={<span className="uppercase tracking-widest font-bold text-primary-500">4 C???s</span>}
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
              Need only a Developer or two?
            </span>
          }
          heading={
            <>
              Find the best developers{' '}
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
              FAQ
            </span>
          }
          heading={
            <>
              Do You have a <span className="text-primary-500">Question?</span>
            </>
          }
          faqs={[
            {
              question: 'What are the technologies that you use?',
              answer: `At Whiten app Solutions we continuously update our tech stack to meet the demand of our clients. Presently we work with technologies including
              Languages - React, React Native, Flutter, Angular, Golang, Nodejs, Swift, Java, Android, Power BI, UI/UX, Quality Assurance, MongoDB.
              Tools - Jira board, Azure DevOps, Visual Studio Code, Vercel, Heroku, Firebase, Github. `,
            },
            {
              question: 'How does your pricing work?',
              answer: `All our solutions and services are 100% custom and are built according to the need of our clients. The pricing of each solution varies as its purely dependent on the demands and feature requirements. 
                We do not have hidden fees and our Free QA and overtime help you cut development costs by up to 75%.
                To get free evaluation and price estimation by contacting us. To do so, click on the contact us button in the top right corner of this page.
                `,
            },
            {
              question: 'Can I hire only one developer?',
              answer:
                'Yes, If you already have a team and are behind a developer, you can hire our top developers to work with your team. We provide contract hiring services to help clients finish their projects quickly by not making commitments and avoiding permanent hires for temporary needs. ',
            },
            {
              question: 'What time zone do we follow?',
              answer: `Our clients are all around the globe and thereby each project is handled carefully by assigning a team who works on our client's timeline to avoid communication gaps and to be well synchronized with your team. `,
            },
          ]}
        />
        <GetStarted />
      </div>
      <Footer />
      {show && <ContactModal setShow={setShow} />}
    </>
  );
};

export default SaaSProductLandingPage;
