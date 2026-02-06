import Hero from './components/Hero'
import NavCards from './components/NavCards'
import Background from './components/Background'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />

      <div className="relative z-10 pt-8 pb-8 min-h-screen flex flex-col justify-center">
        <Hero />
        <NavCards />
      </div>
    </main>
  )
}
