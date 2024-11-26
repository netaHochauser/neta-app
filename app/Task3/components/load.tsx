import React from 'react';
import styles from "../page.module.css";
import { useState } from "react";
import { useEffect } from "react";


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
        {/* <video autoPlay loop muted className={styles.loadVideo}>
            <source src="/loading.mp4" type="video/mp4" />
          </video> */}
        <div className={styles.loadMessageContainer}>
          <div className={styles.loadMessageStyle}>{loadingMesseges[currentIndex]}</div>
        </div>
    </div>
  );
};


