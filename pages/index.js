import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'
import { front_page_post_list } from './notes/notes-landing'

const neg_margin = -12
const icon_size = "26"

export default function Home() {
  return (
    <Layout home layout_type={styles.containerHome}>
      <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>


        <h3>Currently</h3>
        <p>
        🏫 &nbsp; Bachelors in Computer Science at Cornell University
        <br></br>
        🔄 &nbsp; Venture Partner at Contrary Capital
        <br></br>
        🚗 &nbsp; leading the self-driving car team at Cornell Data Science
        <br></br>
        🛠️ &nbsp; building and helping others build

        </p>

        <h3>Previously</h3>
        <p>
        🛰️ &nbsp; deployed two satellites into space
        <br></br>
        🔩 &nbsp; developed flight software and engines at SpaceX
        {/* <br></br>
        🔩 &nbsp; speed up high rate manufacturing at SpaceX */}
        <br></br>
        👨🏻‍🎓 &nbsp; aerospace/CS at TJ
        <br></br>
        ✈️ &nbsp; founded and led a drone team in high school 
        {/* <br></br>
        ✈️ &nbsp; rc aircraft entheusiast  */}
        </p>

        <h3>For Fun Builds</h3>
        🏗️ &nbsp; designed my own <Link href="/builds/f86" >
        <a>remote control F-86. Plans here!</a>
        </Link> 

        <br></br>

        🚀 &nbsp; developed an <Link href="/builds/lodestar" >
        <a>electric Falcon 9 VTOL drone</a>
        </Link>

        <br></br>

        🛹 &nbsp; built my own <Link href="/builds/longboard" >
        <a>electric longboard</a>
        </Link>

        <div>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-hangar-airport-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://icons8.com/icon/4AAzlm0vDwwY/hangar"
        /> &nbsp;&nbsp; all my <Link href="/builds/hangar" >
        <a>other remote control aircraft</a>
        </Link> builds
        </div>
        
        <h3>Happiness</h3>

        📸 &nbsp; check out <Link href="/photos" >
        <a>my photos</a>
        </Link>!
        <br></br>
        🎿 &nbsp; I do my best to survive on blacks
        <br></br>
        🛹 &nbsp; I love downhill longboarding

        <h3>Books</h3>
        I like&nbsp;
        <Link href="/books" >
        <a>reading books</a>
        </Link>
        &nbsp;to learn about new perspectives

        <h4  style={{marginBottom: neg_margin}}>Top 3</h4>
        <ul>
          <li>Foundation - Isaac Asimov</li>
          <li>The Last Lecture - Randy Pausch</li>
          <li>The Three Body Problem - Cixin Liu</li>
        </ul>

        {/* <div>

        <h3>Blogs</h3>

        I ramble every so often and write down&nbsp;
        <Link href="/words/quotes" >
        <a>my thoughts</a>
        </Link>
        .
        </div> */}

        {/* <h4 style={{marginBottom: neg_margin}}>Next Up</h4>
        <ul>
          <li>Last Lecture</li>
          <li>All the Light We Cannot See</li>
          <li>Zero to One</li>
        </ul> */}

        <h3>Random Thoughts</h3>
        {front_page_post_list()}

        <h3>Say Hi!</h3>

        <p>literally dm me on&nbsp;
          <a href="https://twitter.com/shihao_cao" className="button" target="_blank">Twitter</a>
          &nbsp;haha
          </p>

        {/* <h2>For Fun</h2> */}

        {/* <div className="grid-small-top">
        <a href="/photos" className="card">
          <h3>Photos &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        </div>

        <div className="grid-small-top">
        <a href="/photos" className="card">
          <h3>Planes &rarr;</h3>
          <p>All the remote control aircraft I've built over the years...</p>
        </a>
        </div> */}

        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}

        {/* <Link href="/old_index" >
        <a>Old JS</a>
        </Link>
        <br></br>
        <Link href="/posts/first-post" >
        <a>First Post</a>
        </Link> */}
      </section>
      
      {/* <div className="grid">
          <a href="/photos" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}

    </Layout>
    
    
  )
}