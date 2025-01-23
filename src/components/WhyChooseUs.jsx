import React from "react";
import { GoShieldCheck } from "react-icons/go";
import {
  RiShieldLine,
  RiSmartphoneLine,
  RiTimeLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const WhyChooseUs = () => {
  const safetyCards = [
    {
      icon: <RiSmartphoneLine className="w-12 h-12 text-pgreen" />,
      title: "Secure Mobile Trading",
      description:
        "Advanced encryption and multi-factor authentication protect your digital assets 24/7. Trade with confidence knowing your funds are safe.",
    },
    {
      icon: <RiTimeLine className="w-12 h-12 text-pgreen" />,
      title: "Real-time Monitoring",
      description:
        "Continuous system monitoring and automated threat detection ensure your transactions are protected against unauthorized access.",
    },
    {
      icon: <RiCheckboxCircleLine className="w-12 h-12 text-pgreen" />,
      title: "Verified Security",
      description:
        "Regular security audits and compliance checks maintain the highest standards of protection for your cryptocurrency investments.",
    },
  ];

  return (
    <>
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
            <div className="lft text-center sm:text-left sm:max-w-xl mb-10">
              {/* <div className="flex justify-center sm:justify-start mb-6">
                <RiShieldLine className="w-16 h-16 text-pgreen" />
              </div> */}
              <h2 className="text-4xl font-bold text-txtwhite mb-4 font-quicksand">
                Why is it safe?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
                Experience unmatched security with our proof of reserves and
                complete solvency transparency
              </p>
            </div>
            {/* //// */}
            <div className="rght text-txtwhite max-w-lg mx-auto">
              <div className="pb-10 flex items-center justify-center gap-4">
                <div className="icon bg-pgray/70 p-4 rounded-full w-fit">
                  <GoShieldCheck className="w-12 h-12 text-pgreen " />
                </div>
                <div className="text-xl font-quicksand">
                  You can always check the solvency of your funds with our proof
                  of reserves.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyCards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-pgray to-black rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-pgray/70 p-4 rounded-full">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-quicksand">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-inter">
                    {card.description}
                  </p>
                  <button
                    className="mt-6 text-pgreen hover:text-green-300 flex items-center space-x-2 transition-colors duration-300 group font-quicksand"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <span className="relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-green-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      Learn more
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
