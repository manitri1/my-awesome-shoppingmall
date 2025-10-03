import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { InnovationSection } from "@/components/innovation-section"
import { GlobalApproachSection } from "@/components/global-approach-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValuesSection />
      <InnovationSection />
      <GlobalApproachSection />
      <CTASection />
      <Footer />
    </main>
  )
}
