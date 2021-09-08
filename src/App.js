

import LoginForm from "./login";
// import Welcome from './welcome';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Prac from './resp/resp'
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
function App() {
  return (
   <div>
     {/* <Prac/> */}
   
    <Router>
      <Switch>
        <Route path="/" exact component={Sidebar}/>
        <Route path="/login" exact component={LoginForm}/>
        <Route path="/Dashboard" exact component={Dashboard}/>
      </Switch>
    </Router>
 
   </div>
   
  );
}

export default App;
