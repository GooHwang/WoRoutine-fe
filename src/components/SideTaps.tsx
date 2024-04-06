"use client";
import { Button } from "@/components/ui/button";

const SideTaps = () => {
  return (
    <div className="flex flex-col">
      <Button
        variant="ghost"
        className="border-transparent h-12 justify-start focus:bg-sky-100 hover:bg-sky-100 border-l-4 focus:border-customBlue rounded-none"
      >
        🤍Planner
      </Button>
      <Button
        variant="ghost"
        className="border-transparent h-12 justify-start focus:bg-sky-100 hover:bg-sky-100 border-l-4 focus:border-customBlue rounded-none"
      >
        🤍Task
      </Button>
      <Button
        variant="ghost"
        className="border-transparent h-12 justify-start focus:bg-sky-100 hover:bg-sky-100 border-l-4 focus:border-customBlue rounded-none"
      >
        🤍Setting
      </Button>
    </div>
  );
};

export default SideTaps;
