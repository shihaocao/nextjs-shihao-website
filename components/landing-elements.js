// import Head from 'next/head'
import Link from 'next/link'

export function notes_list_element(title, sub_folder){
    let js_file_name = title.replaceAll(' ', '-')
    js_file_name = js_file_name.toLowerCase()
    let full_path = `/${sub_folder}/${js_file_name}`
    return <li>
      <Link href={full_path} >
        <a>{title}</a>
        </Link>
    </li>
  }

export function notes_list_element_full(title, file_name, sub_folder){
    let full_path = `/${sub_folder}/${file_name}`
    return <li>
        <Link href={full_path} >
        <a>{title}</a>
        </Link>
    </li>
    }