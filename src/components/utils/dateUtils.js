import dayjs from "dayjs";

export const getMonthName = (monthIdx) =>
  dayjs().month(monthIdx).format("MMMM");

export const getCurrentMonthIndex = () => dayjs().month();

export const getCurrentYear = () => dayjs().year();
