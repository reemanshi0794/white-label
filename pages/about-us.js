import Features from '../components/features/ThreeColSimple.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import Header from '../components/headers/light.js';
import MainFeature1 from '../components/features/TwoColWithButton.js';
// import Features from "components/features/ThreeColWithSideImage.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import React from 'react';
import TeamCardGrid from '../components/cards/ProfileThreeColGrid.js';
import CustomerSatisfaction from '../assets/images/CustomerSatisfaction.svg';
import Support from '../assets/images/Support.svg';
import StrongTeams from '../assets/images/StrongTeams.svg';
// const Subheading = tw.span`uppercase tracking-wider text-sm`;
import Head from 'next/head';

export default () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 px-24 2xl:p-8 overflow-hidden">
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

        <MainFeature1
          subheading={
            <span className="uppercase tracking-wider text-sm">
              About Whiten App Solutions
            </span>
          }
          heading="We are a modern design agency."
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        />
        <MainFeature1
          subheading={
            <span className="uppercase tracking-wider text-sm">Our Vision</span>
          }
          heading="We aim to disrupt the design space."
          buttonRounded={false}
          primaryButtonText="Contact Us"
          imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
          textOnLeft={false}
        />
        <Features
          subheading={
            <span className="uppercase tracking-wider text-sm">Our Values</span>
          }
          heading="We follow these."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          cards={[
            {
              imageSrc: <Support />,
              title: '24/7 Support',
              description:
                'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport',
            },
            {
              imageSrc: <StrongTeams />,
              title: 'Strong Teams',
              description:
                'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport',
            },
            {
              imageSrc: <CustomerSatisfaction />,
              title: 'Customer Satisfaction',
              description:
                'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport',
            },
          ]}
          linkText=""
        />
        <TeamCardGrid
          subheading={
            <span className="uppercase tracking-wider text-sm">Our Team</span>
          }
        />
        {/* </AnimationRevealPage> */}
      </div>
      <Footer />
    </>
  );
};
