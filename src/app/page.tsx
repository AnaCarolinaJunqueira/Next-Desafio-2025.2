import AboutUs from "../components/about_us";
import HeroSection from "../components/hero_section";
import Releases from "../components/releases";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 md:p-0 min-h-screen mx-auto">
      <HeroSection/>
      <Releases/>
      <AboutUs/>
    </div>
  );
}
