import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachVendor from "./EachVendor";

export default function Vendor() {
  const [dataArr, setTrigar] = useGetData("Vendors");
  const [vendorArr, setVendorArr] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [r_id, setR_id] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && name && address && phone) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, name, address, phone]);


  useEffect(() => {
    setVendorArr(dataArr);
  }, [dataArr, vendorArr]);

  const handleAddNewFood = () => {
    if (clickAddNew) {
      addColumn({ id, name, address, phone, website, r_id }, "Vendors");
      const newUiFoodArr = vendorArr;
      newUiFoodArr.push({ id, name, address, phone, website, r_id });
      setClickAddNew(false);
      setPhone("");
      setId("");
      setName("");
      setAddress("");
      setWebsite("");
      setR_id("");
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[13%] ml-[2%] float-left pl-1">ID</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Name</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Address</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Phone</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Website</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Raw Material</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {vendorArr
          ? vendorArr.map((vendor) => (
              <EachVendor key={vendor.id} props={vendor} setTrigar={setTrigar}/>
            ))
          : ""}
      </div>
      <div className="h-[50px] bg-[#152160] rounded-md flex justify-center items-center">
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="ID"
          className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Address"
          className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
          className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        
        <input
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
          placeholder="Website"
          className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setR_id(e.target.value)}
          value={r_id}
          placeholder="Raw Material"
          className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <div
          onClick={handleAddNewFood}
          className={
            clickAddNew
              ? "w-[8%] ml-[1%] mr-[1%] bg-green-900 rounded-md h-[70%] flex justify-center items-center cursor-pointer"
              : "w-[8%] ml-[1%] mr-[1%] bg-gray-600 text-gray-400 cursor-pointer rounded-md h-[70%] flex justify-center items-center"
          }
        >
          Add New
        </div>
      </div>
    </div>
  );
}
