"use client";

import { PRODUCTS } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";

export default function NewProducts() {
  const add = useCartStore((s) => s.add);

  const products = PRODUCTS.filter((p) => p.id.startsWith("new-"));

  return (
    <section className="mt-[78px] w-full max-w-[1200px] mx-auto bg-[url('/bg-new.png')]">
      <h2 className="font-normal text-[96px] leading-[1] text-white text-center pt-6 mb-[86px]">
        NEW
      </h2>

      <div className="w-full max-w-[1045px] mx-auto flex justify-between pb-20">
        {products.map((p) => (
          <div
            key={p.id}
            className="w-[266px] p-[18px] pb-[28px] bg-[#5555554D] flex flex-col items-center border border-solid [border-image-source:linear-gradient(180deg,#948D8D_0%,#262323_99.99%)] [border-image-slice:1]"
          >
            <div className="bg-[#26261380] pb-6 w-full max-w-[230px]">
              <img className="pb-2 pl-[70px] pt-[46px]" src={p.image} alt="tea-pack" />
              <p className="font-normal text-[12px] leading-[1] text-white text-center">{p.size}</p>
              <p className="font-normal text-[14px] leading-[1] text-white text-center">{p.name}</p>
            </div>

            <button
              onClick={() => add(p.id)}
              className="bg-[#262613] py-[5px] px-[14px] mt-[28px] text-white rounded-[36px] hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out"
            >
              BUY NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
