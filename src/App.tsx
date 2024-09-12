import AboutLeaders from "./components/AboutLeaders";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <>
      <div className="bg-[#0F0F0F] h-full relative overflow-hidden">
        <Header />
        <Hero />
        <WhoWeAre />
        <AboutLeaders />
        <OurServices />
      </div>
    </>
  );
}

export default App;
