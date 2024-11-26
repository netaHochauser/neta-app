import React from 'react';
import styles from "../page.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/Animation.json";



export default function LoadMessege(){
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadingMesseges = [
    "Initializing System",
    "Wiring Neurons",
    "Gathering Information",
    "Loading Memories"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % loadingMesseges.length);
    }, 2000); // Change sentence every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [loadingMesseges]);
  
  return (
    <div className={styles.loadMessegeBody}>
        <div className={styles.loadVideoBody}>
          <Lottie 
            animationData={animationData} 
            loop={true} 
            autoplay={true} 
          />
        </div>
        <div className={styles.loadMessageContainer}>
          <div className={styles.loadMessageStyle}>{loadingMesseges[currentIndex]}</div>
        </div>
    </div>
  );
};


