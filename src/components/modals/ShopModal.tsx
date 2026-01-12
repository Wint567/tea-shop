"use client";

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

  const ids = Object.keys(items);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-[360px] h-[360px] rounded-[56px] bg-[#7A7A7A]/80 px-6 py-6 flex flex-col">
        <div className="flex-1 space-y-4 overflow-auto pr-1">
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
                <div key={id} className="h-[44px] rounded-full bg-[#D9D9D9] flex items-center justify-between px-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <p className="text-black/80 text-[14px] truncate">
                      {p.name}{qty > 1 ? ` x${qty}` : ""}
                    </p>
                  </div>

                  <button
                    onClick={() => remove(id)}
                    className="w-8 h-8 grid place-items-center"
                    aria-label="remove"
                  >
                    <img src="/icons/trash.png" alt="trash" className="w-5 h-5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {ids.length > 0 && (
          <button className="mt-5 h-[44px] rounded-full bg-white text-black text-[22px] leading-[1]">
            BUY
          </button>
        )}
      </div>
    </Modal>
  );
}
