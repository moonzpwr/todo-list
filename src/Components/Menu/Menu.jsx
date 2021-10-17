import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import {AppBar, Toolbar, Button } from '@mui/material'
import styles from './Menu.module.css'



export default function Menu() {
  return (
    <AppBar position="static">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}>
        <Toolbar variant="dense" >
          <div>
          <ul className={styles.mainMenu}>
              <li><Link to='/form'><Button variant="contained">Create task</Button></Link></li>
              <li><Link to="/list"><Button variant="contained">Task list</Button></Link></li>
          </ul>
          </div>
        </Toolbar>
      </CSSTransition>
    </AppBar>
   
  );
}