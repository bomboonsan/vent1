import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/hint/false.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Intruction_1() {
    const router = useRouter()
    const handleClick = () => {
        router.back();
      };
    return (
        <div className={styles.container}>
            <Head>
                <title>Hint</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='prev_page'>
                <Link href="/quiz/trouble-shooting-case2"> 
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

            <div className={styles.container_hint}>
                <div className={styles.row_hint}>
                    <div className={styles.col_text_box_brain_short}>
                        <div className={styles.text_box_wrap}>
                            <p>
                            ผิดนะคะ ลองพิจารณาคำตอบอีกครั้งค่ะ
                            </p>
                        </div>
                        <div className={styles.btn_group}>
                            {/* <button onClick={replace}>
                            Try again
                            </button> */}
                            {/* <Link href="/quiz/trouble-shooting-case2"> 
                            <button >        
                                TRY AGAIN
                            </button>
                            </Link> */}
                            <button onClick={handleClick}>        
                                TRY AGAIN
                            </button>
                        </div>
                    </div>
                    {/* <div className={styles.col_image}>
                        <Image
                            src="/images/hin.png"
                            alt="Women"
                            // layout="fill"
                            // objectFit="cover"
                            width={1279}
                            height={1739}
                        />
                    </div> */}
                    <div className={styles.col_image}>
                        <Image
                            src="/images/hin-false2.png"
                            alt="Women"
                            // layout="fill"
                            // objectFit="cover"
                            width={1279}
                            height={1739}
                        />
                    </div>
                </div>
            </div>            
        
        </div>
    )
}
