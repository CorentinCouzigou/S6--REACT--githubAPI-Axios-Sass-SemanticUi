import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Article({items}) {
  const listItems = items.map((element) => {
//boucle sur tous chaque element et création d'un article
    return (
      <div key={element.id} className="article__container">
        <img className="article__image" src={element.owner.avatar_url}></img>
        <div className="article__container__txt">
          <h2 className="article__container__txt__title">{element.full_name}</h2>
          <span className="article__container__txt__span">{element.name}</span>
          <p className="article__container__txt__paragraphe">{element.description}</p>
        </div>
     </div>
    )
  });

//return JSX
  return (
    <div className="articles__container">
      {listItems}
    </div>
  );
}
Article.propTypes = {
  items:PropTypes.array.isRequired,
};

