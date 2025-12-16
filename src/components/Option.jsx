import styles from "../screens/gamescreen.module.css";

function Option({ letter, value, selected, onSelect }) {
  return (
    <div
      className={`${styles.option} ${selected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <div className={styles.optLetter}>{letter}</div>
      <p
        className={styles.optValue}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}

export default Option;
