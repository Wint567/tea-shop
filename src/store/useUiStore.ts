import { create } from "zustand";

export type ActiveModal = null | "shop" | "favorite";

type UiState = {
  activeModal: ActiveModal;
  openShop: () => void;
  openFavorite: () => void;
  closeModal: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeModal: null,
  openShop: () => set({ activeModal: "shop" }),
  openFavorite: () => set({ activeModal: "favorite" }),
  closeModal: () => set({ activeModal: null }),
}));
