import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import WhyBlackMont from '@/components/WhyBlackMont'
import CaseStudies from '@/components/CaseStudies'
import Transformation from '@/components/Transformation'
import Statistics from '@/components/Statistics'
import Insights from '@/components/Insights'
import ExecutiveForm from '@/components/ExecutiveForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy overflow-hidden">
      <Navigation />
      <Hero />
      <Statistics />
      <Services />
      <WhyBlackMont />
      <Industries />
      <Transformation />
      <CaseStudies />
      <Insights />
      <ExecutiveForm />
      <Footer />
    </main>
  )
}