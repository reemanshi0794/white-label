import React, { useEffect } from "react";
import ReactGA from "react-ga";
import BlockChainBanner from "../assets/images/Blockchain/blockChainBanner.svg";
import Etherium from "../assets/images/Blockchain/etherium.png";
import HyperLedger from "../assets/images/Blockchain/hyperledger.png";
import Corda from "../assets/images/Blockchain/corda.png";
import MultiChain from "../assets/images/Blockchain/multichain.png";
import EOS from "../assets/images/Blockchain/eos.png";
import Stellar from "../assets/images/Blockchain/Stellar.png";
import Tron from "../assets/images/Blockchain/tron.png";
import Head from "next/head";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import MainServices from "../components/MainServices";

// import { BlockChainAppPageItemToDisplay } from "../data/data";
import One from "../assets/images/Blockchain/one.png";
import Two from "../assets/images/Blockchain/two.png";
import Three from "../assets/images/Blockchain/three.png";
import Four from "../assets/images/Blockchain/four.png";
import Five from "../assets/images/Blockchain/five.png";
import Six from "../assets/images/Blockchain/six.png";
import Seven from "../assets/images/Blockchain/seven.png";
import Link from "next/link";
import Header from "../components/headers/light.js";
import CryptoWallet from "../assets/images/Blockchain/crypto.svg";
import NFTMarketplace from "../assets/images/Blockchain/nft-marketplace.png";
import DApps from "../assets/images/Blockchain/dapps.png";
import BlockChainSupply from "../assets/images/Blockchain/blockchain.png";
import PrivateBlockChain from "../assets/images/Blockchain/private.png";
import Features from "../components/features/ThreeColSimple.js";
import Features1 from "../components/features/ThreeColWithSideImage.js";

const BlockChainAppPageItemToDisplay = [
  {
    id: `1`,
    Imgurl: CryptoWallet,
    heading: `Crypto-Wallet Development`,
    desc: `Build custom Crypto wallets that can handle n number of Cryptocurrencies and their transactions. Our decentralized crypto wallet development service includes Mobile wallets, desktop wallets and web wallets enabled with browser extensions`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: NFTMarketplace,
    heading: `NFT Marketplace`,
    desc: `We design and develop a Blockchain-based ecosystem for digital arts and collectables that can be traded. As one of our main Niche, We help creators and artists to create stunning NFT Marketplaces that come with layered security and rich features`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: DApps,
    heading: `dApps`,
    desc: `Delivering apps that have a decentralized P2P network. At Whitelabel, we create reliable and persistent Smart contracts to connect within the blockchain ecosystem. We provide Token Integration to smooth UX designs for dApps that are automated and have a high level of transparency.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: BlockChainSupply,
    heading: `Blockchain Supply Chain Development`,
    desc: `Fulfil your organization’s networking requirements using blockchain. We design and develop blockchain Supply chain solutions by ensuring transparency and security throughout the journey of a product.`,
    textOnLeft: false,
  },
  {
    id: `5`,
    Imgurl: PrivateBlockChain,
    heading: `Private Blockchain`,
    desc: `For banks and Businesses, we provide Private (Permissioned Blockchains ) to advance smooth operations. Our developers are well packed to help you decentralize daily operations`,
    textOnLeft: true,
  },
];

const BlockChainDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);
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

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pb-20 pt-32 md:pb-24 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                Blockchain
                <br /> Development Services
              </h1>

              <div className=" mt-4 xl:mt-8 flex flex-col items-center lg:items-start">
                <p className="uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500">
                  Have some ideas that involve transparency, Decentralization
                  and persistence? As the No.1 Blockchain Development company we
                  offer services that are future-proof. Build your Crypto
                  wallets, dApps, NFT marketplaces, Smart contracts and more
                  with us.
                </p>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <BlockChainBanner />
              </div>
            </div>
          </div>
        </div>

        <Features
          heading="Couple Your Idea with Blockchain"
          description="Delivering decentralized solutions to empower your business
          demands. Whiten App’s blockchain development service facilitates
          the absolute solution to meet our client’s demands, and strategic
          perceptions. We provide challenging and unmatchable solutions in
          major Blockchain platforms."
          linkText=""
          cards={[]}
        />
        <div className="flex items-center justify-center">
          <a
            href="/contact-us"
            className="lg:mx-0 px-8 py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
          >
            Contact Us
          </a>
        </div>

        {BlockChainAppPageItemToDisplay.map((element) => {
          return (
            <MainServices
              heading={element.heading}
              imageSrc={element.Imgurl.src}
              description={element.desc}
              textOnLeft={element.textOnLeft}
            />
          );
        })}
        <div className="Dev blockChain">
          <section className="development-process">
            <div className="col-lg-11 col-md-10 mx-auto">
              <div className="top text-center">
                <h3>Our Blockchain Development Process</h3>
              </div>
              <div className="row justify-content-center align-items-center m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <span className="no">01</span>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-one">
                    <img src={One.src} alt="one" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <div className="title">
                      <h5>Analysis</h5>
                      <p>
                        We take a deep dive into our client’s business and
                        technical requirements that are essential to meet the
                        specific requirements to build the blockchain product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row  m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <div className="title">
                      <h5>Prototyping And Blueprints</h5>
                      <p>
                        As the first step to developing our designers and tech
                        leads sit together to create a prototype of the
                        blockchain system. At this stage, a clear understanding
                        of the front-end backend and database interaction is
                        depicted.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-two">
                    <img src={Two.src} alt="two" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <span className="no">02</span>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="row justify-content-center align-items-center  m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <span className="no">03</span>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-three">
                    <img src={Three.src} alt="three" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <div className="title">
                      <h5>Design</h5>
                      <p>
                        Our designer comes up with the most suitable prototype
                        that shows an outline of all the UI and UX elements
                        which is submitted before the client for approval.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row  m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <div className="title">
                      <h5>Block Chain Development</h5>
                      <p>
                        Our Highly Skilled team of Block Chain Developers create
                        best performing blockchain product that yields quality
                        and security.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-four">
                    <img src={Four.src} alt="Four" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <span className="no">04</span>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="row justify-content-center align-items-center  m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <div className="no">05</div>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-five">
                    <img src={Five.src} alt="five" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <div className="title">
                      <h5>Quality Assurance</h5>
                      <p>
                        Our team of blockchain developers and testers together
                        work on the testing part of the Blockchain product to
                        assure its quality of it. Both manual and automated
                        testing for blockchain products has led us to deploy
                        error-free solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row  m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <div className="title">
                      <h5>Deployment</h5>
                      <p>
                        By Following all the standard protocols in deploying
                        blockchain solutions we make it easily accessible for
                        all our client’s customers easily
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-six">
                    <img src={Six.src} alt="Six" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <span className="no">06</span>
                  </div>
                </div>
              </div>
              {/* 7 */}
              <div className="row justify-content-center align-items-center  m-0">
                <div className="col-md-6  col-lg-4">
                  <div className="left-cnt">
                    <span className="no">07</span>
                  </div>
                </div>
                <div className="col-md-4 process-wrap">
                  <div className="img process-seven">
                    <img src={Seven.src} alt="Seven" />
                  </div>
                </div>
                <div className="col-md-6  col-lg-4">
                  <div className="right-cnt">
                    <div className="title">
                      <h5>Support and Maintenance</h5>
                      <p>
                        Scaling is inevitable for blockchain products, which is
                        why provide post-delivery support and maintenance to
                        blockchain solutions to assure smooth functioning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* most trusted */}
        </div>

        <Features1
          subheading={
            <span className="uppercase tracking-wider text-sm"></span>
          }
          heading={
            <>
              Most Trusted Blockchain Platforms that we use to decentralize
              businesses
              {/* <span className="text-primary-500"> eCommerce Development?</span> */}
            </>
          }
          description=""
          cards={[]}
        />
        <div className="row iconSec m-0 flex">
          <div className="col icons">
            <img src={Etherium.src} alt="Etherium" />
            <h5>Etherium</h5>
          </div>
          <div className="col icons">
            <img src={HyperLedger.src} alt="Hyperledger" />
            <h5>Hyperledger</h5>
          </div>
          <div className="col icons">
            <img src={Corda.src} alt="Corda" />
            <h5>Corda</h5>
          </div>
          <div className="col icons">
            <img src={MultiChain.src} alt="MultiChain" />
            <h5>Multichain</h5>
          </div>
          <div className="col icons">
            <img src={EOS.src} alt="EOS" />
            <h5>EOS</h5>
          </div>
          <div className="col icons">
            <img src={Stellar.src} alt="Stellar" />
            <h5>Stellar</h5>
          </div>
          <div className="col icons">
            <img src={Tron.src} alt="Tron" />
            <h5>Tron</h5>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/contact-us"
            className="lg:mx-0 px-8 py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlockChainDev;
