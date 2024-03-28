import db from "../firebase"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function useGetFoods(tableName) {
  const [trigar, setTrigar] = useState(true);
  const [dataArr, setdataArr] = useState([]);
  const foods = async () => {
    const querySnapshot = await getDocs(collection(db, tableName));
    const newFoodArr = [];
    querySnapshot.forEach((doc) => {
      newFoodArr.push({fieldId:doc.id, ...doc.data() });
    });
    setdataArr(newFoodArr);
  };
  useEffect(() => {
    foods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigar]);
  return [dataArr, setTrigar];
}
