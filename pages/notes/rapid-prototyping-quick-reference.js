import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "Rapid Prototyping Quick Reference"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <br></br>
      
      <h2>Principles for rapid prototyping and mechanical design</h2>

      <div>
        <h3>Avoid complex manufacturing processes</h3>

        <p>If the project should get done fast, avoid complex manufacturing processes.
           Especially if the project does not need to do crazy things, no need for precise manufacturing either.
           These days, 3D printing is incredibly overrated. Woodworking has become a bit of lost art, and it is often forgotten how incredible
           of a material wood really is.
        </p>

        <p>If you want to 3D print a plate with a set of thru holes, it sounds like you can just laser cut wood.</p>
        <p>If you want to 3D print a long rod, you should probably just use a metal stock rod.</p>
        <p>If you want to 3D print a giant block, you can just cut down and machine 2x4 wood stock.</p>

        <p><b>Ask what functions you need a part to do, and ask if you can make it with what you already have.
        </b></p>
        <hr></hr>
      </div>

      <div>
        <h3>Localized complexity should have targetted manufacturing</h3>

        <p>
        If for example, you have a set of stepper motors mounted a foot away from one another...
        Do not make a bracket that is 1 foot long, with mounting holes 1 foot apart. Instead make two sets of smaller brackets, that are mounted to a stock backbone.
        </p>
        
        <p>This allows bracket design, and backbone design to iterate separately from one another.</p>

        <p>Of course the exception to this is in production. Once the designs have settled down, the backbone and brackets can be merged together to delete and lower part count.</p>

        <p><b>
        Parts are opportunities for separate iteration.
        </b></p>

        Be careful though! Too many parts can add too many interfaces. And interfaces are basically overhead.
        <hr></hr>
      </div>

      <br></br>

    </Layout>

  )
}
