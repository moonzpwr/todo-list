import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames={styles}>
      <div>
          <ul className={styles.mainMenu}>
              <li><Link to='/form'>Create todo</Link></li>
              <li><Link to="/list">Todos list</Link></li>
              
          </ul>
      </div>
    </CSSTransition>
  );
}