"use client";

import styles from "./page.module.css";
import { useState } from "react";
// import ErrorPage from "./components/error";
import { useEffect } from "react";
// import LoadMessege from "./components/load";
import dynamic from "next/dynamic";

const ErrorPage = dynamic(() => import("./components/error"), { ssr: false });
const LoadMessege = dynamic(() => import("./components/load"), { ssr: false });

export default function LoginPage() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isNextComponentVisible, setNextComponentVisible] = useState(false);

  useEffect(() => {
    // Safely access the `document` object here
    console.log(document.title);
    if (typeof window !== 'undefined') {
      // Safe to use document here
      console.log(document.title);
    }
  }, []);

  function handleButtonClick(){
    setOverlayVisible(true); // Show overlay when the button is clicked
    setNextComponentVisible(false);
  };

  // Hide overlay after animation
  useEffect(() => {
    if (isOverlayVisible) {
      // After 7 seconds (to allow the overlay animation to finish), show the next component
      const timer = setTimeout(() => {
        setOverlayVisible(false);
        setNextComponentVisible(true); // Show next component
      }, 7000); // Adjust time as per your animation duration

      return () => clearTimeout(timer); // Clean up timeout if component is unmounted
    }
  }, [isOverlayVisible]);

  function handleErrorClick(){
    setNextComponentVisible(false);
  }


  return (
    <div className={styles.relative}>
    <div className={styles.mainWindow}>
      {isNextComponentVisible && <ErrorPage onButtonClick={handleErrorClick}/>}
      {isOverlayVisible && <LoadMessege/>}
      <div className={styles.upperBar}>
        <div className={styles.timeBar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
            <path d="M5.86719 13.0889C8.55518 13.0889 10.1519 10.9868 10.1519 7.42725C10.1519 6.08691 9.89551 4.95898 9.40479 4.0874C8.69434 2.73242 7.47119 2 5.92578 2C3.62598 2 2 3.54541 2 5.71338C2 7.74951 3.46484 9.229 5.479 9.229C6.7168 9.229 7.72021 8.65039 8.21826 7.64697H8.24023C8.24023 7.64697 8.26953 7.64697 8.27686 7.64697C8.2915 7.64697 8.34277 7.64697 8.34277 7.64697C8.34277 10.064 7.42725 11.5068 5.88184 11.5068C4.97363 11.5068 4.27051 11.0088 4.02881 10.2104H2.14648C2.46143 11.9463 3.93359 13.0889 5.86719 13.0889ZM5.93311 7.72754C4.71729 7.72754 3.85303 6.86328 3.85303 5.65479C3.85303 4.47559 4.76123 3.57471 5.94043 3.57471C7.11963 3.57471 8.02783 4.49023 8.02783 5.68408C8.02783 6.86328 7.1416 7.72754 5.93311 7.72754Z" fill="white"/>
            <path d="M13.243 12.9863C13.9388 12.9863 14.4148 12.4883 14.4148 11.8291C14.4148 11.1626 13.9388 10.6719 13.243 10.6719C12.5545 10.6719 12.0711 11.1626 12.0711 11.8291C12.0711 12.4883 12.5545 12.9863 13.243 12.9863ZM13.243 7.49316C13.9388 7.49316 14.4148 7.00244 14.4148 6.34326C14.4148 5.67676 13.9388 5.18604 13.243 5.18604C12.5545 5.18604 12.0711 5.67676 12.0711 6.34326C12.0711 7.00244 12.5545 7.49316 13.243 7.49316Z" fill="white"/>
            <path d="M21.2706 12.8325H23.0797V10.8623H24.5079V9.26562H23.0797V2.26367H20.4137C18.546 5.07617 17.0592 7.42725 16.107 9.17773V10.8623H21.2706V12.8325ZM17.8575 9.19971C19.088 7.03174 20.1866 5.2959 21.1974 3.80176H21.2999V9.30957H17.8575V9.19971Z" fill="white"/>
            <path d="M28.5365 12.8325H30.4262V2.26367H28.5438L25.7826 4.19727V6.01367L28.412 4.16797H28.5365V12.8325Z" fill="white"/>
          </svg>
        </div>
        <div className={styles.upperBarMore}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path clip-rule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#D1D1D6"/>
            <path clip-rule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#D1D1D6"/>
            <path clip-rule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#D1D1D6"/>
            <path clip-rule="evenodd" d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z" fill="#EBEBF5" fill-opacity="0.3"/>
            <path clip-rule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="white"/>
            <path clip-rule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="white"/>
            <path clip-rule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M8.13271 8.93958C8.77221 8.93958 9.39359 9.10762 9.94111 9.42804L10.1629 9.55787C10.3311 9.65629 10.3607 9.88665 10.2228 10.0242L8.32873 11.913C8.21239 12.029 8.02376 12.029 7.90742 11.913L6.02551 10.0363C5.88823 9.89939 5.91684 9.67021 6.0836 9.57106L6.30295 9.44064C6.85549 9.1121 7.48477 8.93958 8.13271 8.93958Z" fill="white"/>
            <path d="M8.13267 5.46985C9.7235 5.46985 11.2509 5.99759 12.4952 6.97491L12.6711 7.11303C12.8113 7.22315 12.8236 7.43064 12.6974 7.55649L11.5666 8.68412C11.462 8.78842 11.2965 8.8004 11.1779 8.71226L11.0401 8.60981C10.1997 7.98523 9.18633 7.6502 8.13267 7.6502C7.07251 7.6502 6.05323 7.9894 5.21005 8.62115L5.07207 8.72453C4.95346 8.81339 4.78737 8.80169 4.68247 8.69709L3.5521 7.56986C3.42618 7.44429 3.43813 7.23732 3.57769 7.127L3.75254 6.98876C4.99979 6.00273 6.53416 5.46985 8.13267 5.46985Z" fill="white"/>
            <path d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z" fill="white"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
            <path d="M24 4C24.5523 4 25 4.44772 25 5V7C25 7.55228 24.5523 8 24 8V4Z" fill="#EBEBF5" fill-opacity="0.3"/>
            <path clip-rule="evenodd" d="M3 0H20C21.6569 0 23 1.34315 23 3V9C23 10.6569 21.6569 12 20 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0ZM3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H20C21.1046 11 22 10.1046 22 9V3C22 1.89543 21.1046 1 20 1H3Z" fill="#EBEBF5" fill-opacity="0.3"/>
            <rect x="2" y="2" width="19" height="8" rx="1" fill="white"/>
          </svg>
        </div>
      </div>
      <div className={styles.background}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className={styles.logo}>
        <div className={styles.logoSettings}>
      <svg xmlns="http://www.w3.org/2000/svg" width="213" height="178" viewBox="0 0 213 178" fill="none">
        <path d="M182.089 51.2861C182.089 51.2861 179.534 50.8598 178.257 50.8598C179.108 49.1547 179.534 47.0233 179.96 45.3181C184.218 25.2828 171.018 5.67378 151.004 1.41094C135.759 -1.57304 120.557 5.16224 112.424 17.3539C112.339 17.4818 112.168 17.4818 112.083 17.3539C105.227 7.25103 94.1984 0.515747 81.0404 0.558375C60.3878 0.643632 44.1212 18.4623 44.1212 39.137V39.3502C44.1212 39.3502 43.9083 39.6912 43.7379 39.6486C40.4165 38.455 36.3286 37.645 32.6239 37.645C15.165 37.645 1.11269 51.7124 1.11269 69.19C1.11269 86.6677 6.56327 89.609 14.6114 95.1081C14.6966 95.1507 14.7391 95.2786 14.6966 95.3638C13.4617 98.7315 12.61 102.525 12.61 106.277C12.61 121.964 23.9796 134.71 38.7984 137.353C38.9261 137.353 39.0113 137.481 38.9687 137.609L27.9398 176.059C27.5991 177.253 29.3132 177.512 29.4835 177.427L70.5224 159.136C75.2065 163.825 81.5939 167.235 88.4072 168.514C97.7328 170.219 106.633 168.514 114.297 164.294C114.34 164.294 114.425 164.294 114.51 164.294C117.874 166.383 121.707 167.662 125.497 168.514C145.511 172.777 165.099 159.562 169.357 139.527C170.208 134.497 170.209 129.467 169.399 124.863C169.399 124.735 169.485 124.607 169.612 124.65C188.689 127.037 206.83 114.717 211.088 95.1933C215.346 75.158 202.146 55.549 182.132 51.2861H182.089ZM146.575 109.857C146.49 116.337 142.445 119.577 134.311 119.577C131.373 119.577 128.988 118.767 127.115 117.19C125.241 115.57 124.304 112.969 124.219 109.389V83.6837L111.955 108.792C110.891 110.881 109.784 112.373 108.634 113.268C107.484 114.163 106.036 114.589 104.418 114.589C102.332 114.589 100.586 113.865 99.138 112.373C97.6902 110.923 95.8591 108.238 93.5597 104.358L82.1901 83.6837V111.435C82.1901 114.248 81.5514 116.294 80.2739 117.616C78.9964 118.937 77.0802 119.577 74.5252 119.577C71.6296 119.577 69.5431 118.937 68.2656 117.658C66.9455 116.38 66.3068 113.865 66.3068 110.156V67.3996C66.3068 62.3695 67.4565 58.5756 69.756 56.0179C72.0554 53.4602 75.8879 52.1813 81.2959 52.1813C83.3398 52.1813 85.0857 52.5224 86.5761 53.2044C88.0665 53.8865 89.2163 54.6538 89.9402 55.549C90.6641 56.4442 91.4305 57.5099 92.1544 58.8313L105.27 87.5629L119.194 59.3429C121.622 54.6538 125.965 52.2666 132.225 52.2666C135.163 52.2666 137.675 52.7781 139.762 53.8012C141.848 54.8243 143.509 56.4442 144.701 58.7035C145.894 60.9628 146.49 63.7762 146.49 67.1865V109.857H146.575Z" fill="#280F36" stroke="#280F36" stroke-miterlimit="10"/>
      </svg>
        </div>
      </div>
      <div className={styles.welcome}>
        <div className={styles.welcomeTitle}>
          <div className={styles.welcomTitleStyle}>Welcome to WasApp</div>
        </div>
        <div className={styles.welcomeTalk}>
          <div className={styles.welcomeTalkStyle}>Share your childhood memories with friends and communities</div>
        </div>
      </div>

      <div className={styles.inputsAndButtons}>
          <div className={styles.emailAndPassward}>
            <div className={styles.input}>
              <input 
                  className={styles.inputStyle} 
                  type="text"  
                  placeholder="Email"
                  />
            </div>
            <div className={styles.input}>
              <input 
                className={styles.inputStyle} 
                type="text"  
                placeholder="Passward"
                />
            </div>
          </div>
          <div className={styles.cantRemember}>Can’t Remember?</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.login} onClick={handleButtonClick}>Login</button>
          <button className={styles.signUp} onClick={handleButtonClick}>Sign Up</button>
        </div>
      </div>
      <div className={styles.lowerBar}>
      <svg xmlns="http://www.w3.org/2000/svg" width="134" height="5" viewBox="0 0 134 5" fill="none">
        <rect width="134" height="5" rx="2.5" fill="white"/>
      </svg>
      </div>
    </div>
    </div>
  );
}


