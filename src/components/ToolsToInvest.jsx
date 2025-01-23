import React from "react";
import invst1 from "../assets/invstimg1.jpg";
import invst2 from "../assets/invstimg2.jpg";
import invst3 from "../assets/invstimg3.jpg";
import invst4 from "../assets/invstimg4.jpg";
import invst5 from "../assets/invstimg5.jpg";
import invst6 from "../assets/invstimg6.jpg";

import {
  FaShieldAlt,
  FaBolt,
  FaWallet,
  FaChartLine,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

const ToolsToInvest = () => {
  const features = [
    // {
    //   icon: <FaShieldAlt className="w-8 h-8 text-indigo-500" />,
    //   title: "Portfolio Performance",
    //   description:
    //     "Enterprise-grade security with multi-signature authentication and real-time monitoring",
    //   highlight: "99.99% Security Uptime",
    //   image: "https://images.unsplash.com/photo-1639152201720-5e536d254d81",
    // },
    // {
    //   icon: <FaBolt className="w-8 h-8 text-yellow-500" />,
    //   title: "Lightning-Fast Transactions",
    //   description:
    //     "Execute trades instantly with our optimized blockchain infrastructure",
    //   highlight: "<0.1s Transaction Speed",
    //   image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d",
    // },
    // {
    //   icon: <FaWallet className="w-8 h-8 text-green-500" />,
    //   title: "Multi-Wallet Integration",
    //   description:
    //     "Seamlessly connect and manage multiple cryptocurrency wallets",
    //   highlight: "50+ Wallets Supported",
    //   image: "https://images.unsplash.com/photo-1638913662295-9630035ef770",
    // },
    // {
    //   icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
    //   title: "Smart Analytics Dashboard",
    //   description:
    //     "Advanced trading insights with real-time market analysis tools",
    //   highlight: "Comprehensive Metrics",
    //   image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d",
    // },
    // {
    //   icon: <FaLayerGroup className="w-8 h-8 text-purple-500" />,
    //   title: "Comprehensive DeFi Suite",
    //   description:
    //     "Access the full spectrum of decentralized finance opportunities",
    //   highlight: "$2B+ Total Liquidity",
    //   image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    // },
    // {
    //   icon: <FaLayerGroup className="w-8 h-8 text-purple-500" />,
    //   title: "Comprehensive DeFi Suite",
    //   description:
    //     "Access the full spectrum of decentralized finance opportunities",
    //   highlight: "$2B+ Total Liquidity",
    //   image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    // },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-indigo-500" />,
      title: "Portfolio Performance",
      description: "Track the performance of your assets over the last month.",
      highlight: "99.99% Security Uptime",
      image: invst1,
    },
    {
      icon: <FaBolt className="w-8 h-8 text-yellow-500" />,
      title: "Buy low, sell high",
      description: "Automatically trade at the prices you choose.",
      highlight: "<0.1s Transaction Speed",
      image: invst2,
    },
    {
      icon: <FaWallet className="w-8 h-8 text-green-500" />,
      title: "Invest regularly",
      description:
        "Use volatility in your favor and buy every day, week, or month.",
      highlight: "50+ Wallets Supported",
      image: invst4,
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
      title: "Weekly earnings",
      description: "Get yields on your digital dollars.",
      highlight: "Comprehensive Metrics",
      image: invst3,
    },
    {
      icon: <FaLayerGroup className="w-8 h-8 text-purple-500" />,
      title: "Trade like a pro",
      description: "Bitso Alpha, the app created by traders for traders.",
      highlight: "$2B+ Total Liquidity",
      image: invst5,
    },
    {
      icon: <FaRocket className="w-8 h-8 text-red-500" />,
      title: "Discover new assets",
      description:
        "Explore trending tokens and diversify your portfolio effortlessly.",
      highlight: "100+ New Assets Listed",
      image: invst6,
    },
  ];

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-pgreen text-lg pb-4 font-inter">
              A web with everything
            </p>
            <h2 className=" font-quicksand text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-txtwhite mb-4">
              Tools to invest better
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-pgray hover:border-pgreen transform hover:scale-102 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute top-4 left-4 p-3 bg-gray-900 bg-opacity-70 rounded-lg">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-quicksand">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4 font-inter">{feature.description}</p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pgreen text-black font-quicksand">
                    {feature.highlight}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-pgray group-hover:bg-pgreen flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsToInvest;
