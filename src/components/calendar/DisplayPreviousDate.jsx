import dayjs from "dayjs";
const DisplayPreviousDate = () => {
  const current = dayjs();
  const PreM = current.subtract(1, "month");
  const total = PreM.daysInMonth();

  const start = PreM.startOf("month");
  const startDay = start.day();
  console.log(total);

  return (
    <>
      <div
        style={{ gridColumnStart: startDay + 1 }}
        className={`col-start-1 w-full my-5 text-center flex justify-center items-center text-xl`}>
        Previous day
      </div>
    </>
  );
};

export default DisplayPreviousDate;
