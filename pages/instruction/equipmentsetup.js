import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/instruction/main.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Intruction_1() {
    const router = useRouter()
    function nextStep() {
        router.push('/brain/howto')
        document.documentElement.requestFullscreen();
    }
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
    }
    function getFullScreen() {
        document.documentElement.requestFullscreen();
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Consent</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='prev_page'>
                <Link href="/mainbrain"> 
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

            <div className='container'>
                <div className='row justify-content-center align-items-center min-h-screen'>
                    <div className='col-11'>
                        <div className={styles.intruction_wrapper}>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className={styles.thumbnail_frame}>
                                        <Image
                                            src="/images/BrainMonitoring-into.png"
                                            alt="Women"
                                            // layout="fill"
                                            objectFit="contain"
                                            width={1200}
                                            height={1200}
                                        />
                                    </div>
                                </div>
                                <div className='col-9'>
                                    <div className={styles.content_container}>
                                        <div className={styles.contenn_wrap}>
                                            <h2>Instruction</h2>
                                            <p>
                                            เลือกอุปกรณ์ที่ต้องการทำการติดตั้งทีละขั้นตอน เพื่อทำความเข้าใจวิธีการติดตั้งเครื่อง Brain Monitoring โดยกดที่วงกลมสีเขียวบนอุปกรณ์แต่ละชิ้น
                                            </p>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className={styles.btn_area}>
                                <div className={styles.btn_container}>
                                    <button className={styles.next_btn} onClick={nextStep}>
                                    NEXT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
