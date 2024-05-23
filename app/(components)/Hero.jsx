"use client";

import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.30; // Increase playback speed by 15%
    }
  }, []);

  // Consolidate styles into a single object for clarity and maintainability
  const styles = {
    content: {
      h1Big: {
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: '2rem',
        fontWeight: 500,
        padding: '2rem 0 2rem 20px', // Left padding 20px
        fontSize: '5rem',
        marginTop: '30px' // up down shift for TZARR
      },
      h1Small: {
        color: 'white',
        letterSpacing: '0.45rem',
        fontWeight: 200, 
        textAlign: 'center', 
        fontSize: '1rem',
        paddingBottom: '2rem', // Increased bottom padding
        marginTop: '+10px' //Up down shift for Button
      },
      imageBehind: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0 // Ensure the image is behind the text
      },
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '20px' // Left padding
    },
    button: {
      padding: '1.5rem 2rem',
      margin: '0 1rem',
      backgroundColor: 'transparent',
      border: 'solid white 1px',
      fontSize: '12px',
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '0.5rem',
      transition: 'background-color 0.3s, color 0.3s' // Smooth hover effect
    },
    mainContainer: {
      backgroundColor: '#131313', 
      height: 'calc(200vh + 600px)', 
      overflowY: 'hidden'
    },
    videoContainer: {
      paddingRight: '15px', 
      boxSizing: 'content-box', 
      height: 'calc(100% + 15px)'
    },
    centerContent: {
      transform: 'translate(-50%, -80%)', 
      height: '100%', 
      overflowY: 'auto'
    },  
    grayDiv: {
      backgroundColor: '#0e100f',  // Set the background color to white
      zIndex: 30,                // Set z-index to 30
      position: 'absolute',      // Change from 'relative' to 'absolute'
      height: '1300px', //861          // Example height, adjust as needed
      // width: '100%',             // Full width
      top: '105vh',             // This will place it directly below the video container
      width: '100%', // Decrease width to 80% of the container
      left: '50%', // Position 50% from left of the container
      transform: 'translateX(-50%)', // Shift left by half of its own width to center it
    }    
  };

  const divStyle1 = {
    height: '400px',
    width: '1200px',
    border: '5px solid #bdbdbd',
    borderRadius: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '160px',
    bottom: '0',
    left: '0',
    right: '0',
    // padding: '100px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 200,
    fontSize: '1rem',
    textAlign: 'center',
  };
  
  const divStyle01 = {
    height: '400px',
    width: '1200px',
    border: '5px solid #bdbdbd',
    borderRadius: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '165px',
    bottom: '0',
    left: '0',
    right: '0',
    // padding: '100px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 200,
    fontSize: '1rem',
    textAlign: 'center',
  };


  const divStyle2 = {
    height: '400px',
    width: '400px',
    border: '5px solid #bdbdbd',
    borderRadius: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '600px',// add px to shift down
    bottom: '0',
    left: '0',
    right: '450px',
    // padding: '100px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 200,
    fontSize: '1rem',
    alignItems: 'flex-start', // Aligns children items at the start of the cross axis (top)
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    fontWeight: 500,
    fontSize: '2.5rem',
  };

  const divStyle02 = {
    height: '400px',
    width: '400px',
    border: '5px solid #bdbdbd',
    borderRadius: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '605px',// add px to shift down
    bottom: '0',
    left: '0',
    right: '450px',
    // padding: '100px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 200,
    fontSize: '1rem',
    textAlign: 'center',
  };

  const divStyle3 = {
    height: '400px',
    width: '400px',
    border: '5px solid #bdbdbd',
    borderRadius: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '600px',// add px to shift down
    bottom: '0',
    left: '450px',
    right: '0px',
    // padding: '100px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 200,
    fontSize: '1rem',
    textAlign: 'center',
    alignItems: 'flex-start', // Aligns children items at the start of the cross axis (top)
    justifyContent: 'flex-start', // Aligns children at the start of the main axis (left)
    flexDirection: 'column',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    fontWeight: 500,
    fontSize: '2.5rem',
  };

  const divStyle03 = {
    height: '400px',
    width: '400px',
    border: '5px solid #bdbdbd',
    borderRadius: '15px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    position: 'absolute',
    top: '605px',// add px to shift down
    bottom: '0',
    left: '450px',
    right: '0px',
    // padding: '100px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '0.45rem',
    fontWeight: 200,
    fontSize: '1rem',
    textAlign: 'center',
  };

  const h1Model = {
    height: '50px',
    width: '600px',
    border: 'none',
    borderRadius: '10px',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: '12px',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: '2rem',
    fontWeight: 550,
    padding: '2rem 0 2rem 20px', // Left padding 20px
    fontSize: '5rem',
    // top: '200px',
    position: 'relative', // Set position to relative
    top: '70px', // Move it down by 10px
  };
  
  return (
    <div style={styles.mainContainer}>
      <div className="relative h-screen overflow-hidden" style={styles.videoContainer}>
        <video
          ref={videoRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-screen object-cover z-0"
          src="/videos/plane.mp4"
          autoPlay
          muted
          loop
        />
        <div style={styles.grayDiv}>

          <div style={h1Model}>
              <h2>MODEL</h2>
          </div>

          <div style={divStyle1}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra tincidunt magna, et vulputate arcu. Cras feugiat vestibulum ligula a ullamcorper. Integer tempor, orci ut fermentum vestibulum, leo lorem vulputate dolor, non vulputate velit libero sit amet elit. Donec volutpat urna at libero hendrerit, a tristique metus tristique. Morbi sit amet urna sit amet quam auctor tristique. Mauris eu orci nec dolor interdum sollicitudin in et metus. Proin fermentum bibendum ligula. Vivamus feugiat felis a dui pretium, sed feugiat turpis vestibulum. Integer vitae magna at augue vulputate feugiat. Donec ullamcorper ultricies turpis, nec ultricies est vulputate at.</p>
          </div>

          <div style={divStyle01}>
            <h1></h1>
          </div>

          <div style={divStyle2}>
            <div style={{ width: '100%', textAlign: 'left' }}>
              <p>AIRLINE</p>
            </div>
            <div style={{ width: '100%', textAlign: 'left' }}>
            <p>RESOURCES</p>
            </div>
          </div>
          

          <div style={divStyle02}>
            <h1></h1>
          </div>

          <div style={divStyle3}>
          <div style={{ width: '100%', textAlign: 'left' }}>
              <p>PILOT'S</p>
            </div>
            <div style={{ width: '100%', textAlign: 'left' }}>
            <p>GUIDE</p>
            </div>
          </div>

          <div style={divStyle03}>
            <h1></h1>
          </div>

        </div>

        <div className="absolute top-1/2 left-1/2 w-full z-10 flex flex-col items-center justify-center" style={styles.centerContent}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* <img src="/images/mount.jpg" alt="Background" style={styles.imageBehind} /> */}
            <h1 style={styles.content.h1Big}>TZARR</h1>
          </div>
          {/* <h1 style={styles.content.h1Big} >TZARR</h1> */}
          <h1 style={styles.content.h1Small}>Providing all in one solution to Airlines</h1>
          <div style={styles.buttonContainer}>
            <button style={styles.button}>Our Work</button>
            <button style={styles.button}>Our Story</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;