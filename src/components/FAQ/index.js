import React from 'react';
import './style.scss';

const Faq = () => {
return(
  <div className="faq__container">
    <h1 className="faq__title">FAQ</h1>
    <h2>A quoi ça sert ?</h2>
    <p>Cette application permet de trouver une liste de depôts GitHub pour une critère donné.</p>
    <h2>Comment faire une recherche?</h2>
    <p>Sur la plage rechercen complétez le champ de recherche et valider la recherche.</p>
    <h2>Puis-je chercher n'importe quel terme?</h2>
    <p>Oui, c'est fou.</p>
  </div>
)
};
export default Faq;
