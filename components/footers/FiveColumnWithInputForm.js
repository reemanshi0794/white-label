import React, { useState } from "react";
import FacebookIcon from "../../assets/images/facebook-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import YoutubeIcon from "../../assets/images/youtube-icon.svg";
import LogoImage from "../../assets/images/logo.svg";

export default () => {
  const [showLoader, setShowLoader] = useState(false);
  // This message will be displayed if form is submitted successfully or if an error occurrs.
  const [displayMessage, setDisplayMessage] = useState({
    message: "",
    type: "",
  });

  const sendMail = () => {
    return new Promise((resolve, reject) => {
      try {
        if (!contactInfo) return;
        fetch("https://email-innow8.herokuapp.com/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              to: ["kapilbindal1@gmail.com"],
              from: "contact@innow8apps.com",
              subject: "contact form White Label",
              text: JSON.stringify(contactInfo),
              htmlText: JSON.stringify(contactInfo),
            } || ""
          ),
        })
          .then((res) => {
            console.log("result: ", res);
            resolve();
          })
          .catch((error) => {
            console.log("send mail api error", error);
            reject();
          });
      } catch (error) {
        console.log("send mail try catch error", error);
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
    addContactInfo()
      .then((res) => {
        setDisplayMessage({
          message: "** Submitted successfully **",
          type: "success",
        });
        setShowLoader(false);
        setTimeout(() => setDisplayMessage({ message: "", type: "" }), 2000);
      })
      .catch((err) => {
        setDisplayMessage({
          message: "** An error occurred **",
          type: "error",
        });
        setShowLoader(false);
        setTimeout(() => setDisplayMessage({ message: "", type: "" }), 2000);
      });
    event.preventDefault();
  };
  return (
    <div className="relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto relative z-10 pl-12">
        <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Main</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="/Blog"
                >
                  Blog
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Support
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Product</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Log In
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Personal
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Business
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Press</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Logos
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Events
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Stories
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Office
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold">Legal</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  GDPR
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300"
                  href="#"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12 text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12">
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
          </div>
        </div>
        <div className="my-16 border-b-2 border-gray-300 w-full" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-center md:justify-start">
            <img className="w-8" src={LogoImage.src} />
            <h5 className="ml-2 text-xl font-black tracking-wider text-gray-800">
              Whiten App Solutions Inc.
            </h5>
          </div>
          <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500">
            &copy; 2022 Whiten App Solutions Inc. All Rights Reserved.
          </p>
          <div className="mt-8 md:mt-0 flex">
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://facebook.com"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://twitter.com"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              className="cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0"
              href="https://youtube.com"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
