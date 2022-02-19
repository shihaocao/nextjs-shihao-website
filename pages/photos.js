import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Shihao's Photography</title>
      </Head>
      <h1>Photography</h1>
      
      <Link href="/">
        <a>Back to home</a>
      </Link>
      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>       */}
      
      <h2>Gear</h2>
      I currently shoot with a Nikon D810. For lenses, I usually use a 28-300 zoom just because it's versatile.
      I also carry at 35mm APS-C f1.8 for street photography and portrait photography.

      <h2>What am I up to?</h2>

      I am still learning how to use cameras, and what kind of shots I'm looking for! I do a little bit of everything...

      :)

      <h2> Enjoy! </h2>
      
      
      
      

    </Layout>
  )
}