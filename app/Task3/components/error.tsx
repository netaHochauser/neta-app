import styles from "../page.module.css";


export default function ErrorPage() {
    return (
      <main>
        <div className={styles.errorBody}>
            <div className={styles.errorLayout}>
                <div className={styles.errorText}>
                    <div className={styles.errorTitle}>
                        <text className={styles.errorTitleStyle}>Forgotten Memory</text>
                    </div>
                    <div className={styles.errorDescription}>
                        <text className={styles.errorDescriptionStyle}>Unfortunately, the username or password are incorrect.</text>
                    </div>
                </div>
                <button className={styles.errorButton}>Okay</button>
            </div>
        </div>
      </main>
    );
  }
  

