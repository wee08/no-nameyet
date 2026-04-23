import dayjs from "dayjs";
import "./Calendar.css";
const DisplayPreviousDate = ({ startDayProp, month }) => {
  const current = dayjs().month(month);
  const PreM = current.subtract(1, "month");
  const total = PreM.daysInMonth();

  const dayOfPreM = [];
  const getLastIdx = -startDayProp;
  for (let i = 1; i <= total; i++) [dayOfPreM.push(i)];
  const lastIdx = startDayProp === 0 ? [] : dayOfPreM.slice(getLastIdx);

  // .slice(vlu) get last index of arr
  return (
    <>
      {lastIdx.map((item, idx) => (
        <div
          key={idx}
          style={{ gridColumnStart: idx + 1 }}
          className={`table-border render-bd w-full py-3 text-center flex justify-center items-center text-xl`}>
          <p className=" opacity-60">{item}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayPreviousDate;
