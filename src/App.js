import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import WayOfLife from "./components/WayOfLife/Life";
import Subs from "./components/Subsc/Subs";
import Subsc2 from "./components/Subsc2/Subsc2";
import Reg from "./components/Register/Reg";
import Map from "./components/Map/Map";
import Footer2 from "./components/Footer2/Footer2";
import Card from "./components/Subsc2/Cards/Card";
import Sbscr from "./components/Subscription/Sbscr";
function App() {
  return (
    <div>
      <MainPage />
      <WayOfLife />
      {/* <Sbscr/> */}
      <Subs />
      <Subsc2 />
      <Card />
      <Reg />
      <Map />
      <Footer2 />
    </div>
  );
}

export default App;
