import './App.css';
import Classes from './components/Classes'
import CreateClass from './components/CreateClass'
import About from './components/About'
import StudentsClass from './components/StudentsClass'
import CreateStudent from './components/CreateStudent'
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App">
        <Navbar/>
          <Route exact path='/' component={Classes} />
          <Route exact path='/createclass' component={CreateClass} />
          <Route exact path='/createstudent' component={CreateStudent} />
          <Route exact path='/about' component={About} />
          <Route exact path='/class/:class_id' component={StudentsClass} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
