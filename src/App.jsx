import Home from "./components/Home";
import FoodItem from "./components/FoodItem";
import Employee from "./components/Employee";
import RawMaterial from "./components/RawMaterial";
import Member from "./components/Member";
import Payment from "./components/Payment";
import Vendor from "./components/Vendor";
import Works from "./components/Works";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";

export default function App() {
  

  return (
    <div className="text-white bg-[#0A0C1F] h-screen w-screen scroll-smooth dark">
      <Menu />
      <div className="w-full h-[85%] p-5 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodItem" element={<FoodItem />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/rawMaterial" element={<RawMaterial />} />
          <Route path="/member" element={<Member />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/workingHour" element={<Works />} />
        </Routes>
      </div>
    </div>
  );
}
