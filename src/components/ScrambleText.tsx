"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  speed?: number;
  step?: number;
  delay?: number;
  charset?: string;
};

export default function ScrambleWithCursor({
  text,
  className,
  speed = 22,
  step = 1,
  delay = 0,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
}: Props) {
  const [lockedCount, setLockedCount] = useState(0);
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const frameRef = useRef<number | null>(null);
  const chars = useMemo(() => charset.split(""), [charset]);

  useEffect(() => {
    let mounted = true;
    let i = 0;

    const tick = () => {
      if (!mounted) return;

      i = Math.min(text.length, i + step);
      setLockedCount(i);

      const locked = text.slice(0, i);
      const rest = text
        .slice(i)
        .split("")
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");

      setDisplay(locked + rest);

      if (i < text.length) {
        frameRef.current = window.setTimeout(tick, speed) as unknown as number;
      } else {
        setDisplay(text);
        setDone(true);
      }
    };

    const start = window.setTimeout(tick, delay);

    return () => {
      mounted = false;
      clearTimeout(start);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [text, speed, step, delay, chars]);

  const locked = display.slice(0, lockedCount);
  const rest = display.slice(lockedCount);

  return (
    <span className={className}>
      <span>{locked}</span>

      {/* Cursor travels while scrambling */}
      {!done && (
        <span className="ml-[2px] font-normal text-white/130">|</span>
      )}

      <span>{rest}</span>

      {/* Cursor blinks at the end when done */}
      {done && (
        <span className="name-cursor ml-[2px] font-normal text-white/130">|</span>
      )}
    </span>
  );
}
