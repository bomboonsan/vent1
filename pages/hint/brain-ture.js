import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../styles/hint/brain.module.scss'
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Intruction_1() {
    const router = useRouter()
    const [textHint, setTextHint] = useState('การให้ยาระงับความรู้สึก (Sedation) ต่อคนไข้ จะส่งผลต่อการเปลี่ยนแปลงลักษณะของคลื่นไฟฟ้าสมอง (EEG: Electroencephalogram) ซึ่งการใช้ยาระงับความรู้สึกในคนไข้ภาวะวิกฤตใน ICU เป็นไปเพื่อให้คนไข้มีระดับความรู้สึกที่เหมาะสมต่อวิธีการรักษาและสอดคล้องกับอุปกรณ์ทางการแพทย์ที่ใช้กับคนไข้');
    const [stepCount, setStepCount] = useState(0);
    function nextStep() {
        if ( stepCount+1 < 3 ) {
            setStepCount(stepCount+1);
        } else {
            // router.push('/mainbrain')
            router.push('/quiz/brain2')
        }
        if ( stepCount+1 == 1 ) {
            setTextHint('การใช้เครื่องประมวลผลสัญญาณคลื่นไฟฟ้าสมองออกมาเป็นตัวเลข (processed-EEG monitor) จะช่วยทำให้สามารถวางแผนการใช้ยาระงับความรู้สึกได้อย่างแม่นยำเหมาะสมเฉพาะรายบุคคลตามสภาวะการตอบสนองของคลื่นไฟฟ้าสมอง ผ่านการดูตัวเลขง่าย ๆ ในช่วง 0-100 พร้อมกับกราฟแนวโน้มของสภาวะตอบสนองต่อยาระงับความรู้สึก')
        } else if ( stepCount+1 == 2 ) {
            setTextHint('ดังนั้นเรามาทำความรู้จักกับการทำงานของ Brain Monitoring และ ฝึกหัดการติดอุปกรณ์ให้กับคนไข้กันเถอะ')
        }
    }

    const BrainImage = () => {
        return (
            <div className={styles.col_image_left}>
                <div className={styles.table_iTem}>
                <Image
                    src="/images/brain-ture@4x.png"
                    alt="Women"
                    // layout="fill"
                    // objectFit="cover"
                    width={250}
                    height={400}
                />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Hint</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='prev_page'>
                <Link href="/quiz/brain"> 
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
                {stepCount+1 == 2 && 
                <div className={styles.row_hint2}>
                    {stepCount+1 == 2 && <BrainImage />}
                    {stepCount+1 == 2 && 
                    <div className={styles.col_text_box2}>
                        <div className={styles.text_box_wrap2}>
                            <p>
                                {textHint}
                            </p>
                        </div>

                        <div className={styles.btn_group}>
                            <button onClick={nextStep}>
                                GOT IT
                            </button>
                        </div>                        
                    </div>    
                    }

                    {stepCount+1 !== 2 && 
                    <div className={styles.col_text_box}>
                        <div className={styles.text_box_wrap}>
                            <p>
                                {textHint}
                            </p>
                        </div>

                        <div className={styles.btn_group}>
                            <button onClick={nextStep}>
                                GOT IT
                            </button>
                        </div>                        
                    </div>    
                    }                
                    
                    <div className={styles.col_image}>
                        <Image
                            src="/images/hin-ture.png"
                            alt="Women"
                            // layout="fill"
                            // objectFit="cover"
                            width={1279}
                            height={1739}
                        />
                    </div>
                </div>
                }


                {stepCount+1 !== 2 && 
                <div className={styles.row_hint}>
                    {stepCount+1 == 2 && <BrainImage />}
                    {stepCount+1 == 2 && 
                    <div className={styles.col_text_box2}>
                        <div className={styles.text_box_wrap2}>
                            <p>
                                {textHint}
                            </p>
                        </div>

                        <div className={styles.btn_group}>
                            <button onClick={nextStep}>
                                GOT IT
                            </button>
                        </div>                        
                    </div>    
                    }

                    {stepCount+1 !== 2 && 
                    <div className={styles.col_text_box}>
                        <div className={styles.text_box_wrap}>
                            <p>
                                {textHint}
                            </p>
                        </div>

                        <div className={styles.btn_group}>
                            <button onClick={nextStep}>
                                GOT IT
                            </button>
                        </div>                        
                    </div>    
                    }                
                    
                    <div className={styles.col_image}>
                        <Image
                            src="/images/hin-ture.png"
                            alt="Women"
                            // layout="fill"
                            // objectFit="cover"
                            width={1279}
                            height={1739}
                        />
                    </div>
                </div>
                }

            </div>            
        
        </div>
    )
}
