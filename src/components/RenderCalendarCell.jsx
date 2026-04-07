import React from "react";
import dayjs from "dayjs";

const RenderCalendarCell = () => {
  let current = dayjs();

  const start = current.startOf("month");
  const startDay = start.day();

  const preMonth = current.subtract(1, "month").daysInMonth();
  const nextMonth = current.add(1, "month").daysInMonth();

  const total = current.daysInMonth();
  const currentDay = current.date();

  const daysOfMonth = [];

  let AddStartDay = startDay;

  for (let i = 1; i <= total; i++) {
    daysOfMonth.push(i);
  }

  console.log(startDay);

  return (
    <>
      {daysOfMonth.map((day, idx) => {
        {
          AddStartDay += 1;
        }
        return (
          <div
            key={idx}
            style={idx === 0 ? { gridColumnStart: startDay + 1 } : {}}
            className={`w-full my-5 text-center flex justify-center items-center text-xl 
            ${currentDay === day ? "bg-10per/50 rounded-full" : ""}
            `}>
            {day}
          </div>
        );
      })}
    </>
  );
};

export default RenderCalendarCell;
