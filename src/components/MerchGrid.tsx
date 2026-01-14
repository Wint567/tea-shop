"use client";

import { useCartStore } from "../store/useCartStore";
import { useFavoriteStore } from "../store/useFavoriteStore";

interface MerchItem {
    id: number;
    image: string;
    text: string;
}

interface MerchGridProps {
    items?: MerchItem[];
}

const DEFAULT_ITEMS: MerchItem[] = [
    { id: 1, image: "/mearch-1.png", text: "A limited edition set of 5 random tea flavors. No one knows what you'll get, not even us." },
    { id: 2, image: "/mearch-2.png", text: "Limited edition green tea. Same incredible taste, but with a new design ." },
    { id: 3, image: "/mearch-3.png", text: "A limited edition tube containing 10 different types of tea. This item is a great way to get acquainted with «Pea Tea»." },
    { id: 4, image: "/mearch-4.png", text: "This limited-edition gift set includes 15 different types of tea and two mugs, making it a wonderful way to treat someone special." },
    { id: 5, image: "/mearch-5.png", text: "Of course, you can always choose your favorite tea. But why not try something new? This limited edition set contains 5 different tea flavors, each with its own unique taste." },
    { id: 6, image: "/mearch-6.png", text: "What would we do without a new thermos mug? You asked - we delivered. A new design, but still with your favorite format and functionality." },
];

export default function MerchGrid({ items = DEFAULT_ITEMS }: MerchGridProps) {
    return (
        <section>
            <h2 className="font-normal text-[128px] leading-[1] text-center mt-[42px]">
                MERCH
            </h2>

            <div className="w-full max-w-[1200px] mx-auto bg-[url('/bg-mearch.png')] bg-no-repeat px-[44px] pt-[28px] pb-[38px] grid grid-cols-3 gap-y-[33px] justify-items-center">
                {items.map((item) => (
                    <MerchCard key={item.id} id={item.id} image={item.image} text={item.text} />
                ))}
            </div>
        </section>
    );
}

interface MerchCardProps {
    id: number;
    image: string;
    text: string;
}

function MerchCard({ id, image, text }: MerchCardProps) {
    const add = useCartStore((state) => state.add);

    const productId = `merch-${id}`;

    const toggleFav = useFavoriteStore((state) => state.toggle);
    const isFav = useFavoriteStore((state) => state.has(productId));

    return (
        <div className="group relative px-[18px] pt-[37px] pb-3 bg-[#5555554D] w-full max-w-[266px] border border-solid [border-image-source:linear-gradient(180deg,#948D8D_0%,#262323_99.99%)] [border-image-slice:1] overflow-hidden shadow-none">
            <div className="relative">
                <div className="group-hover:blur-sm transition-all duration-300">
                    <img src={image} alt="merch item" className="shadow-none" />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            <div className="flex justify-center gap-[38px] mt-3 relative z-10">
                <button
                    onClick={() => add(productId)}
                    className="bg-[#262613] px-[29px] py-1 font-normal text-[20px] leading-[1] text-white rounded-[36px] hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out"
                >
                    BUY
                </button>

                <button onClick={() => toggleFav(productId)} aria-label="favorite" className="w-10 h-10 flex items-center justify-center">
                    <img
                        src={
                            isFav
                                ? "/icons/favorite-icon-active.png"
                                : "/icons/favorite-icon.png"
                        }
                        alt="favorite"
                        className="w-10 h-10 object-contain"
                    />
                </button>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0">
                <p className="font-normal text-[16px] leading-[1] text-white text-center px-6">
                    {text}
                </p>
            </div>
        </div>
    );
}


