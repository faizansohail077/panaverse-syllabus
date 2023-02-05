import Image from 'next/image'
import { Inter, Poppins } from '@next/font/google'
import styles from './page.module.css'

// const inter = Poppins({ weight: ['400', '300', '600'], subsets: ["latin"] })
const inter = Poppins({
  variable: '--inter-font',
  weight: ['300', '800']
})

export default function Home() {
  return (
    <main className={styles.main}>
      123


    </main>
  )
}
