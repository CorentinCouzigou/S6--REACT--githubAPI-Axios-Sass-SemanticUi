import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article/index';
import './style.scss';

export default function Main({items}) {
//gestion du text lors des recherches du user
  let text = 'Aucun résultat trouvé';
  if (items.length === 1){
  text = 'La recherche a donné 1 résultat';
  }
  else if (items.length > 1) {
    text = `La recherche a donnée ${items.length} résultats`;
  }

//return du JSX 
  return (
    <div className="main__container">
      <div className="result__container">
        <div className="result__txt">{text}</div>
      </div>
      <Article items={items} />
    </div>

  );
}
Main.propTypes = {
  items:PropTypes.array.isRequired,
};
