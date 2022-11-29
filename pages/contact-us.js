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
import CanadaOffice from '../assets/images/CanadaOffice.jpeg';

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

        <div className="mt-0 xl:mt-12">
          <div className="grid grid-cols-2 xl:grid-cols-7 2xl:grid-cols-8 gap-2">
            <div className="col-span-12 xl:col-span-2 2xl:grid-cols-2">
              <ContactDetails
                cards={[
                  {
                    title: '',
                    description: (
                      <>
                        <span className="leading-relaxed">
                          <span className="block">
                            Whiten App Solutions Inc.
                          </span>
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
                ]}
              />
            </div>
            <div className="col-span-12 xl:col-span-5 2xl:col-span-6 grid grid-cols-6 2xl:grid-cols-5">
              <img
                src={CanadaOffice.src}
                alt="CanadaOffice"
                className="col-span-12 md:col-span-2 2xl:col-span-2 w-full h-full object-cover"
              />
              <div className="col-span-12 md:col-span-4 2xl:col-span-3 h-[248px] md:h-auto">
                <iframe
                  title="1"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.752861714631!2d-122.89516996701143!3d49.16729902071964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9a9b68ebc1b%3A0x81a641e4041a52a2!2s9015%20120%20St%2C%20Delta%2C%20BC%20V4C%206R7%2C%20Canada!5e0!3m2!1sen!2sin!4v1669270354993!5m2!1sen!2sin"
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
      </div>
      <Footer />
    </>
  );
};
