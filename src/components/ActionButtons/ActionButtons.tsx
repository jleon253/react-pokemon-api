import { CiEdit, CiEraser } from 'react-icons/ci'

import styles from './ActionButtons.module.scss';

export const ActionButtons = (
  { 
    actionPrimary, 
    actionSecondary, 
    areIcons = true,
    txtPrimary = '', 
    txtSecondary = '' 
  }
  :
  { 
    actionPrimary?: (params: any) => any, 
    actionSecondary?: (params: any) => any, 
    areIcons?: boolean,
    txtPrimary?: string, 
    txtSecondary?: string
  }
) => {
  return (
    <>
      <span onClick={actionPrimary} className={!areIcons ? `${styles.actionButtonsNoIcons} ${styles.actionButtonsPrimary}` : ''}>
      {areIcons && <CiEdit size={20} />} {!areIcons && txtPrimary}
      </span>
      <span onClick={actionSecondary} className={!areIcons ? `${styles.actionButtonsNoIcons} ${styles.actionButtonsSecondary}` : ''}>
      {areIcons && <CiEraser size={20} />} {!areIcons && txtSecondary}
      </span>
    </>
  );
};