import Features from "../components/features/ThreeColSimple.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light.js";
import MainFeature1 from "../components/features/TwoColWithButton.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import React from "react";
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";
import CustomerSatisfaction from "../assets/images/CustomerSatisfaction.svg";
import Support from "../assets/images/Support.svg";
import StrongTeams from "../assets/images/StrongTeams.svg";
// const Subheading = tw.span`uppercase tracking-wider text-sm`;
import Head from "next/head";

export default () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
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
          heading="Ideas take the best form of Innovation here"
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          isModernDesignImage={false}
          description="We are the Software development Studio where you get to witness great ideas churned into the best business solutions."
        />
        <MainFeature1
          subheading={
            <span className="uppercase tracking-wider text-sm">
              Our Mission
            </span>
          }
          heading="We aim to disrupt the design space."
          buttonRounded={false}
          primaryButtonText="Contact Us"
          imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
          textOnLeft={false}
          description="We focus on the detailed development of software solutions that help individuals and business uplift their purpose. This begins by listening to our clients, and members and being reliable. We take responsibility for building the best portals for our client's customers so that they have a business built on strong relationships."
        />
        <Features
          subheading={
            <span className="uppercase tracking-wider text-sm">
              Our Strengths
            </span>
          }
          heading="We follow these."
          description="We are Studius developers and Tech Explorers. We create IT solutions of global stands for businesses and individuals."
          cards={[
            {
              imageSrc: <Support />,
              title: "Advancing technology",
              description:
                "We refresh our tech stack and services to ensure all solutions that leave our doors are built future-proof. ",
            },
            {
              imageSrc: <StrongTeams />,
              title: "Dream Teams",
              description:
                "We achieve strong skillset development and growth for our team with flexible work hours and space that benefits both the work-life balance and productivity.",
            },
            {
              imageSrc: <CustomerSatisfaction />,
              title: "Customer Success",
              description:
                "By building impactful digital solutions we thrive to deliver a 100% success rate for our clients.",
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
