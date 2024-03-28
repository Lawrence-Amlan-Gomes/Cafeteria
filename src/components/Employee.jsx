import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachEmployee from "./EachEmployee";

export default function Employee() {
  const [dataArr, setTrigar] = useGetData("Employees");
  const [employeeArr, setEmployeeArr] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [wage, setWage] = useState("");
  const [w_type, setWtype] = useState("");
  const [w_id, setWid] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && name && gender && phone) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, name, gender, phone]);


  useEffect(() => {
    setEmployeeArr(dataArr);
  }, [dataArr, employeeArr]);

  const handleAddNewEmployee = () => {
    if (clickAddNew) {
      addColumn({ id, name, gender, phone, wage, w_type, w_id }, "Employees");
      const newUiFoodArr = employeeArr;
      newUiFoodArr.push({ id, name, gender, phone, wage, w_type, w_id });
      setClickAddNew(false);
      setPhone("");
      setId("");
      setName("");
      setGender("");
      setWage("");
      setWid("");
      setWtype("");
      
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[11%] ml-[2%] float-left pl-1">ID</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Name</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Phone</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Gender</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Wage</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Work type</div>
        <div className="w-[11%] ml-[2%] float-left pl-1">Work ID</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {employeeArr
          ? employeeArr.map((employee) => (
              <EachEmployee key={employee.id} props={employee} setTrigar={setTrigar}/>
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
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          placeholder="Gender"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setWage(e.target.value)}
          value={wage}
          placeholder="Wage"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setWtype(e.target.value)}
          value={w_type}
          placeholder="Work Type"
          className="w-[11%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setWid(e.target.value)}
          value={w_id}
          placeholder="Work ID"
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
