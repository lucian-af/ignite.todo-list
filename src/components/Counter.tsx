import styles from "./Counter.module.css";

type CounterProps = {
  value: number;
  total?: number;
};

export function Counter({ value, total = 0 }: CounterProps) {
  return (
    <div className={styles.counter}>
      <p>{value}</p>
      <p hidden={total <= 0}>de {total}</p>
    </div>
  );
}
