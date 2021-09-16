  
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import DoesNotExist from './pages/DoesNotExist.js';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/*" component={DoesNotExist} />
      </Switch>

    </Router>

  );
}

export default App;
