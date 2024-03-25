import React from 'react';

const Home: React.FC = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Responsive Homepage design with Bootstrap and Animate css</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.6.2/animate.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f0f0f0;
            }
            .container {
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border-radius: 5px;
            }
            .image {
              position: relative;
              margin-bottom: 20px;
            }
            .image img {
              width: 100%;
              display: block;
            }
            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .image:hover .overlay {
              opacity: 1;
            }
            .overlay button {
              background-color: #4CAF50;
              color: white;
              border: none;
              padding: 10px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin: 4px 2px;
              transition-duration: 0.4s;
              cursor: pointer;
              border-radius: 5px;
            }
            .overlay button:hover {
              background-color: #45a049;
            }
          `}
        </style>
      </head>
      <body>
        <b:section id='main' showaddelement='yes'/>
        <div className='container'>
          {/* Image 1 */}
          <div className='image'>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'>
              <img alt='Image 1' src='https://ilmkey.xyz/images/image1.webp'/>
            </a>
            <div className='overlay'>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
            </div>
          </div>
          
          {/* Image 2 */}
          <div className='image'>
            <video autoPlay muted loop controls>
              <source src='https://ilmkey.xyz/images/video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='overlay'>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Full Video</button></a>
            </div>
          </div>

          {/* Image 3 */}
          <div className='image'>
            <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'>
              <img alt='Image 3' src='https://ilmkey.xyz/images/image2.jpg'/>
            </a>
            <div className='overlay'>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Play Video</button></a>
              <a href='https://abruptalertness.com/s8uasm76y?key=ad003e50f45b809ad5fdf10fa1d34577' target='_blank'><button>Download</button></a>
            </div>
          </div>

          {/* Repeat the above structure for the remaining images */}
        </div>
      </body>
    </html>
  );
}

export default Home;
