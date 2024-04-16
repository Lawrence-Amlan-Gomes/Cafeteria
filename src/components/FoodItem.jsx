import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachFood from "./EachFood";
import FoodCard from "./FoodCard";

export default function FoodItem({ isAdmin, setCart, cart }) {
  const [dataArr, setTrigar] = useGetData("Foods");
  const [uiFoodArr, setUiFoodArr] = useState([]);
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && price && quantity && type && imgUrl) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, imgUrl, price, quantity, type]);

  useEffect(() => {
    setUiFoodArr(dataArr);
  }, [dataArr, uiFoodArr]);

  const handleAddNewFood = () => {
    if (clickAddNew) {
      addColumn({ id, price, quantity, type, imgUrl, m_id:"", r_id:""}, "Foods");
      const newUiFoodArr = uiFoodArr;
      newUiFoodArr.push({ id, price, quantity, type, imgUrl, m_id:"", r_id:"" });
      setClickAddNew(false);
      setType("");
      setId("");
      setPrice("");
      setQuantity("");
      setImgUrl("");
    }
  };
  return (
    isAdmin ? <div className="h-full">
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
        placeholder="Name"
        className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
      />
      <input
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        placeholder="Qantity"
        className="w-[13%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
      />
      <input
        onChange={(e) => setImgUrl(e.target.value)}
        value={imgUrl}
        placeholder="Img Url"
        className="w-[26%] ml-[2%] mr-[2%] rounded-md bg-gray-700 pl-2 h-[60%]"
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
  </div>: <div className="h-full overflow-auto overflow-y-auto rounded-md no-scrollbar">
      {uiFoodArr
        ? uiFoodArr.map((food) => (
            <FoodCard
              key={food.id}
              imgUrl = {food.imgUrl}
              type = {food.type}
              price = {food.price}
              setCart = {setCart}
              cart = {cart}
            />
          ))
        : ""}
    </div>
  );
}
