import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachPay from "./EachPay";

export default function Payment() {
  const [dataArr, setTrigar] = useGetData("Payment");
  const [payArr, setPayArr] = useState([]);
  const [m_id, setMid] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (m_id && type && amount ) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, m_id, type, amount]);


  useEffect(() => {
    setPayArr(dataArr);
  }, [dataArr, payArr]);

  const handleAddNewFood = () => {
    if (clickAddNew) {
      addColumn({ m_id, type, amount }, "Payment");
      const newUiFoodArr = payArr;
      newUiFoodArr.push({ m_id, type, amount });
      setClickAddNew(false);
      setMid("");
      setType("");
      setAmount("");
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[28%] ml-[2%] float-left pl-1">Member ID</div>
        <div className="w-[28%] ml-[2%] float-left pl-1">Type</div>
        <div className="w-[28%] ml-[2%] float-left pl-1">Amount</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {payArr
          ? payArr.map((pay) => (
              <EachPay key={pay.m_id} props={pay} setTrigar={setTrigar}/>
            ))
          : ""}
      </div>
      <div className="h-[50px] bg-[#152160] rounded-md flex justify-center items-center">
        <input
          onChange={(e) => setMid(e.target.value)}
          value={m_id}
          placeholder="Member ID"
          className="w-[28%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          placeholder="Type"
          className="w-[28%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Amount"
          className="w-[28%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
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
