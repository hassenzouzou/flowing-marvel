import AboutLeaders from "./components/AboutLeaders";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import OurServices from "./components/OurServices";
import WhoWeAre from "./components/WhoWeAre";
import WhyChoseFM from "./components/WhyChoseFM";

function App() {
  return (
    <>
      <div className="bg-[#0F0F0F] h-full relative overflow-hidden">
        <Header />
        <Hero />
        <WhoWeAre />
        <AboutLeaders />
        <OurServices />
        <WhyChoseFM />
        <GetInTouch />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
