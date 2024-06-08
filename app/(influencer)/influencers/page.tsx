import FeaturesBlocks from "@/components/features-blocks";

export const metadata = {
  title: 'SonarBit: Conciertos en Vivo y Musica Sin Limites',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Footer from "@/components/ui/footer";
import FeatureInfluencers from "@/components/feature-influencers";

export default function Page() {
  return (
    <>
      <FeatureInfluencers />
      <Footer />
    </>
  )
}
