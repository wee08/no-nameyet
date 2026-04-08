import dayjs from "dayjs";
import DisplayPreviousDate from "./DisplayPreviousDate";
import DisplayNextDate from "./DisplayNextDate";

const RenderCalendarCell = ({ startDayProp }) => {
  const daysOfMonth = [];

  let current = dayjs();
  const start = current.startOf("month");
  const startDay = start.day();
  startDayProp = startDay;

  const total = current.daysInMonth();
  const currentDay = current.date();

  for (let i = 1; i <= total; i++) {
    daysOfMonth.push(i);
  }

  return (
    <>
      <DisplayPreviousDate startDayProp={startDayProp} />
      {daysOfMonth.map((day, idx) => {
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
      <DisplayNextDate startDayProp={startDayProp} currentMonth={total} />
    </>
  );
};

export default RenderCalendarCell;
