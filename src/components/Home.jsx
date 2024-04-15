import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({isLogedIn}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogedIn) {
      navigate("/login");
    }
  }, [navigate, isLogedIn]);
  return (
    <div className="flex justify-center items-center h-full text-6xl text-blue-400">
      Cafeteria Management System
    </div>
  );
}
