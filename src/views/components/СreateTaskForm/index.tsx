import { SetStateAction, useState } from 'react';

import styles from './index.module.scss';

export const СreateTaskForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSetQuery = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label htmlFor="create-task"></label>
      <input
        type="text"
        id="create-task"
        name="create-task"
        value={inputValue}
        onChange={handleSetQuery}
        className={styles.form__input}
        placeholder="Добавить задачу"
        autoComplete="none"
      />
      <button className={styles.form__button}></button>
    </form>
  );
};
