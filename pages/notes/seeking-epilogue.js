import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "Seeking Epilogue"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <br></br>
      
      <h3>A letter to myself and others on the joys and circularity of life.</h3>
      <h4>07/01/22</h4>

      <p>An epilogue is a story after the end of the book. It&rsquo;s after the climax, after all the highs and lows, after all the battles have been fought, after the main characters are raised, loved, and retired.</p>

      <p>It&rsquo;s the last page about the protagonist&rsquo;s curious children and their mannerisms being the same but different. Epilogues are like the smell of asphalt after rain on a hot summer evening. It wraps everything up so neatly.</p>

      <p>Even though the story is over, I&rsquo;m glad that it happened.</p>

      <p>I&rsquo;m not sure when I started using the term Epilogue&hellip; probably somewhere around freshman or sophomore year. It came up when people asked me what I looked forward to in life, and I said: &ldquo;Epilogue&rdquo;.</p>

      <h3>By Epilogue I think I meant:</h3>

      <p>Epilogue is the glorious wee hours of the morning at the end of a week-long retreat&ndash; where everyone opens up to each other, and all the stories come barrelling out&ndash; the moments of silence rich with empathy as your eyes flutter closed. It&rsquo;s going through the photos from the ski trip on the last day, and everyone laughing their ass off at the photos and videos of wipeouts.</p>

      <p>It&rsquo;s the subway ride home after a crazy Friday night, and you choose to ride an extra stop past yours just so you can talk for just a little longer and have one more hearty laugh. And when you finally come out of the subway station, having to hug two times, and say goodbye three times after that.</p>

      <p>Epilogue is that 3 am Taco Bell and cold water after an absolute rager of an EDM festival. The communal agreement of satisfaction was palpable from the munching and gulping.</p>

      <p>Epilogue is seeing the freshmen grow up. Recalling the way you lead them through the basics of CAD, 3D printers, and engineering. Watching them iterate through their own designs,&nbsp; growing from &ldquo;minions&rdquo;, to &ldquo;leads&rdquo;, to &ldquo;leaders&rdquo;... To see them teaching them kiddos of their own with visions grander than what you ever thought was possible. The joy of teaching. And the reward of seeing the kids grow up. That is Epilogue.</p>

      <h3>The Layers of Epilgoues</h3>

      <p>Epilogue is when the gang decides to take a detour on the way back from the Shenandoah mountains, to seek out one particular KFC: the birthsite of an infamous inside joke that had been parroted for two years straight. And even though the recreation of the inside joke isn&rsquo;t perfect, it&rsquo;s somehow just as funny in it&rsquo;s own way.</p>

      <p>It&rsquo;s organizing an even bigger group to go stargazing. To go back to the same spot you and your buddy had scouted out a year ago: the top of a short 2-mile hike to the top of Mt. Pinos in Angeles National Forest. The satisfaction of being able to share a view of the Milky Way, and a streaking shooting star that hangs in the air.</p>

      <p>All these layers of Epilogues remind me heavily of nostalgia, and my attraction to the past. I think a lot about the memories and the stories&hellip; And looking back fondly at the moments when I could truly say I was blissful. It reminds me how lucky I am, and how awesome life can be.</p>

      <p>But as with all things, everything should be handled with moderation, and I find that too much nostalgia makes me hold onto the past too tightly&ndash; a desire to recreate what has already moved on. Whereas Epilogues do not disturb the past: they add another chapter, a new work of art, re-interpreting the past under a new lens.</p>

      <p>I tell myself that I can&rsquo;t change the past, but that every chapter is part of some book in progress. You just have to be willing to write it.</p>

      <h3>Looking Forward to an Unwritten Future</h3>

      <p>What I find beautiful about Epilogues is that you don&rsquo;t really know when they are coming. You kinda just stumble into them&hellip; getting an email out of the blue from an elementary school best friend&hellip; meeting an old middle school friend randomly in a far-flung city through a mutual you didn&rsquo;t know you had&hellip;&nbsp;</p>

      <p>Resuming something you didn&rsquo;t know you had on pause.</p>

      <p>Is there something you want to stumble into?</p>

      <p>Epilogues jump out at you and interrupt your story with another chapter from a whole &lsquo;nother book. It turns your book of life from a linear series of chapters into an interconnected circular web, eagerly growing into a compendium of stories befitting for a road trip, for bedtime with the kids, or a date that pushes against closing time.</p>

      <p>Once upon a time, I was scared to close some of my own books, to say goodbye to what I thought were my best chapters. To say that it was time to move on to the next project, or to leave a city that had everything for me. To say that something is finished. The finality of things was frightening because I never wanted those precious memories to fade.</p>

      <p>But somehow, the idea of Epilogues makes me comfortable with moving on. They make me feel like the memories will grow more than they fade. They make me daydream about the memories I will eventually cherish.</p>
      <p>I feel like I have so many chapters open right now, whole books even. Who know&rsquo;s what the next Epilogue is, I could be writing one right now! And this is what makes me so excited to dive into things, to keep writing the next chapter, to be unafraid of the next book.</p>

      <p>To seek epilogue is to be unafraid to dream.</p>

      <p>Cheers,<br></br>
      Shihao</p>

      <h3>Afterword</h3>

      <p>If you enjoyed this piece, you may enjoy hearing about the tale of the <a href = "https://www.reddit.com/r/AskReddit/comments/258w8s/what_is_a_story_you_have_been_dying_to_tell/chex9eq/">Ulysses Bucket List</a></p>

      <p>I originally wrote this piece on a flight from Chicago to Los Angeles, on the way to a weekend trip to Sequoia National Park. I had just finished All the Light We Cannot See, and just started the Midnight Library. These two books seem to be filled with Epilogues, and they reminded me of my own. I wanted to write down what I meant by &ldquo;Epilogue&rdquo;.</p>
      
    </Layout>

  )
}
