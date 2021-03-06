
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import uuid from 'react-uuid';
import MenuElems from './MenuElems';
import Button from '@mui/material/Button';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

//import Button from 'react-native';
//import 'react-native';

//COLORES: primary, secondary, error, success, warning, default, inherit, info

function App() {
  return (
    <Router>
      <nav>
        {MenuElems.map((item)=>{
          if (!item.defaultRoute){
            return (<Button variant="contained" className={item.class} key={uuid()}> <Link to={item.path}>{item.text}</Link></Button>);
}} )}

      </nav>
        {MenuElems.map(function showRoutes(item){
        return (<Route path={item.path} key={uuid()} exact={item.defaultRoute}>{item.componentSite}</Route>);
      })}

        <Switch>
          {/*<Route exact path="/" component={Login} />*/}
          {/*<Route path="/home" component={Home} />*/}
        </Switch>

    </Router>
  );
} 

export default App;

