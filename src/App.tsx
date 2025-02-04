//import reactLogo from './assets/react.svg'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BasicInfo from "./components/BasicInfo";
import MoreInfo from "./components/MoreInfo";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BasicInfo />
        <MoreInfo />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
