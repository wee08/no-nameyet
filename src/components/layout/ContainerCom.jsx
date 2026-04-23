import { useState } from "react";
import Navbar from "../Navbar";
import CalendarHeader from "../calendar/components/CalendarHeader";
import useCalendar from "../calendar/hooks/useCalendar";
const ContainerCom = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr] m-8">
      <CalendarHeader />
      <Navbar />
    </div>
  );
};

export default ContainerCom;
