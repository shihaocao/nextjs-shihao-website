import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

export function notes_list_element(title){
  let js_file_name = title.replaceAll(' ', '-')
  js_file_name = js_file_name.toLowerCase()
  let full_path = `/notes/${js_file_name}`
  return <li>
    <Link href={full_path} >
      <a>{title}</a>
      </Link>
  </li>
}

export function front_page_post_list(){
  return <ul>
    {notes_list_element("Packing for SpaceX")}
    {notes_list_element("Marino Pasta Recipe")}
    {notes_list_element("Rapid Prototyping Quick Reference")}
    <li><Link href="/notes/notes-landing" >
    <a>more</a>
    </Link>
    </li>
  </ul>
}

export function full_post_list(){
  return <ul>
    {notes_list_element("Packing for SpaceX")}
    {notes_list_element("Marino Pasta Recipe")}
    {notes_list_element("Rapid Prototyping Quick Reference")}
    {notes_list_element("Economics Quick Reference")}
    <li><Link href="/notes/notes-landing" >
    <a>more</a>
    </Link>
    </li>
  </ul>
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Notes</title>
      </Head>
      <h1>Notes</h1>
      
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <br></br>
      <h2>A place to share my notes</h2>

      <p>
      I found myself wanting a place to put my random thoughts, notes, pdfs, and guides. So putting this up publicly to share.
      </p>

      {full_post_list()}

      <br></br>

    </Layout>

  )
}
