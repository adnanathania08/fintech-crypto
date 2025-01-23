// import React from "react";

// const CryptoMarquee = () => {
//   const cryptoData = [
//     {
//       icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
//       name: "Ether",
//       symbol: "ETH",
//       price: "3,317.70",
//       change: 2.1,
//     },
//     {
//       icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
//       name: "Solana",
//       symbol: "SOL",
//       price: "252.153",
//       change: 7.25,
//     },
//     {
//       icon: "https://cryptologos.cc/logos/decentraland-mana-logo.png",
//       name: "MANA",
//       symbol: "MANA",
//       price: "0.48843",
//       change: 6.12,
//     },
//     {
//       icon: "https://cryptologos.cc/logos/algorand-algo-logo.png",
//       name: "Algorand",
//       symbol: "ALGO",
//       price: "0.41312",
//       change: 1.75,
//     },
//     {
//       icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
//       name: "Bitcoin",
//       symbol: "BTC",
//       price: "105,499.00",
//       change: -1.23,
//     },
//   ];
//   return (
//     <>
//  <div className="min-h-screen bg-black py-4">
//       <div className="relative overflow-hidden">
//         {/* Marquee Wrapper */}
//         <div className="flex items-center gap-4 animate-marquee">
//           {cryptoData.concat(cryptoData).map((crypto, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg p-4 flex items-center justify-between w-60"
//             >
//               {/* Icon and Name */}
//               <div className="flex items-center gap-3">
//                 <img
//                   src={crypto.icon}
//                   alt={crypto.name}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <h4 className="text-white font-bold text-lg">{crypto.name}</h4>
//                   <p className="text-gray-400 text-sm">{crypto.symbol}</p>
//                 </div>
//               </div>

//               {/* Price and Change */}
//               <div className="text-right">
//                 <p className="text-white font-semibold">{crypto.price} USD</p>
//                 <p
//                   className={`text-sm ${
//                     crypto.change > 0 ? "text-green-500" : "text-red-500"
//                   }`}
//                 >
//                   {crypto.change > 0 ? `↑` : `↓`} {crypto.change}%
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>    </>
//   );
// };

// export default CryptoMarquee;

import React from "react";
import Marquee from "react-fast-marquee";
import { IoIosArrowForward } from "react-icons/io";

const CryptoMarquee = () => {
  const cryptoData = [
    {
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      name: "Ether",
      symbol: "ETH",
      price: "3,317.70",
      change: 2.1,
    },
    {
      icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
      name: "Solana",
      symbol: "SOL",
      price: "252.153",
      change: 7.25,
    },
    {
      icon: "https://cryptologos.cc/logos/decentraland-mana-logo.png",
      name: "MANA",
      symbol: "MANA",
      price: "0.48843",
      change: 6.12,
    },
    {
      icon: "https://cryptologos.cc/logos/algorand-algo-logo.png",
      name: "Algorand",
      symbol: "ALGO",
      price: "0.41312",
      change: 1.75,
    },
    {
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: "105,499.00",
      change: -1.23,
    },
  ];

  return (
    <div className="py-4 mt-4">
      <div className="relative overflow-hidden">
        {/* Marquee Component */}
        <Marquee
          gradient={true}
          gradientColor="black"
          gradientWidth={90}
          speed={50}
        >
          {cryptoData.map((crypto, index) => (
            <div
              key={index}
              className="border-2 border-pgray/50 rounded-xl p-4 justify-between flex items-center w-[280px] mx-4"
            >
              {/* Icon and Name */}
              <div className=" flex items-center gap-3">
                <img
                  src={crypto.icon}
                  alt={crypto.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>

              {/* Price and Change */}
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <h4 className="text-white font-bold text-lg">
                    {crypto.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                </div>
                <div className=" flex items-center gap-2">
                  <p className="text-white font-semibold">{crypto.price} USD</p>
                  <p
                    className={`text-sm ${
                      crypto.change > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {crypto.change > 0 ? `↑` : `↓`} {crypto.change}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="py-8 w-fit mx-auto">
        <span className="flex gap-4 items-center">
          <p className="text-base font-quicksand text-txtwhite">
            Buy and sell over 50 cryptocurrencies
          </p>
          <IoIosArrowForward className="text-txtwhite" />
        </span>
      </div>
    </div>
  );
};

export default CryptoMarquee;
