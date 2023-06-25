
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import News from './components/News';
import { HashRouter , Route, Routes } from 'react-router-dom';
function App() {

  
  return (
    <HashRouter basename='/'>
    <div >
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<News key="general" pageSize={20} country="in" category="general"/> }>  </Route>
      <Route exact path='/about' element={<h1 style={{marginTop:'100px',color:'yellow',margin:'100px'}}>{<About/>}</h1>} >  </Route>
      <Route exact path='/sports' element={<News key="sports" pageSize={20} country="in" category="sports"/> }>  </Route>
      <Route exact path='/business' element={<News key="business" pageSize={20} country="in" category="business"/> }>  </Route>
      <Route exact path='/entertainment' element={<News key="entertainment" pageSize={20} country="in" category="entertainment"/> }>  </Route>
      <Route exact path='/health' element={<News key="health" pageSize={20} country="in" category="health"/> }>  </Route>
      <Route exact path='/science' element={<News  key="science" pageSize={20} country="in" category="science"/> }>  </Route>
      <Route exact path='/technology' element={<News key="technology" pageSize={20} country="in" category="technology"/> }>  </Route>
      {/* <Route path='/about' element={<News pageSize={20} country="in" category="technology"/> }>  </Route> */}

      </Routes>
     
    </div>
    </HashRouter>
  );
}

export default App;
