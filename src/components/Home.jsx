import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ isLogedIn}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogedIn) {
      navigate("/login");
    }
  }, [navigate, isLogedIn]);
  return (
    <div className="flex justify-center items-center h-full text-7xl overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1713249847~exp=1713253447~hmac=ccf399171ba313f8cf7e75dfe663bd8031aff5aa2b24285a8e772a4ebfa82b32&w=1800"
        alt="logo"
        className="w-full rounded-lg"
      />
      <div className="absolute text-white">Welcome To Our Cafeteria</div>
    </div>
  );
}
