import { useState } from 'react'
import { useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
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
            <Card sx={{ width: 500}}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {isEdit
                            ? <textarea
                                value={inputValue}
                                onChange={handleInputChange}
                                className={styles.editinput} 
                            />
                            : <p>{text}</p>
                        }
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="delete"onClick={() => onClickDel(id)}>
                        <DeleteIcon />
                    </IconButton>
                    {isEdit
                        ? <IconButton aria-label="accept"
                            className={styles.changeBtn}
                            onClick={() => {
                                apllyChanges(id, inputValue)
                                setIsEdit(!isEdit)
                            }}
                        >   
                            <DoneIcon/>
                        </IconButton>
                        :<IconButton aria-label="edit"
                            className={styles.changeBtn}
                            onClick={() => setIsEdit(!isEdit)}
                            >
                                <EditIcon />
                        </IconButton>
                    }    
                </CardActions>
            </Card>
        </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number,
    text:PropTypes.string,
    onClickDel: PropTypes.func,
    apllyChanges: PropTypes.func
};
