import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachWork({ props, setTrigar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [type, setType] = useState(props.type);
  const [shift, setShift] = useState(props.shift);
  const [timing, setTiming] = useState(props.timing);
  const [e_id, setEid] = useState(props.e_id);
  

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("Works", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        type: type,
        timing: timing,
        e_id: e_id,
        shift: shift,
      },
      "Works",
      props.fieldId
    );
  }, [props, props.fieldId, e_id, type, timing, shift]);

  return (
    <div className="w-full h-[50px] mt-1">
      <div className="float-left w-[16%] ml-[2%] mt-[1%] pl-1">{props.id}</div>

      {isEditing ? (
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {type}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setShift(e.target.value)}
          value={shift}
          className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {shift}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setTiming(e.target.value)}
          value={timing}
          className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {timing}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setEid(e.target.value)}
          value={e_id}
          className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[16%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {e_id}
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
