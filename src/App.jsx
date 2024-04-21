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
import Cart from "./components/Cart";
import Profile from "./components/Profile";

export default function App() {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [loginRegis, setLoginRegis] = useState("/login");
  const [isAdmin, setIsAdmin] = useState(false);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "." + mm + "." + yyyy;


  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
  });

  useEffect(() => {
    if (!isLogedIn) {
      navigate(loginRegis);
    }
  }, [navigate, isLogedIn, loginRegis]);

  return isLogedIn ? (
    <div className="text-white bg-[#0A0C1F] h-screen w-screen scroll-smooth dark">
      <Menu isAdmin={isAdmin} setIsLogedIn={setIsLogedIn} />
      <div className="w-full h-[85%] p-5 overflow-auto">
        <Routes>
          <Route
            path="/"
            element={<Home isLogedIn={isLogedIn} isAdmin={isAdmin} />}
          />
          <Route
            path="/foodItem"
            element={
              <FoodItem isAdmin={isAdmin} setCart={setCart} cart={cart} />
            }
          />
          <Route path="/employee" element={<Employee />} />
          <Route path="/rawMaterial" element={<RawMaterial />} />
          <Route path="/member" element={<Member />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/workingHour" element={<Works />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} today={today}/>}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div
      className={
        loginRegis == "/register"
          ? "flex justify-center items-center h-[900px] text-white bg-[#0A0C1F]"
          : "flex justify-center items-center h-[700px] text-white bg-[#0A0C1F]"
      }
    >
      <Routes>
        <Route
          path="/"
          element={<Home isLogedIn={isLogedIn} isAdmin={isAdmin} />}
        />
        <Route
          path="/login"
          element={
            <Login
              setIsLogedIn={setIsLogedIn}
              setLoginRegis={setLoginRegis}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setLoginRegis={setLoginRegis} />}
        />
      </Routes>
    </div>
  );
}
