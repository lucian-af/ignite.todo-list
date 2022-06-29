import { ClipboardText } from "phosphor-react";
import { useState } from "react";
import styles from "./App.module.css";
import { AddTask } from "./components/AddTask";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import "./global.css";

type Task = {
  id: number;
  description: string;
  hasChecked: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskCreated, setTaskCreated] = useState<number>(0);
  const [taskCompleted, setTaskCompleted] = useState<number>(0);

  function handleAddTask(description: string) {
    const newId = Number((Math.random() * (1000 - 1) + 1).toFixed(0));
    const newTask: Task = {
      id: newId,
      description,
      hasChecked: false
    };
    setTasks(state => [...state, newTask]);
    setTaskCreated(state => state + 1);
  }

  function markTaskAsComplete(id: number) {
    const task = tasks.find(task => task.id === id);
    const newTasks = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            hasChecked: !task.hasChecked
          }
        : task
    );

    setTasks(newTasks);

    const incrementDecrement = -(task?.hasChecked ? 1 : -1);
    setTaskCompleted(state => state + incrementDecrement);
  }

  function deleteTask(id: number) {
    const taskDelete = tasks.find(t => t.id === id);

    const taskRemaning = tasks.filter(task => task.id !== id);

    setTasks(taskRemaning);
    setTaskCreated(state => state - 1);

    if (taskDelete?.hasChecked) setTaskCompleted(state => state - 1);
  }

  const hideIfNoTask = tasks.length === 0;
  return (
    <>
      <Header />

      <main className={styles.container}>
        <article className={styles.newTask}>
          <AddTask createTask={description => handleAddTask(description)} />
        </article>

        <article className={styles.taskList}>
          <span>
            Tarefas criadas
            <Counter value={taskCreated} />
          </span>
          <span>
            Concluídas
            <Counter
              value={taskCompleted}
              total={taskCreated}
            />
          </span>
        </article>
        <div className={styles.tasks}>
          <div className={hideIfNoTask ? styles.noTasks : styles.hidden}>
            <ClipboardText
              size={56}
              weight="thin"
            />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                hasChecked={task.hasChecked}
                taskCompleted={() => markTaskAsComplete(task.id)}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
