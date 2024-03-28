import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachPay({ props, setTrigar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [m_id, setMid] = useState(props.m_id);
  const [type, setType] = useState(props.type);
  const [amount, setAmount] = useState(props.amount);
  
  

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("Payment", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        type: type,
        m_id: m_id,
        amount: amount,
      },
      "Payment",
      props.fieldId
    );
  }, [props, props.fieldId, m_id, type, amount]);

  return (
    <div className="w-full h-[50px] mt-1">

      {isEditing ? (
        <input
          onChange={(e) => setMid(e.target.value)}
          value={m_id}
          className="float-left w-[28%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[28%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {m_id}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="float-left w-[28%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[28%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {type}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="float-left w-[28%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[28%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {`${amount} TK`}
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
