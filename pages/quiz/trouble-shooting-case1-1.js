import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/quiz/main.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';


export default function Main_menu() {
  const router = useRouter()
  const [ansArr, setAnsArr] = useState([]);  

  const [startTime, setStartTime] = useState(null);
  useEffect(() => {

    const { start } = router.query;
    if (start === null || start === undefined) {
      // Handle when 'timer' is null or undefined
      console.log('start is null or undefined');      
      router.push('/trouble-shooting/case1-step1')
    } else {
      // Handle when 'timer' has a value
    }      
    setStartTime(start)
      
  }, []);

  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);


  // useEffect(() => {

  //   const { timer } = router.query;
  //   if (timer === null || timer === undefined) {
  //     // Handle when 'timer' is null or undefined
  //     console.log('timer is null or undefined');      
  //     router.push('/trouble-shooting/case1-step1')
  //   } else {
  //     // Handle when 'timer' has a value
  //     console.log('timer:', timer);
  //   }

  //   setSeconds(Number(timer))

  //     const interval = setInterval(() => {
  //       setSeconds((prevSeconds) => prevSeconds + 1);
  //     }, 1000);
  
  //     return () => clearInterval(interval);
      
      
  // }, []);
  
  // useEffect(() => {
  //     if (seconds === 60) {
  //         setSeconds(0);
  //         setMinutes((prevMinutes) => prevMinutes + 1);
  //     }
  //     console.log(seconds)
  // }, [seconds]);



  // Function to handle setting query parameters
  const setQueryParam = (name, value) => {
    const queryParams = { ...router.query, [name]: value };
    router.push({ pathname: router.pathname, query: queryParams });
  };

  const handleAnsClick = (event) => {

    const btnID = event.currentTarget.id;    
    const btnAns = document.querySelector("#"+btnID)    

    // ตรวจว่ามี class หรือยัง
    if(btnAns.classList.contains(styles['quiz_active'])) {
      btnAns.classList.remove(styles['quiz_active']);
    } else {
      btnAns.classList.add(styles['quiz_active']);
    }

    // 
    let newAnsArr = ansArr
     
    // newAnsArr.push(btnID)
    // ตรวจว่ามีคำตอบอยู่ใน Arr?
    if (newAnsArr.includes(btnID)) {
      // ถ้ามี string ให้ลบออก
      newAnsArr = newAnsArr.filter(e => e !== btnID); // https://stackoverflow.com/questions/9792927/javascript-array-search-and-remove-string
    } else {
      // ถ้าไม่มีให้เพิ่ม
      newAnsArr.push(btnID)
    }

    setAnsArr(newAnsArr)

  }

  const checkAns = () => {
    
    // เรียงลำดับ Array
    const ansArrSort = ansArr.sort();
    
    // if (ansArrSort.toString() == 'ans1,ans2' || ansArrSort.toString() == 'ans2,ans1') {
    if (ansArrSort.toString() == 'ans1,ans2,ans3') {
      // router.push('/trouble-shooting/case1-step2?timer='+seconds)
      router.push('/trouble-shooting/case1-step2?start='+startTime)
    } else {
      router.push('/hint/trouble-shooting-1-false')
    }
    
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
              <h1 className={styles.quiz_title}>
              หลังจากตรวจสอบความผิดปกติของคนไข้ที่เกิดขึ้นแล้ว <br/>
              ท่านคาดว่าสาเหตุเกิดจากอะไร
              </h1>

              <div className={styles.quiz_lists}>                
                <div id='ans1' className={styles.quiz_item_center} onClick={handleAnsClick}>
                  <p>มีเสมหะอยู่ในระบบเครื่องช่วยหายใจ</p>
                </div>
                <div id='ans2' className={styles.quiz_item_center} onClick={handleAnsClick}>
                  <p>คนไข้มีภาวะหลอดลมตีบ <br/> (Bronchospasm)</p>
                </div>
                <div id='ans3' className={styles.quiz_item_center} onClick={handleAnsClick}>
                  <p>มีอากาศค้างอยู่ในปอด <br/> (Air trapping)</p>
                </div>
              </div>

              <div className={styles.btn_area}>
                  <div className={styles.btn_container}>
                      <button className={styles.next_btn} onClick={checkAns}>
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