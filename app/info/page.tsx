"use client";
import { Info } from "./Info";
import { Userschedule } from "./Userschedule";
//flex min-h-screen flex-col items-center justify-between p-24
export default function Page() {
  return (
    <>
      <div className="mt-40" />
      <h1 className="ml-5 text-2xl font-bold mb-4">Info</h1>
      <div className="mx-auto max-w-full px-4">
        <Userschedule />
      </div>
      <Info />
    </>
  );
}
