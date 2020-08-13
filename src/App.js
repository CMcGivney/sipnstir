import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Events from './components/Events'
import FAQ from './components/Faq'
import NoMatch from './components/NoMatch'
import Navi from './components/NavBar.js'
import Footer from './components/FooterAlt'
import ScrollToTop from './components/scrollToTop'

import './App.css'

function App() {
  return (
  <>
  
   <Navi/>
   <ScrollToTop/>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Services' component={Services} />
      <Route exact path='/Events' component={Events} />
      <Route exact path='/FAQ' component={FAQ} />
      <Route component={NoMatch} />
     </Switch>
    
   <Footer/>
 </>
  );
}

export default App;

