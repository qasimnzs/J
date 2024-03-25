import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Responsive Homepage design with Bootstrap and Animate css</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.6.2/animate.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
      </Head>

      <body>
        <b:section id='main' showaddelement='yes'/>
        <div className='container'>
          <div className='image'>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'>
              <img alt='Image 1' src='https://ilmkey.xyz/images/image1.webp'/>
            </a>
            <div className='overlay'>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
            </div>
          </div>

          {/* Add more image divs with overlay content here */}
        </div>
      </body>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
