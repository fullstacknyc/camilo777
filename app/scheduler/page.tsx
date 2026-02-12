"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

type MyTimerProps = {
  expiryTimestamp: Date;
};

function MyTimer({ expiryTimestamp }: MyTimerProps) {
  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    interval: 20,
  });

  const pad2 = (n: number) => String(n).padStart(2, "0");
  const pad3 = (n: number) => String(n).padStart(3, "0");

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-12">
      <div className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            react-timer-hook
          </h1>
          <p className="mt-2 text-sm text-zinc-600">Timer Demo</p>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-5 text-center">
            <div className="font-mono text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
              {pad2(days)}:{pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}:
              {pad3(milliseconds)}
            </div>
            <div className="mt-3 text-sm">
              <span
                className={
                  isRunning
                    ? "rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700"
                    : "rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-700"
                }
              >
                {isRunning ? "Running" : "Not running"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={start}
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 active:scale-[0.98]"
          >
            Start
          </button>
          <button
            type="button"
            onClick={pause}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 active:scale-[0.98]"
          >
            Pause
          </button>
          <button
            type="button"
            onClick={resume}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 active:scale-[0.98]"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 300);
              restart(time);
            }}
            className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-600 active:scale-[0.98]"
          >
            Restart (5:00)
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return <MyTimer expiryTimestamp={time} />;
}
