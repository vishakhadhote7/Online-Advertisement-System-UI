import './App.css';
import {EditAdvertiseComponent} from './components/edit_advertise_by_name';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {HomePageComponent} from './components/home_page';
import {GetAdvertiseListComponent} from './components/read_advertise_list.js';
function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
      {/* <Link to="/editadvertise">Edit Advertise</Link> &nbsp;&nbsp;&nbsp; */}
      <Link to="/showlist">Read all Advertises</Link> &nbsp;&nbsp;&nbsp;
      <hr></hr>

      <Switch>
        <Route exact path="/">
          <HomePageComponent></HomePageComponent>
        </Route>
        <Route path="/editadvertise">
          <EditAdvertiseComponent></EditAdvertiseComponent>
        </Route>
        <Route path="/showlist">
          <GetAdvertiseListComponent></GetAdvertiseListComponent>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
