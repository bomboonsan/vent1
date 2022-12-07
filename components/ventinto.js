import { useState, useEffect } from 'react';
import styles from './ventinto.module.scss'
import Image from 'next/image'
import Link from "next/link";

export default function VentInto() {
    const [introductionTitle, setIntroductionTitle] = useState('Instruction');
    const [introductionText, setIntroductionText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum      ');
    const [stepCount, setStepCount] = useState(1);

    useEffect(() => {
        let btn1 = document.querySelector('#btn1');
        let btn2 = document.querySelector('#btn2');
        let btn3 = document.querySelector('#btn3');  
        let tableBtngroup = document.querySelector('#table_btngroup');  
        let tableBtnsetting = document.querySelector('#table_btnsetting');  
        let nextBtn = document.querySelector('#nextBtn');  
        
        btn1.classList.add(styles['btn_setting_up_active']);
        tableBtngroup.classList.add(styles['invisible']);
        tableBtnsetting.classList.add(styles['invisible']);
    }, []);

    function activeBtn(step) {        
        let btnNum = '#btn'+step;
        console.log(btnNum);
        if (step == '2') {
            document.querySelector(btnNum)?.classList.add(styles['genderBoxActive']);
        } else if (step == '4' || step == '5' || step == '6') {
            document.querySelector(btnNum)?.classList.add(styles['setupCaptionActive2']);
        } else {
            document.querySelector(btnNum)?.classList.add(styles['btn_setting_up_active']);
        }

        if (step == '4') {
            document.querySelector('#table_btngroup').classList.remove(styles['invisible']);
        }
        if (step == '7') {
            document.querySelector('#table_btnsetting').classList.remove(styles['invisible']);
        }
    }
    function removeActiveBtn(step) {
        if (step == '2') {
            document.querySelector('#btn'+step.toString())?.classList.remove(styles['genderBoxActive']);
        } else if (step == '4' || step == '5' || step == '6') {
            document.querySelector('#btn'+step.toString())?.classList.remove(styles['setupCaptionActive2']);
        } else {
            document.querySelector('#btn'+step.toString())?.classList.remove(styles['btn_setting_up_active']);
        }
    }

    function handleNextStep(stepCount) {
        let stepCountNew = stepCount+1;
        setStepCount(stepCountNew);
        console.log(stepCount);

        removeActiveBtn(stepCount);
        activeBtn(stepCountNew);
        setIntroductionTitle('Instruction #'+stepCountNew);

        if (stepCount == 8) {
            document.querySelector('#introductionBox')?.classList.add(styles['hidden']);
        }
    }

    return (
        <section className={styles.vent_container}>
            <header className={styles.panel_top}>
                <div className={styles.panel_top_content}>
                    <h2>New Patient Setup</h2>
                    <h3>Vent startup in progress</h3>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.VentSetup}>
                    <section className={styles.sidebar}>
                        <div className={styles.sideLogo}>
                            <p>
                                Setup
                            </p>
                        </div>
                        <div className={styles.sideList}>
                            <ul>
                                <li className={styles.active}>
                                    <span>Vent</span>
                                </li>
                                <li>
                                    <span>Apnea</span>
                                </li>
                                <li>
                                    <span>Alarms</span>
                                </li>
                                <li>
                                    <span>More <br/> Settings</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.kgbox}>
                            <div className={styles.kg}>
                                <span className={styles.spnkg}>
                                    50
                                </span>
                                <span className={styles.spnkgc}>
                                    kg
                                </span>
                            </div>
                            <div className={styles.mlkg}>
                                <span className={styles.spnmlkg}>
                                    6.00
                                </span>
                                <span className={styles.spnlmkgc}>
                                    mL/kg
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className={styles.Ventcontent}>
                        <div className={styles.settings_box}>
                            <div className={styles.leftCol}>
                                <h4>
                                    Setup Vent
                                </h4>
                                <div className={styles.helpText}>
                                    <span>Enter predicted body weight</span>
                                </div>
                                <div className={styles.weightBox}>
                                    <div id='btn1' className={styles.btn_setting_up}>
                                        <div className={styles.btnsLineMid}>50</div>
                                        <div className={styles.btnsLineTop}>kg</div>
                                        <div className={styles.btnsLineBot}>(110)</div>
                                    </div>
                                </div>
                                <div className={styles.orBox}>
                                    <span>— OR —</span>
                                </div>
                                <div className={styles.helpText}>
                                    <span>gender and height</span>
                                </div>
                                <div className={styles.genderBox}>
                                    <div id='btn2' className={styles.genderbtn}>
                                        <Image
                                            src="/vent/button-gender-male.png"
                                            alt="button-gender-male"
                                            // layout="fill"
                                            // objectFit="cover"
                                            width={196}
                                            height={196}
                                        />
                                    </div>
                                    <div className={styles.genderbtn}>
                                    <Image
                                            src="/vent/button-gender-female.png"
                                            alt="button-gender-female"
                                            // layout="fill"
                                            // objectFit="cover"
                                            width={196}
                                            height={196}
                                        />
                                    </div>
                                </div>
                                <div className={styles.heightBox}>
                                    <div id='btn3' className={styles.btn_setting_up}>
                                        <div className={styles.btnsLineMid}>50</div>
                                        <div className={styles.btnsLineTop}>kg</div>
                                        <div className={styles.btnsLineBot}>(110)</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightCol}>
                                <table id='table_btngroup' className={styles.table_btngroup} width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td className={styles.td_title}>
                                                <div className={styles.setupCaption}>
                                                    <span>Ventilation Type</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div id='btn4' className={styles.setupbtn}>
                                                    <span>Invasive</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>NIV</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>HFO2T</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td_title}>
                                                <div className={styles.setupCaption}>
                                                    <span>Mode</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>A/C</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div id='btn5' className={styles.setupbtn}>
                                                    <span>SIMV</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>SPOINT</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>BiLevel</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>CPAP</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td_title}>
                                                <div className={styles.setupCaption}>
                                                    <span>Mandatory Type</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>PC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div id='btn6' className={styles.setupbtn}>
                                                    <span>VC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>VC+</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td_title}>
                                                <div className={styles.setupCaption}>
                                                    <span>Spontaneous Type</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>PS</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>TC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>VS</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>PAV+</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.td_title}>
                                                <div className={styles.setupCaption}>
                                                    <span>Trigger Type</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>P-Trig</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>V-Trig</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.setupbtn}>
                                                    <span>IE Sync</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table id='table_btnsetting' className={styles.table_btnsetting} width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        f
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        10
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        1/min
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        V<sub>T</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        300
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        mL
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        V<sub>MAX</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        39
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        L/min
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div id='btn7' className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        P<sub>SUPP</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        10
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        cmH<sub>2</sub>O
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        V <sub>SENS</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        3.0
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        L/min
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        O<sub>2</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        40
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        %
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div id='btn8' className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        P<sub>PEAK</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        8.0
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        cmH<sub>2</sub>O
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        D<sub>SENS</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        75
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        L/min
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        50
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        %
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        T<sub>PL</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        0.0
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        S
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        Ramp
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        XXX
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        T<sub>l SPONT</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        3.0
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        S
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        E<sub>SENS</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        25
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        %
                                                    </div>
                                                </div>
                                            </td>                                            
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        PEEP
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        3.0
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        cmH<sub>2</sub>O
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        V<sub>Tl</sub>
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        750
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        mL
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.btn_setting}>
                                                    <div className={styles.btnsLineTop}>
                                                        Tube
                                                    </div>
                                                    <div className={styles.btnsLineMid}>
                                                        ET
                                                    </div>
                                                    <div className={styles.btnsLineBot}>
                                                        Type
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <div className={styles.statBar}>
                
            </div>
            <div className={styles.footer}>
                <div id='introductionBox' className={styles.introduction_box}>
                    <h2>
                        {introductionTitle}
                    </h2>
                    <p>
                        {introductionText}      
                    </p>
                    <button id='btnNext' className={styles.btn_next} onClick={() => handleNextStep(stepCount)}>
                        NEXT
                    </button>
                    {/* <button id='btnNext' className={styles.btn_start} onClick={() => handleNextStep(stepCount)}>
                        FINISH
                    </button> */}
                </div>
                <div id='introductionBox2' className={styles.introduction_box}>
                    <Link href="/instruction/vent"> 
                        <button className={styles.introductionBtnLink} target='_blank' rel='noreferrer'>
                            FINISH
                        </button>
                    </Link>
                </div>
            </div>
            <footer className={styles.controlpanel_wrap}>
                <div className={styles.controlpanel_row}>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/displaybrightnesskey.png"
                            alt="displaybrightnesskey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/displaylockkey.png"
                            alt="displaylockkey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/displayvolumekey.png"
                            alt="displayvolumekey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/manualinspirationkey.png"
                            alt="manualinspirationkey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel_knob_box}>
                        <Image
                            src="/vent/covidienknob.png"
                            alt="covidienknob"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/inspiratorypausekey.png"
                            alt="inspiratorypausekey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/expiratorypausekey.png"
                            alt="expiratorypausekey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/alarmresetkey.png"
                            alt="alarmresetkey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <div className={styles.controlpanel}>
                        <Image
                            src="/vent/alarmsilencekey.png"
                            alt="alarmsilencekey"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                </div>
            </footer>
        </section>        
    )
}