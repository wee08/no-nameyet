import dayjs from "dayjs";
import { useState } from "react";

const useCalendar = () => {
  const getCurrentMonthIndex = () => dayjs().month();
  const getMonthName = (monthIndex) => dayjs().month(monthIndex).format("MMMM");
  const getCurrentYear = () => dayjs().year();

  let [currentMonth, setCurrenMonth] = useState(getCurrentMonthIndex());
  let [yearCount, setYearCount] = useState(getCurrentYear());

  const monthName = getMonthName(currentMonth);

  const getNextMonth = () => {
    setCurrenMonth(currentMonth + 1);
    if (currentMonth === 11) {
      setYearCount(yearCount + 1);
      setCurrenMonth(0);
    }
  };
  const getPrevoiusMonth = () => {
    setCurrenMonth(currentMonth - 1);
    if (currentMonth === 0) {
      setYearCount(yearCount - 1);
      setCurrenMonth(11);
    }
  };

  return {
    getCurrentMonthIndex,
    getMonthName,
    getCurrentYear,
    getPrevoiusMonth,
    getNextMonth,
    currentMonth,
    yearCount,
    monthName,
  };
};

export default useCalendar;
