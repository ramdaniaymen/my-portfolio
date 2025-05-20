'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navlink} href="/">Home</Link>
      <Link className={styles.navlink} href="/about">About</Link>
      <Link className={styles.navlink} href="/projects">Projects</Link>
      <Link className={styles.navlink} href="/contact">Contact</Link>
    </nav>
  );
}
