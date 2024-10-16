"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { UserButton } from "@clerk/clerk-react";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <UserButton />
      {tasks?.map(({ _id, text }) => (
        <div key={_id} className="text-black">
          {text}
        </div>
      ))}
    </main>
  );
}
