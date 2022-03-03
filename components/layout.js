import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Shihao Cao'
const big_img_size = 230
const neg_margin_on_links = -2

export const siteTitle = name

export default function Layout({ children, home , layout_type}) {
  return (
    <div className={layout_type}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={big_img_size}
              width={big_img_size}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl_no_pad}>{name}</h1>

            <h3 style={{marginBottom: neg_margin_on_links}}> 
            <a href="assets/Shihao_Cao_Resume.pdf" class="button" target="_blank">Resume</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/shihaocao" class="button" target="_blank">Github</a>
            &nbsp;|&nbsp;
            <a href="https://twitter.com/shihao_cao" class="button" target="_blank">Twitter</a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/shihaocao/" class="button" target="_blank">LinkedIn</a>
            {/* &nbsp;|&nbsp;
            <a href="https://www.youtube.com/user/Shasty88" class="button" target="_blank">YouTube</a> */}
            </h3>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}