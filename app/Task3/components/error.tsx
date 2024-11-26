import styles from "../page.module.css";

type ChildComponentProps = {
    onButtonClick: () => void;  // Define the type of the prop here
  };

export default function ErrorPage({ onButtonClick }: ChildComponentProps) {
    return (
        <div className={styles.errorPage}>
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
                  <button className={styles.errorButton} onClick={onButtonClick}>Okay</button>
              </div>
          </div>
        </div>
    );
  }
  

