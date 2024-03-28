import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachWork from "./EachWork";

export default function Works() {
  const [dataArr, setTrigar] = useGetData("Works");
  const [workArr, setWorkArr] = useState([]);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [shift, setShift] = useState("");
  const [timing, setTiming] = useState("");
  const [e_id, setEid] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && type && shift && timing) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, type, shift, timing]);


  useEffect(() => {
    setWorkArr(dataArr);
  }, [dataArr, workArr]);

  const handleAddNewFood = () => {
    if (clickAddNew) {
      addColumn({ id, type, shift, timing, e_id }, "Works");
      const newUiFoodArr = workArr;
      newUiFoodArr.push({ id, type, shift, timing, e_id });
      setClickAddNew(false);
      setTiming("");
      setId("");
      setType("");
      setShift("");
      setEid("");
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[16%] ml-[2%] float-left pl-1">ID</div>
        <div className="w-[16%] ml-[2%] float-left pl-1">Type</div>
        <div className="w-[16%] ml-[2%] float-left pl-1">Shift</div>
        <div className="w-[16%] ml-[2%] float-left pl-1">Timing</div>
        <div className="w-[16%] ml-[2%] float-left pl-1">Employee ID</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {workArr
          ? workArr.map((work) => (
              <EachWork key={work.id} props={work} setTrigar={setTrigar}/>
            ))
          : ""}
      </div>
      <div className="h-[50px] bg-[#152160] rounded-md flex justify-center items-center">
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="ID"
          className="w-[16%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          placeholder="Type"
          className="w-[16%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setShift(e.target.value)}
          value={shift}
          placeholder="Shift"
          className="w-[16%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setTiming(e.target.value)}
          value={timing}
          placeholder="Timing"
          className="w-[16%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        
        <input
          onChange={(e) => setEid(e.target.value)}
          value={e_id}
          placeholder="Employee ID"
          className="w-[16%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
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
