import dayjs from "dayjs";
import DisplayPreviousDate from "./DisplayPreviousDate";
import DisplayNextDate from "./DisplayNextDate";

const RenderCalendarCell = ({ startDayProp, curM, yearCount }) => {
  const daysOfMonth = [];
  const curD = dayjs().date();

  let current = dayjs(`${yearCount}-${curM + 1}-${curD}`);

  // curM is 3 so in this format the dayjs notified it as March
  const curr = dayjs(`${yearCount}-${curM + 1}-01`);
  console.log("start M", curr.startOf("month"));
  console.log("start ", curr.startOf("month").day());
  console.log("end", curr.endOf("month").day());
  console.log("curM ", curM);
  console.log("year count ", yearCount);

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
