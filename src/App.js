import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import './App.css'
import Home from './components/Home'
import FAQ from './components/Faq'
import Contact from './components/Contact'
import Navi from './components/NavBar'
import Footer from './components/FooterAlt'
import ScrollToTop from './components/scrollToTop'
import NoMatch from './components/NoMatch'
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga'




function App() {
  ReactGA.initialize('G-TTD6VHM4G0');

const tagManagerArgs = {
  gtmId: 'GTM-MPJMMFW'
};

TagManager.initialize(tagManagerArgs)

  window.dataLayer.push({
    event: 'event',
    eventProps: {
      category: "pageview",
      action: "getQuote",
      label: "button push",
      value: 1
  }
  });
  const history = useHistory();

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
   }
  );
  console.log(history.location.pathname)
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

