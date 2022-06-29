import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

type TaskProps = {
  id: number;
  description: string;
  hasChecked: boolean;
  taskCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
};

export function Task({ id, description, hasChecked, taskCompleted, deleteTask }: TaskProps) {
  function handleCheckTask() {
    taskCompleted(id);
  }

  function handleDeleteTask(id: number) {
    deleteTask(id);
  }

  return (
    <div className={styles.task}>
      <Checkbox
        hasChecked={hasChecked}
        onCheck={handleCheckTask}
      />
      <span className={hasChecked ? styles.checked : undefined}>{description}</span>

      <div className={styles.deleteTask}>
        <button onClick={() => handleDeleteTask(id)}>
          <Trash
            size={16}
            alt="remover tarefa"
          />
        </button>
      </div>
    </div>
  );
}
