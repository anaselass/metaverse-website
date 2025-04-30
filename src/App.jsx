import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";
import Features from "./Components/Features/Features";
import AppStore from "./Components/AppStore/AppStore";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <main className=" overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <div className="relative">
        <Hero />
        <Quotes />
        <div
          className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]  bg-gradient-to-r from-primary to-secondary rounded-full 
          absolute top-0 left-0 blur-3xl animated-wrapper"
        ></div>
      </div>
      <div className="relative">
        <Banner />
        <Banner2 />
        <div
          className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]  bg-gradient-to-r from-primary to-secondary rounded-full 
          absolute top-[100px] left-[-300px] blur-3xl animated-wrapper opacity-50"
        ></div>
      </div>
      <Features />
      <AppStore />
      <Footer />
    </main>
  );
}

export default App;
