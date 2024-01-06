import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItem = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0, left-0, right-0">
      <nav className={`py-4 px-4 lg:px-14 ${isSticky ? "sticky top-0 left-0 right-0 border-0 bg-white duration-300" : ""} `}>
        <div className="flex justify-between item-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
              <path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238" />
              <path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238" />
              <path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#3083dc" />
              <path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#3083dc" />
              <path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#3083dc" />
              <path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#3083dc" />
            </svg>
            <span className="text-[#263238]"></span>
            Nexcent
          </a>

          {/* Nav Items for large Devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium">
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for large Devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900">
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Sign up</button>
          </div>

          {/* Menu Buttom for mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGray focus:outline-none focus:text-gray-500">
              {isMenuOpen ? <FaXmark className="h-6 w-6 text-neutralDGrey" /> : <FaBars className="h-6 w-6 text-neutralDGrey" />}
            </button>
          </div>
        </div>

        {/* // Nav Items for mobile device */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
          {navItem.map(({ link, path }) => (
            <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
