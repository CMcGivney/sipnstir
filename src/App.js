import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css'

const Home = lazy(() => import('./components/Home'))
const Contact = lazy(() => import('./components/Contact'))
const FAQ = lazy(() => import('./components/Faq'))
const Navi = lazy(() => import('./components/NavBar'))
const ScrollToTop = lazy(() => import('./components/scrollToTop'))
const Footer = lazy(() => import('./components/FooterAlt'))
const NoMatch = lazy(() => import('./components/NoMatch'))

function App() {
  return (
  <Router>
   <Suspense fallback={<div>Loading...</div>}>
    <Navi/>
    <ScrollToTop/>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/FAQ' component={FAQ} />
      <Route component={NoMatch} />
     </Switch>
    <Footer/>
   </Suspense>
 </Router>
  );
}

export default App;

