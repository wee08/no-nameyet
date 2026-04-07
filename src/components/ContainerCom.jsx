import HeaderBar from "./HeaderBar";
import Navbar from "./Navbar";

const ContainerCom = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr] m-8">
      <HeaderBar />
      <Navbar />
    </div>
  );
};

export default ContainerCom;
