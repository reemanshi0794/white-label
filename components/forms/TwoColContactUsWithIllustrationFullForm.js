import React, { useState, useEffect } from 'react';
import { PrimaryButton as PrimaryButtonBase } from '../../components/misc/Buttons.js';
import ContactUsSrc from '../../assets/images/contact-us.png';
import Loader from '../../assets/images/loader.gif';
import Validation from '../Validation';

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
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [showLoader, setShowLoader] = useState(false);
  // This message will be displayed if form is submitted successfully or if an error occurrs.
  const [displayMessage, setDisplayMessage] = useState({
    message: '',
    type: '',
  });
  const [validations, setValidations] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [isValidation, setIsValidation] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'phoneNumber') {
      if (e.target.value >= 0 && e.target.value < 9999999999) {
        setContactInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else {
      setContactInfo((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
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

  useEffect(() => {
    const phoneRegex = '^\\d{10}$';
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (isValidation && !showLoader) {
      let errors = { ...validations };
      if (!contactInfo.name?.trim()) errors.name = 'First name is required';
      else errors.name = '';
      if (!contactInfo.phoneNumber?.trim())
        errors.phoneNumber = 'Number is required';
      else if (!contactInfo.phoneNumber.match(phoneRegex))
        errors.phoneNumber = 'Enter 10 digit number';
      else errors.phoneNumber = '';
      if (!contactInfo.email?.trim()) errors.email = 'Email is required';
      else if (!contactInfo.email.match(validRegex))
        errors.email = 'Invalid Email ID';
      else errors.email = '';

      setValidations(errors);
    }
  }, [
    isValidation,
    contactInfo.name,
    contactInfo.phoneNumber,
    contactInfo.email,
    showLoader,
  ]);

  //API to save enterred client data
  const addContactInfo = async () => {
    return sendMail();
  };

  const emptyFieldValidationCheck =
    !contactInfo.name ||
    !contactInfo.email ||
    !contactInfo.phoneNumber ||
    !contactInfo.service;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValidation(true);
    const phoneRegex = '^\\d{10}$';
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (
      contactInfo.name?.trim() !== '' &&
      contactInfo.phoneNumber?.trim() !== '' &&
      contactInfo.email?.trim() !== '' &&
      contactInfo.email.match(validRegex) &&
      contactInfo.phoneNumber.match(phoneRegex)
    ) {
      setShowLoader(true);
      addContactInfo()
        .then((res) => {
          setDisplayMessage({
            message: 'Submitted successfully',
            type: 'success',
          });
          setShowLoader(false);
          setIsValidation(false);

          setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
          setContactInfo({
            service: webDevelopment,
            name: '',
            phoneNumber: '',
            email: '',
          });
        })
        .catch((err) => {
          setDisplayMessage({
            message: 'An error occurred',
            type: 'error',
          });
          setShowLoader(false);
          setIsValidation(false);

          setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
          setContactInfo({
            service: webDevelopment,
            name: '',
            phoneNumber: '',
            email: '',
          });
        });
    } else {
      let errors = { ...validations };
      if (!contactInfo.name?.trim()) errors.name = 'First name is required';
      else errors.name = '';
      if (!contactInfo.phoneNumber?.trim())
        errors.phoneNumber = 'Number is required';
      else if (!contactInfo.phoneNumber.match(phoneRegex))
        errors.phoneNumber = 'Enter 10 digit number';
      else errors.phoneNumber = '';
      if (!contactInfo.email?.trim()) errors.email = 'Email is required';
      else if (!contactInfo.email.match(validRegex))
        errors.email = 'Invalid Email ID';
      else errors.email = '';
      setValidations(errors);
    }
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
                onChange={(event) => handleChange(event)}
                autoComplete="off"
              />
              <Validation validationText={validations.name} />
              <input
                type="email"
                name="email"
                required
                value={contactInfo.email || ''}
                placeholder="Email Address"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => handleChange(event)}
                autoComplete="off"
              />
              <Validation validationText={validations.email} />
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
                onChange={(event) => handleChange(event)}
                autoComplete="off"
              />
              <Validation validationText={validations.phoneNumber} />
              <textarea
                style={{ resize: 'none' }}
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                name="message"
                required
                value={contactInfo.message || ''}
                placeholder="Message"
                id="exampleFormControlTextarea1"
                rows="2"
                onChange={(event) => handleChange(event)}
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
