import assets from "../../../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Calendar from "../Calendar";
import useCalendar from "../hooks/useCalendar";

const CalendarHeader = () => {
  const [active, setActive] = useState(null);

  const { getPrevoiusMonth, getNextMonth, monthName, yearCount, currentMonth } =
    useCalendar();

  return (
    <div className="col-start-2 ml-14 grid grid-rows-2">
      <div className="flex justify-between items-center row-end-1">
        <div className=" col-start-1 font-bold text-white text-2xl flex items-center gap-4">
          <div className="flex items-center gap-8 w-48">
            <p>{monthName}</p>
            <p>{yearCount}</p>
          </div>
          <div className="flex ml-8 gap-8">
            <ChevronLeft strokeWidth={4} onClick={getPrevoiusMonth} />
            <ChevronRight strokeWidth={4} onClick={getNextMonth} />
          </div>
        </div>
        <div className={`flex  items-center  rounded-full bg-white/20}`}>
          {assets.menu2.map((item, idx) => {
            const { icon: Icon } = item;
            return (
              <div
                onClick={() => setActive(idx)}
                key={idx}
                className={`w-full  px-2 py-1 border border-white/80
                ${active === idx ? "bg-10per/55" : " "} 
                ${idx == 0 ? "rounded-l-full" : "rounded-r-full"}`}>
                <Icon strokeWidth={2} stroke="white" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="row-start-1 row-span-full my-4">
        <Calendar month={currentMonth} year={yearCount} />
      </div>
    </div>
  );
};

export default CalendarHeader;
