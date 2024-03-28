import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const addColumn = async ( props , tableName) => {
  await addDoc(collection(db, tableName), {
    ...props,
  });
};
export default addColumn;
