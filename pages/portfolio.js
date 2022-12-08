import React from 'react';
import { PortfolioData } from '../helpers/utils';
import Head from 'next/head';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';

const portfolio = () => {
  return (
    <div id="portfolio">
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
      <div className="who-we-are-section">
        <div className="container-fluid">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="main_heading text-center">
              <h4>Our Portfolio</h4>
            </div>
            <div className="row">
              {PortfolioData.map((item, index) => {
                const { id, logo, url, type, message } = item;
                return (
                  <>
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-md-6 col-12 mb-4" key={id}>
                          <div className="img_section ">
                            {type.toLowerCase().includes('img') ? (
                              <div className="img-wrapper">
                                {/* <Loader /> */}
                                <img
                                  className="img-fluid"
                                  src={url.src}
                                  alt={url}
                                />
                              </div>
                            ) : (
                              <>
                                {/* <Loader /> */}
                                <video
                                  id="video-id-name"
                                  src={url}
                                  // controls
                                  loop
                                  autoPlay
                                  muted
                                />
                              </>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-4">
                          <div className="content_section">
                            <div className="logo-wrapper">
                              <img src={logo.src} alt={logo} />
                            </div>
                            <p>{message}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="row orderChange mb-4">
                          <div className="col-md-6 col-12">
                            <div className="content_section">
                              <div className="logo-wrapper">
                                <img src={logo.src} alt={logo} />
                              </div>
                              <p>{message}</p>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="img_section ">
                              {url.toLowerCase().includes('img') ? (
                                <div className="img-wrapper">
                                  {/* <Loader /> */}
                                  <img
                                    className="img-fluid"
                                    src={url}
                                    alt={url}
                                  />
                                </div>
                              ) : (
                                <>
                                  {/* <Loader /> */}
                                  <video
                                    id="video-id-name"
                                    src={url}
                                    // controls
                                    loop
                                    autoPlay
                                    muted
                                  />
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default portfolio;
