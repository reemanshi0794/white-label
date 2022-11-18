import React from "react";
import SvgDecoratorBlob from "../../assets/images/svg-decorator-blob-6.svg";

// const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
// const Subheading = tw(SubheadingBase)`mb-4`;
// const Heading = tw(SectionHeading)`w-full`;
// const Description = tw(SectionDescription)`w-full text-center`;

// const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
// const Plan = styled.div`
//   ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
//   .planHighlight {
//     ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
//   }

//   ${(props) =>
//     props.featured &&
//     css`
//       background: rgb(100,21,255);
//       background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
// background: rgb(85,60,154);
// background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
// background: rgb(76,81,191);
// background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
//       ${tw`bg-primary-500 text-gray-100`}
//       .planHighlight {
//         ${tw`hidden`}
//       }
//       .duration {
//         ${tw`text-gray-200!`}
//       }
//       ${PlanFeatures} {
//         ${tw`border-indigo-500`}
//       }
//       .feature:not(.mainFeature) {
//         ${tw`text-gray-300!`}
//       }
//       ${BuyNowButton} {
//         ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
//     `}
// `;

// const PlanHeader = styled.div`
//   ${tw`flex flex-col uppercase leading-relaxed py-8`}
//   .name {
//     ${tw`font-bold text-xl`}
//   }
//   .price {
//     ${tw`font-bold text-4xl sm:text-5xl my-1`}
//   }
//   .duration {
//     ${tw`text-gray-500 font-bold tracking-widest`}
//   }
// `;
// const PlanFeatures = styled.div`
//   ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
//   .feature {
//     ${tw`mt-5 first:mt-0 font-medium`}
//     &:not(.mainFeature) {
//       ${tw`text-gray-600`}
//     }
//   }
//   .mainFeature {
//     ${tw`text-xl font-bold tracking-wide`}
//   }
// `;

// const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
// const BuyNowButton = styled(PrimaryButtonBase)`
//   ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
// `;

// const DecoratorBlob = styled(SvgDecoratorBlob)`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
// `;

export default ({
  subheading = "Pricing",
  heading = "Flexible Plans.",
  description = "Get the best developers to work for you on a contract basis with no strings attached ",
  plans = null,
  primaryButtonText = "Buy Now",
}) => {
  const defaultPlans = [
    {
      name: "Personal",
      price: "$17.99",
      duration: "Monthly",
      mainFeature: "Suited for Personal Blogs",
      features: [
        "30 Templates",
        "7 Landing Pages",
        "12 Internal Pages",
        "Basic Assistance",
      ],
    },
    {
      name: "Business",
      price: "$37.99",
      duration: "Monthly",
      mainFeature: "Suited for Production Websites",
      features: [
        "60 Templates",
        "8 Landing Pages",
        "22 Internal Pages",
        "Priority Assistance",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$57.99",
      duration: "Monthly",
      mainFeature: "Suited for Big Companies",
      features: [
        "90 Templates",
        "9 Landing Pages",
        "37 Internal Pages",
        "Personal Assistance",
      ],
    },
  ];

  if (!plans) plans = defaultPlans;

  // const highlightGradientsCss = [
  //   css`
  //     background: rgb(56, 178, 172);
  //     background: linear-gradient(
  //       115deg,
  //       rgba(56, 178, 172, 1) 0%,
  //       rgba(129, 230, 217, 1) 100%
  //     );
  //   `,
  //   css`
  //     background: rgb(56, 178, 172);
  //     background-image: linear-gradient(
  //       115deg,
  //       #6415ff,
  //       #7431ff,
  //       #8244ff,
  //       #8e56ff,
  //       #9a66ff
  //     );
  //   `,
  //   css`
  //     background: rgb(245, 101, 101);
  //     background: linear-gradient(
  //       115deg,
  //       rgba(245, 101, 101, 1) 0%,
  //       rgba(254, 178, 178, 1) 100%
  //     );
  //   `,
  // ];

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 md:py-12">
        <div className="mt-10 w-full flex flex-col items-center">
          {subheading && (
            <h5 className="font-bold text-primary-500 mb-4">{subheading}</h5>
          )}
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center w-full">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl w-full text-center">
              {description}
            </p>
          )}
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative">
          {plans.map((plan, index) => (
            <div
              className="w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col"
              key={index}
              featured={plan.featured}
            >
              {!plan.featured && (
                <div
                  className={`rounded-t-lg absolute top-0 inset-x-0 h-2`}

                  // css={
                  //   highlightGradientsCss[index % highlightGradientsCss.length]
                  // }
                />
              )}
              <div className="flex flex-col uppercase leading-relaxed py-8">
                <span className="font-bold text-xl">{plan.name}</span>
                <span className="font-bold text-4xl sm:text-5xl my-1">
                  {plan.price}
                </span>
                <span className="text-gray-500 font-bold tracking-widest">
                  {plan.duration}
                </span>
              </div>
              <div className="flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1">
                <span className="mt-5 first:mt-0 font-medium text-xl font-bold tracking-wide">
                  {plan.mainFeature}
                </span>
                {plan.features.map((feature, index) => (
                  <span key={index} className="mt-5 first:mt-0 font-medium">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="px-4 sm:px-8 xl:px-16 py-8">
                <button
                  className="px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none transition duration-300 rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline"
                  // css={!plan.featured && highlightGradientsCss[index]}
                >
                  {primaryButtonText}
                </button>
              </div>
            </div>
          ))}
          <SvgDecoratorBlob className="pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};
