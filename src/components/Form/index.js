import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Form ({setSearch}) {
//fonction pour récuperer la recherche du user avec submit
  const handleForm = (event) => {
    event.preventDefault();
    setSearch(event.target[0].value);
  };
//fonciton pour gérer le onchange, n'est pas utilisé dans cet exercice
  const handleOnChange = (event) => {
  };
  return (
    <div className="form__container">
      <form className="form__submit" onSubmit={handleForm}>
        <div className="form__searchContainer">
        <span className="form__loupe">🔍</span>
        <input className="form__search"
               type="search" 
               placeholder="Rechercher..." 
               onChange={handleOnChange}>
        </input>
        </div>
      </form>
    </div>
  );
}
Form.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
