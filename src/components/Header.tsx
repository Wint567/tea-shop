"use client";

import { useUiStore } from "../store/useUiStore";
import { useCartStore } from "../store/useCartStore";
import { useFavoriteStore } from "../store/useFavoriteStore";
import ShopModal from "./modals/ShopModal";
import FavoriteModal from "./modals/FavoriteModal";

export default function Header() {
  const activeModal = useUiStore((state) => state.activeModal);
  const openShop = useUiStore((state) => state.openShop);
  const openFavorite = useUiStore((state) => state.openFavorite);
  const closeModal = useUiStore((state) => state.closeModal);

  const count = useCartStore((state) => state.count());
  const cartHasHydrated = useCartStore((state) => state.hasHydrated);

  const favCount = useFavoriteStore((state) => state.count());
  const favHasHydrated = useFavoriteStore((state) => state.hasHydrated);

  return (
    <>
      <header className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-7">
        <span className="font-normal text-[32px] leading-[1]">pea tea?</span>

        <nav className="flex gap-[30px]">
          <a className="font-normal text-[24px] leading-[1] transition-colors hover:text-green-800" href="#shop">Shop</a>
          <a className="font-normal text-[24px] leading-[1] transition-colors hover:text-green-800" href="#about">About</a>
          <a className="font-normal text-[24px] leading-[1] transition-colors hover:text-green-800" href="#contact">Contact</a>
        </nav>

        <div className="flex gap-5">
          {/* CART */}
          <button onClick={openShop} className="relative">
            <img className="w-10" src="/icons/shop-icon.png" alt="shop-icon" />

            {cartHasHydrated && count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black text-white text-[12px] grid place-items-center">
                {count}
              </span>
            )}
          </button>

          {/* FAVORITES */}
          <button onClick={openFavorite} className="relative">
            <img
              className="w-10"
              src={
                favHasHydrated && favCount > 0
                  ? "/icons/favorite-icon-active.png"
                  : "/icons/favorite-icon.png"
              }
              alt="favorite-icon"
            />

            {favHasHydrated && favCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black text-white text-[12px] grid place-items-center">
                {favCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <ShopModal open={activeModal === "shop"} onClose={closeModal} />
      <FavoriteModal open={activeModal === "favorite"} onClose={closeModal} />
    </>
  );
}
