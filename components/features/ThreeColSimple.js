import React from 'react';
import CustomizeIconImage from '../../assets/images/customize-icon.svg';
import ShieldIconImage from '../../assets/images/shield-icon.svg';
import SupportIconImage from '../../assets/images/support-icon.svg';
import {SectionHeading, Subheading as SubheadingBase} from '../../components/misc/Headings.js';
import {Container, ContentWithPaddingXl} from '../../components/misc/Layouts.js';
import {SectionDescription} from '../../components/misc/Typography.js';
// const Heading = tw(SectionHeading)``;
// const Subheading = tw(SubheadingBase)`text-center mb-3`;
// const Description = tw(SectionDescription)`text-center mx-auto`;
// const ThreeColumnContainer = styled.div`
//   ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
// `;
// const Column = styled.div`
//   ${tw`lg:w-1/3 max-w-xs`}
// `;

// const Card = styled.a`
//   ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
//   .imageContainer {
//     ${tw`text-center rounded-full p-4 bg-gray-100`}
//     img {
//       ${tw`w-8 h-8`}
//     }
//   }

//   .title {
//     ${tw`mt-4 font-bold text-xl leading-none`}
//   }

//   .description {
//     ${tw`mt-4 text-sm font-medium text-secondary-300`}
//   }

//   .link {
//     ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
//     .icon {
//       ${tw`ml-2 w-4`}
//     }
//   }
// `;

// const DecoratorBlob = styled(SvgDecoratorBlob3)`
//   ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
// `;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Secure',
      description: 'We strictly only deal with vendors that provide top notch security.',
      url: 'https://timerse.com',
    },
    {
      imageSrc: SupportIconImage,
      title: '24/7 Support',
      description: 'Lorem ipsum donor amet siti ceali placeholder text',
      url: 'https://google.com',
    },
    {
      imageSrc: CustomizeIconImage,
      title: 'Customizable',
      description: 'Lorem ipsum donor amet siti ceali placeholder text',
      url: 'https://reddit.com',
    },
  ],
  linkText = 'Learn More',
  heading = '',
  subheading = '',
  description = '',
  imageContainerCss = null,
  imageCss = null,
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <SubheadingBase className="text-center mb-3">{subheading}</SubheadingBase>}
        {heading && <SectionHeading>{heading}</SectionHeading>}
        {description && <SectionDescription className="text-center mx-auto">{description}</SectionDescription>}
        <div className="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto">
          {cards.map((card, i) => (
            <div className="lg:w-1/3 max-w-xs" key={i}>
              <a className="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105" href={card.url}>
                <span className="text-center rounded-full p-4 bg-gray-100" css={imageContainerCss}>
                  <img className="`w-8 h-8" src={card.imageSrc.src} alt="" css={imageCss} />
                </span>
                <span className="mt-4 font-bold text-xl leading-none">{card.title}</span>
                <p className="mt-4 text-sm font-medium text-secondary-300">{card.description}</p>
                {linkText && (
                  <span className="mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="ml-2 w-4" />
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>
      </ContentWithPaddingXl>
      {/* <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40" /> */}
    </Container>
  );
};
