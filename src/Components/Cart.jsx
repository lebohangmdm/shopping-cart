import { useGlobalContext } from "../context";

const Cart = () => {
  const { cart, total, tax, subtotal } = useGlobalContext();
  return (
    <div className="border border-black p-4">
      <div>
        <p className="text-xl font-semibold uppercase mb-4">Order Summary</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p className=" text-gray-700 uppercase">Subtotal</p>
            <p className="font-semibold">{subtotal}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className=" text-gray-700 uppercase">tax</p>
            <p className="font-semibold">{tax}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className=" text-gray-700 uppercase">total</p>
            <p className="font-bold">{total}</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="py-2 px-4 w-full text-xl text-white bg-black">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
