import { Switch, Route } from 'react-router'
import {CSSTransition} from 'react-transition-group'
import Menu from './Components/Menu/Menu'
import TodoForm from './Components/TodoForm/TodoForm'
import TodosList from './Components/TodosList/TodosList'
import styles from './App.module.css'



export default function App() {
  return (
    <div className={styles.container}>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}>
            <h1>Welcome to ToDo List App!</h1>
          </CSSTransition>
        </Route>
        <Route path="/form" component={TodoForm} />
        <Route path="/list" component={TodosList} />
        <Route><h1>Oops! Please choose one of menu item!</h1></Route>
      </Switch>
    </div>
   
  );
}


