import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { removeTask, editTask, asynkInitTodos } from '../../redux/actions';
import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.css'

const minTodoLength = 1

function TodosList({ removeTask: remove, editTask: edit, asynkInitTodos: asynkInit, tasks }) {
    const handleRemoveTask = (id) => {
        remove(id)
    }

    const handleEditTask = (id, title) => {
        if (title.length > minTodoLength) {
            edit(id, title)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('persist:todos')) {
            asynkInit()
        }
    }, [])

    return (
    <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}>
        <>
            <h2 className={styles.header}>Todo list</h2>
            <TransitionGroup component='ul' className={styles.listContainer}>
                {tasks.map(({ id, title } = {}) => {
                    return (
                        <CSSTransition key={id} timeout={500} classNames={styles}>
                            <TodoItem
                                key={id}
                                id={id}
                                text={title}
                                onClickDel={handleRemoveTask}
                                apllyChanges={handleEditTask}
                            />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </>
    </CSSTransition>
  );
}

TodosList.propTypes = {
    removeTask: PropTypes.func,
    editTask:PropTypes.func,
    asynkInitTodos: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }))
};


export default connect(state => ({
    tasks: state.tasks
}), { removeTask, editTask, asynkInitTodos })(TodosList)

