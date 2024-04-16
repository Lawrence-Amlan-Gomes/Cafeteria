export default function FoodCard({ imgUrl, type, price, setCart, cart }) {
  const { items, totalPrice } = cart;

  const handleClick = () => {
    let newPrice = Number(totalPrice) + Number(price);
    let c = 0;
    for (let i of items) {
        console.log(i.name)
      if (i.name == type) {
        i.price = Number(i.price) + Number(price);
        i.quantity = i.quantity + 1;
        c = 1;
      }
    }
    if (c == 0) {
      items.push({ name: type, price: price, quantity: 1 });
    }
    setCart({items: items, totalPrice: newPrice});
  };
  return (
    <div className="w-[18%] m-[1%] h-[300px] border-gray-500 border-2 rounded-md float-left bg-[#0f0e38] hover:bg-[#0d0d29]">
      <div className="w-[90%] m-[5%] rounded-md overflow-hidden h-[50%]">
        <img src={imgUrl} alt="img" className="h-full w-full" />
      </div>
      <div className="w-full text-center text-xl mt-1">{type}</div>
      <div className="w-full text-center text-md text-gray-500 mt-1">
        {price} TK
      </div>
      <button
        className="w-[70%] ml-[15%] mr-[15%] bg-gray-700 p-2 rounded-lg mt-2 hover:bg-yellow-700"
        onClick={handleClick}
      >
        Add To Cart
      </button>
    </div>
  );
}
