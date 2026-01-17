"use client";

import { useEffect, useRef, useState } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const onClickOutside = (e: MouseEvent) => {
      if (!menuOpen) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen]);

  const linkClass =
    "font-normal text-[24px] leading-[1] transition-colors hover:text-green-800";

  const mobileLinkClass =
    "px-6 h-[34px] rounded-full bg-[#9EAC79] text-black text-[16px] leading-[1] grid place-items-center hover:brightness-95 active:brightness-90";

  return (
    <>
      <header className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-7 px-4 relative">
        <span className="font-normal text-[32px] leading-[1]">pea tea?</span>

        {/* desktop nav */}
        <nav className="hidden md:flex gap-[30px]">
          <a className={linkClass} href="#shop">
            Shop
          </a>
          <a className={linkClass} href="#about">
            About
          </a>
          <a className={linkClass} href="#contact">
            Contact
          </a>
        </nav>

        {/* right controls */}
        <div className="flex items-center gap-5">
          <button onClick={openShop} className="relative cursor-pointer">
            <img className="w-10" src="/icons/shop-icon.png" alt="shop-icon" />
            {cartHasHydrated && count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black text-white text-[12px] grid place-items-center">
                {count}
              </span>
            )}
          </button>

          <button onClick={openFavorite} className="relative cursor-pointer">
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

          {/* burger (mobile) */}
          <div className="md:hidden relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              aria-label="Open menu"
              className="w-10 h-10 grid place-items-center rounded-full transition hover:bg-black/5 active:bg-black/10"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* dropdown like on screenshot */}
            <div
              className={[
                "absolute right-[50%] top-[66px] z-50 w-[326px] rounded-[26px] bg-[#3E3E3E]/80 backdrop-blur-md",
                "px-4 pt-3 pb-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)]",
                "transition-all duration-200",
                menuOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none",
              ].join(" ")}
            >
              <p className="text-center text-white/80 text-[14px] leading-[1] mb-3">
                меню
              </p>

              <div className="flex items-center justify-center gap-3">
                <a className={mobileLinkClass} href="#shop" onClick={closeMenu}>
                  Shop
                </a>
                <a
                  className={mobileLinkClass}
                  href="#about"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  className={mobileLinkClass}
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ShopModal open={activeModal === "shop"} onClose={closeModal} />
      <FavoriteModal open={activeModal === "favorite"} onClose={closeModal} />
    </>
  );
}
