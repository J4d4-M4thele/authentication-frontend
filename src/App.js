import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
//importing components
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path='/register' component={Register} />
       <Route exact path='/login' component={Login}/>
       <Route exact path='/' component={Home}/>
     </Switch>
    </BrowserRouter>
  );
};

export default App;
