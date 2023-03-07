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

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
        }
    }, [seconds]);

    function handleStart() {
        setisStart(true);
    }
    function handleFinish() {
        router.push('/trouble-shooting/success?timer='+seconds)
    }
    function closeBox() {
        setShowElement('')

        // Step นี้ไม่ต้องตรวจสอบ Mission ว่าครบหรือยัง ()
        // if (missions.includes("Patient") && missions.includes("Ventilator") && missions.includes("Circuits") && missions.includes("Tube") && missions.includes("CloseSuction")) {
        //     // console.log('Next')
        //     router.push('/quiz/trouble-shooting1')
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
                    ท่านพบสาเหตุของปัญหานี้แล้ว<br/>
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
                {missions.includes("Patient") &&
                <div className={styles.checkedIconElement} onClick={() => {setPatientAlertStep(1) ; setShowElement('Patient')}}>
                </div>                
                }
                {!missions.includes("Patient") &&
                <div className={styles.alertIconElement} onClick={() => {setPatientAlertStep(1) ; setShowElement('Patient')}}>
                </div>                
                }                     
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
                        onClick={() => {setPlayingYoutube(true) ; setPatientAlertStep(2)}}
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
                <button className={styles.alertSubmitBtn} onClick={() => {setPlayingYoutube(true) ; setPatientAlertStep(2)}}>
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
                        // onClick={() =>  {setPatientAlertStep(3) ; setPlayingYoutube(true) ; handleMission('Patient')}}
                        onClick={() =>  {setPlayingYoutube(true) ; handleMission('Patient')}}
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
                <PatientAlertBox3 />
                {/* <button className={styles.alertSubmitBtn} onClick={() =>  {setPatientAlertStep(3) ; setPlayingYoutube(true) ; handleMission('Patient')}}>
                    NEXT
                </button> */}
                <button className={styles.alertSubmitBtn} onClick={() =>  {closeBox() ; handleMission('Patient')}}>
                    GOT IT
                </button>
            </div>
        )
    }
    const [playingYoutube, setPlayingYoutube] = useState(false);
    // const [urlYoutube, setUrlYoutube] = useState('https://www.youtube.com/watch?v=aSor2XBc9K8?start=46');
    const [urlYoutube, setUrlYoutube] = useState('https://wish-integrate.com/vent-video/trouble-shooting1.mp3');
    const resetYoutube = () => {
        setPatientAlertStep(1)
        setShowElement('')
    }
    const PatientAlertBox3 = () => {
        return (
            // <div className={styles.alertBox}>
            //     <div className={styles.alertClose} onClick={closeBox}>
            //         X
            //     </div>
            //     <ReactPlayer 
            //     className={styles.alertYoutube}
            //     url={urlYoutube}
            //     playing={playingYoutube} 
            //     onEnded={resetYoutube}
            //     controls={true}
            //     width="400px"
            //     height="50px"
            //     />
            //     <button className={styles.alertSubmitBtn} onClick={closeBox}>
            //         GOT IT
            //     </button>
            // </div>

            <ReactPlayer 
            className={styles.alertYoutube}
            url={urlYoutube}
            playing={playingYoutube} 
            onEnded={resetYoutube}
            controls={true}
            width="100%"
            height="40px"
            />
        )
    }


    // ตำแหน่งของ Ventilator (เครื่องช่วยหายใจ)
    const VentilatorElement = () => {
        return (
            <div className={styles.ventilatorElement}>        
                {missions.includes("Ventilator") &&
                <div className={styles.checkedIconElement} onClick={() => {setPlayingVent(true) ; setShowElement('Ventilator') ; handleMission('Ventilator')}}>
                </div>                
                }
                {!missions.includes("Ventilator") &&
                <div className={styles.alertIconElement} onClick={() => {setPlayingVent(true) ; setShowElement('Ventilator') ; handleMission('Ventilator')}}>
                </div>                
                }       
            </div>
        )
    }
    const [playingVent, setPlayingVent] = useState(false);
    const [urlVent, setUrlVent] = useState('https://wish-integrate.com/vent-video/trouble-ventilator.mp4');
    const resetVent = () => {
        setShowElement('')
    }
    const VentilatorMonitor = () => {
        return (
            <div className={styles.ventilatorMonitor}>          
                <div className={styles.alertCloseXL} onClick={closeBox}>
                X
                </div>
                <div className={styles.ventilatorMonitorVideo}>
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
                {missions.includes("Circuits") &&
                <div className={styles.checkedIconElement} onClick={() => {setShowElement('Circuits') ; handleMission('Circuits')}}>
                </div>                
                }
                {!missions.includes("Circuits") &&
                <div className={styles.alertIconElement} onClick={() => {setShowElement('Circuits') ; handleMission('Circuits')}}>
                </div>                
                }               
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
                    ไม่มีน้ำใน ventilator circuits <br/>
                    (ไม่มี Condensate)
                </p>
                </div>
                <button className={styles.alertSubmitBtn} onClick={closeBox}>
                    NEXT
                </button>
            </div>
        )
    }
    

    // ตำแหน่งของ Tube
    const TubeElement = () => {
        return (
            <div className={styles.tubeElement}> 
                {missions.includes("Tube") &&
                <div className={styles.checkedIconElementLeft} onClick={() => {setShowElement('Tube') ; handleMission('Tube')}}>
                </div>                
                }
                {!missions.includes("Tube") &&
                <div className={styles.alertIconElementLeft} onClick={() => {setShowElement('Tube') ; handleMission('Tube')}}>
                </div>                
                }             
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
                ตรวจพบเสมหะจำนวนมาก
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
                {missions.includes("CloseSuction") &&
                <div className={styles.checkedIconElement} onClick={() => {setShowElement('CloseSuction') ; handleMission('CloseSuction')}}>
                </div>                
                }
                {!missions.includes("CloseSuction") &&
                <div className={styles.alertIconElement} onClick={() => {setShowElement('CloseSuction') ; handleMission('CloseSuction')}}>
                </div>                
                }  
            </div>
        )
    }
    const CloseSuctionAlertBox = () => {
        return (
            <div className={styles.alertBox}>
                {/* <div className={styles.alertClose} onClick={closeBox}>
                    X
                </div> */}
                <div className={styles.alertText}>
                <p>
                    ดูดได้เสมหะจำนวนมาก
                </p>
                <button className={styles.finishBtn} onClick={handleFinish}>
                    FINISH
                </button>
                </div>
            </div>
        )
    }


    // Render
    return (
        <div className={styles.room_bg}>
            {!isStart && <StartBox />}

            {isStart && <PatientElement />}
            {showElement=='Patient' && patientAlertStep==1 && <PatientAlertBox1 />}
            {showElement=='Patient' && patientAlertStep==2 && <PatientAlertBox2 />}
            {showElement=='Patient' && patientAlertStep==3 && <PatientAlertBox3 />}

            {isStart && <VentilatorElement />}
            {showElement=='Ventilator' && <VentilatorMonitor />}

            {isStart && <CircuitsElement />}
            {showElement=='Circuits' && <CircuitsAlertBox />}

            {isStart && <TubeElement />}
            {showElement=='Tube' && <TubeAlertBox />}

            {isStart && <CloseSuctionElement />}
            {showElement=='CloseSuction' && <CloseSuctionAlertBox />}

            {/* DEV */}
            {/* <div className={styles.timeup}>
                <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
            </div> */}
            {/* DEV */}
        </div>        
    )
}