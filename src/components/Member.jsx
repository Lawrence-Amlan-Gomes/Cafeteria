import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import addColumn from "../functions.js/addColumn";
import EachMember from "./EachMember";

export default function Member() {
  const [dataArr, setTrigar] = useGetData("Members");
  const [memberArr, setMemberArr] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [type, setWtype] = useState("");
  const [expenses, setExpenses] = useState("");
  const [dob, setDob] = useState("");
  const [clickAddNew, setClickAddNew] = useState(false);

  useEffect(() => {
    if (id && name && email && phone && address) {
      setClickAddNew(true);
    } else {
      setClickAddNew(false);
    }
  }, [dataArr, id, name, email, phone, address]);


  useEffect(() => {
    setMemberArr(dataArr);
  }, [dataArr, memberArr]);

  const handleAddNewEmployee = () => {
    if (clickAddNew) {
      addColumn({ id, name, email, phone, address, type, expenses, dob }, "Members");
      const newUiFoodArr = memberArr;
      newUiFoodArr.push({ id, name, email, phone, address, type, expenses, dob });
      setClickAddNew(false);
      setPhone("");
      setId("");
      setName("");
      setEmail("");
      setAddress("");
      setExpenses("");
      setWtype("");
      setDob("");
      
    }
  };
  return (
    <div className="h-full">
      {/* TableHead */}
      <div className="h-[50px] bg-[#03004E] rounded-md pt-3">
        <div className="w-[9%] ml-[2%] float-left pl-1">ID</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">Name</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">Phone</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">Email</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">Address</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">Type</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">Expenses</div>
        <div className="w-[9%] ml-[2%] float-left pl-1">DOB</div>
      </div>
      <div className="h-[80%] overflow-auto overflow-y-auto border-2 border-gray-900 rounded-md">
        {memberArr
          ? memberArr.map((member) => (
              <EachMember key={member.id} props={member} setTrigar={setTrigar}/>
            ))
          : ""}
      </div>
      <div className="h-[50px] bg-[#152160] rounded-md flex justify-center items-center">
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="ID"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Address"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setWtype(e.target.value)}
          value={type}
          placeholder="Type"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setExpenses(e.target.value)}
          value={expenses}
          placeholder="Expenses"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <input
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          placeholder="DOB"
          className="w-[9%] ml-[1%] mr-[1%] rounded-md bg-gray-700 pl-2 h-[60%]"
        />
        <div
          onClick={handleAddNewEmployee}
          className={
            clickAddNew
              ? "w-[12%] ml-[1%] mr-[1%] bg-green-900 rounded-md h-[70%] flex justify-center items-center cursor-pointer"
              : "w-[12%] ml-[1%] mr-[1%] bg-gray-600 text-gray-400 cursor-pointer rounded-md h-[70%] flex justify-center items-center"
          }
        >
          Add New
        </div>
      </div>
    </div>
  );
}
