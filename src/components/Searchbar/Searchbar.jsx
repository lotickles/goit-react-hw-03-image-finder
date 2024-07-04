import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button
          type="submit"
          className="submit"
          className={css.searchFormButton}
        >
          <FaSearch />
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFromInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
