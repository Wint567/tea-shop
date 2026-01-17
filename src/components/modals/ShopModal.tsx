"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS_MAP } from "@/data/products";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ShopModal({ open, onClose }: Props) {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasScrollbar, setHasScrollbar] = useState(false);

  const ids = Object.keys(items);

  useEffect(() => {
    const checkScrollbar = () => {
      if (scrollRef.current) {
        const hasScroll = scrollRef.current.scrollHeight > scrollRef.current.clientHeight;
        setHasScrollbar(hasScroll);
      }
    };

    checkScrollbar();
    const resizeObserver = new ResizeObserver(checkScrollbar);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [ids]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-[552px] h-[556px] rounded-[56px] bg-[#02030032] px-6 py-6 flex flex-col">
        <div
          ref={scrollRef}
          className={`flex-1 space-y-11 overflow-auto custom-scrollbar ${hasScrollbar ? "pr-5" : ""}`}
        >
          {ids.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-5">
              <img src="/icons/shop-icon.png" alt="shop" className="w-[52px] h-[52px]" />
              <p className="text-white text-[28px] font-normal leading-[1]">Ooops....</p>
            </div>
          ) : (
            ids.map((id) => {
              const p = PRODUCTS_MAP[id];
              if (!p) return null;

              const qty = items[id];

              return (
                <div key={id} className="h-[98px] rounded-full bg-[#D9D9D9] flex items-center justify-between px-3">
                  <div className="flex items-center gap-3  min-w-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-13 h-12 rounded-full object-cover"
                    />
                    <p className="text-black text-[24px] truncate">
                      {p.name}{qty > 1 ? ` x${qty}` : ""}
                    </p>
                  </div>

                  <button
                    onClick={() => remove(id)}
                    className="w-12 h-12 grid place-items-center"
                    aria-label="remove"
                  >
                    <img src="/icons/trash.png" alt="trash" className="w-10 h-10" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {ids.length > 0 && (
          <button className="mt-5 w-[272px] h-[61px] mx-auto rounded-[90px] bg-white text-black text-[48px] leading-[1]">
            BUY
          </button>
        )}
      </div>
    </Modal>
  );
}
