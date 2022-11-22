import React from "react"
import SvgDecoratorBlob from "../../assets/images/svg-decorator-blob-6.svg"
import androidImg from "../../assets/images/demo/androidImg.png"
import reactImg from "../../assets/images/demo/reactImg.png"
import nodeImg from "../../assets/images/demo/nodeImg.png"
import goLangImg from "../../assets/images/demo/goLangImg.png"
import pythonImg from "../../assets/images/demo/pythonImg.png"
import swiftImg from "../../assets/images/demo/swiftImg.png"
import javaImg from "../../assets/images/demo/javaImg.png"

const dummyData = [
  {
    image: reactImg,
    developers: 40,
    available: 16,
  },
  {
    image: nodeImg,
    developers: 20,
    available: 8,
  },
  {
    image: pythonImg,
    developers: 15,
    available: 6,
  },
  {
    image: javaImg,
    developers: 12,
    available: 4,
  },
  {
    image: androidImg,
    developers: 12,
    available: 4,
  },
  {
    image: swiftImg,
    developers: 10,
    available: 7,
  },
  {
    image: goLangImg,
    developers: 7,
    available: 3,
  },
]
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
  ]

  if (!plans) plans = defaultPlans

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto pt-0 md:pt-4">
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

        <div className=" bg-white rounded-3xl overflow-x-auto shadow-[0_0_50px_-15px_rgba(0,0,0,21%)] mt-12 hidden md:block">
          <div className="grid grid-cols-4 gap-4 w-[910px] xl:w-auto">
            <div className="py-10 px-5 border-r-[3px] text-center border-[#eaeaea]">
              <h3 className="font-bold text-2xl mb-6 text-black">
                Technologies
              </h3>
              <ul className="flex items-center flex-col">
                <li className="mb-3">
                  <img
                    src={reactImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
                <li className="mb-3">
                  <img
                    src={nodeImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
                <li className="mb-3">
                  <img
                    src={pythonImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
                <li className="mb-3">
                  <img
                    src={javaImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
                <li className="mb-3">
                  <img
                    src={androidImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
                <li className="mb-3">
                  <img
                    src={swiftImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
                <li className="mb-3">
                  <img
                    src={goLangImg.src}
                    className="w-[104px] object-cover"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="py-10 px-5 border-r-[3px] text-center border-[#eaeaea]">
              <h3 className="font-bold text-2xl mb-6 text-black">Developers</h3>
              <ul>
                {["40", "20", "15", "12", "12", "10", "07"].map((nmbr) => (
                  <li className="text-2xl mb-6 opacity-50 text-black list-none font-bold">
                    {nmbr}
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-10 px-5 border-r-[3px] text-center border-[#eaeaea]">
              <h3 className="font-bold text-2xl mb-6 text-black">Available</h3>
              <ul>
                {["16", "08", "06", "04", "04", "07", "03"].map((nmbr) => (
                  <li className="text-2xl mb-6 opacity-50 text-black list-none font-bold">
                    {nmbr}
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-10 px-5 text-center">
              <h3 className="font-bold text-2xl mb-6 text-black invisible">
                Hire Us
              </h3>
              <ul>
                {[1, 2, 3, 4, 5, 6, 7].map((text) => (
                  <li className="mb-8">
                    <a
                      className="border border-primary-500 pt-[6px] pb-[7px] px-[42px] font-semibold text-lg text-primary-500 hover:bg-primary-500 rounded-full hover:text-white"
                      href="/contact-us"
                    >
                      Hire now
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="block md:hidden mt-12">
          <div className=" bg-white items-center rounded-3xl shadow-[0_0_50px_-15px_rgba(0,0,0,21%)] py-10 flex justify-center flex-col">
            {dummyData.map((data) => {
              return (
                <div className="flex flex-col justify-center items-center shadow-[0_0_50px_-15px_rgba(0,0,0,21%)] bg-white text-center rounded-[10px] w-[70%] p-[14px] mb-5">
                  <img
                    src={data.image.src}
                    className="w-[88px] mb-[10px] object-cover"
                    alt=""
                  />
                  <div className="flex justify-center items-center mb-2">
                    <h3 className="font-normal text-black text-base">
                      Developers:
                    </h3>
                    <ul>
                      <li className="text-base opacity-50 text-black list-none font-bold ml-[6px]">
                        {data.developers}
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <h3 className="font-normal  text-black text-base">
                      Available:
                    </h3>
                    <ul>
                      <li className="text-base opacity-50 text-black list-none font-bold ml-[6px]">
                        {data.available}
                      </li>
                    </ul>
                  </div>
                  <a
                    className="border-2 border-primary-500 mx-1 mt-1 py-[6px] px-[28px] font-semibold text-xs text-primary-500 hover:bg-primary-500 rounded-full hover:text-white"
                    href="/contact-us"
                  >
                    Hire now
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
