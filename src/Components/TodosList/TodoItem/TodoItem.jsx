import { useState } from 'react'
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css'


export default function TodoItem({ id, text, onClickDel, apllyChanges }) {
    const [isEdit, setIsEdit] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setInputValue(text)
    }, [text])

     const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <li>
            {isEdit
                ? <input
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.editinput} 
                  />
                : <p>{text}</p>
            }
            {isEdit
                ? <button
                    className={styles.changeBtn}
                    onClick={() => {
                        apllyChanges(id, inputValue)
                        setIsEdit(!isEdit)
                    }}
                  >   
                    Accept
                  </button>
                :
                    <button
                        className={styles.changeBtn}
                        onClick={() => setIsEdit(!isEdit)}
                    >
                        Edit
                    </button>
            }
            <button
                className={styles.deleteBtn}
                onClick={() => onClickDel(id)}>
                Delete
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number,
    text:PropTypes.string,
    onClickDel: PropTypes.func,
    apllyChanges: PropTypes.func
};
