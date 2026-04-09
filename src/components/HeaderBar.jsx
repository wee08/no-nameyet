import dayjs from "dayjs";
import assets from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { use, useState } from "react";
import Calendar from "./calendar/Calendar";

const HeaderBar = () => {
  let [curM, setCurM] = useState(dayjs().month());
  const m = dayjs().month(curM).format("MMMM");

  let y = dayjs().year();

  let [yearCount, setYearCount] = useState(y);

  if (curM > 11) {
    setCurM(0);
    setYearCount((yearCount += 1));
  } else if (curM < 0) {
    setCurM(11);
    setYearCount((yearCount -= 1));
  }
  console.log("curM: ", curM);

  const [active, setActive] = useState(null);

  return (
    <div className="col-start-2 ml-14 grid grid-rows-2">
      <div className="flex justify-between items-center row-end-1">
        <div className=" col-start-1 font-bold text-white text-2xl flex items-center gap-4">
          <div className="flex items-center gap-8 w-48">
            <p>{m}</p>
            <p>{yearCount}</p>
          </div>
          <div className="flex ml-8 gap-8">
            <ChevronLeft
              strokeWidth={4}
              onClick={() => {
                setCurM((curM -= 1));
              }}
            />
            <ChevronRight
              strokeWidth={4}
              onClick={() => {
                setCurM((curM += 1));
              }}
            />
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

          {/* <div className="m-0 border-r-2 border-white/70 border-1/2 h-5" /> */}
        </div>
      </div>
      <div className="row-start-1 row-span-full my-4">
        <Calendar curM={curM} yearCount={yearCount} />
      </div>
    </div>
  );
};

export default HeaderBar;
