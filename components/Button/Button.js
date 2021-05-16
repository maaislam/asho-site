//import React from 'react';

import styles from '../../styles/Button.module.css';

const ButtonTemplate = ({ colorScheme, text, btnType, clickHandler, type, ...props }) => {
  return (
    <button
      {...props}
      type={type || 'submit'}
      onClick={() => clickHandler()}
      className={`${styles.btnWhite} ${styles.btn}`}
    >
      {props.disabled ? 'Sending...' : text}
    </button>
  );
};
ButtonTemplate.defaultProps = {
  colorScheme: 'white',
  text: 'Click Me',
  btnType: 'normal',
};

export default ButtonTemplate;
