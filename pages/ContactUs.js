import React from "react";
import ContactDetails from "../components/cards/ThreeColContactDetails.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Header from "../components/headers/light.js";
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
            title: "Canada Office",
            description: (
              <>
                <span className="leading-relaxed">
                  <span className="block">Whiten App Solutins Inc.</span>
                  <span className="block">
                    1603-2545 Erin Centre BLVD Mississauga, ON, L5M 6Z9 Canada
                  </span>
                </span>
                <span className="text-sm mt-6 block text-gray-500">
                  contact@white-label.io
                </span>
                <span className="text-sm mt-0 block text-gray-500">
                  +1 (416) 948-7063
                </span>
              </>
            ),
          },
          {
            title: "India Office",
            description: (
              <>
                <span className="leading-relaxed">
                  <span className="block">Innow8 Apps</span>
                  <span className="block">
                    910-B, Bestech Business Tower, Sector 66, Sahibzada Ajit
                    Singh Nagar, Punjab 160055
                  </span>
                </span>
                <span className="text-sm mt-6 block text-gray-500">
                  contact@white-label.io
                </span>
                <span className="text-sm mt-0 block text-gray-500">
                  +91 99153-76280
                </span>
              </>
            ),
          },
          {
            title: "India Office",
            description: (
              <>
                <span className="leading-relaxed">
                  <span className="block">Whiten App Solutins Inc.</span>
                  <span className="block">
                    1494, Sector 4, Panchkula, Haryana, India, 134112
                  </span>
                </span>
                <span className="text-sm mt-6 block text-gray-500">
                  contact@white-label.io
                </span>
                <span className="text-sm mt-0 block text-gray-500">
                  +91 99153-76280
                </span>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </div>
  );
};
