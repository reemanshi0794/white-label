import React from "react";
import EmailIllustrationSrc from "../../assets/images/email-illustration.svg";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.js";
import ContactUsSrc from "../../assets/images/contact-us.png";
// const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
// const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
// const TextColumn = styled(Column)((props) => [tw`md:w-7/12 mt-16 md:mt-0`, props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`]);

// const Image = styled.div((props) => [`background-image: url("${props.imageSrc}");`, tw`rounded bg-contain bg-no-repeat bg-center h-full`]);
// const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
// const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

// const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
// const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
// const Textarea = styled(Input).attrs({as: 'textarea'})`
//   ${tw`h-24`}
// `;

// const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "Let's collaborate",
  submitButtonText = "Send",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const webDevelopment = "Web Development";
  const eCommerceDevelopment = "eCommerce Development";
  const appDevelopment = "App Development";
  const enterpriseSoftwares = "Enterprise Softwares";
  const [contactInfo, setContactInfo] = useState({ service: webDevelopment });
  const [showLoader, setShowLoader] = useState(false);
  // This message will be displayed if form is submitted successfully or if an error occurrs.
  const [displayMessage, setDisplayMessage] = useState({
    message: "",
    type: "",
  });

  const handleChange = (key, value) => {
    setContactInfo({ ...contactInfo, [key]: value });
  };

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

  const emptyFieldValidationCheck =
    !contactInfo.name ||
    !contactInfo.email ||
    !contactInfo.phoneNumber ||
    !contactInfo.service;

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
    setContactInfo({ service: webDevelopment });
    event.preventDefault();
  };

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24">
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto">
          {/* <EmailIllustrationSrc className="" /> */}
          <img src={ContactUsSrc.src} alt="contact-us" />
        </div>
        <div
          className={`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12  mt-16 md:mt-0 lg:mr-16 md:order-first`}
        >
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
            {/* <form
              className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0"
              action={formAction}
              method={formMethod}
            >
              <input
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                type="email"
                name="email"
                placeholder="Your Email Address"
              />
              <input
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <input
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <input
                type="text"
                className="h-24"
                name="message"
                placeholder="Your Message Here"
              />
              <PrimaryButtonBase className="inline-block mt-8" type="submit">
                {submitButtonText}
              </PrimaryButtonBase>
            </form> */}

            <form
              action=""
              method="post"
              className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0"
            >
              {/* <div className="row"> */}
              {/* <div className="col-12"> */}
              {/* <div className="mb-3"> */}
              <input
                type="text"
                name="name"
                value={contactInfo.name || ""}
                placeholder="Full Name"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                required
                aria-describedby="emailHelp"
                onChange={(event) => handleChange("name", event.target.value)}
                autoComplete="off"
              />
              {/* </div> */}
              {/* </div> */}
              {/* <div className="col-12">
                  <div className="mb-3"> */}
              <input
                type="email"
                name="email"
                required
                value={contactInfo.email || ""}
                placeholder="Email Address"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => handleChange("email", event.target.value)}
                autoComplete="off"
              />
              {/* </div>
                </div> */}
              {/* </div> */}
              {/* <div className="row">
                <div className="col-6">
                  <div className="mb-3"> */}
              <input
                type="tel"
                name="phoneNumber"
                required
                value={contactInfo.phoneNumber || ""}
                placeholder="Phone Number"
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) =>
                  handleChange(
                    "phoneNumber",
                    event.target.value >= 0 ? event.target.value : 0
                  )
                }
                autoComplete="off"
              />
              {/* </div>
                </div> */}
              {/* <div className="col-6">
                  <div className="mb-3"> */}
              <select
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                aria-label="Default select example"
                value={contactInfo.service || ""}
                name="service"
                required
                onChange={(event) =>
                  handleChange("service", event.target.value)
                }
              >
                <option value={webDevelopment}>Web Development</option>
                <option value={eCommerceDevelopment}>
                  eCommerce Development
                </option>
                <option value={appDevelopment}>App Development</option>
                <option value={enterpriseSoftwares}>
                  Enterprise Softwares
                </option>
              </select>
              {/* </div>
                </div>
              </div> */}
              {/* <div className="col-12"> */}
              <textarea
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500"
                name="message"
                required
                value={contactInfo.message || ""}
                placeholder="Message"
                id="exampleFormControlTextarea1"
                rows="2"
                onChange={(event) =>
                  handleChange("message", event.target.value)
                }
              />
              {showLoader ? (
                <div className="text-center loader py-2">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className={`message-${displayMessage.type}`}>
                  <span>{displayMessage.message}</span>
                </div>
              )}
              {/* </div> */}
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
