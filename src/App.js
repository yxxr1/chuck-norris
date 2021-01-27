import React from 'react'
import './App.css';
import {Provider} from 'react-redux'

import AddButton from './components/AddButton'
import CardList from './components/CardList'

import store from './store'

function App() {


  return (
    <Provider store={store} >
      <div className={"list"}>
          <AddButton />
          <CardList />
      </div>
    </Provider>
  );
}

export default App;
