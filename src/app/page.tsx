import Image from 'next/image'
import styles from './page.module.css'
import Posts from './posts'

export default function Home() {
  return (
    <main className={styles.main}>
      <Posts />
    </main>
  )
}
