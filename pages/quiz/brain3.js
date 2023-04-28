import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/quiz/main.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState, useEffect,useRef } from 'react';

export default function Main_menu() {
  const router = useRouter()

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  }
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  }
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  }

  const checkAns = () => {
    if (inputValue1.toLowerCase() == 'unconciousness' || inputValue2.toLowerCase() == 'patient movement'  || inputValue3.toLowerCase() == 'pain perception') {
      router.push('/quiz/brain4')
    } else {
      router.push('/hint/brain-false')
    }
   
    
  }

  const ansCorrect = () => {
    router.push('/quiz/brain4')
  }
  const ansWorng = () => {
    router.push('/hint/brain-false')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='prev_page'>
          <Link href="/case/brain/1"> 
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
      <div className={styles.quiz_container}>
        <div className='container'>
          <div className='row justify-content-center align-items-center min-h-screen'>
            <div className='col-11 col-lg-8'>
              <h1 className={styles.quiz_title}>A paralyzed ventilated patient is sedated with propofol (unadjusted dose). He has stable hemodynamics, unchanged respiratory parameters & RASS -5. 
              BIS increases from 50 to 80.
              Which one is the most appropriate management?</h1>
              <div className={styles.quiz_lists}>                
                <div className={styles.quiz_item} onClick={ansWorng}>
                  <p>Increase sedation</p>
                </div>
                <div className={styles.quiz_item} onClick={ansWorng}>
                  <p>Increase NMB dose</p>
                </div>
                <div className={styles.quiz_item} onClick={ansCorrect}>
                  <p>Check EMG signals</p>
                </div>
                <div className={styles.quiz_item} onClick={ansWorng}>
                  <p>Check ABG</p>
                </div>
                <div className={styles.quiz_item} onClick={ansWorng}>
                  <p>Observe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}