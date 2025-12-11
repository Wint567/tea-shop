interface Product {
  id: number;
  size: string;
  name: string;
  image: string;
}

interface NewProductsProps {
  products?: Product[];
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    size: "100g",
    name: "Blossom Green Harmony",
    image: "tea-pack-1.png",
  },
  {
    id: 2,
    size: "100g",
    name: "Golden Rooibos Glow",
    image: "tea-pack-2.png",
  },
  {
    id: 3,
    size: "100g",
    name: "Blue Midnight Earl",
    image: "tea-pack-3.png",
  },
];

export default function NewProducts({ products = DEFAULT_PRODUCTS }: NewProductsProps) {
  return (
    <section className="mt-[78px] w-full max-w-[1200px] mx-auto bg-[url('/bg-new.png')]">
      <h2 className="font-normal text-[96px] leading-[1] text-white text-center pt-6 mb-[86px]">
        NEW
      </h2>
      <div className="w-full max-w-[1045px] mx-auto flex justify-between pb-20">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

interface ProductCardProps {
  size: string;
  name: string;
  image: string;
}

function ProductCard({ size, name, image }: ProductCardProps) {
  return (
    <div className="w-[266px] p-[18px] pb-[28px] bg-[#5555554D] flex flex-col items-center border border-solid [border-image-source:linear-gradient(180deg,#948D8D_0%,#262323_99.99%)] [border-image-slice:1]">
      <div className="bg-[#26261380] pb-6 w-full max-w-[230px]">
        <img className="pb-2 pl-[70px] pt-[46px]" src={image} alt="tea-pack" />
        <p className="font-normal text-[12px] leading-[1] text-white text-center">{size}</p>
        <p className="font-normal text-[14px] leading-[1] text-white text-center">{name}</p>
      </div>
      <button className="bg-[#262613] py-[5px] px-[14px] mt-[28px] text-white rounded-[36px] hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 ease-in-out">
        BUY NOW
      </button>
    </div>
  );
}
