import styles from "./style.module.scss";

export const Input = ({ onButtonClick, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Repositorie Name"
        autoComplete="off"
      />
      <button onClick={onButtonClick}>Search</button>
    </div>
  );
};
