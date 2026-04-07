import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className=" col-start-1 row-start-1">
        <div className="flex items-center gap-8 px-5 ">
          <assets.Menu stroke="white" size={38} strokeWidth={3} />
          <p className="text-white text-2xl font-bold">Manut</p>
        </div>
        {assets.menu1.map((task, idx) => {
          const { icon: Icon, title } = task;
          return (
            <div
              key={idx}
              className={`
                my-4 flex gap-4  px-5 items-center text-start cursor-pointer justify-between ${active === idx ? "bg-10per/55 rounded-full " : ""}
              ${idx == 2 ? "mt-16 " : ""}
              `}
              onClick={() => setActive(idx)}>
              <p className="text-white">{title}</p>
              <Icon size={18} stroke="white" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
