import CustomerLoveIconImage from "../assets/images/simple-icon.svg";
import Features from "../components/features/ThreeColSimple.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light.js";
import MainFeature1 from "../components/features/TwoColWithButton.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import React from "react";
import ShieldIconImage from "../assets/images/shield-icon.svg";
import SupportIconImage from "../assets/images/support-icon.svg";
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";
// const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <div className="min-h-screen text-secondary-500 p-8 px-24 2xl:p-8 overflow-hidden">
      {/* <AnimationRevealPage> */}
      <Header />
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
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid
        subheading={
          <span className="uppercase tracking-wider text-sm">Our Team</span>
        }
      />
      <Footer />
      {/* </AnimationRevealPage> */}
    </div>
  );
};
