import FakeCalendar from "@/components/FakeCalendar";
import { SideCalendar } from "@/components/SideCalendar";
import SideTaps from "@/components/SideTaps";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <SideTaps />
        <SideCalendar />
      </div>

      <FakeCalendar />
      <Button variant="ghost"> 임시 글쓰기</Button>
    </div>
  );
}
