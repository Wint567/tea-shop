import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import AboutUs from "@/components/AboutUs";
import NewProducts from "@/components/NewProducts";
import ShopSection from "@/components/ShopSection";
import MerchGrid from "@/components/MerchGrid";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-[url('/bg-vibe.png')] bg-no-repeat bg-cover w-full max-w-[1200px] mx-auto">
          <h1 className="font-normal text-[96px] leading-[1] text-white pt-[359px] pb-[56px] w-[843px] mx-auto decoration-100">
            Feel the vibe with Pea Tea
          </h1>
        </section>
        <Marquee />
        <div id="about">
          <AboutUs />
        </div>
        <NewProducts />
        <div id="shop">
          <h2 className="font-normal text-[96px] leading-[1] bg-[#D8DEC5] text-center mb-3 mt-[44px]">
            SHOP SHOP SHOP SHOP
          </h2>
          <ShopSection />
        </div>
        <div id="merch">
          <MerchGrid />
        </div>
        <div id="events">
          <Events />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
