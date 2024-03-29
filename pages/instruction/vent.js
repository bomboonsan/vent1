import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/instruction/main.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import useTextFit from 'use-text-fit';
// https://www.npmjs.com/package/use-text-fit

export default function Intruction_1() {
    // const {ref} = useTextFit();
    
    const router = useRouter()
    const [instructionStep, setInstructionStep] = useState(1);
    const [instructionText, setInstructionText] = useState('ในหัวข้อนี้ ท่านสามารถทำความรู้จักความหมายของพารามิเตอร์ของเครื่องช่วยหายใจ ในโหมด Set Up Ventilator');
    const handleClick = () => {
        console.log('click')
        setInstructionStep(instructionStep+1)
        if (instructionStep == 1) {
            setInstructionText('คำอธิบายต่างๆจะแสดงบริเวณด้านล่างของหน้าต่าง Set up ท่านสามารถดูคำอธิบายไปตามลำดับโดย <br/> กดปุ่ม NEXT เพื่อเดินหน้า <br/> กดปุ่ม Previous เพื่อย้อนกลับ <br/> หรือหากท่านต้องการทราบคำอธิบายของพารามิเตอร์ ท่านสามารถกดไปที่ค่าต่างๆได้โดยตรง')
        }
        if (instructionStep == 2) {
            setInstructionText('หมายเหตุ: โปรแกรมนี้จัดจำลองขึ้นเพื่อให้ท่านได้รู้จักความหมายของพารามิเตอร์ต่างๆ <br/> โปรดศึกษาเพิ่มเติมในหัวข้อถัดไปสำหรับการใช้งานเครื่องจริง')
        }
        if (instructionStep == 3) {
            router.push('/vent/instruction')
        }
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Consent</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='prev_page'>
                <Link href="/menulearningmode"> 
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
                    <div className='col-12 col-lg-11'>
                        <div className={styles.intruction_wrapper}>
                            <div className='row'>
                                <div className='col-3 col-lg-3'>
                                    <div className={styles.thumbnail_frame}>
                                        <Image
                                            src="/images/Capturec-ventfinal-learning.png"
                                            alt="Women"
                                            // layout="fill"
                                            objectFit="cover"
                                            width={1200}
                                            height={1200}
                                        />
                                    </div>
                                </div>
                                <div className='col-9 col-lg-9'>
                                    <div className={styles.content_container}>
                                        <div className={styles.contenn_wrap}>
                                            <h2>Instruction</h2>
                                            {/* <p>
                                                {instructionText}
                                            </p> */}
                                            <p dangerouslySetInnerHTML={{ __html: instructionText }} />
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className={styles.btn_area}>
                                <div className={styles.btn_container}>
                                    <button className={styles.next_btn} onClick={handleClick}>
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
