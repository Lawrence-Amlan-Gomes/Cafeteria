import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachRawMaterial from "./EachRawMaterial";

export default function RawMaterials() {
  const [dataArr, setTrigar] = useGetData("RawMaterials");
  const [rawMaterialArr, setRawMaterial] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [f_id, setFid] = useState("");
  const [v_id, setVid] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && name && weight && price, expiryDate) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, name, weight, price, expiryDate]);


  useEffect(() => {
    setRawMaterial(dataArr);
  }, [dataArr, rawMaterialArr]);

  const handleAddNewEmployee = () => {
    if (clickAddNew) {
      addColumn({ id, name, weight, price, expiryDate, f_id, v_id }, "RawMaterials");
      const newUiFoodArr = rawMaterialArr;
      newUiFoodArr.push({ id, name, weight, price, expiryDate, f_id, v_id });
      setClickAddNew(false);
      setPrice("");
      setId("");
      setName("");
      setWeight("");
      setExpiryDate("");
      setVid("");
      setFid("");
      
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[11%] ml-[2%] float-left pl-1">ID</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Name</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Price</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Weight</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Expiry Date</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Food ID</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Vendor ID</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {rawMaterialArr
          ? rawMaterialArr.map((rawMaterial) => (
              <EachRawMaterial key={rawMaterial.id} props={rawMaterial} setTrigar={setTrigar}/>
            ))
          : ""}
      </div>
      <div className="h-[50px] bg-[#152160] rounded-md flex justify-center items-center">
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="ID"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Price"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          placeholder="Weight"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setExpiryDate(e.target.value)}
          value={expiryDate}
          placeholder="Expiry Date"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setFid(e.target.value)}
          value={f_id}
          placeholder="Food ID"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setVid(e.target.value)}
          value={v_id}
          placeholder="Vendor ID"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <div
          onClick={handleAddNewEmployee}
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
