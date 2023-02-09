import { RxPlusCircled } from 'react-icons/rx';

import styles from './FloatButton.module.scss';

export const FloatButton = (
  { action }
  :
  { action: Function}
) => {
  return (
    <span className={styles.floatButton} onClick={() => action()}>
      <RxPlusCircled size={50} color='red' />
    </span>
  );
};