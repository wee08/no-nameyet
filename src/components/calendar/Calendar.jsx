import dayjs from "dayjs";
import RenderCalendarCell from "./RenderCalendarCell";

const Calendar = () => {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  return (
    <div className="bg-black w-full h-full rounded-4xl p-4 ">
      <div className="text-white font-ligh  text-center grid grid-cols-7 grid-rows-7 ">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`font-bold w-full items-center flex justify-center col-start-${idx + 1}}`}>
            {/* <div className={`font-bold`}>{d.toUpperCase()}</div> */}
            {d.toUpperCase()}
          </div>
        ))}
        <RenderCalendarCell />
      </div>
    </div>
  );
};

export default Calendar;
