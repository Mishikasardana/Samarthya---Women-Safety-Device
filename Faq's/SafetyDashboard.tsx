import * as React from "react";
import { SafetyTip } from "./SafetyTip";
import { NavigationBar } from "./NavigationBar";
import { SafetyTipsData } from "./types";

const safetyTips: SafetyTipsData = {
  tips: [
    "Avoid oversharing on social media.",
    "Tell a trusted person when you got home safe.",
    "Use technology: Smart doorbells, security cameras and motion detectors can help secure your home and deter potential thieves",
    "Learn self-defence: Check out this self defence video: https://youtu.be/9m-x64bKfR4?si=URbYIoVvsaJaO4Mi",
    "Tools for protection: such as pepper spray, a safety whistle, and a mini flashlight, are great options to have on hand when going out."
  ]
};

export const SafetyDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-orange-50">
      <main className="flex overflow-hidden flex-col px-5 pt-12 pb-24 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px] text-stone-800" role="main">
        <header className="flex gap-7 self-start ml-3 text-3xl font-extrabold whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fad251ab62b28be665c638db193d52692a26a644c1274bc8490ee8657d75c629?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
            alt="Safety Dashboard Logo"
            className="object-contain shrink-0 self-start w-6 aspect-square"
          />
          <h1 className="basis-auto">Samarthya</h1>
        </header>
        <section className="flex flex-col mt-5 text-xl font-bold rounded-xl bg-white bg-opacity-40" aria-label="Safety Tips">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8129c4b7453619f9689d5e4b011e51052c7bb638b1867f847b33e6968e272a?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
            alt="Safety Illustration"
            className="object-contain w-full rounded-xl aspect-[1.93]"
          />
          <div className="z-10 self-center mt-10 -mb-4">
            {safetyTips.tips.map((tip, index) => (
              <SafetyTip key={index} text={tip} />
            ))}
          </div>
        </section>
      </main>
      <NavigationBar />
    </div>
  );
};
