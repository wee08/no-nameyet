import dayjs from "dayjs";
const DisplayPreviousDate = ({ startDayProp, inc, curM }) => {
  const current = dayjs().month(curM);
  const PreM = current.subtract(1, "month");
  const total = PreM.daysInMonth();

  const dayOfPreM = [];
  const getLastIdx = -startDayProp;
  for (let i = 1; i <= total; i++) [dayOfPreM.push(i)];
  const lastIdx = dayOfPreM.slice(getLastIdx);
  console.log(getLastIdx);
  console.log(lastIdx);
  // .slice(vlu) get last index of arr
  return (
    <>
      {lastIdx.map((item, idx) => (
        <div
          key={idx}
          style={getLastIdx === 0 ? {} : { gridColumnStart: idx + 1 }}
          className={`render-bd w-full py-3 text-center flex justify-center items-center text-xl`}>
          <p className=" opacity-60">{item}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayPreviousDate;
