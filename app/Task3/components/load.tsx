import React from 'react';
import styles from "../page.module.css";

export default function LoadMessege(){
  return (
    <div className={styles.overlay}>
    <div className={styles.loadContainer}>
      <img className={styles.loadImage} src="../../../public/load.gif" alt="Loading Animation" />
      <div className={styles.loadMessageContainer}>
        <div className={styles.loadMessage}>Initializing System</div>
      </div>
    </div>
    </div>
  );
};


