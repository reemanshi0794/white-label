import React from "react"
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../../components/misc/Headings.js"
import { SectionDescription } from "../../components/misc/Typography.js"
import bestechBuildingImg from "../../assets/images/bestechBuilding.jpeg"
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
  heading = "Our Offices",
  subheading = "Locations",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Reliable",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Easy",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Customizable",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
    {
      title: "Fast",
      description:
        "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.",
    },
  ]

  if (!cards) cards = defaultCards

  return (
    <div>
      <div className="flex flex-col items-center justify-center xl:justify-start md:flex-row flex-wrap  max-w-screen-lg mx-auto mb-8 xl:mb-0 xl:mt-8 pr-16 2xl:pl-20 ">
        {subheading && (
          <SubheadingBase className="mb-4">{subheading}</SubheadingBase>
        )}
        <SectionHeading className="w-full !text-center xl:!text-left !text-[35px] xl:!text-[40px] 2xl:!text-5xl">
          {heading}
        </SectionHeading>
        {cards.map((card, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center xl:text-left">
              <p className="mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose">
                {card.description ||
                  "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48" /> */}
    </div>
  )
}
