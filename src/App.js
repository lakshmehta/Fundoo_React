
import './App.css';
import Login from './Components/Login/login';
import Register from './Components/Resgistration/register';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard';
import ProtectedRoute from './Components/ProtectedRoute/protected' 
import AuthRoute from './Components/ProtectedRoute/auth';



function App() {
  return (
   <BrowserRouter>
        <Switch>
          <AuthRoute exact path="/" component={Login}/>
          <AuthRoute exact path="/register" component={Register}/>
          <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
   </BrowserRouter>

  );
}

export default App;
