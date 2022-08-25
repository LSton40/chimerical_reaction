import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Portfolio from './components/Portfolio';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
          <div>
            <Switch>
              <Route path="/">
                <Purpose />    
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
