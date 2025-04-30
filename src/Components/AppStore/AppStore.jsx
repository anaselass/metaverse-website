import appStore from "../../assets/website/app_store.png";
import googlePlay from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="container text-black dark:text-white">
        <div>
          <h1>Get Started With Our App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            temporibus hic commodi,
          </p>
          <div>
            <a href="#">
              <img src={appStore} alt="appStore" />
            </a>
            <a href="#">
              <img src={googlePlay} alt="googlePlay" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
