import React from 'react';

import styles from '../App/index.module.scss';
import { СreateTaskForm } from '../components/СreateTaskForm';

export const App: React.FC = () => {
  return (
    <>
      <article className={styles.todolist}>
        <h1 className={styles.todolist__title}>To Do App</h1>
        <section className={styles.todolist__section}></section>
        <СreateTaskForm />
        <section className={styles.todolist__section}></section>
      </article>
    </>
  );
};
