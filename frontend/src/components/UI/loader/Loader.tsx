import styles from "./Loader.module.scss";

export const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.innerCenter}></div>
            <div className={`${styles.innerElem} ${styles.innerElemOne}`}></div>
            <div className={`${styles.innerElem} ${styles.innerElemTwo}`}></div>
            <div className={`${styles.innerElem} ${styles.innerElemThree}`}></div>
        </div>
    );
};
