import React, { useState } from "react";

const Calendar = () => {
  // const day = dayjs().format("D");
  let dayN = Number(day);
  const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const [dayNum, setDay] = useState([]);

  const date = new Date();
  const day = date.getDay();
  console.log(day);
  const renderData = () => {
    let i;
    for (i = 1; i <= 31; i++) {
      setDay(i);
    }
    return <p>{dayNum}</p>;
  };

  return (
    <div className="bg-black w-full h-full rounded-4xl p-4 ">
      <div className="text-white font-light flex justify-evenly text-center">
        {dayList.map((d, idx) => (
          <div key={idx} className="w-full items-center flex justify-center ">
            <div className="font-bold">
              {d.toUpperCase()}
              <br />
              <div
                className={`
                w-8 h-8  flex justify-center items-center 
                
                `}></div>
            </div>
          </div>
        ))}
        {renderData}
      </div>
    </div>
  );
};

export default Calendar;
