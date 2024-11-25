import React from 'react';
import styles from "../page.module.css";

export default function LoadMessege(){
  return (
    <div className={styles.overlay}>
        <video autoPlay loop muted className={styles.loadVideo}>
            <source src="/loading.mp4" type="video/mp4" />
          </video>
        <div className={styles.loadMessageContainer}>
          <div className={styles.loadMessage}>Initializing System</div>
        </div>
    </div>
  );
};


