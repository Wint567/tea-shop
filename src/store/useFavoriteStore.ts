import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteState = {
  ids: Record<string, true>;
  toggle: (productId: string) => void;
  remove: (productId: string) => void;
  has: (productId: string) => boolean;
  count: () => number;
  clear: () => void;

  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      ids: {},

      toggle: (productId) => {
        const ids = { ...get().ids };
        if (ids[productId]) delete ids[productId];
        else ids[productId] = true;
        set({ ids });
      },

      remove: (productId) => {
        const ids = { ...get().ids };
        delete ids[productId];
        set({ ids });
      },

      has: (productId) => Boolean(get().ids[productId]),

      count: () => Object.keys(get().ids).length,

      clear: () => set({ ids: {} }),

      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: "pea-tea-favorites",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
