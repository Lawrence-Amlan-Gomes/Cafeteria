import { useNavigate } from "react-router-dom";

export default function MenuItem({
  text,
  navigateTo,
  setActive,
  active,
}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(navigateTo);
    setActive(text);
  };

  return (
    <div
      onClick={handleOnClick}
      className={
        text == active
          ? (text == "Profile"
              ? "ml-[2%] mr-[2%] h-full cursor-pointer  text-lg rounded-xl flex justify-center items-center"
              : "ml-[2%] mr-[2%] h-full cursor-pointer hover:text-blue-600 text-blue-600 text-lg rounded-xl flex justify-center items-center")
          : (text == "Profile"
          ? "ml-[2%] mr-[2%] h-full cursor-pointer  text-lg rounded-xl flex justify-center items-center"
          : "ml-[2%] mr-[2%] h-full cursor-pointer hover:text-blue-700 text-lg rounded-xl flex justify-center items-center")
      }
    >
      {text}
    </div>
  );
}
