import Home from "./components/Home";
import FoodItem from "./components/FoodItem";
import Employee from "./components/Employee";
import RawMaterial from "./components/RawMaterial";
import Member from "./components/Member";
import Payment from "./components/Payment";
import Vendor from "./components/Vendor";
import Works from "./components/Works";
import Menu from "./components/Menu";
import Login from "./page/Login";
import Register from "./page/Register";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [loginRegis, setLoginRegis] = useState("/login");
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    if (!isLogedIn) {
      navigate(loginRegis);
    }
  }, [navigate, isLogedIn, loginRegis]);
  // eslint-disable-next-line no-unused-vars

  return isLogedIn ? (
    <div className="text-white bg-[#0A0C1F] h-screen w-screen scroll-smooth dark">
      <Menu isAdmin={isAdmin}/>
      <div className="w-full h-[85%] p-5 overflow-auto">
        <Routes>
          <Route path="/" element={<Home isLogedIn={isLogedIn}/>} />
          <Route path="/foodItem" element={<FoodItem isAdmin={isAdmin} />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/rawMaterial" element={<RawMaterial />} />
          <Route path="/member" element={<Member />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/workingHour" element={<Works />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-[700px] text-white bg-[#0A0C1F]">
      <Routes>
        <Route path="/" element={<Home isLogedIn={isLogedIn}/>} />
        <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn} setLoginRegis={setLoginRegis} setIsAdmin={setIsAdmin}/> } />
        <Route path="/register" element={<Register setLoginRegis={setLoginRegis}/>} />
      </Routes>
    </div>
  );
}
