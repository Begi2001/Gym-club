import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import WayOfLife from "./components/WayOfLife/Life";
import Subs from "./components/Subsc/Subs";
import Subsc2 from "./components/Subsc2/Subsc2";
import Footer from "./components/Footer/Footer";
import Reg from "./components/Register/Reg";
import Map from "./components/Map/Map";
import Footer2 from "./components/Footer2/Footer2";
import BurgerFooter from "./components/footerBurger/FootBurger";
function App() {
  return (
    <div>
      <MainPage />
      <WayOfLife />
      <Subs />
      <Subsc2 />
      <Reg />
      <Map />
      {/* <BurgerFooter /> */}
      <Footer2/>
    </div>
  );
}

export default App;
