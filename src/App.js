import logo from './logo.svg';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';
import './App.css';


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
