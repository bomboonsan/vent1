import styles from './trouble-shooting.module.scss'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

export default function HomeAlert() {
    const router = useRouter()
    const [isStart, setisStart] = useState(false);

    const [showElement, setShowElement] = useState('');

    const [missions, setMissions] = useState([]);

    function handleStart() {
        setisStart(true);
    }
    function handleFinish() {
        router.push('/trouble-shooting/success2')
    }
    function closeBox() {
        setShowElement('')

        // Step นี้ไม่ต้องตรวจสอบ Mission ว่าครบหรือยัง ()
        // if (missions.includes("Patient") && missions.includes("Ventilator") && missions.includes("Circuits") && missions.includes("Tube") && missions.includes("CloseSuction") && missions.includes("Cuff")) {
        //     // console.log('Next')
        //     router.push('/quiz/trouble-shooting-case2-1')
        // }
    }
    function handleMission(mission) {
        missions.push(mission);

        // ลบ Ojb ซ้ำกันใน Arr
        let uniqueMissions = [...new Set(missions)];
        
        setMissions(uniqueMissions)
        console.log(uniqueMissions)

    }


    // +++++++++++++++++++++++++++++++++++++
    // Component
    // +++++++++++++++++++++++++++++++++++++
    
    // กล่องข้อความเริ่มต้น
    const StartBox = () => {
        return (
            <div className={styles.startBox}>
                <p>
                ท่านพบสาเหตุของปัญหานี้แล้ว
ท่านต้องเลือกอุปกรณ์ที่ท่านจะทำการแก้ไขปัญหานี้

                </p>
                <button className={styles.startBtn} onClick={handleStart}>
                    NEXT
                </button>
            </div>
          );
    }
    
    // ตำแหน่งของคนไข้
    const PatientElement = () => {
        return (
            <div className={styles.patientElement}>             
                <div className={styles.alertIconElement} onClick={() => {setPatientAlertStep(1) ; setShowElement('Patient')}}>
                </div>         
            </div>
        )
    }
    // กล่องข้อความของคนไข้
    const [patientAlertStep, setPatientAlertStep] = useState(1);
    const PatientAlertBox1 = () => {
        return (
            <div className={styles.alertBox}>
                <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>
                <div className={styles.alertHead}>
                    <p>
                        ตรวจร่างกายผู้ป่วย
                    </p>                    
                </div>
                <div>
                    <Image
                        onClick={() => setPatientAlertStep(2)}
                        className={styles.alertImage}
                        src='/troubleshooting/04.png'
                        alt="Hover"
                        // layout="fill"
                        // objectFit="cover"
                        draggable='false'
                        width={200}
                        height={200}
                    />
                </div>
                <button className={styles.alertSubmitBtn} onClick={() => setPatientAlertStep(2)}>
                    NEXT
                </button>
            </div>
        )
    }
    const PatientAlertBox2 = () => {
        return (
            <div className={styles.alertBox}>
                <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>
                <div className={styles.alertHead}>
                    <p>
                        ฟังเสียงปอด
                    </p>                    
                </div>
                <div>
                    <Image
                        onClick={() =>  {setPatientAlertStep(3) ; setPlayingYoutube(true) ; handleMission('Patient')}}
                        className={styles.alertImage}
                        src='/troubleshooting/01.png'
                        alt="Hover"
                        // layout="fill"
                        // objectFit="cover"
                        draggable='false'
                        width={200}
                        height={200}
                    />
                </div>
                <button className={styles.alertSubmitBtn} onClick={() =>  {setPatientAlertStep(3) ; setPlayingYoutube(true) ; handleMission('Patient')}}>
                    NEXT
                </button>
            </div>
        )
    }
    const [playingYoutube, setPlayingYoutube] = useState(false);
    const [urlYoutube, setUrlYoutube] = useState('https://www.youtube.com/watch?v=aSor2XBc9K8?start=46');
    const resetYoutube = () => {
        setPatientAlertStep(1)
        setShowElement('')
    }
    const PatientAlertBox3 = () => {
        return (
            <div className={styles.alertBox}>
                <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>
                <ReactPlayer 
                className={styles.alertYoutube}
                url={urlYoutube}
                playing={playingYoutube} 
                onEnded={resetYoutube}
                
                width='100%'
                height='100%'
                />
                <button className={styles.alertSubmitBtn} onClick={closeBox}>
                    GOT IT
                </button>
            </div>
        )
    }


    // ตำแหน่งของ Ventilator (เครื่องช่วยหายใจ)
    const VentilatorElement = () => {
        return (
            <div className={styles.ventilatorElement}>        
                <div className={styles.alertIconElement} onClick={() => {setPlayingVent(true) ; setShowElement('Ventilator') ; handleMission('Ventilator')}}>
                </div>             
            </div>
        )
    }
    const [playingVent, setPlayingVent] = useState(false);
    const [urlVent, setUrlVent] = useState('https://wish-integrate.com/vent-video/trouble-ventilator-case2.mp4');
    const resetVent = () => {
        setShowElement('')
    }
    const VentilatorMonitor = () => {
        return (
            <div className={styles.ventilatorMonitor2}>          
                <div className={styles.alertClose} onClick={closeBox}>
                X
                </div>
                <div className={styles.ventilatorMonitorVideo2}>
                <ReactPlayer 
                    className={styles.alertYoutube}
                    url={urlVent}
                    playing={playingVent} 
                    onEnded={resetVent}
                    
                    width='100%'
                    height='100%'
                />
                </div>
            </div>
        )
    }


    // ตำแหน่งของ Circuits (เครื่องช่วยหายใจ)
    const CircuitsElement = () => {
        return (
            <div className={styles.circuitsElement}>   
                <div className={styles.alertIconElement} onClick={() => {setShowElement('Circuits') ; handleMission('Circuits')}}>
                </div>               
            </div>
        )
    }
    const CircuitsAlertBox = () => {
        return (
            <div className={styles.alertBox}>
                <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>
                <div className={styles.alertText}>
                <p>
                ขยับข้อต่อแล้วแน่นดี
                </p>
                </div>
                <button className={styles.alertSubmitBtn} onClick={closeBox}>
                    NEXT
                </button>
            </div>
        )
    }
    
    

    // ตำแหน่งของ Cuff
    const CuffElement = () => {
        return (
            <div className={styles.cuffElement}>     
                <div className={styles.alertIconElement} onClick={() => {setShowElement('Cuff')}}>
                </div>                
            </div>
        )
    }
    const CuffAlertBox = () => {
        return (
            <div className={styles.alertBox}>
                {/* <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>                 */}
                <div className={styles.alertHead}>
                    <p>
                    ตรวจสอบอุปกรณ์
                    </p>                    
                </div>
                <div>
                    <Image
                        onClick={() =>  {setShowElement('Cuff2') ; handleMission('Cuff')}}
                        className={styles.alertImage}
                        src='/troubleshooting/09.png'
                        alt="Hover"
                        // layout="fill"
                        // objectFit="cover"
                        draggable='false'
                        width={200}
                        height={200}
                    />
                </div>
                <button className={styles.alertSubmitBtn} onClick={() =>  {setShowElement('Cuff2') ; handleMission('Cuff')}}>
                    NEXT
                </button>
            </div>
        )
    }
    const CuffAlertBox2 = () => {
        return (
            <div className={styles.alertBox}>
                {/* <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>                 */}
                <div className={styles.alertText}>
                <p>
                ความดันที่วัดได้อยู่ที่ 25 cm/H2O
                </p>
                </div>
                <button className={styles.finishBtn} onClick={handleFinish}>
                    FINISH
                </button>
            </div>
        )
    }


    // ตำแหน่งของ Tube
    const TubeElement = () => {
        return (
            <div className={styles.tubeElement}>   
                <div className={styles.alertIconElement} onClick={() => {setShowElement('Tube') ; handleMission('Tube')}}>
                </div>                  
            </div>
        )
    }
    const TubeAlertBox = () => {
        return (
            <div className={styles.alertBox}>
                <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>
                <div className={styles.alertText}>
                <p>
                อุปกรณ์อยู่มุมปากตำแหน่งเดิม
                </p>
                </div>
                <button className={styles.alertSubmitBtn} onClick={closeBox}>
                    NEXT
                </button>
            </div>
        )
    }

    // ตำแหน่งของ Tube (เครื่องช่วยหายใจ)
    const CloseSuctionElement = () => {
        return (
            <div className={styles.closeSuctionElement}> 
                <div className={styles.alertIconElement} onClick={() => {setShowElement('CloseSuction') ; handleMission('CloseSuction')}}>
                </div>                   
            </div>
        )
    }
    const CloseSuctionAlertBox = () => {
        return (
            <div className={styles.alertBox}>
                <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div>
                <div className={styles.alertText}>
                <p>
                ตรวจไม่พบลมรั่วบริเวณโถ suction
                </p>
                </div>
                <button className={styles.alertSubmitBtn} onClick={closeBox}>
                    NEXT
                </button>
            </div>
        )
    }


    // Render
    return (
        <div className={styles.room_bg_female}>
            {!isStart && <StartBox />}

            {isStart && <PatientElement />}
            {showElement=='Patient' && patientAlertStep==1 && <PatientAlertBox1 />}
            {showElement=='Patient' && patientAlertStep==2 && <PatientAlertBox2 />}
            {showElement=='Patient' && patientAlertStep==3 && <PatientAlertBox3 />}

            {isStart && <VentilatorElement />}
            {showElement=='Ventilator' && <VentilatorMonitor />}

            {isStart && <CircuitsElement />}
            {showElement=='Circuits' && <CircuitsAlertBox />}

            {isStart && <CuffElement />}
            {showElement=='Cuff' && <CuffAlertBox />}
            {showElement=='Cuff2' && <CuffAlertBox2 />}

            {isStart && <TubeElement />}
            {showElement=='Tube' && <TubeAlertBox />}

            {isStart && <CloseSuctionElement />}
            {showElement=='CloseSuction' && <CloseSuctionAlertBox />}
        </div>        
    )
}