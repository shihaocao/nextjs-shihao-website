import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'

const neg_margin = -12
const icon_size = "26"

export default function Home() {
  return (
    <Layout home layout_type={styles.containerHome}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>


        <h3>Currently</h3>
        <p>
        🏫 &nbsp; bachelors in Computer Science at Cornell University
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
        👨🏻‍🎓 &nbsp; aerospace/CS at thomas jefferson
        <br></br>
        ✈️ &nbsp; founded and led a drone team in high school 
        {/* <br></br>
        ✈️ &nbsp; rc aircraft entheusiast  */}
        </p>

        <h3>For Fun Builds</h3>
        🏗️ &nbsp; <Link href="/f86" >
        <a class="button">Guide and plans</a>
        </Link>  for my remote control F-86

        <br></br>

        🚀 &nbsp; Developing an <Link href="/lodestar" >
        <a class="button">electric Falcon 9 VTOL drone</a>
        </Link>

        <div>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-hangar-airport-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://icons8.com/icon/4AAzlm0vDwwY/hangar"
        /> &nbsp;&nbsp; All my <Link href="/hangar" >
        <a class="button">other remote control aircraft</a>
        </Link> builds
        </div>
        
        <h3>Happiness</h3>

        📸 &nbsp; Check out <Link href="/photos" >
        <a class="button">my photos</a>
        </Link>!
        <br></br>
        🎿 &nbsp; I do my best to survive on blacks
        <br></br>
        🛹 &nbsp; I longboard better than I snowboard

        <h3>Books</h3>
        I read books sometimes!

        <h4  style={{marginBottom: neg_margin}}>Top 3</h4>
        <ul>
          <li>Foundation</li>
          <li>The Dark Forest</li>
          <li>The Three Body Problem</li>
        </ul>
        
        <h4 style={{marginBottom: neg_margin}}>Next Up</h4>
        <ul>
          <li>Last Lecture</li>
          <li>All the Light We Cannot See</li>
          <li>Zero to One</li>
        </ul>

        And for more, here are my&nbsp; 
        <Link href="/books" >
        <a class="button">thoughts, feelings, and reviews</a>
        </Link>
        !

        <h3>Say Hi!</h3>

        shihao@contrarycap.com

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
        <a class="button">Old JS</a>
        </Link>
        <br></br>
        <Link href="/posts/first-post" >
        <a class="button">First Post</a>
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