import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { GrTechnology } from "react-icons/gr";
import React, { useState } from "react";

const Navbar = () => {
  // const navigation = [
  //   { name: "Price", href: "#", current: true },
  //   { name: "Products", href: "#", current: false },
  //   { name: "About", href: "#", current: false },
  //   { name: "Resources", href: "#", current: false },
  // ];

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Disclosure as="nav" className="">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute z-50 -inset-0.5" />
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 relative items-center justify-between sm:items-stretch lg:justify-start">
              <div className="w-8 h-8"></div>
              <div className="flex shrink-0 items-center font-quicksand">
                <GrTechnology className="h-10 w-auto text-txtwhite" />
              </div>
              <div className=" lg:hidden">
                <w3m-button className="" />
                {/* <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center px-4 py-2  text-white rounded-md  focus:outline-none focus:ring focus:ring-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      } transition-transform duration-200`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-6 z-50 bg-pgray/80 border border-gray-600/50 rounded-md shadow-lg">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pgray/10"
                          >
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div> */}
              </div>
              <div className="hidden sm:ml-6 lg:flex items-center">
                <div className="flex space-x-8 items-center">
                  <p className="text-white">Prices</p>
                  <p className="text-white">Products</p>
                  <p className="text-white">About</p>
                  <p className="text-white">Resources</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:flex sm:space-x-4 hidden ">
              <button className="font-quicksand font-bold border-2 border-pgreen py-2 px-4 text-pgreen rounded-full">
                Start Now
              </button>

              <button className="font-quicksand font-bold text-pgreen ml-4">
                Log in
              </button>
              <w3m-button />
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden absolute z-50 bg-black w-full">
          <div className="space-y-1 flex flex-col justify-between px-2 pb-3 pt-2 h-[50vh] shadow-sm shadow-gray-700 rounded-b-xl">
            <div className="space-y-6 border-b border-gray-600 pb-6">
              <p className="text-white">Prices</p>
              <p className="text-white">Products</p>
              <p className="text-white">About</p>
              <p className="text-white">Resources</p>
            </div>
            <div className=" flex flex-col px-3 py-2 gap-3 mx-auto">
              <button className="font-quicksand font-bold border-2 border-pgreen py-2 px-4 text-pgreen rounded-full">
                Start Now
              </button>
              <button className="font-quicksand font-bold text-pgreen">
                Log in
              </button>
              {/* <w3m-button /> */}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Navbar;
