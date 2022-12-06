import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/consent.module.css'
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Consent() {
    const router = useRouter()
    function toWelcomePage() {
        router.push('/welcome')
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Consent</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='prev_page'>
            <Link href="/select"> 
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
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <h1>Consent Form</h1>
                    <div className={styles.card_body}>
                        <p>
                            โปรดอ่านเอกสารให้ความยินยอมนี้อย่างละเอียดและลงชื่อตามที่ระบุไว้ด้านล่าง 
                        </p>
                        <p>
                        เราต้องการความยินยอมจากท่านในการเก็บรวบรวมข้อมูลของท่านและใช้ข้อมูลที่ท่านให้ไว้ตามที่กำหนดไว้ในนโยบายความเป็นส่วนตัวของเรา ซึ่งมีข้อมูลโดยละเอียดเกี่ยวกับการเก็บรวบรวม การใช้ และการเปิดเผยข้อมูลของท่าน สามารถอ่านนโยบายความเป็นส่วนตัวของเราได้ที่ https://asiapac.medtronic.com/xp-en/privacy-statement.html หรือท่านสามารถขอสำเนานโยบายความเป็นส่วนตัวของเราได้จากตัวแทนของ Medtronic
                        </p>
                        <p>
                        ข้อมูลที่ Medtronic เก็บรวบรวมประกอบด้วย ชื่อ นามสกุล อีเมล หมายเลขโทรศัพท์ ที่อยู่ทางไปรษณีย์/รหัสไปรษณีย์ อาชีพ กลุ่มบำบัด ความเชี่ยวชาญหลักทางการแพทย์ ชื่อโรงพยาบาล/คลินิก เมือง ประเทศที่ปฏิบัติเวชกรรม ในกรณีที่กฎหมายภายในประเทศกำหนด จะมีการเก็บหมายเลขประจำตัวของแพทย์ พยาบาล และหมายเลขวิชาชีพที่เกี่ยวข้อง
                        </p>
                        <p>
                        โดยทั่วไปแล้ว เราจะใช้ข้อมูลของท่านเพื่อวัตถุประสงค์ตามรายการด้านล่าง ซึ่งรวมถึงแต่ไม่จำกัดเพียง:
                        </p>
                        <ul>
                            <li>การแนะนำผลิตภัณฑ์ การรับคำสั่งซื้อและการจัดหา และการสื่อสารที่เกี่ยวข้อง</li>
                            <li>การทำให้มั่นใจว่าผลิตภัณฑ์จะมีความปลอดภัย คุณภาพ ประสิทธิภาพ และการใช้งานอย่างเหมาะสม และการรวบรวม ตรวจสอบ วิเคราะห์ จัดหา และจัดเตรียมข้อมูลตามที่กล่าวมา</li>
                            <li>การตรวจสอบ วิเคราะห์ และวิจัยในสาขาการแพทย์ วิศวกรรมชีวภาพ และเภสัชกรรม ตลอดจนคำขอ การสนับสนุน และการจัดการต่าง ๆ</li>
                            <li>การรวบรวม สำรวจ วิเคราะห์ จัดหา และจัดเตรียมข้อมูลทางการแพทย์และวิชาการ</li>
                            <li>การร้องขอการบรรยายและการสาธิตเกี่ยวกับผลิตภัณฑ์ ยา วิศวกรรมชีวภาพ ฯลฯ และคำแนะนำ คำเชิญ การดำเนินงาน และการจัดการการบรรยายและการสาธิต ฯลฯ</li>
                            <li>การพัฒนาผลิตภัณฑ์ การวิจัยทางคลินิก การทดลองทางคลินิกและคำขอดังกล่าว คำขอสำหรับการดูแลผลิตภัณฑ์ การสำรวจ การวิเคราะห์ และคำขอผลิตภัณฑ์หลังการขาย</li>
                            <li>การรวบรวมและการจัดการข้อมูลการรับเงินและการประมวลผลการชำระเงิน</li>
                            <li>การจัดหาและการเปิดเผยข้อมูลเพื่อให้มีความโปร่งใสในการจ่ายเงิน ฯลฯ</li>
                            <li>การวางแผนและการนำผลิตภัณฑ์ บริการ และการดำเนินงานของบริษัท Medtronic plc และบริษัทในเครือมาใช้</li>
                            <li>ให้ข้อมูลผลิตภัณฑ์หรือความปลอดภัยที่อัปเดตล่าสุดเกี่ยวกับอุปกรณ์ แอป และบริการทางการแพทย์ของ Medtronic แก่ท่าน</li>
                            <li>ส่งเอกสารเกี่ยวกับกิจกรรมและผลิตภัณฑ์ของเราหรือการพัฒนาเทคโนโลยีทางการแพทย์ที่ Medtronic เชื่อว่าท่านอาจสนใจให้แก่ท่าน</li>
                            <li>ตอบสนองต่อคำขอของท่านสำหรับข้อมูล ผลิตภัณฑ์ บริการ รวมถึงการจัดการบัญชีออนไลน์ของท่านและให้บริการการรับประกันในกรณีที่ใช้กับผลิตภัณฑ์</li>
                            <li>บริหาร วางแผน และจัดการประชุมระหว่างท่านและตัวแทนของ Medtronic</li>
                            <li>ปกป้องความปลอดภัยด้านสุขภาพหรือสวัสดิการของใครบางคน</li>
                            <li>ปฏิบัติตามกฎหมายหรือระเบียบ คำสั่งศาล หรือข้อกำหนดทางกฎหมายอื่น ๆ</li>
                        </ul>
                        <p>
                        ในฐานะที่เป็นส่วนหนึ่งของกลุ่มบริษัทข้ามชาติ เราอาจเปิดเผยข้อมูลของท่านแก่บริษัทหรือฐานข้อมูลของ Medtronic ในต่างประเทศ แต่เราจะตรวจสอบให้แน่ใจว่าการใช้และการเปิดเผยข้อมูลส่วนบุคคลที่ถ่ายโอนจะได้รับการจัดการตามนโยบายนี้และการป้องกันภายใต้กฎหมายที่บังคับใช้
                        </p>
                    </div>
                    <div className={styles.btn_area}>
                        <button 
                        onClick={toWelcomePage} 
                        className={styles.submit_btn}>
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
