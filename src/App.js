
import './App.css';
import Login from './Components/Login/login';
import Register from './Components/Resgistration/register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




function App() {
  return (
   <BrowserRouter>
       <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </div>
   </BrowserRouter>

  );
}

export default App;
