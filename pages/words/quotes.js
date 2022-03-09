import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'


export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Shihao's Reads</title>
      </Head>
      <h1>Shihao's Reads</h1>
      
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <br></br>
      <h2>Thoughts</h2>
      Takeaways from life

      <p>
      So I started reading again in the Fall of 2021. And here are the takeaways I had from those readings,
      as well as the small parts of me they made me remember or realize.
      </p>

      <hr></hr>


      <br></br>

    </Layout>

  )
}
