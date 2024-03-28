import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachFood({ props, setTrigar }) {
  const [uiPrice, setUiPrice] = useState(Number(props.price));
  const [uiQuantity, setUiQuantity] = useState(Number(props.quantity));
  const [isEditing, setIsEditing] = useState(false);
  const [uiMid, setUiMid] = useState(props.m_id);
  const [uiRid, setUiRid] = useState(props.r_id);
  const [uiType, setUiType] = useState(props.type);

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("Foods", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        price: uiPrice,
        quantity: uiQuantity,
        m_id: uiMid,
        r_id: uiRid,
        type: uiType,
      },
      "Foods",
      props.fieldId
    );
  }, [props, props.fieldId, uiMid, uiPrice, uiQuantity, uiRid, uiType]);

  return (
    <div className="w-full h-[50px]">
      <div className="float-left w-[13%] ml-[2%] mt-[1%] pl-1">{props.id}</div>

      {isEditing ? (
        <input
          onChange={(e) => setUiPrice(e.target.value)}
          value={uiPrice}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {`${uiPrice} TK`}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setUiType(e.target.value)}
          value={uiType}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {uiType}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setUiQuantity(e.target.value)}
          value={uiQuantity}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {uiQuantity}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setUiMid(e.target.value)}
          value={uiMid}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {uiMid}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setUiRid(e.target.value)}
          value={uiRid}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {uiRid}
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
