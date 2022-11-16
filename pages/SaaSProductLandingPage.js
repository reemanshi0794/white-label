import {ReactComponent as BriefcaseIcon} from 'feather-icons/dist/icons/briefcase.svg';
import {ReactComponent as MoneyIcon} from 'feather-icons/dist/icons/dollar-sign.svg';
import React from 'react';
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

const SaaSProductLandingPage = () => {
  // const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  // const HighlightedText = tw.span`text-primary-500`;

  return (
    <div className="min-h-screen text-secondary-500 p-8 overflow-hidden">
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<span className="uppercase tracking-widest font-bold text-primary-500">Services</span>}
        heading={
          <>
            WE ARE <span className="text-primary-500">INTO.</span>
          </>
        }
      />
      <MainFeature subheading={<span className="uppercase tracking-widest font-bold text-primary-500">Code Jugglers</span>} imageSrc={heroScreenshotImageSrc} imageBorder={true} imageDecoratorBlob={true} />
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
            description: 'We promise to offer you the best rate we can - at par with the industry standard.',
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: 'Professionalism',
            description: 'We assure you that our templates are designed and created by professional designers.',
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />
      <Pricing
        subheading={<span className="uppercase tracking-widest font-bold text-primary-500">Pricing</span>}
        heading={
          <>
            Find the best Developers <span className="text-primary-500">here.</span>
          </>
        }
        plans={[
          {
            name: 'Technology',
            price: '$17.99',
            duration: 'Monthly',
            mainFeature: 'For Individuals',
            features: ['30 Templates', '7 Landing Pages', '12 Internal Pages', 'Basic Assistance'],
          },
          {
            name: 'Total Developers',
            price: '$37.99',
            duration: 'Monthly',
            mainFeature: 'For Small Businesses',
            features: ['60 Templates', '15 Landing Pages', '22 Internal Pages', 'Priority Assistance'],
            featured: true,
          },
          {
            name: 'To be allocated',
            price: '$57.99',
            duration: 'Monthly',
            mainFeature: 'For Large Companies',
            features: ['90 Templates', '27 Landing Pages', '37 Internal Pages', 'Personal Assistance'],
          },
          {
            name: 'Take Action',
            price: '$57.99',
            duration: 'Monthly',
            mainFeature: 'For Large Companies',
            features: ['90 Templates', '27 Landing Pages', '37 Internal Pages', 'Personal Assistance'],
          },
        ]}
      />
      <Testimonial
        subheading={<span className="uppercase tracking-widest font-bold text-primary-500">Testimonials</span>}
        heading={
          <>
            Our Clients <span className="text-primary-500">speak for us.</span>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
            heading: 'Amazing User Experience',
            quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            customerName: 'Charlotte Hale',
            customerTitle: 'Director, Delos Inc.',
          },
          {
            stars: 5,
            profileImageSrc: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
            heading: 'Love the Developer Experience and Design Principles !',
            quote: 'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            customerName: 'Adam Cuppy',
            customerTitle: 'Founder, EventsNYC',
          },
        ]}
      />
      <FAQ
        subheading={<span className="uppercase tracking-widest font-bold text-primary-500">FAQS</span>}
        heading={
          <>
            Do You have a <span className="text-primary-500">Question ?</span>
          </>
        }
        faqs={[
          {
            question: 'What are the technologies that you use ?',
            answer: 'At White Label Technologies we continuously update our tech stack to meet the demand of our clients. Presently we work with technologies including.',
          },
          {
            question: 'How Does your Pricing work?',
            answer: 'All our solutions and services are 100% custom and are built according to the need of our clients. The pricing of each solution varies as its purely dependent on the demands and feature requirements.',
          },
          {
            question: 'Can I hire only one developer?',
            answer: 'Yes, If you already have a team and are behind a developer, you can hire our top developers to work with your team. We provide contract hiring services to help clients finish their projects quickly by not making commitments and avoiding permanent hires for temporary needs.',
          },
          {
            question: 'What time zone do we follow?',
            answer: 'Our clients are all around the globe and thereby each project is handled carefully by assigning a team who works on our clients timeline to avoid communication gaps and to be well synchronized with your team.',
          },
        ]}
      />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default SaaSProductLandingPage;
