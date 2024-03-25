import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Responsive Homepage design with Bootstrap and Animate css</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.6.2/animate.min.css" rel="stylesheet" />
      </Head>

      <b:section id='main' showaddelement='yes'/>
      <div className={styles.container}>
        {/* Image 1 */}
        <div className={styles.image}>
          <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'>
            <img alt='Image 1' src='/images/image1.webp'/>
          </a>
          <div className={styles.overlay}>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
          </div>
        </div>

        {/* Video */}
        <div className={styles.image}>
          <video autoPlay muted loop controls>
            <source src='https://ilmkey.xyz/images/video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className={styles.overlay}>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Full Video</button></a>
          </div>
        </div>

        {/* Image 2 */}
        <div className={styles.image}>
          <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'>
            <img alt='Image 2' src='/images/image2.jpg'/>
          </a>
          <div className={styles.overlay}>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
          </div>
        </div>

        {/* Repeat the above structure for the remaining images */}
      </div>
    </div>
  );
}
