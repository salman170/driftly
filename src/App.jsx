import { Routes, Route} from "react-router-dom";
import Home from "./screen/Home/Home";
import Footer from "./others/Footer";
import Header from "./others/Header";
import NotFound from "./others/NotFound";
import CarDetails from "./screen/Car Details/CarDetails";
import Support from "./screen/Support/Support";
import HowItWorks from "./screen/How It Works/HowItWorks";
import CarCare from "./screen/Car Care/CarCare";
import Login from "./screen/Login/Login";
import About from "./screen/Experience Centre & About/About";
import CarList from "./screen/Car List/CarList";
import Finance from "./screen/Finance/Finance";
import Sell from "./screen/Sell/Sell";

function App() {
  return (
    <div>
      <Header />
      <div className="">
      {/* <div className="pt-[70px] lg:pt-20"> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/car-details" element={<CarDetails />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/how-it-works" element={<HowItWorks />} />
          <Route exact path="/car-care" element={<CarCare />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/car-lists" element={<CarList />} />
      
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/finance" element={<Finance />} />

          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      {/* {!isAdminRoute && <Footer />} */}
    </div>
  );
}

export default App;
