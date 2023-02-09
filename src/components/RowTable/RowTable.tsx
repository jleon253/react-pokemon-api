import { ReactNode } from "react";
import { LABELS } from "../../constants";
import { useMatchMedia } from "../../hooks";
import { Pokemon } from "../../ts";
import { HeaderTable } from "../HeaderTable";

import styles from './RowTable.module.scss';

export const RowTable = (
  { element, children }
  :
  { element: Pokemon, children?: ReactNode }
) => {

  const { isMatchMedia } = useMatchMedia();

  return (
    <div className={styles.rowTableContainer}>
      {
        isMatchMedia && (<HeaderTable inRow={isMatchMedia} />)
      }
      <div className={styles.rowTableColumns}>
        <div className={styles.rowTableColumn}>
          <span className={`${styles.rowTableText} ${styles.rowTableText__name}`}>
            <b>{ element.name }</b>
          </span>
        </div>
        <div className={styles.rowTableColumn}>
          <img src={element.image} />
        </div>
        <div className={styles.rowTableColumn}>
          <span className={styles.rowTableText}>{`${element.hp} ${LABELS.POINTS}`}</span>
        </div>
        <div className={styles.rowTableColumn}>
          <span className={styles.rowTableText}>{`${element.attack} ${LABELS.POINTS}`}</span>
        </div>
        <div className={styles.rowTableColumn}>
          <span className={styles.rowTableText}>{`${element.defense} ${LABELS.POINTS}`}</span>
        </div>
        <div className={`${styles.rowTableColumn} ${styles.rowTableActions}`}>
          { children }
        </div>
      </div>
    </div>
  );
};