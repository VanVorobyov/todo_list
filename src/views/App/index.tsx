import React from 'react';

import styles from '../App/index.module.scss';
import { СreateTaskForm } from '../components/СreateTaskForm';
import { TaskList } from '../components/TaskList';

export const App: React.FC = () => {
  return (
    <>
      <article className={styles.todolist}>
        <h1 className={styles.todolist__title}>To Do App</h1>
        <section className={styles.todolist__section}>
          <СreateTaskForm />
        </section>
        <section className={styles.todolist__section}>
          <TaskList />
        </section>
      </article>
    </>
  );
};
