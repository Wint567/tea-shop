interface ShopImage {
  src: string;
  alt: string;
}

interface ShopSectionProps {
  images?: ShopImage[];
}

const DEFAULT_IMAGES: ShopImage[] = [
  { src: "/shop-tea1.png", alt: "shop-tea" },
  { src: "/shop-tea2.png", alt: "shop-tea" },
  { src: "/shop-tea3.png", alt: "shop-tea" },
  { src: "/shop-tea4.png", alt: "shop-tea" },
  { src: "/shop-tea5.png", alt: "shop-tea" },
  { src: "/shop-tea6.png", alt: "shop-tea" },
];

import ShopSlider from "./ShopSlider";

export default function ShopSection({ images = DEFAULT_IMAGES }: ShopSectionProps) {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-[url('/bg-shop.png')] bg-no-repeat bg-cover">
      <div className="overflow-hidden w-[100%] max-w-[1200px] mx-auto py-[64px]">
        <div className="animate-scroll-images flex gap-8 md:gap-12">
          {duplicatedImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <ShopSlider />
    </section>
  );
}
