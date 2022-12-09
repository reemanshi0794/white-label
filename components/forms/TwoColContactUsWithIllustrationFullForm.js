import React, { useState } from 'react';
import { PrimaryButton as PrimaryButtonBase } from '../../components/misc/Buttons.js';
import ContactUsSrc from '../../assets/images/contact-us.png';
import Loader from '../../assets/images/loader.gif';

export default ({
  subheading = 'Contact Us',
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "Let's collaborate",
  submitButtonText = 'Send',
}) => {
  const webDevelopment = 'Web Development';
  const eCommerceDevelopment = 'eCommerce Development';
  const appDevelopment = 'App Development';
  const enterpriseSoftwares = 'Enterprise Softwares';
  const [contactInfo, setContactInfo] = useState({ service: webDevelopment });
  const [showLoader, setShowLoader] = useState(false);
  // This message will be displayed if form is submitted successfully or if an error occurrs.
  const [displayMessage, setDisplayMessage] = useState({
    message: '',
    type: '',
  });

  const handleChange = (key, value) => {
    setContactInfo({ ...contactInfo, [key]: value });
  };

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

  const emptyFieldValidationCheck =
    !contactInfo.name ||
    !contactInfo.email ||
    !contactInfo.phoneNumber ||
    !contactInfo.service;

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
        message: 'Plaese enter valid email ',
        type: 'error',
      });
      setShowLoader(false);
    }
    setContactInfo({ service: webDevelopment });
    event.preventDefault();
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto pb-10 pt-32">
        <div className="flex-shrink-0">
          <img src={ContactUsSrc.src} alt="contact-us" className="w-full" />
        </div>
        <div className={` md:mx-0 mt-16 md:mt-0 lg:mr-16 lg:order-first`}>
          <div className="lg:py-8 text-center md:text-left">
            {subheading && (
              <h5 className="font-bold text-primary-500 text-center md:text-left">
                {subheading}
              </h5>
            )}
            <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
              {heading}
            </h2>
            {description && (
              <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                {description}
              </p>
            )}
            <form
              action=""
              method="post"
              className="mt-8 md:mt-10 text-sm flex flex-col lg:max-w-sm mx-auto md:mx-0"
            >
              <input
                type="text"
                name="name"
                value={contactInfo.name || ''}
                placeholder="Full Name"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                required
                aria-describedby="emailHelp"
                onChange={(event) => handleChange('name', event.target.value)}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                required
                value={contactInfo.email || ''}
                placeholder="Email Address"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => handleChange('email', event.target.value)}
                autoComplete="off"
              />
              <input
                type="tel"
                name="phoneNumber"
                required
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                value={contactInfo.phoneNumber || ''}
                placeholder="Phone Number"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) =>
                  handleChange(
                    'phoneNumber',
                    event.target.value >= 0 ? event.target.value : 0
                  )
                }
                autoComplete="off"
              />
              <textarea
                style={{ resize: 'none' }}
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                name="message"
                required
                value={contactInfo.message || ''}
                placeholder="Message"
                id="exampleFormControlTextarea1"
                rows="2"
                onChange={(event) =>
                  handleChange('message', event.target.value)
                }
              />
              {showLoader ? (
                <div className="text-center loader py-2">
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
                <div className={`message-${displayMessage.type}`}>
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
              <PrimaryButtonBase
                className="inline-block mt-8"
                type="submit"
                onClick={handleSubmit}
                disabled={emptyFieldValidationCheck}
              >
                {submitButtonText}
              </PrimaryButtonBase>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
