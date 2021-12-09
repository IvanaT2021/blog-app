import "./App.css";
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {Route,Switch} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'
function App() {
  return (
    <>
    <Switch>
    <Route exact path="/">
    <div className="App">
      <Hero/>
      <Main/>
      <Footer/>
    </div>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
     <Route path="/contact">
      <Contact/>
    </Route> 
    <Route path="*">
    <NoMatch/>
  </Route>
  </Switch>
  </>
  );
}

export default App;
