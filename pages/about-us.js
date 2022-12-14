import Features from "../components/features/ThreeColSimple.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light.js";
import MainFeature1 from "../components/features/TwoColWithButton.js";
import React from "react";
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";
import CustomerSatisfaction from "../assets/images/CustomerSatisfaction.svg";
import Support from "../assets/images/Support.svg";
import StrongTeams from "../assets/images/StrongTeams.svg";
import Head from "next/head";
import Collaborate from "../assets/images/Collaborate.png";
import Simwim from "../assets/images/Simwim.png";
import Punpun from "../assets/images/Punpun.png";
import GameApart from "../assets/images/GameApart.png";
import Foodclub from "../assets/images/Foodclub.png";
import Advertisement1 from "../assets/images/Advertisement1.png";
import Advertisement2 from "../assets/images/Advertisement2.png";
import Advertisement3 from "../assets/images/Advertisement3.png";

export default () => {
  return (
    <>
      <Header />
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

        <MainFeature1
          subheading={
            <span className="uppercase tracking-wider text-sm">
              About Whiten App Solutions
            </span>
          }
          heading="Ideas take the best form of innovation here"
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          primaryButtonUrl="/portfolio"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          isModernDesignImage={false}
          description="We are the software development studio where you get to witness great ideas churned into the best business solutions."
        />

        <div className="max-w-screen-xl mx-auto lg:mt-16">
          <h1 className="text-black-100 text-xl md:text-[45px] 2xl:text-[60px] mt-10 lg:mt-0 font-bold text-center">
            Our Customers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 items-center place-items-center mt-12">
            <img src={Simwim.src} className="w-[180px] mb-[26px] lg:mb-0" />
            <img src={Punpun.src} className="w-[180px] mb-[26px] lg:mb-0" />
            <img src={GameApart.src} className="w-[180px] mb-[26px] lg:mb-0" />
            <img src={Foodclub.src} className="w-[180px] mb-[26px] lg:mb-0" />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto lg:mt-16">
          <div className="grid justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 items-center place-items-center mt-12 ">
            <img
              src={Advertisement1.src}
              className="w-full"
            />
            <img
              src={Advertisement2.src}
              className="w-full"
            />
            <img
              src={Advertisement3.src}
              className="w-full"
            />
          </div>
        </div>

        <MainFeature1
          subheading={
            <span className="uppercase tracking-wider text-sm">
              Our Mission
            </span>
          }
          heading="We aim to disrupt the design space."
          buttonRounded={true}
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
          description="We are studious developers and tech explorers. We create IT solutions of global stands for businesses and individuals."
          cards={[
            {
              imageSrc: <Support />,
              title: "Advancing technology",
              description:
                "We refresh our tech stack and services to ensure all solutions that leave our doors are built future-proof. ",
            },
            {
              imageSrc: <StrongTeams />,
              title: "A Dream team",
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
        <div className="relative">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-center">
              <img
                src={Collaborate.src}
                alt={"Collaboration Icon"}
                className="w-full md:w-[40%]"
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
        <TeamCardGrid
          subheading={
            <span className="uppercase tracking-wider text-sm">Our Team</span>
          }
        />
      </div>
      <Footer />
    </>
  );
};
