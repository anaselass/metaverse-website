import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ toogglePlay }) => {
  return (
    <div className="py-12 relative z-10 text-black dark:text-white">
      <div className="container min-h-[520px] flex items-center  w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img
              src={BannerPng}
              alt="BannerPng"
              className="w-full max-w-[400px]"
            />
          </div>
          {/* text content section */}
          <div className="space-y-5  order-2 sm:order-1 md:px-9 px-4">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-semibold"
            >
              GET READY TO ENJOY VR{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                MOVIES WITH OUR PLATFORM
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quisquam ab, illo maiores magni dolorum repellat cumque atque
              doloribus, et, id ipsum eaque architecto
            </p>
            <div className="flex gap-5">
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                className="primary-btn"
              >
                Get Started
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                onClick={toogglePlay}
                className="flex gap-2 items-center cursor-pointer"
              >
                <BiPlayCircle className="text-3xl" />
                See Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
