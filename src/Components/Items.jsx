import { useGlobalContext } from "../context";
import Item from "./Item";

const Items = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="space-y-4">
      {cart.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
