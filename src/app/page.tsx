import Banner from "@/components/Banner/Banner";
import FridaysBanner from "@/components/FridayExclusive/FridaysBanner";
import Header from "@/components/Header/Header";
import HowitWorksSlider from "@/components/HowitWorks/HowItWorksSlider";
import PopularBrands from "@/components/PopularBrandsCarousel/Popular";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Banner />
      <PopularBrands />
      <FridaysBanner />
      <HowitWorksSlider />
    </main>
  );
}
