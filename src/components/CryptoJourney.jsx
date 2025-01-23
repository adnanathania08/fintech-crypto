import React, { useState } from "react";
import { FaBitcoin, FaUniversity, FaCreditCard, FaMoneyCheck, FaMobileAlt, FaWallet } from "react-icons/fa";
import { BsBatteryFull, BsWifi } from "react-icons/bs";

const CryptoJourney = () => {
  const [currentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const depositMethods = [
    {
      icon: <FaUniversity className="text-2xl text-emerald-500" />,
      name: "Bank Transfer",
      description: "Direct deposit from your bank account",
      status: "Available",
      statusColor: "bg-emerald-500/20 text-emerald-400",
    },
    {
      icon: <FaBitcoin className="text-2xl text-yellow-500" />,
      name: "Crypto Transfer",
      description: "Send crypto from external wallet",
      status: "Popular",
      statusColor: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: <FaCreditCard className="text-2xl text-purple-500" />,
      name: "Card Payment",
      description: "Instant deposit using credit/debit card",
      status: "Fast",
      statusColor: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: <FaMobileAlt className="text-2xl text-pink-500" />,
      name: "Mobile Payment",
      description: "Deposit via mobile payment services",
      status: "Convenient",
      statusColor: "bg-pink-500/20 text-pink-400",
    },
    {
      icon: <FaWallet className="text-2xl text-cyan-500" />,
      name: "E-Wallets",
      description: "Deposit funds using popular e-wallets",
      status: "Flexible",
      statusColor: "bg-cyan-500/20 text-cyan-400",
    },
    {
      icon: <FaMoneyCheck className="text-2xl text-orange-500" />,
      name: "Cash Deposit",
      description: "Deposit cash at supported local branches",
      status: "Secure",
      statusColor: "bg-orange-500/20 text-orange-400",
    },
  ];

  const steps = [
    {
      title: "Create Account",
      description: "Set up your crypto investment account in minutes",
    },
    {
      title: "Verify Identity",
      description: "Complete KYC verification for secure trading",
    },
    {
      title: "Fund Account",
      description: "Choose from multiple deposit methods to start investing",
    },
    {
      title: "Start Trading",
      description: "Access diverse crypto markets and investment options",
    },
  ];

  return (
    <>
      <div className="text-txtwhite py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Phone Display */}
            <div className="relative">
              <div className="w-[280px] h-[570px] sm:w-[320px] sm:h-[650] mx-auto bg-slate-800 rounded-[3rem] p-6 relative overflow-y-scroll no-scrollbar border-4 border-slate-700">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <span>{currentTime}</span>
                  <div className="flex items-center gap-2">
                    <BsWifi className="text-lg" />
                    <BsBatteryFull className="text-lg" />
                  </div>
                </div>

                {/* Deposit Methods */}
                <div className="space-y-4">
                  {depositMethods.map((method, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 p-4 rounded-xl hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {method.icon}
                          <div>
                            <h3 className="font-semibold font-quicksand">{method.name}</h3>
                            <p className="text-sm text-gray-300 font-inter">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${method.statusColor}`}
                        >
                          {method.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Steps */}
            <div className="space-y-8">
              <h2 className=" text-center sm:text-left text-4xl font-bold mb-8 bg-gradient-to-r from-pgreen to-blue-500 bg-clip-text text-transparent font-quicksand">
                Start Your Crypto Journey
              </h2>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group hover:bg-pgray/50 p-4 rounded-xl transition-all"
                >
                  <span className="text-4xl font-bold text-pgreen opacity-50 group-hover:opacity-100 transition-opacity">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-quicksand">{step.title}</h3>
                    <p className="text-gray-400 font-inter">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoJourney;
