import { doc, deleteDoc } from "firebase/firestore";
import db from "../firebase";

const deleteTableCol = async (tableName, ColID) => {
  await deleteDoc(doc(db, tableName, ColID));
  console.log(tableName, ColID)
  console.log("deleted")
};
export default deleteTableCol;
