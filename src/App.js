import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/Faq'
import Services from './pages/Services.js'
// import Partners from './pages/Partners.js'
import Contact from './pages/Contact'
import Footer from './components/FooterAlt'
import ScrollToTop from './components/scrollToTop'
import NoMatch from './pages/NoMatch'
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
  return (
  <>
    
    <ScrollToTop/>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/FAQ' component={FAQ} />
      <Route exact path='/Services' component={Services} />
      {/* <Route exact path='/Partners' component={Partners} /> */}
      <Route component={NoMatch} />
     </Switch>
    <Footer/>
 </>
  );
}

export default App;

