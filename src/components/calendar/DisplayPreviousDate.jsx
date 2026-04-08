import dayjs from "dayjs";
const DisplayPreviousDate = ({ startDayProp }) => {
  const current = dayjs();
  const PreM = current.subtract(1, "month");
  const total = PreM.daysInMonth();

  const dayOfPreM = [];
  const getLastIdx = -startDayProp;
  for (let i = 1; i <= total; i++) [dayOfPreM.push(i)];
  const lastIdx = dayOfPreM.slice(getLastIdx);
  // .slice(vlu) get last index of arr
  return (
    <>
      {lastIdx.map((item, idx) => (
        <div
          key={idx}
          style={{ gridColumnStart: idx + 1 }}
          className={`w-full my-5 text-center flex justify-center items-center text-xl opacity-60`}>
          <p>{item}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayPreviousDate;
