import styles from './ProgressLine.module.css'


export const ProgressLine = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderLine}></div>
    </div>
  );
};
