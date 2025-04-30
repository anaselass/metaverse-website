import appStore from "../../assets/website/app_store.png";
import googlePlay from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-[400px] text-black dark:text-white sm:grid sm:place-items-center">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-semibold text-center">
            Get Started With Our App
          </h1>
          <p className="text-center sm:px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            temporibus hic commodi,
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a href="#">
              <img
                src={appStore}
                alt="appStore"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#">
              <img
                src={googlePlay}
                alt="googlePlay"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
