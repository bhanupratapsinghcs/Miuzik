import Header from './Components/Header';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Library from './Pages/Library';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/Pages/Home' exact component={Home}></Route>
          <Route path='/Pages/Explore' component={Explore}></Route>
          <Route path='/Pages/Library' component={Library}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
