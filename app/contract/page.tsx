"use client";
import { Contract } from "./Contract";
import { Workschedule } from "./Workschedule";

export default function Page() {
  return (
    <>
      <div className="mt-40" />
      <h1 className="ml-5 text-2xl font-bold mb-4">Contract Board</h1>
      <div className="mx-auto max-w-full px-4">
        <Workschedule />
      </div>
      <Contract />
    </>
  );
}
