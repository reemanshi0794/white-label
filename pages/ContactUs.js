import React from 'react';
import ContactDetails from '../components/cards/ThreeColContactDetails.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import ContactUsForm from '../components/forms/TwoColContactUsWithIllustrationFullForm.js';
import Header from '../components/headers/light.js';
// const Address = tw.span`leading-relaxed`;
// const AddressLine = tw.span`block`;
// const Email = tw.span`text-sm mt-6 block text-gray-500`;
// const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <div className="min-h-screen text-secondary-500 p-8 overflow-hidden">
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: 'New York',
            description: (
              <>
                <span className="leading-relaxed">
                  <span className="block">40 Gates Court</span>
                  <span className="block">Endicott, NY 13760</span>
                </span>
                <span className="text-sm mt-6 block text-gray-500">contact@treact.com</span>
                <span className="text-sm mt-0 block text-gray-500">+1 (203) 991-6988</span>
              </>
            ),
          },
          {
            title: 'New York',
            description: (
              <>
                <span className="leading-relaxed">
                  <span className="block">40 Gates Court</span>
                  <span className="block">Endicott, NY 13760</span>
                </span>
                <span className="text-sm mt-6 block text-gray-500">contact@treact.com</span>
                <span className="text-sm mt-0 block text-gray-500">+1 (203) 991-6988</span>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </div>
  );
};
