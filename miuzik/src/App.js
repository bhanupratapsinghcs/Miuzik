import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Library from './Pages/Library';
import Login from './Auth/Login'
import useAuth from './Auth/useAuth'
import Player from './Components/Player'
import { useState } from 'react';



const hash = new URLSearchParams(window.location.search).get('code')

function App() {
  // const [code, setCode] = useState(null);
  const accessToken = useAuth(hash);
  const [trackResults, setTrackResults] = useState()

  const setTrack = (res) => {
    setTrackResults(res)
  }

  // useEffect(() => {
  //   if (hash) {
  //     setCode(hash)
  //   }
  // }, [])

  return (
    hash ?
      <Router>
        <div className="App">
          <Header code={accessToken} />
          <Switch>
            <Route exact path='/'><Home code={{ code: accessToken, setTrack: { setTrack } }} /></Route>
            <Route exact path='/Pages/Home'><Home code={{ code: accessToken, setTrack: { setTrack } }}></Home></Route>
            <Route path='/Pages/Explore'> <Explore code={{ code: accessToken, setTrack: { setTrack } }} /></Route>
            <Route path='/Pages/Library' component={Library}></Route>
          </Switch>
          <div style={{ "position": "fixed", "bottom": "0px", "width": "100%" }}>
            <Player accessToken={accessToken} trackResults={trackResults} />
          </div>
        </div>
      </Router> :
      <Login></Login>
  );
}

export default App;
