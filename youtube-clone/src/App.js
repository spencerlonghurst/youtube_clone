import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/search/:searchTerm' />
          <Route path='/' element={
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
