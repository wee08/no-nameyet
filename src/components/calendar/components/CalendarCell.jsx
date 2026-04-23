import dayjs from "dayjs";
import DisplayPreviousDate from "./DisplayPreviousDate";
import DisplayNextDate from "./DisplayNextDate";
import "./Calendar.css";
import useCalendar from "../hooks/useCalendar";
const CalednarCell = ({ startDayProp, month, year }) => {
  const { getCurrentMonthIndex } = useCalendar();

  const daysOfMonth = [];
  const curD = dayjs().date();
  const currentMonth = getCurrentMonthIndex();
  let current = dayjs(`${year}-${month + 1}-${curD}`);
  // month is 3 so in this format the dayjs notified it as March

  const currentDay = current.date();
  const start = current.startOf("month");
  const startDay = start.day();
  startDayProp = startDay;

  const total = current.daysInMonth();

  for (let i = 1; i <= total; i++) {
    daysOfMonth.push(i);
  }

  return (
    <>
      <DisplayPreviousDate startDayProp={startDayProp} month={month} />
      {daysOfMonth.map((day, idx) => {
        return (
          <div
            key={idx}
            style={idx === 0 ? { gridColumnStart: startDay + 1 } : {}}
            className="w-full py-3 text-center text-xl flex justify-center items-center table-border">
            <p
              className={`w-12 h-12 flex justify-center items-center ${currentDay === day && month == currentMonth ? "bg-10per/90  rounded-full" : ""}`}>
              {day}
            </p>
          </div>
        );
      })}
      <DisplayNextDate
        startDayProp={startDayProp}
        currentMonth={total}
        month={month}
      />
    </>
  );
};

export default CalednarCell;
