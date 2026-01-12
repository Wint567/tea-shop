export type ProductType = "tea" | "merch";

export type Product = {
  id: string;          // уникальный, строкой (удобно)
  type: ProductType;   // tea/merch
  name: string;
  size?: string;       // "100g" и т.д. (для чая)
  image: string;       // путь из public
};

export const PRODUCTS: Product[] = [
  // NEW (3)
  { id: "new-1", type: "tea", size: "100g", name: "Blossom Green Harmony", image: "/tea-pack-1.png" },
  { id: "new-2", type: "tea", size: "100g", name: "Golden Rooibos Glow",  image: "/tea-pack-2.png" },
  { id: "new-3", type: "tea", size: "100g", name: "Blue Midnight Earl",   image: "/tea-pack-3.png" },

  // SHOP slider (6)
  { id: "shop-1", type: "tea", size: "100g", name: "Citrus Spice Rooibos",   image: "/shop-tea-pack1.png" },
  { id: "shop-2", type: "tea", size: "100g", name: "Blossom Green Harmony",  image: "/shop-tea-pack2.png" },
  { id: "shop-3", type: "tea", size: "100g", name: "Blue Midnight Ear",      image: "/shop-tea-pack3.png" },
  { id: "shop-4", type: "tea", size: "100g", name: "Chamomile Whispe",       image: "/shop-tea-pack4.png" },
  { id: "shop-5", type: "tea", size: "100g", name: "Golden Rooibos Glo",     image: "/shop-tea-pack5.png" },
  { id: "shop-6", type: "tea", size: "100g", name: "Berry Rouge Dream",      image: "/shop-tea-pack6.png" },

  // MERCH (6)
  { id: "merch-1", type: "merch", name: "Merch item 1", image: "/mearch-1.png" },
  { id: "merch-2", type: "merch", name: "Merch item 2", image: "/mearch-2.png" },
  { id: "merch-3", type: "merch", name: "Merch item 3", image: "/mearch-3.png" },
  { id: "merch-4", type: "merch", name: "Merch item 4", image: "/mearch-4.png" },
  { id: "merch-5", type: "merch", name: "Merch item 5", image: "/mearch-5.png" },
  { id: "merch-6", type: "merch", name: "Merch item 6", image: "/mearch-6.png" },
];

export const PRODUCTS_MAP: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.id, p])
);
