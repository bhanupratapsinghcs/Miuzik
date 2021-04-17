import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Library from './Pages/Library';
import Login from './Auth/Login'
import useAuth from './Auth/useAuth'
import Block from './Components/BlockList/Block'
import BlockList from './Components/BlockList/BlockList'

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  const accessToken = useAuth(code);
  return (
    code ?
      <Router>
        <div className="App">
          <Header />
          {/* <Block /> */}
          <BlockList code={code}></BlockList>
          <Switch>
            <Route path='/' exact component={Home} ></Route>
            <Route path='/Pages/Home' exact component={Home} ></Route>
            <Route path='/Pages/Explore' component={Explore}></Route>
            <Route path='/Pages/Library' component={Library}></Route>
          </Switch>

        </div>
      </Router> :
      <Login></Login>
  );
}

export default App;
