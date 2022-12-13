import React, { useState } from 'react';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import YoutubeIcon from '../../assets/images/youtube-icon.svg';
import LinkedinWhite from '../../assets/images/LinkedinWhite.svg';
import InstagramWhite from '../../assets/images/InstagramWhite.svg';
import Loader from '../../assets/images/loader.gif';

export default () => {
  const [showLoader, setShowLoader] = useState(false);
  // This message will be displayed if form is submitted successfully or if an error occurrs.
  const [displayMessage, setDisplayMessage] = useState({
    message: '',
    type: '',
  });
  const [contactInfo, setContactInfo] = useState({ email: '' });

  const sendMail = () => {
    return new Promise((resolve, reject) => {
      try {
        if (!contactInfo) return;
        fetch(
          'https://ce05vhnu2c.execute-api.ap-south-1.amazonaws.com/dev/sendEmail',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                projectName: 'Whiten-App Solutions',
                to: ['kapilbindal1@gmail.com'],
                from: 'contact@innow8apps.com',
                subject: 'contact form Whiten-App Solutions',
                text: JSON.stringify(contactInfo),
                htmlText: JSON.stringify(contactInfo),
              } || ''
            ),
          }
        )
          .then((res) => {
            console.log('result: ', res);
            resolve();
          })
          .catch((error) => {
            console.log('send mail api error', error);
            reject();
          });
      } catch (error) {
        console.log('send mail try catch error', error);
        reject();
      }
    });
  };

  //API to save enterred client data
  const addContactInfo = async () => {
    return sendMail();
    // const response = await fetch(
    //   "https://afternoon-sierra-04103.herokuapp.com/email",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(contactInfo),
    //   }
    // );
    // return response.json();
  };

  const handleSubmit = (event) => {
    setShowLoader(true);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (contactInfo.email.match(validRegex)) {
      addContactInfo()
        .then((res) => {
          setDisplayMessage({
            message: 'Submitted successfully',
            type: 'success',
          });
          setShowLoader(false);
          setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
          setContactInfo({ email: '' });
        })
        .catch((err) => {
          setDisplayMessage({
            message: 'An error occurred',
            type: 'error',
          });
          setShowLoader(false);
          setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
        });
    } else {
      setDisplayMessage({
        message: 'Invalid Email',
        type: 'error',
      });
      setShowLoader(false);
    }
    event.preventDefault();
  };

  return (
    <div className="relative bg-gray-200 text-gray-700 px-8 py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
          {/* <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12 text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12">
            <div className="max-w-sm mx-auto lg:mx-0 ">
              <h5 className="uppercase font-bold">
                Subscribe to our Newsletter
              </h5>
              <p className="mt-2 lg:mt-6 text-sm font-medium text-gray-600">
                We deliver high quality blog posts written by professionals
                weekly. And we promise no spam.
              </p>
              <form
                className="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0"
                method="get"
                action="#"
              >
                <input
                  className="bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full"
                  type="email"
                  placeholder="Your Email Address"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ email: e.target.value })}
                />
                {showLoader ? (
                  <div className="text-center loader py-2">
                    <div
                      className="spinner-border text-secondary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <div className={`message-${displayMessage.type}`}>
                    <span>{displayMessage.message}</span>
                  </div>
                )}
                <button
                  className="mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 font-bold bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200   focus:outline-none transition duration-300"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div> */}
        </div>
        {/* <div className="my-16 border-b-2 border-gray-300 w-full" /> */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* <div className="flex items-center justify-center md:justify-start">
            <img className="w-8" src={LogoImage.src} />
            <h5 className="ml-2 text-xl font-black tracking-wider text-gray-800">
              Whiten App Solutions Inc.
            </h5>
          </div> */}

          {/* <div className="flex items-center justify-center md:justify-start">
            
            <LogoSVG alt="logo" className="mr-3" />
          </div> */}
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto  text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12">
            <div className="max-w-sm mx-auto lg:mx-0 ">
              <h5 className="uppercase font-bold">
                Subscribe to our Newsletter
              </h5>
              <p className="mt-2 lg:mt-6 text-sm font-medium text-gray-600">
                We deliver high quality blog posts written by professionals
                weekly. And we promise no spam.
              </p>

              <form
                className="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0"
                method="get"
                action="#"
              >
                <input
                  className="bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full"
                  type="email"
                  placeholder="Your Email Address"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ email: e.target.value })}
                />

                <button
                  className="flex items-center w-[260px] mt-4 sm:mt-0 w-full rounded sm:rounded-l-none px-8 py-3 font-bold bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200   focus:outline-none transition duration-300"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </form>

              {showLoader ? (
                <div className="text-center flex items-center justify-center loader py-2">
                  <div className="spinner-border text-secondary" role="status">
                    <img
                      src={Loader.src}
                      alt="loader"
                      width="30"
                      className="mr-8"
                    />
                  </div>
                </div>
              ) : (
                <div className={`message-${displayMessage.type} mt-3`}>
                  <span
                    className={
                      displayMessage.message === 'Submitted successfully'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {displayMessage.message}
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500">
            &copy; 2022 Whiten App Solutions Inc. All Rights Reserved.
          </p>
          <div className="mt-8 md:mt-0 flex">
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://www.facebook.com/profile.php?id=100088241919758"
              target="_blank"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://www.linkedin.com/company/whiten-app-solutions/"
              target="_blank"
            >
              <LinkedinWhite className="w-4 h-4" />
            </a>
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://www.instagram.com/whiten_apps/"
              target="_blank"
            >
              <InstagramWhite className="w-4 h-4" />
            </a>
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://twitter.com/WhitenApps"
              target="_blank"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://www.youtube.com/@whitenappssolutions"
              target="_blank"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
