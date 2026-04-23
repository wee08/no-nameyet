import dayjs from "dayjs";
import "./Calendar.css";
const DisplayNextDate = ({ startDayProp, currentMonth, month }) => {
  const current = dayjs().month(month);
  const nextM = current.add(1, "month");
  const total = nextM.daysInMonth();
  const totalGrid = 42;

  let takendGrid = startDayProp + currentMonth;
  let emtGrid = totalGrid - takendGrid;

  const dayOfNextM = [];

  const start = nextM.startOf("month");
  const startDay = start.day();
  let incrementSD = startDay;

  for (let i = 1; i <= total; i++) {
    dayOfNextM.push(i);
  }
  const startIdx = dayOfNextM.slice(0, emtGrid);
  return (
    <>
      {startIdx.map((item, idx) => (
        <div
          key={idx}
          className={`table-border render-bd w-full py-3 text-center flex justify-center items-center text-xl `}>
          <p className=" opacity-60">{item}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayNextDate;
