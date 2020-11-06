import React from 'react';
import {Route, Switch, } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import FAQ from './components/Faq'
import Contact from './components/Contact'
import Navi from './components/NavBar'
import Footer from './components/FooterAlt'
import ScrollToTop from './components/scrollToTop'
import NoMatch from './components/NoMatch'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MPJMMFW'
}
TagManager.initialize(tagManagerArgs)


function App() {
  window.dataLayer.push({
    event: 'event',
    eventProps: {
      category: "pageview",
      action: "getQuote",
      label: "push",
      value: null
  }
  });
  return (
  <>
    <Navi/>
    <ScrollToTop/>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/FAQ' component={FAQ} />
      <Route component={NoMatch} />
     </Switch>
    <Footer/>
 </>
  );
}

export default App;

