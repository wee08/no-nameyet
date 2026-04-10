import Navbar from "../Navbar";
import CalendarHeader from "../calendar/components/CalendarHeader";

const ContainerCom = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr] m-8">
      <CalendarHeader />
      <Navbar />
    </div>
  );
};

export default ContainerCom;
