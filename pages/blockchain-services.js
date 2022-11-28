import React, { useEffect } from "react"
import ReactGA from "react-ga"
import BlockChainBanner from "../assets/images/Blockchain/blockChainBanner.svg"
import Etherium from "../assets/images/Blockchain/etherium.png"
import HyperLedger from "../assets/images/Blockchain/hyperledger.png"
import Corda from "../assets/images/Blockchain/corda.png"
import MultiChain from "../assets/images/Blockchain/multichain.png"
import EOS from "../assets/images/Blockchain/eos.png"
import Stellar from "../assets/images/Blockchain/Stellar.png"
import Tron from "../assets/images/Blockchain/tron.png"
import Head from "next/head"
import Footer from "../components/footers/FiveColumnWithInputForm.js"
import MainServices from "../components/MainServices"

// import { BlockChainAppPageItemToDisplay } from "../data/data";
import One from "../assets/images/Blockchain/one.png"
import Two from "../assets/images/Blockchain/two.png"
import Three from "../assets/images/Blockchain/three.png"
import Four from "../assets/images/Blockchain/four.png"
import Five from "../assets/images/Blockchain/five.png"
import Six from "../assets/images/Blockchain/six.png"
import Seven from "../assets/images/Blockchain/seven.png"
import Link from "next/link"
import Header from "../components/headers/light.js"
import CryptoWallet from "../assets/images/Blockchain/crypto.svg"
import NFTMarketplace from "../assets/images/Blockchain/nft-marketplace.png"
import DApps from "../assets/images/Blockchain/dapps.png"
import BlockChainSupply from "../assets/images/Blockchain/blockchain.png"
import PrivateBlockChain from "../assets/images/Blockchain/private.png"
import Features from "../components/features/ThreeColSimple.js"
import Features1 from "../components/features/ThreeColWithSideImage.js"

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
]

const BlockChainDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <Head>
          <title>
            BlockChain App Development Company | Developers | Whiten App
            Solutions
          </title>
          <meta
            name="description"
            content="Leading BlockChain App Development Company offers best Blockchain Services.
            We cover cryptocurrency, eWallets, and data science. Contact today to know more."
          />
          <meta
            name="keyword"
            content="blockchain app development company,
          blockchain developers,
          blockchain development,
          blockchain development companies,"
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
                <p className="text-sm lg:text-md tracking-wider font-bold text-[#5b5b5b]">
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
          )
        })}

        <div className="bg-[#efeefe] py-20 px-8">
          <div className="top text-center mb-[100px] mx-5">
            <h3 className="text-[45px] font-bold">
              Our Blockchain Development Process
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="hidden">01</span>
            </div>
            <div className=" relative flex items-center justify-center after:content-['']  after:absolute after:bg-secondary-700 after:left-2/4 after:h-full after:w-[2px] after:top-[68%]">
              <img src={One.src} alt="one" className=" z-10" />
            </div>
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[-48px] before:top-[50%] before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">Analysis</h5>
              <p className=" text-lg text-[#363636e6]">
                We take a deep dive into our client’s business and technical
                requirements that are essential to meet the specific
                requirements to build the blockchain product.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[100%] before:top-[50%] before:rotate-180 before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">
                Prototyping And Blueprints
              </h5>
              <p className=" text-lg text-[#363636e6]">
                As the first step to developing our designers and tech leads sit
                together to create a prototype of the blockchain system. At this
                stage, a clear understanding of the front-end backend and
                database interaction is depicted.
              </p>
            </div>
            <div className=" relative flex items-center justify-center after:content-['']  after:absolute after:bg-secondary-700 after:left-2/4 after:h-full after:w-[2px] after:top-[68%]">
              <img src={Two.src} alt="two" className=" z-10" />
            </div>
            <div>
              <span className="hidden">01</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="hidden">01</span>
            </div>
            <div className=" relative flex items-center justify-center after:content-['']  after:absolute after:bg-secondary-700 after:left-2/4 after:h-full after:w-[2px] after:top-[68%]">
              <img src={Three.src} alt="three" className=" z-10" />
            </div>
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[-48px] before:top-[50%] before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">Design</h5>
              <p className=" text-lg text-[#363636e6]">
                Our designer comes up with the most suitable prototype that
                shows an outline of all the UI and UX elements which is
                submitted before the client for approval.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[100%] before:top-[50%] before:rotate-180 before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">
                Block Chain Development
              </h5>
              <p className=" text-lg text-[#363636e6]">
                Our Highly Skilled team of Block Chain Developers create best
                performing blockchain product that yields quality and security.
              </p>
            </div>
            <div className=" relative flex items-center justify-center after:content-['']  after:absolute after:bg-secondary-700 after:left-2/4 after:h-full after:w-[2px] after:top-[68%]">
              <img src={Four.src} alt="Four" className=" z-10" />
            </div>
            <div>
              <span className="hidden">01</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="hidden">01</span>
            </div>
            <div className=" relative flex items-center justify-center after:content-['']  after:absolute after:bg-secondary-700 after:left-2/4 after:h-full after:w-[2px] after:top-[68%]">
              <img src={Five.src} alt="five" className=" z-10" />
            </div>
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[-48px] before:top-[50%] before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">Quality Assurance</h5>
              <p className=" text-lg text-[#363636e6]">
                Our team of blockchain developers and testers together work on
                the testing part of the Blockchain product to assure its quality
                of it. Both manual and automated testing for blockchain products
                has led us to deploy error-free solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[100%] before:top-[50%] before:rotate-180 before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">Deployment</h5>
              <p className=" text-lg text-[#363636e6]">
                By Following all the standard protocols in deploying blockchain
                solutions we make it easily accessible for all our client’s
                customers easily
              </p>
            </div>
            <div className=" relative flex items-center justify-center after:content-['']  after:absolute after:bg-secondary-700 after:left-2/4 after:h-full after:w-[2px] after:top-[68%]">
              <img src={Six.src} alt="Six" className=" z-10" />
            </div>
            <div>
              <span className="hidden">01</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="hidden">01</span>
            </div>
            <div className=" relative flex items-center justify-center ">
              <img src={Seven.src} alt="Seven" />
            </div>
            <div className="bg-white rounded-[30px] p-16 text-center max-w-[500px] m-auto relative  before:content-[''] before:absolute before:border-r-[50px] before:border-r-white before:border-y-[25px] before:border-y-transparent before:left-[-48px] before:top-[50%] before:translate-y-[-50%] before:h-[50px] before:w-[50px]">
              <h5 className="text-[25px] font-bold mb-4">
                Support and Maintenance
              </h5>
              <p className=" text-lg text-[#363636e6]">
                Scaling is inevitable for blockchain products, which is why
                provide post-delivery support and maintenance to blockchain
                solutions to assure smooth functioning
              </p>
            </div>
          </div>
        </div>

        {/* most trusted */}
        <div className=" py-20">
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
          <div className="flex justify-center flex-wrap">
            <div className="flex flex-col items-center m-5">
              <img src={Etherium.src} alt="Etherium" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Etherium
              </h5>
            </div>
            <div className="flex flex-col items-center m-5">
              <img src={HyperLedger.src} alt="Hyperledger" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Hyperledger
              </h5>
            </div>
            <div className="flex flex-col items-center m-5">
              <img src={Corda.src} alt="Corda" />
              <h5 className="mt-5 text-[25px] font-bold text-center">Corda</h5>
            </div>
            <div className="flex flex-col items-center m-5">
              <img src={MultiChain.src} alt="MultiChain" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Multichain
              </h5>
            </div>
            <div className="flex flex-col items-center m-5">
              <img src={EOS.src} alt="EOS" />
              <h5 className="mt-5 text-[25px] font-bold text-center">EOS</h5>
            </div>
            <div className="flex flex-col items-center m-5">
              <img src={Stellar.src} alt="Stellar" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Stellar
              </h5>
            </div>
            <div className="flex flex-col items-center m-5">
              <img src={Tron.src} alt="Tron" />
              <h5 className="mt-5 text-[25px] font-bold text-center">Tron</h5>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <a
              href="/contact-us"
              className="lg:mx-0 px-8 py-3 bg-primary-500 text-gray-100 hover:bg-secondary-700 hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlockChainDev
