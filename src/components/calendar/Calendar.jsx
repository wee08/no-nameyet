import { daysList } from "../utils/dateUtils";
import RenderCalendarCell from "./RenderCalendarCell";
const Calendar = ({ curM, yearCount }) => {
  return (
    <div className="bg-black w-full h-full rounded-4xl p-4 ">
      <div className=" text-white font-ligh rounded-2xl  text-center grid grid-cols-7 grid-rows-7  border border-white/40">
        {daysList.map((d, idx) => (
          <div
            key={idx}
            style={{ gridColumnStart: idx + 1 }}
            className={`font-bold w-full items-center flex justify-center `}>
            {/* <div className={`font-bold`}>{d.toUpperCase()}</div> */}
            {d.toUpperCase()}
          </div>
        ))}
        <RenderCalendarCell curM={curM} yearCount={yearCount} />
      </div>
    </div>
  );
};

export default Calendar;
