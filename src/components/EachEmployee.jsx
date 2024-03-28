import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachEmployee({ props, setTrigar }) {
  const [name, setName] = useState(props.name);
  const [gender, setGender] = useState(props.gender);
  const [isEditing, setIsEditing] = useState(false);
  const [wage, setWage] = useState(props.wage);
  const [w_type, setWtype] = useState(props.w_type);
  const [phone, setPhone] = useState(props.phone);
  const [w_id, setWid] = useState(props.w_id);

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("Employees", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        name: name,
        gender: gender,
        wage: wage,
        w_type: w_type,
        phone: phone,
        w_id: w_id
      },
      "Employees",
      props.fieldId
    );
  }, [props, props.fieldId, wage, name, gender, w_type, phone, w_id]);

  return (
    <div className="w-full h-[50px]">
      <div className="float-left w-[11%] ml-[2%] mt-[1%] pl-1">{props.id}</div>

      {isEditing ? (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {name}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {phone}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {gender}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setWage(e.target.value)}
          value={wage}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {wage}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setWtype(e.target.value)}
          value={w_type}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {w_type}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setWid(e.target.value)}
          value={w_id}
          className="float-left w-[10%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[10%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {w_id}
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
