import styles from '../styles/page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to My Portfolio</h1>
      <Image
        src="/images/port.jpg"    // حط صورة myphoto.jpg في مجلد /public
        alt="My Photo"
        width={150}
        height={150}
      />
      <p>Hello! Aymen, a web developer passionate about building modern web applications.</p>
    </main>
  )
}
