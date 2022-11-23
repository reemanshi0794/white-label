import React, { useEffect } from "react";
import ReactGA from "react-ga";
// import AppBanner from '../assets/images/AppDevelopment/Appbanner.svg';
import MobileApp from "../assets/images/AppDevelopment/mobileapp1.png";
import Android from "../assets/images/AppDevelopment/icon/android.png";
import Apple from "../assets/images/AppDevelopment/icon/apple.png";
import ReactNative from "../assets/images/AppDevelopment/icon/reactNative.png";
import Flutter from "../assets/images/AppDevelopment/icon/Flutter.png";
import Xamarin from "../assets/images/AppDevelopment/icon/Xamarin.png";
import Ecommerce from "../assets/images/AppDevelopment/icon/ecommerce.svg";
import Education from "../assets/images/AppDevelopment/icon/education.svg";
import Travel from "../assets/images/AppDevelopment/icon/travel.svg";
import Fintech from "../assets/images/AppDevelopment/icon/fintech.svg";
import HealthCare from "../assets/images/AppDevelopment/icon/healthcare.svg";
import Fitness from "../assets/images/AppDevelopment/icon/fitness.svg";
import Business from "../assets/images/AppDevelopment/icon/business.png";
import Social from "../assets/images/AppDevelopment/icon/social.png";
import FoodBag from "../assets/images/AppDevelopment/icon/foodbag.png";
import WhiteLablePartner from "../assets/images/AppDevelopment/whitelable-partner.png";
import HireDevloper from "../assets/images/AppDevelopment/hireDev.png";
import Head from "next/head";
import Header from "../components/headers/light.js";

// import Link from 'next/link';

const AppDevelopment = () => {
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
      <div className="Dev AppDev">
        <div className="heroBanner">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="row heroBannerInner">
              <div className="col-lg-6">
                <div className="cnt">
                  <h1>Leading Mobile App Development Company</h1>
                  <p className="me-0">
                    The potential an app withhold is our key to developing
                    stunning mobile applications.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <div className="image">
                  <img
                    src={AppBanner.src}
                    alt="WebBanner"
                    className="img-fluid"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-10 col-md-11 mx-auto">
          <div className="mainHeading">
            <h3>Our Apps are what you need!</h3>
            <p>
              We have delivered 100+ mobile applications for Android and iOS
              Platforms. For the past 10+ years, White Label has been engaged in
              developing and delivering the most exquisite mobile apps that have
              over 100k+ end users.
            </p>
            <p className="short-txt">
              We are all ears for your brilliant app idea of yours.
            </p>
            {/* <Link
              legacyBehavior
              style={{ textDecoration: 'none' }}
              className="nav-link"
              href="/contact-us"
            >
              <a
                href="/"
                className="btn-custom text-decoration-none mx-auto btn-size"
              >
                Contact Us
              </a>
            </Link> */}
          </div>
          {/* mobileApp  */}
          <section className="MobileApps">
            <div className="row align-items-center flex-column-reverse flex-lg-row text-center text-lg-start mx-0">
              <div className="col-12 col-lg-6">
                <div className="cnt">
                  <h2>
                    <span className="d-lg-block"> Custom Mobile apps</span>
                    <span> Not Just for businesses</span>
                  </h2>
                  <p className="txtone">
                    People have the idea that apps are just for business. Let us
                    stop you there. Mobile apps are meant for all domains. We
                    just do not build apps for business, but for domains with a
                    variety of purposes. We offer mobile app development
                    services for brands, Diverse organizations, individuals,
                    startups, businesses and more.
                  </p>
                  <p className="txttwo">
                    A team of mobile app developers who are well-equipped with
                    futuristic technical skills works behind every app that
                    leaves our doors. We ensure reliability, scalability and
                    compactness in all the apps that are developed at White
                    Label
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="image text-center">
                  <img
                    src={MobileApp.src}
                    alt="MobileApp"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* appscards */}
          <section className="appSec">
            <div className="row mx-0">
              <div className="col-12 col-lg-6">
                <div className="card bluebg mb-4">
                  <div className="icons">
                    <img
                      src={Android.src}
                      alt="Android"
                      className="androidIcon"
                    />
                    <img src={Apple.src} alt="Apple" className="appleIcon" />
                  </div>
                  <div className="cnt">
                    <h5>Native App Development</h5>
                    <p>
                      We build platform-specific apps for Android and iOS
                      devices, with the best performance, security and user
                      experience. Native app development is a good choice when
                      you know the most used devices of your users.
                    </p>
                    {/* <Link
                      legacyBehavior
                      style={{ textDecoration: 'none' }}
                      className="nav-link"
                      href="/contact-us"
                    >
                      <button className="btn">Get in touch</button>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card orangebg">
                  <div className="icons">
                    <img src={ReactNative.src} alt="ReactNative" />
                    <img src={Flutter.src} alt="Apple" className="Flutter" />
                    <img src={Xamarin.src} alt="Apple" className="Xamarin" />
                  </div>
                  <div className="cnt">
                    <h5>Cross-Platform Application</h5>
                    <p>
                      Develop apps for both Android and iOS platforms in a
                      single go. We help you build your app by saving time and
                      money without compromising on the performance and features
                      of the mobile app.
                    </p>
                    {/* <Link
                      style={{ textDecoration: 'none' }}
                      className="nav-link"
                      href="/contact-us"
                    >
                      <a href="/" className="btn">
                        Let’s talk
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* industry-wise  */}
          <section className="industryWise">
            <div className="top-heading">
              <h3>Industry-wise App development Solutions</h3>
            </div>
            {/* 1 */}
            <div className="row mb-4 mx-0">
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Ecommerce.src} alt="Ecommerce" />
                  </div>
                  <h5>Ecommerce App</h5>
                  <p>
                    Are you looking to engage and retain your eCommerce website
                    visitors? We build the most advanced eCommerce mobile apps
                    with features that assure 100% conversion.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Education.src} alt="Education" />
                  </div>
                  <h5>Educational App</h5>
                  <p>
                    Power up the future with us. We are so thrilled about
                    delivering the best for the education system with
                    top-performing mobile apps. Partner with us to develop
                    online education apps with live options, exams and eLibrary
                    features.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Travel.src} alt="Travel" />
                  </div>
                  <h5>Travel And Leisure</h5>
                  <p>
                    Don’t just settle for booking apps, we build whole package
                    apps that come in handy for travellers who love having
                    leisure time. Create a travel booster app with the most
                    intimidating features and experience.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="row mb-4 mx-0">
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Fintech.src} alt="Fintech" />
                  </div>
                  <h5>Fintech</h5>
                  <p>
                    Create the most frictionless banking experience for your
                    customers. Our Fintech app solutions are built by aiming for
                    smooth transaction processes. We enable 2 step
                    authentication for secured transactions and much more.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={HealthCare.src} alt="HealthCare" />
                  </div>
                  <h5>Healthcare</h5>
                  <p>
                    Make it much easier for the patient- Doctor interactions. We
                    create healthcare apps for hospitals and clinics that help
                    improve our healthcare system. Patient records, appointment
                    booking, medical prescription, Pharmacy access, nearest
                    doctor locator, and ambulance calls are a few of our
                    Healthcare app features.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Fitness.src} alt="Fitness" />
                  </div>
                  <h5>Fitness And Lifestyle</h5>
                  <p>
                    We believe in a healthy tomorrow, and we are not that far
                    from it. Our fitness and lifestyle app lets you present
                    great workout and diet plans to embark on a fitness journey.
                    Our features include online training sections, a fitness
                    tracker and smart gadget integration.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="row mx-0">
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Business.src} alt="Business" />
                  </div>
                  <h5>Business</h5>
                  <p>
                    Take a leap from the traditional business method.
                    Modernizing your business comes with added benefits. This
                    includes wider customer acquisition to brand building. At
                    White Label, we create business-related applications to
                    increase productivity, and revenue and stay ahead of the
                    competition.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={Social.src} alt="Social" />
                  </div>
                  <h5>Social Media</h5>
                  <p>
                    The benefits of a social media app are well underwood these
                    days. It opens up gates to the best networking opportunities
                    that help build a network, and increase credibility, brand
                    awareness and revenue.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="apps">
                  <div className="icon">
                    <img src={FoodBag.src} alt="FoodBag" />
                  </div>
                  <h5>Food Delivery</h5>
                  <p>
                    The Food delivery system has been a hit in the past few
                    years and we have contributed so much by developing food
                    delivery apps. Build the feature-rich food delivery apps for
                    users, delivery persons and merchants with us.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* expertSec */}
        <section className="expertSec">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="cnt">
              <h3>Talk to our App Experts</h3>
              <p>
                The multi-platform compatibility is the most driving feature of
                cross-platform apps.
              </p>
              {/* <Link
                style={{ textDecoration: 'none' }}
                className="nav-link"
                href="/contact-us"
                legacyBehavior
              >
                <a href="/" className="todayContact">
                  Contact Us Today!
                </a>
              </Link> */}
            </div>
          </div>
        </section>
        {/* White Labelpartner */}
        <div className="col-lg-10 col-md-11 mx-auto">
          <section className="whitelabel-partners">
            <div className="row align-items-center flex-column-reverse flex-lg-row text-center text-lg-start mx-0">
              <div className="col-lg-6">
                <div className="cnt">
                  <h3>White Label as your mobile app development partners</h3>
                  <p>
                    As the Leading Highperformace app developer, White Label has
                    always been able to deliver the best app solutions for all
                    our client’s requirements. Our pricing has always been a
                    highlight. Prices are unmatched for our services, but this
                    doesn’t mean we compromise in quality of our service. We
                    just happen to be reasonable.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image">
                  <img
                    src={WhiteLablePartner.src}
                    alt="WhiteLablePartner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* hiredevlopers */}
        <section className="hire-developers">
          <div className="top-heading">
            <h3>Hire White Label App Developers for your team</h3>
          </div>
          <div className="row align-items-center text-center text-lg-start mx-0">
            <div className="col-lg-6">
              <div className="image">
                <img
                  src={HireDevloper.src}
                  alt="HireDevloper"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cnt">
                <ul className="list-unstyled">
                  <li>Need to upscale your Mobile App?</li>
                  <li>Few developers would Do? </li>
                  <p className="txt1">
                    <p>Hire the top app developers of White Label</p> and get
                    your project Done in no time.
                  </p>
                  <p className="txt2">
                    Hire the top app developers of White Label and get your
                    project Done in no time.
                  </p>
                </ul>
                {/* <Link
                  legacyBehavior
                  style={{ textDecoration: 'none' }}
                  className="nav-link"
                  href="/contact-us"
                >
                  <a href="/" className="btn-custom letConnect">
                    Let’s Connect
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppDevelopment;
