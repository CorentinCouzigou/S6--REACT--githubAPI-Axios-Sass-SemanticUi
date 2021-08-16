import React, {useState, useEffect} from 'react';
import Header from '../Header/index';
import Form from '../Form/index';
import Main from '../Main/index';
import FAQ from '../FAQ/index';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import './styles.scss';

const App = () => {
//mes données utilisées, tableau vide au démarrage
const [itemsData , setData] = useState([]);
//state de la recherche du user
const [search , setSearch] = useState('');

//fonction pour trouver les datas en lien avec la recherche du user
  const getFilterSearch = () => {
    const filterData = itemsData.filter((element) => {
      const loweredName = element.name.toLowerCase();
      const loweredSearch = search.toLowerCase();
      return loweredName.includes(loweredSearch);
    });
    return filterData;
  };

//demande à l'api lorsque l'utilisateur demande une recherche
  useEffect (()=> {
    {search.length > 0 &&
      axios.get(`https://api.github.com/search/repositories?q=${search}`)
        .then((response) => {
          const {items} = response.data;
          setData(items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [search]);


//return JSX avec Props
  return (
  <div className="app__container">
    <Header />
      <Switch>
        <Route
          path='/search'>
          <Form setSearch={setSearch} />
          <Main items={getFilterSearch()} />
        </Route>
        <Route path='/FAQ'>
          <FAQ />
        </Route>
      </Switch>
  </div>
)
};
export default App;
