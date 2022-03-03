import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../components/img_blocks'
import styles from '../components/layout.module.css'


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
      I won't lie. I read the Three Body Problem in the trailing years of high school,
      and it spurred a whole wave of growth. However, I rode that wave for too long, and I should have
      started reading again much sooner.

      <p>
      So I started reading again in the Fall of 2021. And here are the takeaways I had from those readings,
      as well as the small parts of me they made me remember or realize.
      </p>

      <hr></hr>


      <h3>Foundation - Isaac Asimov</h3>
      <p>
      Salvor Hardin argues that at critical junctures in life, the critical decisions will make themselves
      apparent. It will be obvious that there is only one correct decision, and the critical time will reveal itself at that time.
      To set these critical junctures up, you should instead focus on just getting the small decisions right,
      and the big ones will come in due time. I don't think this argues against planning, but advocates progress.
      It is this process that will deconstruct big leaps into a methodical pyramid with a small cherry on top.
      </p>

      <p>A fitting end quote may be that individuals do not have the power so single handedly change the course of history.
      Only things at the level of sociology, philosophy, and economics have the power to change the society we live in.
      And thus we as individuals should seek to start, and participate in these large scale phenomena.
      </p>
      <p>
      Salvor Hardin also claims: "Never let your sense of morals prevent you from doing what's right." I think this is 
      perhaps a bit over the top and edgey, but it is indeed only valid <b>if</b> you are right.
      </p>

      <h3>Last Lecture - Randy Pausch</h3>
      <p>
      I started reading this while I was in New York City during Februrary Break. I was incredibly rushed,
      but the book is sectioned into nice small chunks that are perfect for that four stop train ride. It is very 
      well written. The introduction almost made me cry.
      </p>
      <br></br>

    </Layout>

  )
}
