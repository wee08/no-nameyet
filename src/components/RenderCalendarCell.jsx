import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import { renderToPipeableStream } from "react-dom/server";

const RenderCalendarCell = () => {
  let current = dayjs();

  const [selected, setSelected] = useState(null);
  let rowCont = 0;

  const start = current.startOf("month");
  const startDay = start.day();
  const total = current.daysInMonth();
  const currentDay = current.date();
  console.log(currentDay);

  const preMonth = current.subtract(1, "month").daysInMonth();
  const daysOfMonth = [];

  for (let i = 1; i <= total; i++) {
    daysOfMonth.push(i);
  }
  return (
    <>
      {daysOfMonth.map((day, idx) => {
        return (
          <div
            key={idx}
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
