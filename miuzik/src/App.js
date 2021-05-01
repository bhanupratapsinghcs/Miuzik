import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Library from './Pages/Library';
import Login from './Auth/Login'
import useAuth from './Auth/useAuth'
import Player from './Components/Player'
import Details from './Pages/TrackDetails'
import { useState } from 'react';



const hash = new URLSearchParams(window.location.search).get('code')

function App() {
  // const [code, setCode] = useState(null);
  const accessToken = useAuth(hash);
  const [trackResults, setTrackResults] = useState()
  const [trackDetails, setTrackDetails] = useState()
  const setTrack = (res) => {
    if (!res.uri) return;
    setTrackResults(res.uri)
    setTrackDetails(res)
  }

  return (
    hash ?
      <Router>
        <div className="App">
          <Header code={accessToken} setTrack={setTrack} />
          <Switch>
            <Route exact path='/'><Home code={{ code: accessToken, setTrack: { setTrack } }} /></Route>
            <Route exact path='/Pages/Home'><Home code={{ code: accessToken, setTrack: { setTrack } }}></Home></Route>
            <Route path='/Pages/Explore'> <Explore code={{ code: accessToken, setTrack: { setTrack } }} /></Route>
            <Route path='/Pages/Library'><Library code={{ code: accessToken, setTrack: { setTrack } }} ></Library></Route>
            <Route path='/Pages/Details'><Details code={{ trackDetails: trackDetails }} ></Details></Route>
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
