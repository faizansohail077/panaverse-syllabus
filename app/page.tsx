"use client"
import styles from './page.module.css'
import Hero from './Hero'
import Objective from './Objective'
import Programs from './Programs'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Objective />
      <Programs />
    </main>
  )
}
