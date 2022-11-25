import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import BannerImg from '../assets/images/NftMarketPlaceDev/nftMarketplace-banner.svg';
import CryptoCurrency from '../assets/images/NftMarketPlaceDev/cryptocurrency.png';
import Ethereum from '../assets/images/NftMarketPlaceDev/ethereum.png';
import Binance from '../assets/images/NftMarketPlaceDev/binance.png';
import Polygon from '../assets/images/NftMarketPlaceDev/polygon.png';
import Polkadot from '../assets/images/NftMarketPlaceDev/polkadot.png';
import Cardano from '../assets/images/NftMarketPlaceDev/cardano.png';
import Solana from '../assets/images/NftMarketPlaceDev/solana.png';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import MainServices from '../components/MainServices';
import Features from '../components/features/ThreeColSimple.js';
import Features1 from '../components/features/ThreeColWithSideImage.js';
import MintableImg from '../assets/images/NftMarketPlaceDev/mintable.png';
import OpenseaImg from '../assets/images/NftMarketPlaceDev/opensea.png';
import SuperRareImg from '../assets/images/NftMarketPlaceDev/superrare.png';
import RaribleImg from '../assets/images/NftMarketPlaceDev/rariable.png';
import NiftyImg from '../assets/images/NftMarketPlaceDev/nifty.png';

const NftMarkteplaceDevItemToDisplay = [
  {
    id: `1`,
    Imgurl: OpenseaImg,
    heading: `OpenSea Clone`,
    desc: `As one of the leading NFT (Non-fungible Token) Marketplace, Opensea holds a prominent future in blockchain technology. They have created a unique platform for digital trading goods called NFT. It lets the users use digital assets just as any physical goods and cryptocurrencies are used for every trade.`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: MintableImg,
    heading: `Mintable Clone`,
    desc: `Mintable is one of the top Non-Fungible (NFT) Marketplace where you can create, sell, and buy digital arts. It is built on top of Ethereum and the whole trade process is done through Blockchain Technology.`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: SuperRareImg,
    heading: `SuperRare clone`,
    desc: `Creating an NFT Marketplace for Creating, selling, buying and reselling digital art holds immense potential in the crypto sphere. By Utilizing Blockchain technology to create the NFT marketplace you place yourself in future. We offer SuperRare clones that function exactly as it.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: RaribleImg,
    heading: `Rarible Clone`,
    desc: `The Rarible Platform has let opened doors for thousands of artists to create and monetize their creations in a decentralized way. At the same time, Rarible amuses us with its revenue model that can help build a fortune in the coming years. Build an amusing NFT marketplace similar to Rarible with us today.`,
    textOnLeft: false,
  },
  {
    id: `5`,
    Imgurl: NiftyImg,
    heading: `Nifty Gateway Clone`,
    desc: `Nifty Gateway is one of the top NFT Makerplaces that utilized Blockchain technology to trade/auction digital assets called Nifties. The Nifty platform lets its users sell and buy Nifties without a middleman. By creating a Nifty Gateway clone you can enjoy various revenue streams including Royalties, Setup fee, Launching fee, and bundle fee.`,
    textOnLeft: true,
  },
];

const NftMarketplaceDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  const router = useRouter();

  const handleClick = (element, e) => {
    e.preventDefault();
    if (element.heading === 'OpenSea Clone') {
      router.push('/opensea-clone');
    } else if (element.heading === 'Mintable Clone') {
      router.push('/mintable-clone');
    }
  };
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
        <Head>
          <title>Nft Marketplace Development Company | NFT Developers</title>
          <meta
            name="description"
            content="At Whitelabel, we offer NFT Marketplaces services with top features and security that are aimed at boosting user interaction. Contact our NFT developers today."
          />
          <meta
            name="keyword"
            content="NFT Marketplace development, NFT developers, NFT services, NFT marketplace development company"
          />
        </Head>

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-32 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                Nft Marketplace
                <br /> Development Company
              </h1>
              <p className="my-4 text-base xl:text-lg">
                Join Hands with the world’s Leading NFT Marketplace Developers.
                We build authentic NFT Marketplaces and facilitate tokenization
                for all kinds of digital assets.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <BannerImg />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between max-w-screen-xl mx-auto py-8 pb-0 md:py-12 md:pb-24 lg:py-16 lg:pb-8  items-center`}
          >
            <div className=" flex-shrink-0 relative lg:mr-16 border border-[#f2f2f2] p-1">
              <img
                src={CryptoCurrency.src}
                alt="CryptoCurrency-image"
                className="w-full"
              />
            </div>

            <div className="mt-16 md:mt-0 mx-auto order-first md:order-last">
              <div className="lg:py-8 text-center md:text-left">
                <h2 className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight text-4xl sm:text-5xl tracking-wide text-center">
                  Set your foot in a promising future of Blockchain
                </h2>
                <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                  Decentralization coupled with the heavy monetization method is
                  what is NFT. The industry has paved the path for many
                  entrepreneurs and artists to claim the value of their products
                  and services without a middleman.
                </p>
                <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                  At Whitelabel, we create robust NFT Marketplaces with top
                  security and features that are aimed at boosting user
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center mb-5"></h2>
          {NftMarkteplaceDevItemToDisplay.map((element) => {
            return (
              <>
                <MainServices
                  heading={element.heading}
                  imageSrc={element.Imgurl.src}
                  description={element.desc}
                  textOnLeft={element.textOnLeft}
                />
                {/* <a
                  href="/"
                  className="btn-custom text-decoration-none mx-auto btn-size d-inline-block mt-2"
                  onClick={(e) => handleClick(element, e)}
                >
                  View Details
                </a> */}
              </>
            );
          })}
        </div>

        <div className=" pb-20">
          <Features
            heading="We build NFT Marketplaces in the following Blockchain"
            description=""
            linkText=""
            cards={[]}
          />

          <div className="flex justify-center flex-wrap">
            <div className="flex flex-col items-center m-5 mt-0">
              <img src={Ethereum.src} alt="Ethereum" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Ethereum
              </h5>
            </div>

            <div className="flex flex-col items-center m-5 mt-0">
              <img src={Binance.src} alt="Binance" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Binance Smart Chain
              </h5>
            </div>

            <div className="flex flex-col items-center m-5 mt-0">
              <img src={Polygon.src} alt="Polygon" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Polygon
              </h5>
            </div>

            <div className="flex flex-col items-center m-5 mt-0">
              <img src={Polkadot.src} alt="Polkadot" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Polkadot
              </h5>
            </div>

            <div className="flex flex-col items-center m-5 mt-0">
              <img src={Cardano.src} alt="Cardano" />
              <h5 className="mt-5 text-[25px] font-bold text-center">
                Cardano
              </h5>
            </div>

            <div className="flex flex-col items-center m-5 mt-0">
              <img src={Solana.src} alt="Solana" />
              <h5 className="mt-5 text-[25px] font-bold text-center">Solana</h5>
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
          {/* <div className="NftMarketplace">
          <div className="Dev EnterpriseDev"> */}
          {/* <section className="nft-development-service">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="top">
                  <h2>NFT MarketPlace Development Services</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="cnt">
                      <h4>NFT Marketplace Design and Development</h4>
                      <p>
                        We create both minimal value and full-functional NFT
                        marketplaces according to our client’s demands by
                        following ERC-271 and ERC-1155 standards. Our Platform
                        includes multiple revenue streams that can be utilized
                        for monetization.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt">
                      <h4>NFT Smart Contract Development</h4>
                      <p>
                        For Zero error contracts, we develop and audit NFT Smart
                        Contracts that assign ownership and manage transactions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt">
                      <h4>NFT Development</h4>
                      <p>
                        We create new SPL Tokens by tokenizing your digital
                        assets. High-quality and functional tokens build to meet
                        your business demands.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt">
                      <h4>NFT support and maintenance</h4>
                      <p>
                        We offer 24/7 support for your NFT marketplace to ensure
                        the proper functioning of the stores. We also stay
                        updated about the latest OS launches and news that helps
                        improve your platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

          {/* <section className="Art-Trading">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="top">
                  <h3>NFT Art Trading Platform</h3>
                </div>
                <div className="info">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="cnt">
                        <h5>Nft For Music</h5>
                        <p>
                          NFT for music is a welcoming platform for emerging
                          musical artists. It gives the independence of choosing
                          what to give away and the best passive income way. We
                          create NFT for music to help artists and musicians to
                          increase profits and reach a wider crowd.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cnt">
                        <h5>Nft For Art</h5>
                        <p>
                          A platform for rare collectables is famous among art
                          enthusiasts. We help create NFT art trading platforms
                          that enable exclusive art trade with custom features
                          supported.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cnt">
                        <h5>Nft For Sports</h5>
                        <p>
                          Indulge in trending sports collectables with our
                          Sports NFT marketplace. We support various Sports NFT
                          collectables including trading cards, Sports kits,
                          Sports moment clips and more.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cnt">
                        <h5>Gaming Nft Platforms</h5>
                        <p>
                          Create stunning NFT gaming platforms to Lure gamers
                          with earn while gaming strategy. We help you in
                          developing a great gaming experience with customized
                          virtual assets and give ownership of the in-game
                          assets to the gamer.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cnt">
                        <h5>Metaverse Nft Marketplace</h5>
                        <p>
                          We create NFt Marketplace exclusively for Metaverse
                          that supports virtual lands, Houses in-game assets and
                          other virtual collectables. Our experience in the
                          domain has helped us acquire knowledge in various
                          blockchain technologies that aid in designing and
                          developing premium metaverse NFT marketplaces
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          {/* </div>
        </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NftMarketplaceDev;
