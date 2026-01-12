import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  items: Record<string, number>;
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: () => number;

  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},
      add: (id) => {
        const items = get().items;
        set({ items: { ...items, [id]: (items[id] ?? 0) + 1 } });
      },
      remove: (id) => {
        const items = { ...get().items };
        delete items[id];
        set({ items });
      },
      clear: () => set({ items: {} }),
      count: () => Object.values(get().items).reduce((s, q) => s + q, 0),

      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: "pea-tea-cart",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
