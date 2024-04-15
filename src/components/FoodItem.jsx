import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachFood from "./EachFood";


export default function FoodItem({ isAdmin }) {

  const [dataArr, setTrigar] = useGetData("Foods");
  const [uiFoodArr, setUiFoodArr] = useState([]);
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [m_id, setM_id] = useState("");
  const [r_id, setR_id] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && price && quantity && type) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, price, quantity, type]);



  useEffect(() => {
    setUiFoodArr(dataArr);
  }, [dataArr, uiFoodArr]);

  const handleAddNewFood = () => {
    if (clickAddNew) {
      addColumn({ id, price, quantity, type, m_id, r_id }, "Foods");
      const newUiFoodArr = uiFoodArr;
      newUiFoodArr.push({ id, price, quantity, type, m_id, r_id });
      setClickAddNew(false);
      setType("");
      setId("");
      setPrice("");
      setQuantity("");
      setM_id("");
      setR_id("");
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[13%] ml-[2%] float-left pl-1">ID</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Price</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Name</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Quantity</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Member ID</div>
        <div className="w-[13%] ml-[2%] float-left pl-1">Raw Material</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {uiFoodArr
          ? uiFoodArr.map((food) => (
              <EachFood
                key={food.id}
                props={food}
                setTrigar={setTrigar}
                isAdmin={isAdmin}
              />
            ))
          : ""}
      </div>
      {isAdmin ? (
        <div className="h-[50px] bg-[#152160] rounded-md flex justify-center items-center">
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            placeholder="ID"
            className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="Price"
            className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
          />
          <input
            onChange={(e) => setType(e.target.value)}
            value={type}
            placeholder="Type"
            className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
          />
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            placeholder="Qantity"
            className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
          />
          <input
            onChange={(e) => setM_id(e.target.value)}
            value={m_id}
            placeholder="Member ID"
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
      ) : (
        <></>
      )}
    </div>
  );
}
