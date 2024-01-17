import Image from 'next/image'
import Contact from './components/contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Contact />
    </main>
  )
}
