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
const BlockChainAppPageItemToDisplay = [
  {
    id: `1`,
    Imgurl: CryptoWallet,
    heading: `Crypto-Wallet Development`,
    desc: `Build custom Crypto wallets that can handle n number of Cryptocurrencies and their transactions. Our decentralized crypto wallet development service includes Mobile wallets, desktop wallets and web wallets enabled with browser extensions`,
  },
  {
    id: `2`,
    Imgurl: NFTMarketplace,
    heading: `NFT Marketplace`,
    desc: `We design and develop a Blockchain-based ecosystem for digital arts and collectables that can be traded. As one of our main Niche, We help creators and artists to create stunning NFT Marketplaces that come with layered security and rich features`,
  },
  {
    id: `3`,
    Imgurl: DApps,
    heading: `dApps`,
    desc: `Delivering apps that have a decentralized P2P network. At Whitelabel, we create reliable and persistent Smart contracts to connect within the blockchain ecosystem. We provide Token Integration to smooth UX designs for dApps that are automated and have a high level of transparency.`,
  },
  {
    id: `4`,
    Imgurl: BlockChainSupply,
    heading: `Blockchain Supply Chain Development`,
    desc: `Fulfil your organization’s networking requirements using blockchain. We design and develop blockchain Supply chain solutions by ensuring transparency and security throughout the journey of a product.`,
  },
  {
    id: `5`,
    Imgurl: PrivateBlockChain,
    heading: `Private Blockchain`,
    desc: `For banks and Businesses, we provide Private (Permissioned Blockchains ) to advance smooth operations. Our developers are well packed to help you decentralize daily operations`,
  },
];

const BlockChainDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
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
      <div className="Dev blockChain">
        <div className="heroBanner">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="row heroBannerInner">
              <div className="col-lg-6">
                <div className="cnt">
                  <h1>
                    <span>Blockchain</span> Development Services
                  </h1>
                  <p>
                    Have some ideas that involve transparency, Decentralization
                    and persistence? As the No.1 Blockchain Development company
                    we offer services that are future-proof. Build your Crypto
                    wallets, dApps, NFT marketplaces, Smart contracts and more
                    with us.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image">
                  <img
                    src={BlockChainBanner.src}
                    alt="BlockChainBanner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainHeading">
          <h2>Couple Your Idea with Blockchain</h2>
          <p>
            Delivering decentralized solutions to empower your business demands.
            Whitelabel’s blockchain development service facilitates the absolute
            solution to meet our client’s demands, and strategic perceptions. We
            provide challenging and unmatchable solutions in major Blockchain
            platforms.
          </p>
          {/* <Link
              style={{ textDecoration: "none" }}
              className="nav-link"
              href="/contact-us"
            >
              <a
                href="/"
                className="btn-custom d-inline-block my-5"
                to="contact-us"
                style={{ textDecoration: "none" }}
              >
                Contact us
              </a>
            </Link> */}
        </div>

        <div className="mainltorsec">
          {BlockChainAppPageItemToDisplay.map((element) => {
            return (
              <div className="row serviceWrap" key={element.id}>
                <div className="col-lg-6">
                  <div className="serviceImg">
                    <img
                      src={element.Imgurl.src}
                      alt="WebDev"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="serviceCnt">
                    <h4>{element.heading}</h4>
                    <p>{element.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* development Process */}
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
                      leads sit together to create a prototype of the blockchain
                      system. At this stage, a clear understanding of the
                      front-end backend and database interaction is depicted.
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
                      that shows an outline of all the UI and UX elements which
                      is submitted before the client for approval.
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
                      best performing blockchain product that yields quality and
                      security.
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
                      blockchain solutions we make it easily accessible for all
                      our client’s customers easily
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
        <div className="col-lg-11 col-md-10 mx-auto">
          <section className="trusted-blockchain">
            <div className="top">
              <h3>
                Most Trusted Blockchain Platforms that we use to decentralize
                businesses
              </h3>
            </div>
            <div className="row iconSec m-0">
              {/* 1 */}
              <div className="col icons">
                <img src={Etherium.src} alt="Etherium" />
                <h5>Etherium</h5>
              </div>
              {/* 2 */}
              <div className="col icons">
                <img src={HyperLedger.src} alt="Hyperledger" />
                <h5>Hyperledger</h5>
              </div>
              {/* 3 */}
              <div className="col icons">
                <img src={Corda.src} alt="Corda" />
                <h5>Corda</h5>
              </div>
              {/* 4 */}
              <div className="col icons">
                <img src={MultiChain.src} alt="MultiChain" />
                <h5>Multichain</h5>
              </div>
              {/* 5 */}
              <div className="col icons">
                <img src={EOS.src} alt="EOS" />
                <h5>EOS</h5>
              </div>
              {/* 6 */}
              <div className="col icons">
                <img src={Stellar.src} alt="Stellar" />
                <h5>Stellar</h5>
              </div>
              {/* 7 */}
              <div className="col icons">
                <img src={Tron.src} alt="Tron" />
                <h5>Tron</h5>
              </div>
            </div>
            <div className="text-center">
              {/* <Link
              style={{ textDecoration: "none" }}
              className="nav-link"
              href="/contact-us"
            >
              <a
                href="/"
                className="btn-custom d-inline-block my-3 my-md-5"
                to="contact-us"
                style={{ textDecoration: "none" }}
              >
                Contact us
              </a>
            </Link> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlockChainDev;
