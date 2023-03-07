import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/result/trouble.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'
import { useState, useEffect, useRef } from 'react';
import screenfull from 'screenfull'

export default function CaseDetail() {
  const [playingYoutube, setPlayingYoutube] = useState(true);
  const [urlYoutube, setUrlYoutube] = useState('https://wish-integrate.com/vent-video/trouble-success1-Trim.mp4');
  const resetYoutube = () => {
      // setPatientAlertStep(1)
      // setShowElement('')
  }

  const playerRef = useRef(null);
  const onClickFullscreen = () => {
    if (screenfull.isEnabled && playerRef.current) {
      screenfull.toggle(playerRef.current.wrapper);
    }
  };

  // Get Param
  const router = useRouter();
  const { timer } = router.query;


  return (
    <div className={styles.container}>
      <Head>
        <title>Trouble shooting </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='prev_page'>
          <Link href="/trouble-shooting/case2-step2"> 
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
          <div className='col-11 col-md-9 col-lg-9'>
            {/* <h2 className='text-center mb-4'>
                Success
            </h2> */}
            <div className={styles.success_btn}>
            <Image
                src="/images/success_btn.png"
                alt="success"
                // layout="fill"
                // objectFit="cover"
                width={196}
                height={196}
            />
            </div>
            <div className={styles.box_wrapper}>
              <div className={styles.video}>
                {/* <ReactPlayer 
                  className={styles.alertYoutube}
                  url={urlYoutube}
                  playing={playingYoutube} 
                  onEnded={resetYoutube}
                  
                  width='100%'
                  height='100%'
                  /> */}
                  <ReactPlayer 
                  onClick={onClickFullscreen}
                  className={styles.alertYoutube} 
                  url={urlYoutube}  
                  playing={playingYoutube} 
                  ref={playerRef}
                  loop={true}
                  onEnded={resetYoutube}
                  width='100%'
                  height='100%'
                  />
              </div>
            </div>
            <div className={styles.text_wrap}>
                <p>
                คนไข้หายใจเป็นปกติ 
                ท่านใช้เวลาไป {timer} วินาที
                </p>
            </div>
            <div className={styles.btn_area}>
              <div className={styles.btn_container}>
                  <Link href="/case/trouble-shooting2"> 
                  <button className={styles.next_btn}>
                  NEXT
                  </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}