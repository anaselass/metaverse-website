import { IoClose } from "react-icons/io5";

const PoupPlayer = ({ isPlay, toogglePlay }) => {
  return (
    <>
      {isPlay && (
        <div
          className="fixed text-black dark:text-white z-[9999] top-0 left-0 w-full h-full bg-black/70
        backdrop-blur-sm"
        >
          <div className="absolute w-full sm:max-w-[600px] top-1/2 left-1/2 -translate-1/2">
            <div className="bg-white dark:bg-dark p-5 rounded-lg shadow-md m-3">
              {/* header section */}
              <div className="flex justify-between items-center pb-3">
                <h1 className="text-2xl font-semibold">Metaverse</h1>
                <IoClose
                  onClick={toogglePlay}
                  className="text-4xl cursor-pointer hover:scale-110 duration-300"
                />
              </div>

              {/* Video section */}
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/znFCbPPMwRs?si=jKYYWA-aAnBnnxBD"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PoupPlayer;
