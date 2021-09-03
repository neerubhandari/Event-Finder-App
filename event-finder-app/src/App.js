import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Protectedrouting from './Components/Protectedrouting'
import Router from './Router';
import Loginpage from './Login/Login';
import NotFound from './Components/Not Found/Notfound';
import Signup from './Login/Signup';
function App() {
  const Login = useSelector((state) => state.loginReducer);
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Loginpage} />
        <Route path="/signup" component={Signup} />
        <Protectedrouting path="/" Login={Login} component={Router} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
