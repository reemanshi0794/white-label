import React from 'react';
import EmailIllustrationSrc from '../../assets/images/email-illustration.svg';
import {PrimaryButton as PrimaryButtonBase} from '../../components/misc/Buttons.js';

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
  subheading = 'Contact Us',
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  submitButtonText = 'Send',
  formAction = '#',
  formMethod = 'get',
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24">
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto">
          <EmailIllustrationSrc className="" />
        </div>
        <div className={`w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12  mt-16 md:mt-0 lg:mr-16 md:order-first`} textOnLeft={textOnLeft}>
          <div className="lg:py-8 text-center md:text-left">
            {subheading && <h5 className="font-bold text-primary-500 text-center md:text-left">{subheading}</h5>}
            <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">{heading}</h2>
            {description && <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">{description}</p>}
            <form className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0" action={formAction} method={formMethod}>
              <input className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500" type="email" name="email" placeholder="Your Email Address" />
              <input className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500" type="text" name="name" placeholder="Full Name" />
              <input className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500" type="text" name="subject" placeholder="Subject" />
              <input type="text" className="h-24" name="message" placeholder="Your Message Here" />
              <PrimaryButtonBase className="inline-block mt-8" type="submit">
                {submitButtonText}
              </PrimaryButtonBase>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
