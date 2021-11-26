import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllThreads from './compentents/showThreads';
import AddThreads from './compentents/addThread';
import EditThread from './compentents/editThreads';
import OwnedThreads from './compentents/owenedThreads';
import Home from './compentents/home';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path = '/'>
            <Home    />
          </Route>
          <Route  exact path = "/allThreads">
            <AllThreads  />
          </Route>
          <Route  exact path = "/ownedThreads">
            <OwnedThreads  />
          </Route>
          <Route exact path = '/addThreads'>
            <AddThreads  />
          </Route>
          <Route exact path = '/editThreads/:id'>
            <EditThread    />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
