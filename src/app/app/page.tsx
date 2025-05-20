import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to My Portfolio</h1>
      <Image src="/images/profile.jpg" alt="My Photo" width={150} height={150} />
      <p>Hello!  Aymen, a web developer passionate about building modern web applications.</p>
    </main>
  );
}
