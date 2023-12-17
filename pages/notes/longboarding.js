import Head from "next/head";
import Link from "next/link";
import {
  centered_img_block,
  dual_centered_img_block,
} from "../../components/centered_img_blocks";
import Layout from "../../components/layout";
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from "../../components/layout.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css";

const title = "Longboarding";
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
      <p>
        I longboard everywhere at Cornell, and downhill full-speed whenever the
        road is clear. If I'm in NYC or Chicago, I'll also longboard around.
      </p>
      <p>
        I started longboarding back in middle school when I built my first
        electric longboard. But since then, I have always preferred non-electric
        boards. They are 5x lighter and easier to carry around.
      </p>
      <h4>The electric board</h4>
      <p>
        This was my first ever board, and it was a whole saga to{" "}
        <Link href="/builds/longboard">build</Link> in Middle School.
      </p>
      {dual_centered_img_block(
        "longboard/topboard.jpg",
        "longboard/bottomboard.jpg"
      )}
      <p>
        I rode it whenever I needed to go from North campus down to Central
        campus, and it certainly got the job done. It was fast, and I was never
        late to class.
      </p>
      <h4>The way too small nickel board</h4>
      <p>
        I got this board in the Summer at SpaceX in 2020 out of necessity. I
        didn't bring my electric board to LA, and since I didn't have a car in
        LA, I wanted a board so I could ride between my office in HT-21 and
        HT-01.
      </p>
      {centered_img_block("longboarding/old-red.jpg")}
      <p>
        I later converted it into a snowboard and never bothered to put it back
        together lmao.
      </p>
      {centered_img_block("longboarding/snowboard.jpg")}
      <h4>The GP</h4>
      <p>
        The general-purpose board. I got this board in the Fall of 2021, as I
        needed a board with real grip-tape and stiffness. This board, especially
        with the upgraded 70mm wheels gave me real stiffness and confidence in
        going down the hill into Collegetown at full speed without carving.
      </p>
      {centered_img_block("longboarding/gp.jpg")}
      <p>
        Its true beauty is its portability though. I don't go to class without
        it.
      </p>
      <h4>The spark gloves</h4>
      {centered_img_block("longboarding/spark-gloves.jpg")}
      <p>
        Right after I got the GP board I knew I needed some gloves because I was
        going to wipe out. I did a set of DIY slide gloves because premade was
        expensive lol. I got a set of work gloves, a sewing kit, velcro pads,
        and{" "}
        <a href="https://www.amazon.com/Glield-Slide-Flintstones-Flames-CBHK01/dp/B01G6S8OFM/ref=sr_1_4?crid=24PWNHE6YVSMY&keywords=flint+puck+longboard&qid=1654201860">
          flint pucks
        </a>
        , and sewed it all together.
      </p>
      <p>
        Yes the flint pucks are just for the cool-factor its very fun haha. Try
        out a pair if you haven't! It pushes you to learn much faster.
      </p>
      <h4>The first nicer board</h4>
      <p>
        This board is a drop-deck 42" board made from 8-ply maple. It uses RKP
        trucks. I upgraded the wheels to Orangatang Stimulus 70mm 80a wheels on
        Bones Red Bearings. This is my nicest ride for sure. If only I could
        bring it everywhere haha.
      </p>
      <p>I kitted this ride out for downhill freeriding and sliding.</p>
      {dual_centered_img_block(
        "longboarding/niceboard-full.jpg",
        "longboarding/nice-board-at-speed.jpg"
      )}
      {/* {centered_img_block('longboarding/nice-board-at-speed.jpg')} */}
      {centered_img_block("longboarding/nice-slide.jpg")}
      <h4>2022/2023 update:</h4>
      <p>
        The length of the flower board gave me a lot of control once I broke
        into the slide since I had a ton of leverage in either direction, but it
        also made it very hard to break into the slide in the first place.
      </p>
      <p>
        Thus I switched to a slightly shorter dedicated downhill board. It
        wasn’t drop-through, and there was plenty of footroom near the trucks
        for additional torque for breaking traction.
      </p>
      <p>
        Later in the winter, I also switched from FatFree 65mm to Skiff 62,
        these much narrower wheels had even less traction area so it was even
        easier to break into the slides. The general theme is that almost every
        upgrade helped me break into my slides even more.
      </p>
      {dual_centered_img_block(
        "longboarding/downhill.jpg",
        "longboarding/skiff-upgrade.jpg"
      )}
      <p>
        As I got better, I was able to pull off some pretty sick slides like
        this!
      </p>
      {centered_img_block("longboarding/glove-slide-downhill.jpg")}

      <h3>Graduating from Cornell</h3>

      <p>
        For me, the undulating hills of Cornell were the whole reason I started
        skating around. The hills beckoned to be ridden, forcing me to learn how
        to slide to stop. I will never forget cherishing the end of class just
        so I could ride to the bottom of the hill listening to my favorite song
        of the week. Feeling the wind rushing past me, and the asphalt vibrating
        through the board is what made me feel alive.
      </p>
      <p>And so, I thought it was only fitting to get a few glamour shots in graduation attire before I left.
      </p>
      {dual_centered_img_block(
        "longboarding/grad-hill-bomb.jpg",
        "longboarding/grad-garage.jpg"
      )}

      <h3>Wolfe, a new artistic touch</h3>

      <p>
        In the summer of 2023, I leveled up again to a slightly more compact,
        but still an aggressive downhill board. I call it: <i>Wolfe</i>
      </p>
      <p>
        Check out the build <a href="/builds/wolfe">here</a>!
      </p>

      {centered_img_block("wolfe/proud-dad.jpg")}

      {/* [https://photos.app.goo.gl/pPNmtmEHdfaB7YrF6] */}
    </Layout>
  );
}
