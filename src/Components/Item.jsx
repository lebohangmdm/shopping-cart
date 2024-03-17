import React from "react";

const Item = ({ item }) => {
  const { name, photoName, price, color } = item;
  console.log(item);

  return (
    <div className="flex gap-6  border-b-2 border-black pb-4">
      <div className="">
        <img
          src={photoName}
          alt={name}
          className="w-[200px] h-[200px] object-cover "
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold ">{name}</p>
          <button className="text-2xl">x</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex  gap-4">
            <div className="flex items-center gap-2 py-1 px-6 border border-black bg-transparent">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <select name="" id="" className="bg-transparent p-2">
                {color.map((c) => {
                  return (
                    <option key={c} value="black" className="text-xl">
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
            <select
              name=""
              id=""
              className="py-1 px-6 border border-black bg-transparent"
            >
              {Array.from({ length: 12 }, (_, i) => {
                return <option key={i}>{`US ${i + 1}`}</option>;
              })}
            </select>
          </div>
          <div className="flex items-center gap-4 border border-black py-2 px-6">
            <button className="text-black font-medium text-3xl">-</button>
            <span className="text-black font-medium text-xl">1</span>
            <button className="text-black font-medium text-3xl">+</button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <a className=" underline underline-offset-4 cursor-pointer">
            My favorite
          </a>
          <p className="text-bold text-xl">
            R<strong>{price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;