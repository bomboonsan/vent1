import Head from 'next/head'
import { useState , useEffect } from 'react';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/brain/howto.module.scss'
import Link from "next/link";
// import { useRouter } from 'next/router'
import BrainVideo from '../../components/brainvideo';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const TestimonialCard = dynamic(() => import('../../components/brainvideo'), { ssr: false })

export default function Howto() {
  const [message, setMessage] = useState(null);
  useEffect(() => setMessage('1'), [])
  let brainElement = null
  if (!!message) {
    brainElement = <BrainVideo />
  }
  const router = useRouter()
    function prevPage() {
      closeFullscreen()
      router.push('/mainbrain')
      // router.push('/mainbrain')
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
    function closeFullscreen() {
      document.exitFullscreen()
    }
  return (
    <div className={styles.container}>
      <Head>
        
        <title>How To</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='prev_page'>
            <Image
                onClick={prevPage}
                src="/images/prev.png"
                alt="Women"
                // layout="fill"
                // objectFit="cover"
                width={196}
                height={196}
            />
      </div>{/* prev_page */}
      <div className={styles.video_wrapper}>
        {/* <BrainVideo /> */}
        {brainElement}
      </div>
    </div>
  )
}