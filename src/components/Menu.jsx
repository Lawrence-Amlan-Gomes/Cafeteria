import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [active, setActive] = useState("Home");
  const [reload, setReload] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    if(reload){
      navigate("/")
    }
  },[navigate, reload])
  return (
    <div className="w-full h-[15%] bg-[#060513] flex justify-center items-center text-gray-300">
      <MenuItem navigateTo="/" text="Home" setActive={setActive} active={active}/>
      <MenuItem navigateTo="/foodItem" text="Food Item" setActive={setActive} active={active} setReload={setReload}/>
      <MenuItem navigateTo="/employee" text="Employees" setActive={setActive} active={active} setReload={setReload}/>
      <MenuItem navigateTo="/member" text="Member" setActive={setActive} active={active} setReload={setReload}/>
      <MenuItem navigateTo="/payment" text="Payment" setActive={setActive} active={active} setReload={setReload}/>
      <MenuItem navigateTo="/vendor" text="Vendor" setActive={setActive} active={active} setReload={setReload}/>
      <MenuItem navigateTo="/rawmaterial" text="Raw Materials" setActive={setActive} active={active} setReload={setReload}/>
      <MenuItem navigateTo="/workingHour" text="Working Hour" setActive={setActive} active={active} setReload={setReload}/>
    </div>
  );
}
