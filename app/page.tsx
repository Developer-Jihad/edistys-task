import Technology from "@/components/sections/Technology";
import TrustedBy from "@/components/sections/TrustedBy";
import Hero from "@/components/sections/Hero";
import FutureOfFinance from "@/components/sections/FutureOfFinance";
import Philosophy from "@/components/sections/Philosophy";
import CTASection from "@/components/sections/CTASection";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FutureOfFinance />
      <Philosophy />
      <Technology />
      <TrustedBy />
      <CTASection />
    </main>
  );
}
