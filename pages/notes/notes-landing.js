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
        <title>Notes</title>
      </Head>
      <h1>Notes</h1>
      
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <br></br>
      <h2>A place to share my notes</h2>

      <p>
      I found myself giving a lot of the same random notes, pdfs, and guides to friends, so putting this up publicly to share.
      </p>

        <ul>
            <li><Link href="/notes/spacex-packing" >
            <a class="button">Packing for LA</a>
            </Link>
            </li>
            <li><Link href="/notes/notes-landing" >
            <a class="button">more</a>
            </Link>
            </li>
        </ul>

      <br></br>

    </Layout>

  )
}
