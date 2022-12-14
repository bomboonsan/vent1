import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/mainmenu2.module.css'
import Link from "next/link";
// import { useRouter } from 'next/router'


export default function Main_menu() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Menu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='prev_page'>
          <Link href="/consemt"> 
            <Image
                src="/images/prev.png"
                alt="Women"
                // layout="fill"
                // objectFit="cover"
                width={196}
                height={196}
            />
            </Link>
      </div>{/* prev_page */}
      <header className={styles.headerbar1}>
        <p className='headerbar_text'>
          Main Menu
        </p>
      </header>
      <div className={styles.row}>
        <div className={styles.col_item}>
          <Image
              className={styles.bisitem}
              src="/images/equipment.png"
              alt="equipment"
              // layout="fill"
              // objectFit="cover"
              width={700}
              height={1200}
          />
        </div>
        <div className={styles.col_item}>
          <Image
              className={styles.bisitem}
              src="/images/Troubleshooting.png"
              alt="Troubleshooting"
              // layout="fill"
              // objectFit="cover"
              width={700}
              height={1200}
          />
        </div>
        <div className={styles.col_item}>
          <Image
              className={styles.bisitem}
              src="/images/Result.png"
              alt="Result"
              // layout="fill"
              // objectFit="cover"
              width={700}
              height={1200}
          />
        </div>
      </div>
    </div>
  )
}