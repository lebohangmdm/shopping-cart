import Cart from "./Components/Cart";
import Items from "./Components/Items";

function App() {
  return (
    <>
      <section>
        <div className="container mx-auto px-8 my-12 ">
          <h1 className="text-3xl border-b-2 border-black pb-4">
            Shopping Cart
          </h1>

          <div className="grid-container mt-8 grid items-start">
            <Items />
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
