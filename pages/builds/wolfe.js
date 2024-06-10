import Head from "next/head";
import Link from "next/link";
import {
  centered_img_block,
  dual_centered_img_block,
  triple_centered_img_block,
} from "../../components/centered_img_blocks";
import Layout from "../../components/layout";
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from "../../components/layout.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css";

const title = "Wolfe";
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

      <h3>10/15/2023</h3>

      <p>
        When I got to Seattle, I was in search of a new board setup. I wanted
        something even shorter than my dedicated downhill, but something with
        more of a kicktail for faster “pick-ups” and a bit longer than the
        nickel board so I could still slide... And thus:
      </p>
      <h3>Wolfe</h3>

      <p>Wolfe is kitted with:</p>
      <ul>
        <li>34” x 9.25” Kicktail Can Maple Deck</li>
        <li>G7 180mm trucks</li>
        <li>Abec 7 Bearings (normie I know)</li>
        <li>White Powell Peralta Soft Slides 66mm 75a</li>
        <li>Bones hardcore white bushings</li>
      </ul>

      <p>
        Despite being wider and larger than my 62mm skiffs, they still manage to
        be even slidier than the skiffs, Powell Peralta really did something
        special.
      </p>

      {triple_centered_img_block(
        "wolfe/og-deck.jpg",
        "wolfe/og-powell.jpg",
        "wolfe/unpainted.jpg"
      )}

      <p>
        After the initial test run though, I felt like I wanted to add a little
        special spirit to the board (it was not yet named Wolfe yet).
      </p>

      <p>And thus, it was off to the drawing board!</p>

      <h3>Painting it...</h3>

      <p>
        I started off with a mask of a Su-27 flanker in the center of the board,
        along with an arrow-like cutout on the back. I knew I wanted to have a
        mix of the base wood along with spray-painted misted color fade.
      </p>

      {centered_img_block("wolfe/og-masking.jpg")}

      <p>
        Then I started hitting it with banded spray paint fading white to black
        through blue.
      </p>

      <p>
        I took care to try and mist fade the colors while also keeping a large
        portion of the gear in the darker colors so I would have more contrast
        if I chose to come in for more later decoration.
      </p>

      {dual_centered_img_block(
        "wolfe/spray-banding.jpg",
        "wolfe/spray-blend.jpg"
      )}

      <p>
        With the paint dried, the scariest part was definitely drawing the wolf.
        I am very bad at drawing natural things (much better at straight lines),
        so this was very exciting to me since it was my first freehand drawing
        on a board.
      </p>

      {dual_centered_img_block(
        "wolfe/wolfe-initial.jpg",
        "wolfe/wolfe-finish-pen.jpg"
      )}

      <p>
        I then chose to abstractly add more curvy triangles towards the back of
        the wolf to blend it into the eventual jet at its heart.
      </p>

      {centered_img_block("wolfe/mask-remove.jpg")}

      <p>and wow! that looks super dope with the masking removed!</p>

      <p>
        Lastly, I put on five coats of varnish to seal the paint and protect it
        from wear and tear. <i>Look at that sheen!</i>
      </p>

      {dual_centered_img_block("wolfe/varnishing.jpg", "wolfe/sheen.jpg")}

      <h3>Finale</h3>

      <p>
        And so, after two months of scattered build days, I took it out to the
        neighborhood to take some glamour shots!
      </p>

      {dual_centered_img_block("wolfe/fullshot.jpg", "wolfe/upper-focus.jpg")}

      {centered_img_block("wolfe/proud-dad.jpg")}

      <p>To me, both the wolf and the Flanker represent the energy of roaring down the hills.
        There's something so raw about barelling down the hills that calls to me.
        It makes me feel connected with the way that I carve down the roads. Just the same as a wolf
        sprinting through the twilight forest, or a Flanker racing to intercept altitude.
      </p>

        <p>And of course, the blue misted fade just makes me feel at home.</p>

      <p>
        This has by far been the nicest board I have made, and I am really happy
        how it turned out. It makes me happy every time I ride it.
      </p>

      {/* [https://photos.app.goo.gl/pPNmtmEHdfaB7YrF6] */}
    </Layout>
  );
}
