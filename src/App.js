import { Routes, Route } from 'react-router-dom';
import './App.css';
import FilterBar from './components/FilterBar';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      {/* <FilterBar /> */}
      <Routes>
        <Route path='/' element={<MovieList />} />

      </Routes>
    </div>
  );
}

export default App;
