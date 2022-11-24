import ContactDetails from '../components/cards/ThreeColContactDetails.js';
import ContactUsForm from '../components/forms/TwoColContactUsWithIllustrationFullForm.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import Header from '../components/headers/light.js';
import React from 'react';
// const Address = tw.span`leading-relaxed`;
// const AddressLine = tw.span`block`;
// const Email = tw.span`text-sm mt-6 block text-gray-500`;
// const Phone = tw.span`text-sm mt-0 block text-gray-500`;
import Head from 'next/head';
import bestechBuildingImg from '../assets/images/bestechBuilding.jpeg';

export default () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 md:px-24 2xl:p-8 overflow-hidden">
        <Head>
          <title>
            Software Development Company | Custom App Developer | White Label
            Technologies
          </title>
          <meta
            name="description"
            content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
          />
          <meta
            name="keyword"
            content="custom mobile app development company, software development company,custom software development,software app developer"
          />
        </Head>
        <Head>
          <title>
            Software Development Company | Custom App Developer | White Label
            Technologies
          </title>
          <meta
            name="description"
            content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
          />
          <meta
            name="keyword"
            content="custom mobile app development company, software development company,custom software development,software app developer"
          />
        </Head>
        <Head>
          <title>
            Software Development Company | Custom App Developer | White Label
            Technologies
          </title>
          <meta
            name="description"
            content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
          />
          <meta
            name="keyword"
            content="custom mobile app development company, software development company,custom software development,software app developer"
          />
        </Head>
        <Head>
          <title>
            Software Development Company | Custom App Developer | White Label
            Technologies
          </title>
          <meta
            name="description"
            content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
          />
          <meta
            name="keyword"
            content="custom mobile app development company, software development company,custom software development,software app developer"
          />
        </Head>
        <Head>
          <title>
            Software Development Company | Custom App Developer | White Label
            Technologies
          </title>
          <meta
            name="description"
            content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
          />
          <meta
            name="keyword"
            content="custom mobile app development company, software development company,custom software development,software app developer"
          />
        </Head>

        <ContactUsForm />
        <ContactDetails
          cards={[
            {
              title: '',
              description: (
                <>
                  <span className="leading-relaxed">
                    <span className="block">Whiten App Solutions Inc.</span>
                    <span className="block">
                      510-9015 120 Street Delta BC V4C 0E3 Canada
                    </span>
                  </span>
                  <span className="text-sm mt-6 block text-gray-500">
                    contact@whitenappsolutions.com
                  </span>
                  <span className="text-sm mt-0 block text-gray-500">
                    +1 (416) 948-7063
                  </span>
                </>
              ),
            },
            // {
            //   title: "India Office",
            //   description: (
            //     <>
            //       <span className="leading-relaxed">
            //         <span className="block">Innow8 Apps</span>
            //         <span className="block">
            //           910-B, Bestech Business Tower, Sector 66, Sahibzada Ajit
            //           Singh Nagar, Punjab 160055
            //         </span>
            //       </span>
            //       <span className="text-sm mt-6 block text-gray-500">
            //         contact@white-label.io
            //       </span>
            //       <span className="text-sm mt-0 block text-gray-500">
            //         +91 99153-76280
            //       </span>
            //     </>
            //   ),
            // },
            // {
            //   title: "India Office",
            //   description: (
            //     <>
            //       <span className="leading-relaxed">
            //         <span className="block">Whiten App Solutions Inc.</span>
            //         <span className="block">
            //           1494, Sector 4, Panchkula, Haryana, India, 134112
            //         </span>
            //       </span>
            //       <span className="text-sm mt-6 block text-gray-500">
            //         contact@white-label.io
            //       </span>
            //       <span className="text-sm mt-0 block text-gray-500">
            //         +91 99153-76280
            //       </span>
            //     </>
            //   ),
            // },
          ]}
        />
        <div>
          <div className="grid grid-cols-6">
            <img
              src={bestechBuildingImg.src}
              alt="bestechBuildingImg"
              className=" col-span-2 w-full"
            />
            <div className="col-span-4">
              <iframe
                title="1"
                src="https://maps.google.com/maps?width=2048&amp;height=551&amp;hl=en&amp;q=Whiten App Solutions Inc. 510-9015 120 Street Delta BC V4C 0E3 CanadaUniversity of Oxford&amp;t=&amp;z=1&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
