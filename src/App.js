import './App.css';
import TodoApp from './components/todoApp'
import './components/Todo.css';
import Login from './components/Login'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

function App() {
return(
  <div>
  <Router>
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route path='/todoApp' component={TodoApp}></Route>
    </Switch>
  </Router>
  </div>
)
}


export default App;
