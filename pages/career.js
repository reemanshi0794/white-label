// import React, { useEffect } from 'react';
// import ReactGA from 'react-ga';
// import Head from 'next/head';
// import Header from '../components/headers/light.js';
// import BannerImage from '../assets/images/BannerImage.png';
// import SvgDecoratorBlob1 from '../assets/images/svg-decorator-blob-1.svg';

// // import Header from '../src/components/Header';
// // import { CareerPageItemToDisplay } from '../src/data/data';
// // import Career from '../src/assets/images/career.png';

// const CareerPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     ReactGA.pageview(window.location.pathname);
//   }, []);
//   return (
//     <div id="career">
//       <Head>
//         <title>
//           Software Development Company | Custom App Developer | White Label
//           Technologies
//         </title>
//         <meta
//           name="description"
//           content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
//         />
//         <meta
//           name="keyword"
//           content="custom mobile app development company, software development company,custom software development,software app developer"
//         />
//       </Head>
//       <Header />
//       <div className="relative">
//         <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto pb-20 pt-32 md:pb-24 md:pt-32">
//           <div className="relative lg:w-5/12 text-center max-w-xs md:max-w-lg  mx-auto lg:max-w-none lg:text-left">
//             <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
//               Are you the talent
//               <br /> that we are looking for?
//               {/* <span className="text-primary-500">for you.</span> */}
//             </h1>
//           </div>
//           <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
//             <div className="flex justify-center lg:justify-end items-center">
//               <img
//                 tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
//                 src={BannerImage.src}
//                 alt="Design Illustration"
//               />
//             </div>
//           </div>
//         </div>
//         <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3" />
//       </div>
//     </div>
//   );
// };

// export default CareerPage;
