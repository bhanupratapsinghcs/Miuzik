import AppBar from './Components/AppBar';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import RecommendedVideos from './ComponentsRecommendedVideos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_page">
        
        <Sidebar />

        <recommendedVideos />
        
        {/* <AppBar></AppBar> */}
      
      </div>
    </div>
  );
}

export default App;
