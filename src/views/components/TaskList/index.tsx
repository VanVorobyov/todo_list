import React from 'react';

import styles from './index.module.scss';

import { Task } from '../Task';

export const TaskList: React.FC = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </li>
      </ul>
    </>
  );
};
