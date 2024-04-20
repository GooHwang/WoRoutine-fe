"use client";

import { Button } from "@/components/ui/button";

const LogIn = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-48 bg-slate-200">
      <h2>Welcome to WoRutine</h2>
      <p>
        Woroutine helps busy professionals to focus on what matters in one
        calendar.
      </p>
      <Button>Login with Google</Button>
    </div>
  );
};

export default LogIn;
