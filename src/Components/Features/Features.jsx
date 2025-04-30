import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Captivating Videos",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    descreption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Safe Transactions",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    descreption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Reality",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    descreption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const Features = () => {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto text-black dark:text-white py-14 sm:min-h-[600px]">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">
            Why Choose Us
          </h1>
          {/* cards section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 lg:mx-20 mt-12">
            {FeaturesData.map((item, index) => (
              <div
                key={index}
                className="group text-center space-y-3 sm:space-y-6 p-4 sm:py-10
                        bg-dark hover:bg-gradient-to-r from-primary to-secondary
                        hover:shadow-[0_0_40px_#007cfff0]
                        rounded-lg"
              >
                <div className="grid place-items-center">{item.icon}</div>
                <h1 className="text-2xl text-white group-hover:text-black duration-300">
                  {item.name}
                </h1>
                <p className="text-white group-hover:text-black duration-300 ">
                  {item.descreption}
                </p>
                <a
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                  href={item.link}
                >
                  Laern More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
