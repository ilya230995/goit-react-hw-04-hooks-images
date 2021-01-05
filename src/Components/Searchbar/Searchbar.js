import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState(null);
  const searchbarHandler = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const submitHandler = e => {
    e.preventDefault();
    onSubmit(inputValue);

    setInputValue(null);
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={submitHandler}>
        <button type="submit" className={s.SearchFormBbutton}>
          <span className="SearchForm-button-label">
            <FaSearch />
          </span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={searchbarHandler}
        />
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
