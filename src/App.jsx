import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Quotes from "./Components/Quotes/Quotes";

function App() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <div className="relative">
        <Hero />
        <Quotes />
        <div
          className="w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary rounded-full 
          absolute top-0 left-0 blur-3xl animated-wrapper"
        ></div>
      </div>
    </main>
  );
}

export default App;
