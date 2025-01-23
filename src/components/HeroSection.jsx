import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const HeroSection = () => {
  const slides = [
    {
      title: "Seamless Crypto Transactions",
      //   subtitle: "Fast & Secure",
      description:
        "Experience lightning-fast and secure crypto transactions with our cutting-edge technology. Join the future of finance today!",
      buttonText: "Get started",
      image: img2,
    },
    {
      title: "Your Gateway to Digital Assets",
      //   subtitle: "Invest with Confidence",
      description:
        "Explore a world of digital assets with our easy-to-use platform. Manage your portfolio and trade securely from anywhere.",
      buttonText: "Learn More",
      image: img1,
    },
    {
      title: "Empowering Financial Freedom",
      //   subtitle: "Revolutionizing Fintech",
      description:
        "Unlock the potential of decentralized finance with our innovative solutions. Empowering you to take control of your future.",
      buttonText: "Join Now",
      image: img3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#a6d490",
          opacity: 0.7,
          transition: "opacity 0.3s",
        }}
      ></div>
    ),
  };
  return (
    <>
      <div className="relative py-6 overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[55vh] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 font-quicksand">
                <h4 className="text-txtwhite text-xs sm:text-sm md:text-lg font-medium">
                  {slide.subtitle}
                </h4>
                <h2 className="text-txtwhite text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold my-4">
                  {slide.title}
                </h2>
                <p className="text-txtwhite font-inter text-sm sm:text-sm md:text-lg mb-6 max-w-xs sm:max-w-md md:max-w-3xl">
                  {slide.description}
                </p>
                <button className="px-4 sm:px-6 py-2 text-sm sm:text-lg md:text-xl bg-pgreen text-black font-semibold rounded-full hover:bg-gray-200 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>

        {/* Add custom arrow styling */}
        <style jsx global>{`
          .slick-arrow {
            position: absolute;
            top: 50%;
            z-index: 10;
            transform: translateY(-50%);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex !important;
            justify-content: center;
            align-items: center;
          }
          .slick-prev {
            left: 10px;
          }
          .slick-next {
            right: 10px;
          }
          .slick-arrow::before {
            font-size: 22px;
            color: #fff;
          }
        `}</style>
      </div>
      {/* <div className="relative py-6">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[60vh] md:h-[55vh] object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 font-quicksand">
                <h4 className="text-white text-sm md:text-lg font-medium">
                  {slide.subtitle}
                </h4>
                <h2 className="text-white text-2xl md:text-7xl font-extrabold my-4 ">
                  {slide.title}
                </h2>
                <p className="text-white text-sm md:text-lg mb-6 max-w-3xl">
                  {slide.description}
                </p>
                <button className="px-6 py-2 text-xl bg-pgreen text-black font-semibold rounded-full hover:bg-gray-200 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </>
  );
};

export default HeroSection;
