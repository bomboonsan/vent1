import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState , useEffect} from 'react';
import { useRouter } from 'next/router'

import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2'

export default function Home() {
  const router = useRouter()
  const [cookies, setCookie , removeCookie] = useCookies(['data','signature']);
  const [password, setPassword] = useState('');
  const [dataUser, setDataUser] = useState({});

  const handleChange = event => {
    setPassword(event.target.value);
    console.log('value is:', event.target.value);    
  };

  const checkPassword = () => {
    const correctPassword = '9876543';
    if (password === correctPassword) {
      // router.push('/select');
      router.push('/welcome');
    } else {
      setMessage('Incorrect password');
    }
  };

  const handleRegister = () => {
    router.push('/select');
  }

  // Elements


  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = {
      pin: password,
    };
  
    const res = await fetch('https://coreuat.medumore.org/api/user/auth/oculus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const data = await res.json();
    console.log(data);
    console.log(data.status);
    console.log(data.user.name);
    setDataUser(data);

    // Save to local Storage
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  }

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
      console.log(storedData)
    }


    // Clear local storage when component unmounts
    localStorage.removeItem('userData');
    setUserData({});

    // Clear Cookies
    removeCookie('data');
    removeCookie('signature');

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logout Success",
      // text: `${userData.user_profile.first_name}  ${userData.user_profile.last_name}`,
      showConfirmButton: false,
      timer: 5500
    }).then((result) => {
      router.push('/')
      // if (result.isConfirmed) {
      //   router.push('/')
      // }
    })
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Med U More OTP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.login_page}>
            
      </div>
    </div>
  )
}
