"use client";

import ErrorPage from "./components/error";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("./components/error"); 
  };

  return (
    <main>
      <ErrorPage></ErrorPage>
      <div className={styles.background}>
      <video autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className={styles.logo}>
      <svg xmlns="http://www.w3.org/2000/svg" width="213" height="178" viewBox="0 0 213 178" fill="none">
        <path d="M182.089 51.2861C182.089 51.2861 179.534 50.8598 178.257 50.8598C179.108 49.1547 179.534 47.0233 179.96 45.3181C184.218 25.2828 171.018 5.67378 151.004 1.41094C135.759 -1.57304 120.557 5.16224 112.424 17.3539C112.339 17.4818 112.168 17.4818 112.083 17.3539C105.227 7.25103 94.1984 0.515747 81.0404 0.558375C60.3878 0.643632 44.1212 18.4623 44.1212 39.137V39.3502C44.1212 39.3502 43.9083 39.6912 43.7379 39.6486C40.4165 38.455 36.3286 37.645 32.6239 37.645C15.165 37.645 1.11269 51.7124 1.11269 69.19C1.11269 86.6677 6.56327 89.609 14.6114 95.1081C14.6966 95.1507 14.7391 95.2786 14.6966 95.3638C13.4617 98.7315 12.61 102.525 12.61 106.277C12.61 121.964 23.9796 134.71 38.7984 137.353C38.9261 137.353 39.0113 137.481 38.9687 137.609L27.9398 176.059C27.5991 177.253 29.3132 177.512 29.4835 177.427L70.5224 159.136C75.2065 163.825 81.5939 167.235 88.4072 168.514C97.7328 170.219 106.633 168.514 114.297 164.294C114.34 164.294 114.425 164.294 114.51 164.294C117.874 166.383 121.707 167.662 125.497 168.514C145.511 172.777 165.099 159.562 169.357 139.527C170.208 134.497 170.209 129.467 169.399 124.863C169.399 124.735 169.485 124.607 169.612 124.65C188.689 127.037 206.83 114.717 211.088 95.1933C215.346 75.158 202.146 55.549 182.132 51.2861H182.089ZM146.575 109.857C146.49 116.337 142.445 119.577 134.311 119.577C131.373 119.577 128.988 118.767 127.115 117.19C125.241 115.57 124.304 112.969 124.219 109.389V83.6837L111.955 108.792C110.891 110.881 109.784 112.373 108.634 113.268C107.484 114.163 106.036 114.589 104.418 114.589C102.332 114.589 100.586 113.865 99.138 112.373C97.6902 110.923 95.8591 108.238 93.5597 104.358L82.1901 83.6837V111.435C82.1901 114.248 81.5514 116.294 80.2739 117.616C78.9964 118.937 77.0802 119.577 74.5252 119.577C71.6296 119.577 69.5431 118.937 68.2656 117.658C66.9455 116.38 66.3068 113.865 66.3068 110.156V67.3996C66.3068 62.3695 67.4565 58.5756 69.756 56.0179C72.0554 53.4602 75.8879 52.1813 81.2959 52.1813C83.3398 52.1813 85.0857 52.5224 86.5761 53.2044C88.0665 53.8865 89.2163 54.6538 89.9402 55.549C90.6641 56.4442 91.4305 57.5099 92.1544 58.8313L105.27 87.5629L119.194 59.3429C121.622 54.6538 125.965 52.2666 132.225 52.2666C135.163 52.2666 137.675 52.7781 139.762 53.8012C141.848 54.8243 143.509 56.4442 144.701 58.7035C145.894 60.9628 146.49 63.7762 146.49 67.1865V109.857H146.575Z" fill="#280F36" stroke="#280F36" stroke-miterlimit="10"/>
      </svg>
      </div>
      <div className={styles.welcome}>
        <text className={styles.welcomeTitle}>Welcome to WasApp</text>
        <text className={styles.welcomeTalk}>Share your childhood memories with</text>
        <text className={styles.welcomeTalk}>friends and communities</text>
      </div>

      <div className={styles.inputsAndButtons}>
        <div className={styles.inputs}>
          <div className={styles.emailAndPassward}>
            <input 
                className={styles.input} 
                type="text"  
                placeholder="Email"
                />
            <input 
              className={styles.input} 
              type="text"  
              placeholder="Passward"
              />
          </div>
          <text className={styles.cantRemember}>Can’t Remember?</text>
        </div>
        <div className={styles.buttons}>
          <button className={styles.login} onClick={handleLoginClick}>Login</button>
          <button className={styles.signUp}>Sign Up</button>
        </div>
      </div> 
      </div>
    </main>
  );
}
