import Create from "@/components/Create";
import FakeCalendar from "@/components/FakeCalendar";
import { SideCalendar } from "@/components/SideCalendar";
import SideTaps from "@/components/SideTaps";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <SideTaps />
        <SideCalendar />
        <Create />
      </div>

      <FakeCalendar />
    </div>
  );
}
