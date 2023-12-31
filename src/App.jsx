import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home/Home";

import NotFound from "./others/NotFound";
import CarDetails from "./screen/Car Details/CarDetails";
import Support from "./screen/Support/Support";
import HowItWorks from "./screen/How It Works/HowItWorks";
import CarCare from "./screen/Car Care/CarCare";
import Login from "./screen/Login/Login";
import About from "./screen/About/About";
import CarList from "./screen/Car List/CarList";
import Finance from "./screen/Finance/Finance";
import ExperienceCenter from "./screen/About/ExperienceCenter";
import CarCareExtended from "./screen/Car Care/CarCareExtended";
import Compare from "./screen/Compare/Compare";
import Footer2 from "./others/Footer2";
import Wishlist from "./screen/Wishlist/Wishlist";
import Accounts from "./screen/Accounts/Accounts";
import FindACar from "./screen/Find A Car/FindACar";
import Sell from "./screen/Sell/Sell";
import ModalLoaction from "./others/ModalLoaction";
import ManualSell from "./screen/Sell/ManualSell";
import Dashboard from "./screen/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <div className="">
        {/* <div className="pt-[70px] lg:pt-20"> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/car-details" element={<CarDetails />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/how-it-works" element={<HowItWorks />} />
          <Route exact path="/car-care" element={<CarCare />} />
          <Route
            exact
            path="/car-care-extended"
            element={<CarCareExtended />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/experience-center"
            element={<ExperienceCenter />}
          />
          <Route exact path="/car-lists" element={<CarList />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/select-manual" element={<ManualSell />} />
          <Route exact path="/find-a-car" element={<FindACar />} />
          <Route exact path="/finance" element={<Finance />} />
          <Route exact path="/compare" element={<Compare />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/accounts" element={<Accounts />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer2 />
      <ModalLoaction />
    </div>
  );
}

export default App;
