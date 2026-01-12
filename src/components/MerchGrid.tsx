"use client";

import { useCartStore } from "../store/useCartStore";
import { useFavoriteStore } from "../store/useFavoriteStore";

interface MerchItem {
    id: number;
    image: string;
}

interface MerchGridProps {
    items?: MerchItem[];
}

const DEFAULT_ITEMS: MerchItem[] = [
    { id: 1, image: "/mearch-1.png" },
    { id: 2, image: "/mearch-2.png" },
    { id: 3, image: "/mearch-3.png" },
    { id: 4, image: "/mearch-4.png" },
    { id: 5, image: "/mearch-5.png" },
    { id: 6, image: "/mearch-6.png" },
];

export default function MerchGrid({ items = DEFAULT_ITEMS }: MerchGridProps) {
    return (
        <section>
            <h2 className="font-normal text-[128px] leading-[1] text-center mt-[42px]">
                MERCH
            </h2>

            <div className="w-full max-w-[1200px] mx-auto bg-[url('/bg-mearch.png')] bg-no-repeat px-[44px] pt-[28px] pb-[38px] grid grid-cols-3 gap-y-[33px] justify-items-center">
                {items.map((item) => (
                    <MerchCard key={item.id} id={item.id} image={item.image} />
                ))}
            </div>
        </section>
    );
}

interface MerchCardProps {
    id: number;
    image: string;
}

function MerchCard({ id, image }: MerchCardProps) {
    const add = useCartStore((state) => state.add);

    const productId = `merch-${id}`;

    const toggleFav = useFavoriteStore((state) => state.toggle);
    const isFav = useFavoriteStore((state) => state.has(productId));

    return (
        <div className="px-[18px] pt-[37px] pb-3 bg-[#5555554D] w-full max-w-[266px] border border-solid [border-image-source:linear-gradient(180deg,#948D8D_0%,#262323_99.99%)] [border-image-slice:1]">
            <img src={image} alt="merch item" />

            <div className="flex justify-center gap-[38px] mt-3">
                <button
                    onClick={() => add(productId)}
                    className="bg-[#262613] px-[29px] py-1 font-normal text-[20px] leading-[1] text-white rounded-[36px] hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out"
                >
                    BUY
                </button>

                <button onClick={() => toggleFav(productId)} aria-label="favorite">
                    <img
                        src={
                            isFav
                                ? "/icons/favorite-icon-active.png"
                                : "/icons/favorite-icon.png"
                        }
                        alt="favorite"
                    />
                </button>
            </div>
        </div>
    );
}


