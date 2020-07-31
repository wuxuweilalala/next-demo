import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import jpg from '../assets/1.jpg'
export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/posts/first_post"><a>xxx</a></Link>
      <img src={jpg} alt="" />
    </div>
  )
}
