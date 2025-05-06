import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = ({ toogglePlay }) => {
  return (
    <>
      <div className="py-12 sm:py-0 text-black dark:text-white overflow-hidden">
        <div className="container min-h-[700px] w-auto mx-auto flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center relative z-10">
            {/* hero section */}
            <div className="space-y-5 lg:pr-32 order-2 sm:order-1 md:px-9 px-4">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  GAMES WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quisquam ab, illo maiores magni dolorum repellat
                cumque atque doloribus, et, id ipsum eaque architecto
              </p>
              <div className="flex gap-5">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
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
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="hero" />
            </div>
          </div>
          {/* animated blob */}
          {/* <div
            className="w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary rounded-full 
          absolute left-0 blur-3xl animated-wrapper"
          ></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
