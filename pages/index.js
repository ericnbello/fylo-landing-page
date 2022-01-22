import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero';
import About from '../components/about';
import SignupBanner from '../components/signup-banner';

export default function Home() {
  return (
    <div className="flex">
        <Head>
        <title>Landing Page</title>
        <meta name="description" content="Business landing page created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        
        <About />
        <SignupBanner />
      </main>
    </div>
  )
}
