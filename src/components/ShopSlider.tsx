"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  id: string;
  name: string;
  weight?: string;
  bagSrc: string;
};

type Props = {
  leftArrowSrc?: string;
  rightArrowSrc?: string;
  className?: string;
};

const TEAS: Item[] = [
  { id: "1", name: "Citrus Spice Rooibos", weight: "100g", bagSrc: "/shop-tea-pack1.png" },
  { id: "2", name: "Blossom Green Harmony", weight: "100g", bagSrc: "/shop-tea-pack2.png" },
  { id: "3", name: "Blue Midnight Ear", weight: "100g", bagSrc: "/shop-tea-pack3.png" },
  { id: "4", name: "Chamomile Whispe", weight: "100g", bagSrc: "/shop-tea-pack4.png" },
  { id: "5", name: "Golden Rooibos Glo", weight: "100g", bagSrc: "/shop-tea-pack5.png" },
  { id: "6", name: "Berry Rouge Dream", weight: "100g", bagSrc: "/shop-tea-pack6.png" },
];

export default function ShopSlider({
  leftArrowSrc = "/icons/arrowsLeft.svg",
  rightArrowSrc = "/icons/arrowsRight.svg",
  className = "",
}: Props) {
  const items = TEAS;

  const SPV = 3;
  const CLONES = SPV;

  const clonesHead = useMemo(() => items.slice(-CLONES), [items]);
  const clonesTail = useMemo(() => items.slice(0, CLONES), [items]);
  const trackItems = useMemo(() => [...clonesHead, ...items, ...clonesTail], [clonesHead, items, clonesTail]);

  const [index, setIndex] = useState(CLONES);
  const [anim, setAnim] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);


  const onTransitionEnd = () => {
    if (index >= items.length + CLONES) {
      setAnim(false);
      setIndex(index - items.length);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    } else if (index < CLONES) {
      setAnim(false);
      setIndex(index + items.length);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    }
  };

  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragDx, setDragDx] = useState(0);
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    setDragStart(e.clientX);
    setDragDx(0);
    setAnim(false);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart === null) return;
    setDragDx(e.clientX - dragStart);
  };
  const endDrag = () => {
    if (dragStart === null || !wrapRef.current) {
      setDragStart(null);
      setDragDx(0);
      setAnim(true);
      return;
    }
    const threshold = (wrapRef.current.clientWidth || 1) * 0.12;
    if (dragDx < -threshold) next();
    else if (dragDx > threshold) prev();
    setDragStart(null);
    setDragDx(0);
    setAnim(true);
  };

  const basePercentPerSlide = 100 / SPV;
  const translatePercent =
    -(index * basePercentPerSlide) +
    (dragStart !== null && wrapRef.current
      ? (dragDx / wrapRef.current.clientWidth) * 100
      : 0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className={`relative pb-[56px] mx-auto w-full max-w-[1200px] ${className}`}>
      <button
        aria-label="Prev"
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 select-none"
      >
        <img src={leftArrowSrc} alt="Prev" className="pointer-events-none" />
      </button>

      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 select-none"
      >
        <img src={rightArrowSrc} alt="Next" className="pointer-events-none" />
      </button>

      <div ref={wrapRef} className="overflow-hidden px-6.5">
        <div
          className="flex items-stretch will-change-transform"
          style={{
            transform: `translateX(${translatePercent}%)`,
            transition: anim ? "transform 350ms ease" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          {trackItems.map((it, i) => (
            <div
              key={`${it.id}-${i}`}
              className="px-4 shrink-0"
              style={{ width: `${100 / SPV}%` }}
            >
              <Card item={it} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8 mb-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(CLONES + i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === (index - CLONES) % items.length
                ? "bg-black w-8"
                : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <article className="text-center">
      <div className="relative w-[260px]">
        <Image
          src={item.bagSrc}
          alt={`${item.name} bag`}
          width={520}
          height={640}
          className="w-full h-auto select-none ml-20"
          draggable={false}
          priority
        />
      </div>

      <p className="mt-6 text-[14px] text-black/70">{item.weight ?? "100g"}</p>
      <h3 className="mt-1 text-[18px] leading-[1.2]">{item.name}</h3>

      <div className="mt-3 flex items-center justify-center gap-9">
        <button className="px-[29px] py-1 rounded-full bg-black text-white text-[20px] tracking-[0.08em] transition hover:opacity-90 active:opacity-80">
          BUY
        </button>
        <button className="grid place-items-center w-9 h-9">
          <img src="/icons/favorite-icon.png" alt="favorite" />
        </button>
      </div>
    </article>
  );
}
