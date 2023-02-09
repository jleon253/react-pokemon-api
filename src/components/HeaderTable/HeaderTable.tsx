import { COLUMNS_TABLE } from "../../constants";

import styles from './HeaderTable.module.scss';

export const HeaderTable = (
  { inRow = false }
  :
  { inRow?: boolean}
) => {
  return (
    <div className={inRow ? styles.headerTableContainerInRow : styles.headerTableContainer}>
      {
        Object.values(COLUMNS_TABLE).map((column, index) => (
          <span key={index} className={`${styles.headerTableColumn} ${styles.headerTableText}`}>{ column }</span>
        ))
      }
    </div>
  );
};