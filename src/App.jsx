import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
