
import { useState } from 'react';
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux';
import {addTask} from '../../redux/actions';
import styles from './TodoForm.module.css';

const minTodoLength = 1

function TodoForm(prop) {
  const [inputValue, setInputValue] = useState('')
  
  const handleInputChange = (e) => {
    setInputValue( e.target.value)
  }
  
  const handleAddTask = (e) => {
    e.preventDefault()
    if (inputValue.length > minTodoLength) {
      prop.addTask(new Date().getTime(), inputValue)
      setInputValue('')
    }    
   }

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={styles}>
      <form className={styles.container}>
        <label>To do:
          <textarea type="text-area" value={inputValue} onChange={handleInputChange}
          />
        </label>
        <button type='submit' onClick={handleAddTask}>Add</button>
      </form>
    </CSSTransition>
  );
}

export default connect(undefined, {addTask})(TodoForm)