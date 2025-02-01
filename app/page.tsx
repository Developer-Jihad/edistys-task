 

import About from '@/components/sections/About'
import Philosophy from '@/components/sections/Philosophy'
import Technology from '@/components/sections/Technology'
import Trusted from '@/components/sections/Trusted'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Philosophy />
      <Technology />
      <Trusted />
      <Contact />
    </main>
  )
}
