import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { Story } from "./components/story";
import { Roadmap } from "./components/roadmap";
import { Gallery } from "./components/gallery";
import { Faqs } from "./components/faq";
import { Team } from "./components/Team";
import { Minting } from "./components/minting";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <Story data={landingPageData.Story} />
      <Roadmap data={landingPageData.Roadmap} />
      <Gallery data={landingPageData.Gallery}/>
      <Faqs data={landingPageData.Faqs} />
      <Team data={landingPageData.Team} />
      <Minting data={landingPageData.Minting} />
    </div>
  );
};

export default App;
