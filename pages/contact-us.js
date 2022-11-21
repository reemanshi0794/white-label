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

export default () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-secondary-500 p-8 px-24 2xl:p-8 overflow-hidden">
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
      </div>
      <Footer />
    </>
  );
};
