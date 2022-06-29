import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddTask.module.css";

type AddTask = {
  createTask: (description: string) => void;
};

export function AddTask({ createTask }: AddTask) {
  const [newTask, setNewTask] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    createTask(newTask);
    setNewTask("");
  }

  function handleChangeDescription(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div className={styles.addTask}>
      <form onSubmit={handleCreateTask}>
        <div className={styles.formInputs}>
          <input
            type="text"
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            onChange={handleChangeDescription}
          />
          <button
            type="submit"
            disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
