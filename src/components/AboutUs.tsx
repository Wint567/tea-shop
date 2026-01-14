export default function AboutUs() {
  return (
    <div className="bg-[url('/bg-aboutUs.svg')] bg-no-repeat">
      <section className="w-full max-w-[1200px] mx-auto">
        <img src="/background-aboutUs.png" alt="background-aboutUs" />
        <h2 className="font-normal text-[96px] leading-[1] text-center pb-[46px]">
          ABOUT US
        </h2>
        <p className="font-normal text-[24px] leading-[1.3] mb-9">
          &lsquo;Pea tea&rsquo; was founded in 2023, but its roots go back much further. <br />
          The company&apos;s name derives from the homeland of its founder, the island of Tonga.{" "}
          <br />
          &lsquo;Pea Tea&rsquo; literally translates as &ldquo;Would you like some tea?&rdquo;
        </p>
        <p className="font-normal text-[24px] leading-[1.3] mb-9">
          Our philosophy is that tea is more than just a drink, <br />
          but a true philosophy of comfort, harmony, and self-care. <br />
          Our company combines tradition and modern tastes so that everyone can find the
          perfect tea to inspire and bring joy.
        </p>
        <p className="font-normal text-[24px] leading-[1.3] mb-9">
          &lsquo;Pea tea&rsquo; carefully selects a collection of varieties from <br />
          around the world from classic infusions to rare loose-leaf teas and <br />
          aromatic blends. Quality, naturalness, and authentic taste are important to us, so
          every step from leaf picking to packaging is strictly controlled.
        </p>
        <p className="font-normal text-[24px] leading-[1.3] mb-9">
          We strive to make a cup of our tea your daily ritual of peace and inspiration.
        </p>
        <p className="font-normal text-[24px] leading-[1.3] mb-9">
          Would you like some tea?
        </p>
      </section>
      <ShopCards />
    </div>
  );
}

function ShopCards() {
  const cards = [
    { title: "TEA", image: "/tea-card.png", cta: "shop now", href: "#shop" },
    { title: "MERCH", image: "/mearc-card.png", cta: "shop now", href: "#merch" },
    { title: "OTHER", image: "/other-card.png", cta: "watch now", href: "#events" },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto flex justify-between">
      {cards.map((card) => (
        <a
          key={card.title}
          href={card.href}
          style={{ backgroundImage: `url('${card.image}')` }}
          className="bg-no-repeat h-[535px] w-full max-w-[358px] bg-cover block cursor-pointer hover:opacity-90 transition-opacity duration-300"
        >
          <h3 className="font-normal text-[64px] leading-[1] text-[#FFFDFD] pt-[144px] text-center">
            {card.title}
          </h3>
          <p className="font-normal text-[40px] leading-[1] text-white text-center">
            {card.cta}
          </p>
        </a>
      ))}
    </section>
  );
}
