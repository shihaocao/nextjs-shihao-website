import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const title = "Website"
const top_page_title = "How I Made This Website"

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
      <br></br>
      
      <h2>TLDR: NextJS, AWS DNS, and Vercel</h2>
      
      I made this iteration of my website in mid-Spring 2022.

      <p>I chose NextJS because I wanted something responsive and minimalistic. I have AWS DNS because it was a hold-over from my last website.
        I used to use AWS S3 bucket static hosting, but now I use Vercel, which also takes care of my continuous deployment.
        Vercel saves me so much time, and it's free.
      </p>

      <h4>Tutorials I used:</h4>
      <ul>
        <li><a href="https://nextjs.org/learn/basics/create-nextjs-app" target="_blank" rel="noopener noreferrer">NextJS Quick Start</a></li>
        <li><a href="https://vercel.com/docs/get-started" target="_blank" rel="noopener noreferrer">Vercel Quick Start</a></li>
        <li><a href="https://aws.amazon.com/route53/" target="_blank" rel="noopener noreferrer">AWS Route 53 Quick Start</a></li>
      </ul>

      <p>You can find the source code for my current website on this&nbsp;
        <Link href="https://github.com/shihaocao/nextjs-shihao-website">github repo.</Link></p>

      <p>Feel free to use parts of it lol. Just "change it up a bit", so it doesn't look like you copied my homework.</p>

      <h3>2016 Website</h3>

      <p>Before this iteration of the website I used to use an HTML5-up template, and AWS for my DNS and hosting.
      </p>

      <div class="container">
        <div class="row">
          <div class="col my-auto">
          <img
            src = '/images/old-website/old-home.jpg'
            alt = ''
            loading="lazy"
            />
          </div>
          <div class="col my-auto">
          <img
            src = '/images/old-website/old-photo.jpg'
            alt = ''
            loading="lazy"
            />
          </div>
        </div>
      </div>

      <p>The HTML5-up template was nice, but it was too inflexible.
        Conforming content to a "theme" got in the way of the information.</p>

      <p>AWS S3 bucket was sufficient for hosting,
        but updating was always a very manual process of literally drag and drop uploading.
        Being able to push with ease on Vercel is a life-saver. Anything that decreases cycle-times is invaluable to engineers.</p>

    </Layout>

  )
}
