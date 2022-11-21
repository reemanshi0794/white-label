import React from 'react';
import CustomizeIconImage from '../../assets/images/customize-icon.svg';
import FastIconImage from '../../assets/images/fast-icon.svg';
import ReliableIconImage from '../../assets/images/reliable-icon.svg';
import ShieldIconImage from '../../assets/images/shield-icon.svg';
import SimpleIconImage from '../../assets/images/simple-icon.svg';
import SupportIconImage from '../../assets/images/support-icon.svg';
import SvgDecoratorBlob3 from '../../assets/images/svg-decorator-blob-3.svg';

// const Container = tw.div`relative`;

// const ThreeColumnContainer = styled.div`
//   ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
// `;
// const Subheading = tw(SubheadingBase)`mb-4`;
// const Heading = tw(SectionHeading)`w-full`;
// const Description = tw(SectionDescription)`w-full text-center`;

// const VerticalSpacer = tw.div`mt-10 w-full`;

// const Column = styled.div`
//   ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
// `;

// const Card = styled.div`
//   ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
//   .imageContainer {
//     ${tw`border text-center rounded-full p-5 flex-shrink-0`}
//     img {
//       ${tw`w-6 h-6`}
//     }
//   }

//   .textContainer {
//     ${tw`sm:ml-4 mt-4 sm:mt-2`}
//   }

//   .title {
//     ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
//   }

//   .description {
//     ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
//   }
// `;

// const DecoratorBlob = styled(SvgDecoratorBlob3)`
//   ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
// `;

export default ({
  cards = null,
  heading = 'Amazing Features',
  subheading = 'fcsdf',
  description = 'Laying strong software foundations that yield growth',
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: 'App Development',
      description:
        'An app for your Brand. We fix your business challenges by creating premium mobile apps for Android and iOS customers. ',
    },
    {
      imageSrc: SupportIconImage,
      title: 'Enterprise Softwares',
      description:
        'We develop solutions that solve real problems that are beyond the capabilities of traditional ERP systems. Build feature rich CMS, CRM, POS, ERP, CDP with us.',
    },
    {
      imageSrc: CustomizeIconImage,
      title: 'Blockchain Development',
      description:
        'World-class companies enjoy the benefits of blockchain technology with us through Cryptocurrency, Smart-Contracts, Crypto Wallets, DeFi and Enterprise Blockchain app development and more with the most efficient internal process.',
    },
    {
      imageSrc: ReliableIconImage,
      title: 'eCommerce Development',
      description:
        'We back startups and young entrepreneurs with exclusive stores by increasing their brand loyalty and authenticity with custom build eCommerce Stores.',
    },
    {
      imageSrc: FastIconImage,
      title: 'Web Development',
      description:
        'We build and shape beautiful websites for individuals and businesses to meet all their online business demands.',
    },
    {
      imageSrc: SimpleIconImage,
      title: 'Metaverse Development',
      description:
        'The potential use cases of Metaverse are designed and developed at White Label to help our clients tap into endless opportunities of the new era internet with Blockchain, AI and AR/VR.',
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <div className="relative">
      <div className="items-stretch flex-row flex-wrap justify-center max-w-screen xl:max-w-5xl mx-auto pt-20 md:pt-4 flex">
        {subheading && (
          <h5 className="mb-4 font-bold text-primary-500">{subheading}</h5>
        )}
        <h2 className="w-full text-4xl sm:text-5xl font-black tracking-wide text-center">
          {heading}
        </h2>
        {description && (
          <p className="w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl">
            {description}
          </p>
        )}
        <div className="mt-10 w-full" />
        {cards.map((card, i) => {
          console.log('card', card);
          const IconImage = card.imageSrc;
          return (
            <div className="md:w-1/2 lg:w-1/3 max-w-sm" key={i}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8">
                <span className="border text-center rounded-full p-5 flex-shrink-0">
                  {/* <img className="w-6 h-6" src={ShieldIconImage.src} alt="" /> */}
                  <IconImage />
                </span>
                <span className="sm:ml-4 mt-4 sm:mt-2">
                  <span className="mt-4 tracking-wide font-bold text-2xl leading-none">
                    {card.title || 'Fully Secure'}
                  </span>
                  <p className="mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose">
                    {card.description ||
                      'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'}
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48" />
    </div>
  );
};
