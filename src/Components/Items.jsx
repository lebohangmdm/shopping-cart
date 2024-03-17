import { useGlobalContext } from "../context";
import Item from "./Item";

const Items = () => {
  const { cart, clearCartHandler } = useGlobalContext();

  return (
    <div className="space-y-4">
      {cart.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
      <div className="mt-4">
        <button
          className="py-2 px-4 w-full text-xl text-white bg-black uppercase"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Items;
