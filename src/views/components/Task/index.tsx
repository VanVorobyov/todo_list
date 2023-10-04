import React from 'react';

import styles from './index.module.scss';

export const Task: React.FC = () => {
  return (
    <>
      <form
        className={styles.form}
        action="#"
        method="post"
      >
        <label htmlFor="checkbox">
          <input
            className={styles.form__input_checkbox}
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
        </label>
        <label htmlFor="name">
          <input
            className={styles.form__input_name}
            type="text"
            name="name"
            id="name"
          />
        </label>
        <button
          className={styles.form__button_edit}
          type="submit"
        ></button>
        <button
          className={styles.form__button_delete}
          type="submit"
        ></button>
      </form>
    </>
  );
};
