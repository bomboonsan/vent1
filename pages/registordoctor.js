import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/registor.module.css'
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Home() {
    const router = useRouter()
    let [ firstName , setFirstName ] = useState();
    let [ lastName , setLastName ] = useState();
    let [ phoneNumber , setPhoneNumber ] = useState('');
    let [ email , setEmail ] = useState('');
    let [ speciallty , setSpeciallty ] = useState('');
    let [ hospital , setHospital ] = useState('');

    // FN
    async  function toConsentPage() {

        const response = await fetch("http://127.0.0.1:8001/api/posts", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },

        body: `
            {
                "first_name": "${firstName}",
                "last_name": "${lastName}",
                "phone_number": "${phoneNumber}",
                "email": "${email}",
                "speciallty": "DEV api speciallty",
                "type": "Doctor",
                "hospital": "${hospital}"
            }
        `,
        });


        response.json().then(data => {
        // console.log(data[0]);
        if (data[0] == 'Create Member Successfully' ) {
            router.push('/consent')
        }
        });

        // router.push('/consent')
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Registor</title>
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
            <div className={styles.registor_wrap}>

                <div className={styles.registor_block}>
                    <div className={styles.registor_thumbnail}>
                        <Image
                            src="/images/registor-doctor.png"
                            alt="Women"
                            // layout="fill"
                            // objectFit="cover"
                            width={196}
                            height={196}
                        />
                    </div>
                    <h2 className={styles.registor_title}>
                        Doctor
                    </h2>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <input 
                            type="text" 
                            value={firstName}
                            name="firstName"
                            onChange={e => setFirstName(e.target.value)}
                            className="form-control border-primary" 
                            placeholder="First Name*" />
                        </div>
                        <div className='col-6'>
                            <input 
                            type="text" 
                            value={lastName}
                            name="lastName"
                            onChange={e => setLastName(e.target.value)}
                            className="form-control border-primary" 
                            placeholder="Last Name*" />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <input 
                            type="text" 
                            value={phoneNumber}
                            name="phoneNumber"
                            onChange={e => setPhoneNumber(e.target.value)}
                            className="form-control border-primary" 
                            placeholder="Phone number" />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <input 
                            type="text" 
                            value={email}
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            className="form-control border-primary" 
                            placeholder="E-Mail" />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <select className="form-select border-primary" aria-label="Default select example">
                                <option selected>Please Select your speciality*</option>
                                <option value="CriticalCare">Critical care</option>
                                <option value="Anesthesiology">Anesthesiology</option>
                                <option value="InternistGP">Internist/GP</option>
                                <option value="Neonatologist">Neonatologist</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <input 
                            type="text" 
                            value={hospital}
                            name="hospital"
                            onChange={e => setHospital(e.target.value)}
                            className="form-control border-primary" 
                            placeholder="Hospital*" />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                        <button
                        onClick={toConsentPage} 
                        type="button" 
                        className={styles.submit_btn}>Register Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
