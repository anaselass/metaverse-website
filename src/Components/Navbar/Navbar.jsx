import { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarckMode from "../Navbar/DarckMode";

const NavLinks = [
  { title: "Home", url: "/" },
  { title: "Products", url: "/products" },
  { title: "Pricing", url: "/pricing" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container mx-auto px-4 py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-16" />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>

          {/* desctop section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((link, index) => {
                return (
                  <li key={index} className="py-4">
                    <a
                      href={link.url}
                      className="font-semibold text-xl hover:text-primary py-2 
                                    hover:border-b-2 border-primary hover:border-secondary 
                                    transition-colors duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}

              {/* dark mode feature */}
              <DarckMode />
            </ul>
          </nav>

          {/* Mobile section */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarckMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
