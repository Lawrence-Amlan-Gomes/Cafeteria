import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachMember({ props, setTrigar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [phone, setPhone] = useState(props.phone);
  const [email, setEmail] = useState(props.email);
  const [address, setAddress] = useState(props.address);
  const [type, setType] = useState(props.type);
  const [expenses, setExpenses] = useState(props.expenses);
  const [dob, setDob] = useState(props.dob);

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("Members", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        name: name,
        email: email,
        address: address,
        type: type,
        phone: phone,
        expenses: expenses,
        dob: dob,
      },
      "Members",
      props.fieldId
    );
  }, [props, props.fieldId, address, name, email, type, phone, expenses, dob]);

  return (
    <div className="w-full h-[50px] mt-1">
      <div className="float-left w-[9%] ml-[2%] mt-[1%] pl-1">{props.id}</div>

      {isEditing ? (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {name}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {phone}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {email}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {address}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {type}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setExpenses(e.target.value)}
          value={expenses}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {expenses}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[9%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {dob}
        </div>
      )}

      <div className="mt-[1.2%]  w-[10%]  flex justify-center items-center float-left">
        {isEditing ? (
          <img
            className="w-5 mr-3"
            src={doneIcon}
            onClick={() => setIsEditing(false)}
          />
        ) : (
          <img
            className="w-5 mr-3"
            src={editIcon}
            onClick={() => setIsEditing(true)}
          />
        )}

        <img
          onClick={handleDeleteTable}
          className="w-5 ml-3"
          src={deleteIcon}
        />
      </div>
    </div>
  );
}
