//import reactLogo from './assets/react.svg'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BasicInfo from "./components/BasicInfo";
import MoreInfo from "./components/MoreInfo";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Gifts from "./components/Gifts";
import RSVP from "./components/RSVP";
import OurStory from "./components/OurStory";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BasicInfo />
        <RSVP />
        <OurStory />
        <MoreInfo />
        <Gifts />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
