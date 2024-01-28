import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import PopularBrands from "@/components/PopularBrandsCarousel/Popular";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Banner />
      <PopularBrands />
    </main>
  );
}
