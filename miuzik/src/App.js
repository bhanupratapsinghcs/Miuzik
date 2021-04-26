import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Library from './Pages/Library';
import Login from './Auth/Login'
import useAuth from './Auth/useAuth'
import Player from './Components/Player'



const hash = new URLSearchParams(window.location.search).get('code')

function App() {
  // const [code, setCode] = useState(null);
  const accessToken = useAuth(hash);

  // useEffect(() => {
  //   if (hash) {
  //     setCode(hash)
  //   }
  // }, [])

  return (
    hash ?
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'><Home code={accessToken} /></Route>
            <Route exact path='/Pages/Home'><Home code={accessToken}></Home></Route>
            <Route path='/Pages/Explore'> <Explore accessToken={accessToken} /></Route>
            <Route path='/Pages/Library' component={Library}></Route>
          </Switch>
          <div>
            <Player accessToken={accessToken} />
          </div>
        </div>
      </Router> :
      <Login></Login>
  );
}

export default App;
