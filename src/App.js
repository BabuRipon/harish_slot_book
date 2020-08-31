import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route, Switch}from 'react-router-dom'

import Aux from './hoc/aux';
import Category from './component/category/category';
import Header from './component/header/header';
import SignIn from './component/sign-in/signin';
import SignUp from './component/sign-up/signup';
import SlotBook from './component/slot-book/slotbook';
import Error from './component/error/error'
import Home from './component/home/home';


const App =(props)=>{

  return (
    <Aux>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/category' exact  component={Category} />
            <Route path='/sign-in' component={SignIn}   />
            <Route path='/sign-up' component={SignUp}   />
            <Route path='/slot-book' component={SlotBook} />
            <Route path='/error' component={Error}  />
        </Switch>
      </BrowserRouter>
    </Aux>
  )
}

export default App;
