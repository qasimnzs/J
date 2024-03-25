import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Responsive Homepage design with Bootstrap and Animate css</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.6.2/animate.min.css"
        />
        <link rel="stylesheet" href="/styles/style.css" />
      </Head>
      <body>
        <section id='main' showaddelement='yes'/>
        <div className='container'>
          {/* Image 1 */}
          <div className='image'>
            <img alt='Image 1' src='/images/image1.webp'/>
            <div className='overlay'>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
            </div>
          </div>
          
          {/* Image 2 */}
          <div className='image'>
            <img alt='Image 2' src='/images/image2.jpg'/>
            <div className='overlay'>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
            </div>
          </div>

          {/* Add more image divs here as needed */}

        </div>
      </body>
    </div>
  );
};

export default Home;
