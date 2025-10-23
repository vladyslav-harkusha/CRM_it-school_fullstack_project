import styles from "./Loader.module.scss";

type Props = {
    margin_t?: number;
};

export const Loader = ({ margin_t }: Props) => {
    return (
        <div className={styles.loaderWrapper} style={{ marginTop: `${margin_t}vh` }}>
            <div className={styles.innerCenter}></div>
            <div className={`${styles.innerElem} ${styles.innerElemOne}`}></div>
            <div className={`${styles.innerElem} ${styles.innerElemTwo}`}></div>
            <div className={`${styles.innerElem} ${styles.innerElemThree}`}></div>
        </div>
    );
};
