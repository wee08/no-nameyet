import dayjs from "dayjs";
import DisplayPreviousDate from "./DisplayPreviousDate";
import DisplayNextDate from "./DisplayNextDate";

const RenderCalendarCell = ({ startDayProp, curM }) => {
  const daysOfMonth = [];

  let current = dayjs().month(curM);

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
      <DisplayPreviousDate startDayProp={startDayProp} curM={curM} />
      {daysOfMonth.map((day, idx) => {
        return (
          <div
            key={idx}
            style={idx === 0 ? { gridColumnStart: startDay + 1 } : {}}
            className="w-full py-3 text-center text-xl flex justify-center items-center">
            <p
              className={`w-12 h-12 flex justify-center items-center ${currentDay === day ? "bg-10per/90  rounded-full" : ""}`}>
              {day}
            </p>
          </div>
        );
      })}
      <DisplayNextDate
        startDayProp={startDayProp}
        currentMonth={total}
        curM={curM}
      />
    </>
  );
};

export default RenderCalendarCell;
