import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20">
      <div className="absolute top-0 right-0 z-0 h-full w-1/2 bg-red max-tab:hidden" />

      {/* <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        thumbContent={isDark ? <Sun size={14} /> : <Moon size={14} />}
        className="absolute top-28 right-12 z-30 max-tab:right-6"
      /> */}

      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className=" absolute top-28 right-12 z-30 max-tab:right-6"
        size="default"
      />

      <div className="absolute top-28 left-12 z-20 font-bebas text-[1.2rem] tracking-[0.1em] text-black max-tab:hidden">
        &copy; 2026
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-12 items-end gap-6 px-12 max-tab:gap-4 max-tab:px-6">
        <h1 className="col-start-1 col-end-8 font-bebas font-normal uppercase leading-[0.92] tracking-[-0.02em] text-black text-[clamp(5rem,12vw,12rem)] max-tab:col-span-full max-tab:text-[clamp(3.5rem,14vw,7rem)]">
          Full
          <br />
          Stack
          <br />
          &amp; AI
        </h1>
        <div className="col-start-9 col-end-13 pb-4 text-[#f5f2eb] max-tab:col-span-full max-tab:pt-8 max-tab:text-black">
          <p className="mb-6 text-[0.95rem] leading-[1.6]">
            Building intelligent systems at the intersection of robust backend
            engineering and machine learning — from secure APIs to computer
            vision pipelines.
          </p>
          <span className="font-mono text-[0.75rem] uppercase tracking-[0.04em]">
            Raden Ananta Mahardika
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
