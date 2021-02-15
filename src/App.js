import './App.scss';
import './styles/reset.scss';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Characters} from "./components/Characters/Characters";
import {Episodes} from "./components/Episodes/Episodes";
import {Locations} from "./components/Locations/Locations";
import {WatchList} from "./components/WatchList/WatchList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="box-shadow">
          <div className="nav-wrapper amber">
            <a href="" className="brand-logo ml-4">Rick & Morty</a>
            <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/characters" activeClassName="active">Characters</NavLink></li>
              <li><NavLink to="/episodes" activeClassName="active">Episodes</NavLink></li>
              <li><NavLink to="/locations" activeClassName="active">Locations</NavLink></li>
              <li><NavLink to="/watchlist" activeClassName="active">My watch list</NavLink></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/react_app" render={() => {
              return <Redirect to="/home"/>
            }}
          />
          <Route path="/home" component={Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
          <Route path="/watchlist" component={WatchList} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
