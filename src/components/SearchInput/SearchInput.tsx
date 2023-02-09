import { FaSearch, FaTimes} from 'react-icons/fa'
import styles from './SearchInput.module.scss';

export const SearchInput = () => {
  return (
    <section className={styles.searchInputContainer}>
      <span className={styles.searchInputAction}>
        <FaSearch />
      </span>
      <input placeholder="Find a Pokemon" className={styles.searchInputText} />
      <span className={styles.searchInputAction}>
        <FaTimes />
      </span>
    </section>
  );
};