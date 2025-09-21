import AboutUs from "../components/about_us";
import HeroSection from "../components/hero_section";
import Releases from "../components/releases";
import WhyBuy from "../components/why_buy";
import MainProducts from "../components/main_products";
import TrendingCards from "../components/trending_cards";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 md:p-0 min-h-screen mx-auto">
      <HeroSection/>
      <TrendingCards/>
      <MainProducts/>
      <Releases/>
      <AboutUs/>
      <WhyBuy/>
    </div>
  );
}
