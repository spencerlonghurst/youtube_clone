import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/search/:searchTerm' element={
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>
          }/>
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
