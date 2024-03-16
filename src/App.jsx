function App() {
  return (
    <>
      <section>
        <div className="container mx-auto px-8 my-12 ">
          <h1 className="text-3xl border-b-2 border-black pb-4">
            Shopping Cart
          </h1>

          <div className="grid-container mt-8">
            <div className="space-y-2">
              <div className="flex gap-6  border-b-2 border-black pb-4">
                <div className="">
                  <img
                    src="shoe.jpg"
                    alt="shoe-1"
                    className="w-[200px] h-[200px] object-cover "
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold ">OZMILLEN Shoes</p>
                    <button className="text-2xl">x</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex  gap-4">
                      <div className="flex items-center gap-2 py-1 px-6 border border-black bg-transparent">
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                        <select name="" id="" className="bg-transparent p-2">
                          <option value="black" className="text-xl">
                            black
                          </option>
                        </select>
                      </div>
                      <select
                        name=""
                        id=""
                        className="py-1 px-6 border border-black bg-transparent"
                      >
                        {Array.from({ length: 12 }, (_, i) => {
                          return <option>{`US ${i + 1}`}</option>;
                        })}
                      </select>
                    </div>
                    <div className="flex items-center gap-4 border border-black py-2 px-6">
                      <button className="text-black font-medium text-3xl">
                        -
                      </button>
                      <span className="text-black font-medium text-xl">1</span>
                      <button className="text-black font-medium text-3xl">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <a className=" underline underline-offset-4 cursor-pointer">
                      My favorite
                    </a>
                    <p className="text-bold text-xl">
                      $<strong>156</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-black p-4">
              <div>
                <p className="text-xl font-semibold uppercase mb-4">
                  Order Summary
                </p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className=" text-gray-700 uppercase">Subtotal</p>
                    <p className="font-semibold">$128</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className=" text-gray-700 uppercase">tax</p>
                    <p className="font-semibold">$3</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className=" text-gray-700 uppercase">total</p>
                    <p className="font-bold">$131</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="py-2 px-4 w-full text-xl text-white bg-black">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
