import styles from "./Checkbox.module.css";

type CheckboxProps = {
  hasChecked: boolean;
  onCheck: () => void;
};

export function Checkbox({ hasChecked, onCheck }: CheckboxProps) {
  function handleClickCheckbox() {
    onCheck();
  }

  return (
    <>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={hasChecked}
          onChange={handleClickCheckbox}
        />
        <span className={styles.checkmark}></span>
      </label>
    </>
  );
}
