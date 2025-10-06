import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ScreenshotsGallery } from "@/components/sections/ScreenshotsGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustryBenefits } from "@/components/sections/IndustryBenefits";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { CookieConsent } from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ScreenshotsGallery />
        <HowItWorks />
        <IndustryBenefits />
        <CallToAction />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
