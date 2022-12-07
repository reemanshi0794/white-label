import React from 'react';

const portfolio = () => {
  return (
    <div id="portfolio">
      <div className="who-we-are-section">
        <div className="container-fluid">
          <div className="col-lg-10 col-md-11 mx-auto">
            <div className="main_heading text-center">
              <h4>Our Portfolio</h4>
            </div>
            <div className="row">
              {/* {data.map((item, index) => {
                return (
                  <>
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-md-6 col-12 mb-4">
                          <div className="img_section ">
                            {item.type.toLowerCase().includes('img') ? (
                              <div className="img-wrapper">
                                <Loader />
                                <img
                                  className="img-fluid"
                                  src={item.url.src}
                                  alt={item.url}
                                />
                              </div>
                            ) : (
                              <>
                                <Loader />
                                <video
                                  id="video-id-name"
                                  src={item.url}
                                  // controls
                                  loop
                                  autoPlay
                                  muted
                                ></video>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-4">
                          <div className="content_section">
                            <div className="logo-wrapper">
                              <img src={item.logo.src} alt={item.logo} />
                            </div>
                            <p>{item.message}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="row orderChange mb-4">
                          <div className="col-md-6 col-12">
                            <div className="content_section">
                              <div className="logo-wrapper">
                                <img src={item.logo.src} alt={item.logo} />
                              </div>
                              <p>{item.message}</p>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="img_section ">
                              {item.url.toLowerCase().includes('img') ? (
                                <div className="img-wrapper">
                                  <Loader
                                  // customStyle={{
                                  //   position: "absolute",
                                  //   top: "47%",
                                  //   left: "47%",
                                  //   color: "transparent",
                                  // }}
                                  />
                                  <img
                                    className="img-fluid"
                                    src={item.url}
                                    alt={item.url}
                                  />
                                </div>
                              ) : (
                                <>
                                  <Loader
                                  // customStyle={{
                                  //   position: "absolute",
                                  //   top: "47%",
                                  //   left: "47%",
                                  //   color: "transparent",
                                  // }}
                                  />
                                  <video
                                    id="video-id-name"
                                    src={item.url}
                                    // controls
                                    loop
                                    autoPlay
                                    muted
                                  ></video>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
