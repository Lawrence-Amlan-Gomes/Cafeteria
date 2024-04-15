import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/cafeLogo.png"

export default function Home({isLogedIn}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogedIn) {
      navigate("/login");
    }
  }, [navigate, isLogedIn]);
  return (
    <div className="flex justify-center items-center h-full text-6xl text-blue-400">
      <div>
        <div className="flex justify-center items-center mb-10">
        <img src={logo} alt="logo" className="h-24"/>
        </div>
        
        <div>Cafeteria Management System</div>
      
      </div>
    </div>
  );
}
