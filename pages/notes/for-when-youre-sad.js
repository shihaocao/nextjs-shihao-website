import Head from "next/head";
import Link from "next/link";
import {
  centered_img_block,
  centered_img_block_med,
  dual_centered_img_block,
} from "../../components/centered_img_blocks";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css";

const title = "For when you're sad";
const top_page_title = title;

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{top_page_title}</h1>
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <h2>12/23/24</h2>
      <p>
      In this moment, I am a bit sad, and there are a few things that let me feel the depth of my sadness, and also
      let me hold my head high. They evoke nostalgia, yearning, hurting, and growth. I think these are good for the soul when I am sad.
      And maybe they will make you feel similarly.
      </p>

      <h3><Link href="https://www.youtube.com/watch?v=TsWiuqzhtis">Chilren in the Dark</Link></h3>
      <p>I grew up listening to Tristam all through my edgy years in middle school, his EDM always made me feel alive, and vulnerable.
      So when Children in the Dark came out in 2021, I was completely taken by surprised. I was not ready to be tearing up while taking a quick break
      from homework.</p>
      <p>I think you may enjoy the imagery of a childhood you yearn for, and know still exists inside your somewhere.</p>
      <p>{centered_img_block_med("for_when_youre_sad/citd.jpg", {subtitle: "A shot from Children in the Dark"})}</p>
    
      <h3>
        A spotify playlist playlist: <Link href="https://open.spotify.com/playlist/4h2n0p17f4rsYCvMmZUcvE?si=3ddf8788b77046af">And now?</Link>
      </h3>
    </Layout>
  );
}
