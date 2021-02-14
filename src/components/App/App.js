import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Lesson, ChaptersPage} from '../../pages/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'
          render={({history}) => (
            <ChaptersPage history={history} />
          )}
        />
        <Route path='/lesson'>
          <Lesson />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
