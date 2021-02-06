import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Lesson, Menu} from '../../pages/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <Menu />
        </Route>
        <Route path='/lesson'>
          <Lesson />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
