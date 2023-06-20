import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import Newsitem from './components/Newsitem';
function App() {
  return (
    <div style={{backgroundColor:'#198754'}}>
      <NavBar/>
     <News pageSize={20}/>
    </div>
  );
}

export default App;
