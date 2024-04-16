import { useState } from "react";
import MenuItem from "./MenuItem";


export default function Menu({ isAdmin, setIsLogedIn }) {
  const [active, setActive] = useState("Home");




  const LogOut = () => {
    const ok = confirm("Are you want to Log Out?");
    if (ok) {
      setIsLogedIn(false);
    }
  };
  return isAdmin ? (
    <div className="w-full h-[15%] bg-[#060513] flex justify-center items-center text-gray-300">
      <MenuItem
        navigateTo="/"
        text="Home"
        setActive={setActive}
        active={active}
      />
      <MenuItem
        navigateTo="/foodItem"
        text="Food Items"
        setActive={setActive}
        active={active}
 
      />
      <MenuItem
        navigateTo="/employee"
        text="Employees"
        setActive={setActive}
        active={active}

      />
      <MenuItem
        navigateTo="/member"
        text="Members"
        setActive={setActive}
        active={active}

      />

      <MenuItem
        navigateTo="/vendor"
        text="Vendors"
        setActive={setActive}
        active={active}
  
      />
      <MenuItem
        navigateTo="/rawmaterial"
        text="Raw Materials"
        setActive={setActive}
        active={active}
     
      />
      <MenuItem
        navigateTo="/workingHour"
        text="Works"
        setActive={setActive}
        active={active}
      
      />
      <MenuItem
        navigateTo="/payment"
        text="Payment"
        setActive={setActive}
        active={active}
    
      />
      <button
        className="bg-gray-400 p-2 rounded-md text-black hover:bg-red-800 hover:text-white absolute right-5"
        onClick={LogOut}
      >
        Log Out
      </button>
    </div>
  ) : (
    <div className="w-full h-[15%] bg-[#060513] flex justify-center items-center float-left text-gray-300">
      <div className="absolute left-5 bg-gray-400 p-2 rounded-md text-black hover:bg-green-800 hover:text-white">
        <MenuItem
          navigateTo="/profile"
          text="Profile"
          setActive={setActive}
          active={active}
        />
      </div>

      <MenuItem
        navigateTo="/"
        text="Home"
        setActive={setActive}
        active={active}
      />
      <MenuItem
        navigateTo="/foodItem"
        text="Food Items"
        setActive={setActive}
        active={active}

      />
      <MenuItem
        navigateTo="/cart"
        text="Cart"
        setActive={setActive}
        active={active}
      
      />
      <button
        className="bg-gray-400 p-2 rounded-md text-black hover:bg-red-800 hover:text-white absolute right-5"
        onClick={LogOut}
      >
        Log Out
      </button>
    </div>
  );
}
