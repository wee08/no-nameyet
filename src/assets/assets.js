import {
  CalendarDays,
  ChevronDown,
  CircleCheck,
  CircleCheckBig,
  Menu,
  Plus,
  Square,
  SquareCheck,
  Star,
} from "lucide-react";

const assets = {
  Menu,

  menu1: [
    { icon: CircleCheckBig, title: "All tasks" },
    { icon: Star, title: "Stared" },
    { icon: ChevronDown, title: "Lists" },
    { icon: Square, title: "Daily task" },
    { icon: SquareCheck, title: "Work" },
    { icon: Plus, title: "Create new list " },
  ],
  menu2: [{ icon: CalendarDays }, { icon: CircleCheck }],
};
export default assets;
