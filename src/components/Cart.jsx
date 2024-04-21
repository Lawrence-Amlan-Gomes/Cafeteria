import useGetCurrentUser from "../hooks/useGetCurrentUser";
import editTable from "../functions.js/editTable";
import addColumn from "../functions.js/addColumn";
import useGetData from "../hooks/useGetData";
import { useEffect, useState } from "react";

export default function Cart({ cart, setCart, today }) {
  const userInfo = useGetCurrentUser();
  const [memberArr] = useGetData("Members");
  const [FoodArr] = useGetData("Foods");
  const [PaymentArr, setTrigar] = useGetData("Payment");
  const [uiPayArr, setUiPayArr] = useState([]);

  useEffect(() => {
    setUiPayArr(PaymentArr);
  }, [PaymentArr, uiPayArr]);

  const { items, totalPrice } = cart;
  let isZero = true;
  if (items.length == 0) {
    isZero = false;
  } else {
    isZero = true;
  }

  const Payment = () => {
    if (totalPrice > 0) {
      const ok = confirm(
        `${totalPrice} TK Will be debited from your BKash account, Are you sure to pay right now?`
      );
      if (ok) {
        setTimeout(() => {
          for (let i of memberArr) {
            if (i.email == userInfo.email) {
              editTable(
                { ...i, expenses: i.expenses + totalPrice },
                "Members",
                i.fieldId
              );
            }
          }
          for (let i of items) {
            for (let j of FoodArr) {
              if (i.name == j.type) {
                editTable(
                  { ...j, quantity: j.quantity - i.quantity },
                  "Foods",
                  j.fieldId
                );
              }
            }
          }
          ///
          const allDates = [];
          for (let i of uiPayArr) {
            allDates.push(i.date);
          }
          ///
          if (allDates.includes(today)) {
            for(let i of uiPayArr){
              if(today == i.date){
                editTable(
                  { ...i, amount: i.amount + totalPrice },
                  "Payment",
                  i.fieldId
                );
              }
            }
          } else {
            addColumn(
              { date: today, type: "Online", amount: totalPrice },
              "Payment"
            );
            setTrigar((prev) => !prev);
          }
          setCart({ items: [], totalPrice: 0 });
        }, 2000);
      }
    }
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="border-2 border-gray-700 w-[50%] p-5 rounded-lg">
        <div className="w-full text-center text-3xl text-blue-600">
          Your Cart
        </div>
        {isZero ? (
          <div className="mt-5 float-left w-full">
            <div className="w-full float-left mt-2 text-xl text-yellow-400">
              <div className="w-[30%] ml-[3%] float-left">Item</div>
              <div className="w-[30%] ml-[3%] float-left">Quantity</div>
              <div className="w-[30%] ml-[3%] float-left">Price</div>
            </div>
            {items.map((food) => (
              <div key={food.name} className="w-full float-left mt-2">
                <div className="w-[30%] ml-[3%] float-left">{food.name}</div>
                <div className="w-[30%] ml-[3%] float-left">
                  {food.quantity}
                </div>
                <div className="w-[30%] ml-[3%] float-left">{food.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-2xl text-center w-full mt-5">
            Your Cart Is Empty
          </div>
        )}

        <div className="w-full text-center text-2xl mt-5 float-left text-green-600">
          Total {totalPrice} TK
        </div>

        <div>
          <button
            className="w-[40%] ml-[5%] mr-[5%] h-[50px] mt-5 bg-gray-700 rounded-md hover:bg-green-900"
            onClick={Payment}
          >
            Proceed To Payment
          </button>
          <button
            className="w-[40%] ml-[5%] mr-[5%] h-[50px] mt-5 bg-gray-700 rounded-md hover:bg-red-900"
            onClick={() => setCart({ items: [], totalPrice: 0 })}
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
}
