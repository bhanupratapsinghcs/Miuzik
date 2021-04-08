import AppBar from './Components/AppBar';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import RecommendedVideos from './Components/RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_page">
        
        <Sidebar />

        <RecommendedVideos />
        
        {/* <AppBar></AppBar> */}
      
      </div>
    </div>
  );
}

export default App;
