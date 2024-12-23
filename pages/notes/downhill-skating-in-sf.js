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

const title = "Downhill Skating in SF";
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
      <h2>12/10/24</h2>
      <p>
        When I first got to SF, I was looking for long runs where I could skate care free.
        The ideal spot would have gentle downhills. And maybe some more advanced spots could have steeper sections,
        but ideally they should all have a wide runout at the bottom.

        So here's what I've found so far!

        I am definitely still looking for spots, and skating friends, so hit me up!
      </p>
    
      <h3>Gentle Runs</h3>
      <ul>
        <li>Golden Gate Park - Pan Handle to Dutch Windmills</li>
      </ul>

      <h3>Aggressive Runs</h3>
      <ul>
        <li>Camera Obscura to Ocean Beach</li>
        <li>Twin Peaks - Christmas Tree Point</li>
      </ul>
      <h2>Downhill Skating Community</h2>
      <p>Check out <Link href="https://www.instagram.com/baysessions2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@baysessions2</Link> on instagram! They are such a wholesome and welcoming community.
        There are monthly events and weekly skate sessions! My first time hanging with them, people gave me tips and I felt at home doing runs.</p>
      <p>{centered_img_block_med("downhill_skating_in_sf/baysessions2.jpg", {subtitle: "After the Fanning and Quintara Slidejam 2024"})}</p>
      <h2>Golden Gate Park - Pan Handle to Dutch Windmills</h2>
      <ul>
      <li>230ft drop over 3.7 mi or 70m drop over 5.6km</li>
      <li><a href="https://maps.app.goo.gl/WYq4jDgDnbjCHYwE8">https://maps.app.goo.gl/WYq4jDgDnbjCHYwE8</a></li>
      </ul>

      <p>This one is absolutely gorgeous, and the perfect one to bring to your new longboarding friends.
        The entire run is just beautiful, and it's about 50% pushing 50% riding. Most riding sections are gentle,
        enough to keep you moving, but not enough to accelerate out of control. New riders will need to foot brake occasionally, and advanced riders
        can tuck just to have some fun!

        {centered_img_block_med("downhill_skating_in_sf/ggp-longboard-run.jpg")}

        You do share part of the run with cars, but they are generally infrequent, and eventually your downhill will end so its perfect to yield over.

        I highly recommend bringing a partner or a friend here, great way to just breathe in some air.
        This run takes about 20 +- 10 minutes to do.
      </p>
      <h2>Camera Obscura to Ocean Beach</h2>
      <ul>
      <li>62ft drop over 0.3 mi or 19m drop over 500m</li>
      <li><a href="https://maps.app.goo.gl/9FJSorPzipRksdso7">https://maps.app.goo.gl/9FJSorPzipRksdso7</a></li>
      </ul>
      <p>This run is on the main road, and you will need to do a few slides to control your speed.
        There's a long run out at the bottom, perfect to do any slides to slow all the way down.

        {centered_img_block_med("downhill_skating_in_sf/camera-obscura-to-ocean-beach.jpg")}


        The pavement is smooth, and the road curves gently to do a few open carves. You have a clear
        view of the road ahead and any oncoming cars.

        And there's the ocean! Bring a friend to see the coast!

        {dual_centered_img_block(
        "downhill_skating_in_sf/camera-run-1.jpg",
        "downhill_skating_in_sf/camera-beach.jpg"
        )}
      </p>
      <h2>Twin Peaks - Christmas Tree Point</h2>
      <ul>
        <li>164ft drop over 0.4 mi or 50m over 650m</li>
        <li><a href="https://maps.app.goo.gl/wwH5X7hRAm5XLwEk8">https://maps.app.goo.gl/wwH5X7hRAm5XLwEk8</a></li>
      </ul>
      <p>
        {centered_img_block_med("downhill_skating_in_sf/christmas-point.jpg")}

        
        TODO


      </p>

    </Layout>
  );
}
