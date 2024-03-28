import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";
import doneIcon from "../assets/doneIcon.png";
import deleteTableCol from "../functions.js/deleteTableCol";
import editTable from "../functions.js/editTable";
import { useEffect, useState } from "react";

export default function EachVendor({ props, setTrigar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [address, setUiType] = useState(props.address);
  const [phone, setPhone] = useState(props.phone);
  const [website, setWebsite] = useState(props.website);
  const [uiRid, setUiRid] = useState(props.r_id);
  

  const handleDeleteTable = () => {
    const sureDelete = confirm("Are you want to delete this item?");
    if (sureDelete) {
      deleteTableCol("Vendors", props.fieldId);
      setTrigar((prev) => !prev);
    }
  };

  useEffect(() => {
    editTable(
      {
        ...props,
        name: name,
        phone: phone,
        website: website,
        r_id: uiRid,
        address: address,
      },
      "Vendors",
      props.fieldId
    );
  }, [props, props.fieldId, website, name, phone, uiRid, address]);

  return (
    <div className="w-full h-[50px] mt-1">
      <div className="float-left w-[13%] ml-[2%] mt-[1%] pl-1">{props.id}</div>

      {isEditing ? (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {name}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setUiType(e.target.value)}
          value={address}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {address}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {phone}
        </div>
      )}

      {isEditing ? (
        <input
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
          className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto rounded-md bg-gray-700 pl-1"
        />
      ) : (
        <div className="float-left w-[13%] ml-[2%] mt-[1%] overflow-auto pl-1">
          {website}
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
