import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import DesignBanner from '../assets/images/DesignBanner.png';
import Agile from '../assets/images/EcommerceDev/icons/AgileApproach.png';
import Platform from '../assets/images/EcommerceDev/icons/platformIndep.png';
import BestUi from '../assets/images/EcommerceDev/icons/bestUi.png';
import FeatureRich from '../assets/images/EcommerceDev/icons/featureRich.png';
import TechStack from '../assets/images/EcommerceDev/icons/besttechstack.png';
import B2bDesign from '../assets/images/B2bDesign.png';
import B2cDesign from '../assets/images/B2cDesign.png';
import MultiVenderDesign from '../assets/images/MultiVenderDesign.png';
import CMSDesign from '../assets/images/CMSDesign.png';
import MigrationDesign from '../assets/images/MigrationDesign.png';
import ApiIntegrationDesign from '../assets/images/ApiIntegrationDesign.png';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import MainServices from '../components/MainServices';
import Features from '../components/features/ThreeColSimple.js';

const DesignServicePageItemToDisplay = [
  {
    id: `1`,
    Imgurl: B2cDesign,
    heading: `Static Website Design`,
    desc: `Our Static website solution packages are utilized by startups and individuals to display simple information regarding their works and solutions. We make engaging and simple static designs that help you give the best impression..`,
    textOnLeft: true,
  },
  {
    id: `2`,
    Imgurl: B2bDesign,
    heading: `Dynamic Website Design`,
    desc: `We identify your requirements and create effective web solutions with an easy content management system. Be it a blogging site, News site or business website, we help you easily kick start your website using open source technologies.`,
    textOnLeft: false,
  },
  {
    id: `3`,
    Imgurl: MultiVenderDesign,
    heading: `Responsive Website Design`,
    desc: `Create designs that are compatible with any browser and screen resolution. We help you turn your website visitors into recurring customers with the best Responsive designs.`,
    textOnLeft: true,
  },
  {
    id: `4`,
    Imgurl: CMSDesign,
    heading: `Ecommerce Web Portal`,
    desc: `Captivating eCommerce store to enhance the shopping experience. We offer eCommerce web design and development by connecting the latest technologies to fulfil your eCommerce business requirements.`,
    textOnLeft: false,
  },
  {
    id: `5`,
    Imgurl: MigrationDesign,
    heading: `Custome Web Design`,
    desc: `Strengthen your brand’s reputation with our custom web designing service. We create search engine-friendly web designs that are scalable and user friendly.`,
    textOnLeft: true,
  },
  {
    id: `6`,
    Imgurl: ApiIntegrationDesign,
    heading: `Customized Template Design`,
    desc: `For user convenience, we come with the best-customized templates that let you enjoy Sharp looking at websites and logos`,
  },
];

const EcommerseCards = [
  {
    imageSrc: Agile,
    title: 'Agile Approach',
    description:
      ' Our Agile Development method brings the best in less time helping our clients launch their eCommerce platforms in no time.',
  },
  {
    imageSrc: Platform,
    title: 'Platform Independent',
    description:
      'All our eCommerce web solutions are made to adapt the  screen and features of all types of devices making them  usable on multiple platforms with consistency. ',
  },
  {
    imageSrc: BestUi,
    title: 'Best User Interface',
    description:
      'We deliver all our eCommerce solutions with top-notch UI/UX designs to assure the best user experience. ',
  },
  {
    imageSrc: FeatureRich,
    title: 'Feature-rich',
    description:
      'We never stop upgrading our feature support as we believe one factor for the best-performing website is evaluated by the feature it supports.',
  },
  {
    imageSrc: TechStack,
    title: 'Best Technology Stacks',
    description:
      'As the tech stack is the foundation of any software, we make sure that we use only the best-suited technologystack for our eCommerce solutions. This helps us come up with the best architecture and layout for your eCommerce needs.',
  },
];

const EcommerceDev = () => {
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
          <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pt-32 md:pt-32">
            <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
              <h1 className="font-extrabold text-[22px] md:text-3xl 2xl:text-5xl leading-tight">
                UI and UX
                <br /> Design Company
              </h1>
              <p className="my-4 text-base xl:text-lg">Designs that speak</p>
              <p className="my-2 text-sm md:text-base 2xl:text-lg lg:pr-[132px] font-medium leading-relaxed text-secondary-100">
                Get your website designed by world-class web designers.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
              <div className="flex justify-center lg:justify-end items-center">
                <img src={DesignBanner.src} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Features
          heading="What We Do?"
          description="We at Innow8 Apps design Websites with relinquishing looks. Our intuitive designs have helped 100+ customers achieve their goals and yearly targets."
          linkText=""
          cards={[]}
        />

        <div>
          <h1 className="uppercase tracking-widest font-extrabold text-center text-2xl 2xl:text-4xl">
            Website Designing Services We Offer
          </h1>
          {DesignServicePageItemToDisplay.map((element) => {
            return (
              <MainServices
                heading={element.heading}
                imageSrc={element.Imgurl.src}
                description={element.desc}
                textOnLeft={element.textOnLeft}
              />
            );
          })}
        </div>

        {/* solution-offer  */}
        {/* <section className="soultion-offer">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="top">
              <h3>Solutions that we offer to run your website successfully</h3>
              <p>
                For user convenience, we come with the best-customized templates
                that let you enjoy Sharp looking at websites and logos
              </p>
            </div>
            <div className="row mx-0 mb-0 mt-5 flex-wrap justify-content-center">
              <Slider {...settings}>
                
                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img src={ContentWriting.src} alt="ContentWriting" />
                      <h5>Content Writing</h5>
                      <p>
                        A website with SEO optimized and reader-friendly website
                        is essential for any business. We help you create
                        stunning content and copywriting to stay out of the
                        crowd. Partnering with us will remove your weight in
                        optimizing and ranking your website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img src={LogoDesign.src} alt="LogoDesign" />
                      <h5>Logo Design</h5>
                      <p>
                        A logo is a significant foundation of your business. We
                        create logos that have premium look and feel that can
                        potentially uplift your brand value. Our logo creation
                        and redesign services add value to your business and can
                        help you catch your customer’s attention globally.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img src={VideoProduction.src} alt="VideoProduction" />
                      <h5>Video Production</h5>
                      <p>
                        As a leading and best marketing strategy for businesses,
                        creating videos in your niche can help boost
                        conversions. Our team of Videographers and
                        cinematographers create tutorials and marketing videos
                        for our client’s websites that can be shared in various
                        media.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img src={Seo.src} alt="Seo" />
                      <h5>Search engine optimization</h5>
                      <p>
                        Ranking your website in search engines is very important
                        as it is how you gain new visitors online. Prioritizing
                        the website’s quality and Ranking metrics are done at
                        Whitelabel to rank your website for your intended
                        audience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img src={Conversation.src} alt="Conversation" />
                      <h5>Conversion Rate Optimization</h5>
                      <p>
                        Optimizing your website in a way to convert your
                        website, visitors, into potential customers is vital.
                        Our team helps in optimizing the website speed and
                        implementing smooth navigation followed by a call to
                        action to ensure conversions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img src={WebsiteAnalysis.src} alt="WebsiteAnalysis" />
                      <h5>Website Analysis</h5>
                      <p>
                        One main module in website designing includes website
                        analysis. It helps find breaches and threats to your
                        website and provides solutions that strengthen the
                        performance of the site. Consequent SEO audits,
                        competitor analysis and website traffic and performance
                        are done to improve the overall performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4">
                  <div className="cardSol">
                    <div className="cnt">
                      <img
                        src={WebsiteMaintaince.src}
                        alt="WebsiteMaintaince"
                      />
                      <h5>Website Maintenance</h5>
                      <p>
                        A website needs continuous monitoring and maintenance to
                        keep up its performance. We conduct regular site
                        checkups to analyse maintenance requirements. This
                        boosts the site’s security, and enhances the user
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="text-center">
              <Link
                style={{ textDecoration: 'none' }}
                className="nav-link"
                href="/contact-us"
              >
                <button className="btn connect-btn">Let’s Connect</button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* why-choose  */}
        {/* <section className="why-choose">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="top">
              <h3>Why Choose Whitelabel as your website design partner?</h3>
            </div>
            <div className="row mx-0 mb-0 mt-4 flex-wrap justify-content-center">
              <div className="col-lg-6">
                <div className="cardSol">
                  <div className="cnt">
                    <h5>Client-Centred Approach</h5>
                    <p>
                      It is our client’s call to finalize the product. Our
                      customer success team consists of Project managers and
                      business analysts that help you stay in the loop. Every
                      critical choice is passed through our clients ensuring
                      100% transparency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cardSol">
                  <div className="cnt">
                    <h5>
                      Direct Communication With Website Experts And Developers
                    </h5>
                    <p>
                      Discuss your thoughts and ideas directly with our top team
                      members. Regular meetings and brainstorming sections are
                      conducted to improve the productivity among our developers
                      and our clients are welcomed to share their thoughts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cardSol">
                  <div className="cnt">
                    <h5>Platform Independent Websites</h5>
                    <p>
                      Customer behaviour is so unpredictable. That said,
                      building a website that is sustainable for any change
                      requires skill. At Whitelabel, we create websites that
                      perform well regardless of the device and search engines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="cardSol">
                  <div className="cnt">
                    <h5>Futuristic Design</h5>
                    <p>
                      We take charge of developing and designing websites that
                      are future-proof. Staying up to date with design and
                      responsiveness is critical for any website. Our Website
                      design solutions are 100% scalable as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                style={{ textDecoration: 'none' }}
                className="nav-link"
                href="/contact-us"
              >
                <button className="btn connect-btn my-3 my-lg-5">
                  Call Us Today
                </button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* <div className="EcommerceDev">
          <div className="Dev EnterpriseDev">
            <section className="well-know">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="row infoCards m-0">
                  <div className="top">
                    <h3>We are well-known for…</h3>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard darkorange">
                      <h4>Domain experts</h4>
                      <p>
                        We have been Serving the eCommerce Domain for a long
                        time. This has exposed us to challenges that have led us
                        to mould into the best eCommerce Developers.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard golden">
                      <h4>Agile Work Flow</h4>
                      <p>
                        From prototype building to delivery of the product, we
                        follow an agile methodology that served us with superior
                        quality, control, satisfaction and reduced risk.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard golden ">
                      <h4>Timely delivery</h4>
                      <p>
                        Time is money, For us and as well as for our customers.
                        We get things are done within the estimated time that
                        was handed over to our clients at the beginning of the
                        project.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cnt infoCard darkorange">
                      <h4>Post delivery support and Maintenance</h4>
                      <p>
                        We know the game begins when the store is up and
                        running. To assure smooth running and scaling we provide
                        24/7 support and extended maintenance service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default EcommerceDev;
