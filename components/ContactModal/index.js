import React, { useState, useEffect } from 'react';
import ContactUsSrc from '../../assets/images/contact-us.png';
import { PrimaryButton as PrimaryButtonBase } from '../../components/misc/Buttons.js';
import Cross from '../../assets/images/Cross.png';
import Loader from '../../assets/images/loader.gif';
import Validation from '../Validation';

function ContactModal({
  subheading = 'Contact Us Feel free to get in touch with us.',
  heading = <></>,
  description = "Let's collaborate",
  submitButtonText = 'Send',
  setShow,
}) {
  const handleClose = () => setShow(false);
  const webDevelopment = 'Web Development';
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [showLoader, setShowLoader] = useState(false);
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

  function sendMail() {
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
  }

  useEffect(() => {
    const phoneRegex = '^\\d{10}$';
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = '^\\d{10}$';
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
        })
        .catch((err) => {
          setDisplayMessage({
            message: 'An error occurred',
            type: 'error',
          });
          setShowLoader(false);
          setIsValidation(false);

          setTimeout(() => setDisplayMessage({ message: '', type: '' }), 2000);
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
    setContactInfo({
      service: webDevelopment,
      name: '',
      phoneNumber: '',
      email: '',
    });
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bg-[#56565699] z-50 p-12 w-full md:inset-0 h-full justify-center items-center flex">
      <div className=" w-auto lg:max-w-[704px] 2xl:max-w-[1170px] my-auto mx-auto relative flex items-center h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-end p-1 2xl:p-[14px] ">
            <button onClick={handleClose} className="cursor-pointer">
              <img
                src={Cross.src}
                className="text-center rounded-full bg-gray-100 w-8 p-2"
              />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-6 2xl:px-12 pt-0 py-6 2xl:py-6 items-center">
            <div className="flex-shrink-0">
              <img
                src={ContactUsSrc.src}
                alt="contact-us"
                className="w-[67%] m-auto lg:w-[80%] 2xl:w-full"
              />
            </div>
            <div
              className={` md:mx-0 mt-12 md:mt-0 mr-4 2xl:mr-16 lg:order-first`}
            >
              <div className="text-center md:text-left">
                {subheading && (
                  <h5 className="font-bold text-[16px] 2xl:text-3xl text-primary-500 text-center lg:text-left">
                    Feel free to get in touch with us.
                  </h5>
                )}
                {description && (
                  <p className=" mt-2 2xl:mt-4 text-center lg:text-left text-sm md:text-base 2xl:text-lg font-medium leading-relaxed text-secondary-100">
                    {description}
                  </p>
                )}
                <form
                  action=""
                  method="post"
                  className="mt-4 2xl:mt-10 text-sm flex flex-col lg:max-w-xs 2xl:max-w-sm mx-auto md:mx-0"
                >
                  <input
                    type="text"
                    name="name"
                    value={contactInfo.name || ''}
                    placeholder="Full Name"
                    className="mt-6 first:mt-0 text-[#797979] border-2 px-3 py-2 2xl:px-4 2xl:py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
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
                    className="mt-3 2xl:mt-6 text-[#797979] first:mt-0 border-2 px-3 py-2 2xl:px-4 2xl:py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
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
                    value={contactInfo.phoneNumber || ''}
                    placeholder="Phone Number"
                    className="mt-3 2xl:mt-6 text-[#797979] first:mt-0 border-2 px-3 py-2 2xl:px-4 2xl:py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(event) => handleChange(event)}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    autoComplete="off"
                  />
                  <Validation validationText={validations.phoneNumber} />
                  <textarea
                    style={{ resize: 'none', height: '50px' }}
                    className="mt-3 2xl:mt-6 text-[#797979] first:mt-0 border-2 px-3 py-2 2xl:px-4 2xl:py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
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
                      <div
                        className="spinner-border text-secondary"
                        role="status"
                      >
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
                  <div>
                    <PrimaryButtonBase
                      className="inline-block !px-[24px] py-[8px] 2xl:!px-8 !2xl:py-3 mt-4 2xl:mt-8 !rounded-full"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </PrimaryButtonBase>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
