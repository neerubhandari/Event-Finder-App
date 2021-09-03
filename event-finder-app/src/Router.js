import Navbar from './Components/Navbar.js/Navbar';
import LandingPage from './Components/Home/LandingPage';
import { Route, Switch } from 'react-router-dom'
import AddEvent from './Components/AddEvent/AddEvent';
import { useSelector } from 'react-redux'
import EditEvent from './Components/AddEvent/EditEvent';


const Router=() =>{
  const Login = useSelector((state) => state.loginReducer);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/homepage" component={LandingPage} />
        <Route path="/add-event" component={AddEvent} />
        <Route path="/edit/:id" component={EditEvent} />
      </Switch>
    </div>
  );
}

export default Router;
