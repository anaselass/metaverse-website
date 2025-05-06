import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const FooterLinks = () => [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-14 text-black dark:text-white rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="md:mx-20 mx-4 grid md:grid-cols-3 ">
            {/* Company deatails */}
            <div className="py-8 px-4">
              <h1
                className="sm:text-3xl text-xl font bold sm:text-left 
                           text-justify mb-3 flex items-center gap-3"
              >
                Metaverce
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                at non aut, odio quos repudiandae natus?
              </p>
              <br />

              {/* Contact Section */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Morooco, Rabat</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+212 632792519</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks().map((link) => (
                      <li
                        className=" hover:translate-x-1 duration-300"
                        key={link.id}
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks().map((link) => (
                      <li
                        className=" hover:translate-x-1 duration-300"
                        key={link.id}
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks().map((link) => (
                      <li
                        className=" hover:translate-x-1 duration-300"
                        key={link.id}
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
