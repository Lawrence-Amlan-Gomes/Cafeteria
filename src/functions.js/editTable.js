import {db} from "../firebase"
import { doc, setDoc } from "firebase/firestore";

const editFoods = async( props, tableName, fieldId ) =>{
  await setDoc(doc(db, tableName, fieldId), {
    ...props,
  });
}
export default editFoods;