import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachRawMaterial({ props, setTrigar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [weight, setWeight] = useState(props.weight);
  const [expiryDate, setExpiryDate] = useState(props.expiryDate);
  const [f_id, setFid] = useState(props.f_id);
  const [v_id, setVid] = useState(props.v_id);

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("RawMaterials", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        name: name,
        weight: weight,
        expiryDate: expiryDate,
        f_id: f_id,
        price: price,
        v_id: v_id,
      },
      "RawMaterials",
      props.fieldId
    );
  }, [props, props.fieldId, expiryDate, name, weight, f_id, price, v_id]);

  return (
    <div className="w-full h-[50px] mt-1">
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
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {`${price} TK`}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {`${weight} KG`}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setExpiryDate(e.target.value)}
          value={expiryDate}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {expiryDate}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setFid(e.target.value)}
          value={f_id}
          className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[11%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {f_id}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setVid(e.target.value)}
          value={v_id}
          className="float-left w-[10%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[10%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {v_id}
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
