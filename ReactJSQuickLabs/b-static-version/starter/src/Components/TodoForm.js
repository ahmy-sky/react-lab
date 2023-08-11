import React from 'react'
import DateCreated from './utils/DateCreated'
import { useState } from 'react'
import { event } from 'jquery'
import PropTypes from 'prop-types'

function TodoForm(props) {
    const [todoDescription, setTodoDescription] = useState('')
    const [todoDateCreated, setTodoDateCreated] = useState(null)
    const [todoCompleted, setTodoCompleted] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        props.submitTodo(todoDescription, todoDateCreated, todoCompleted)
        setTodoDescription('')
        setTodoDateCreated(null)
        setTodoCompleted(false)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Description:&nbsp;</label>
            <input 
                className='form-control' 
                name='todoDescription' 
                type='text' 
                placeholder='Todo Description' 
                value={todoDescription} 
                onChange={event => setTodoDescription(event.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Created on:&nbsp;</label>
            <DateCreated updateDateCreated={DateCreated => setTodoDateCreated(DateCreated)}/>
        </div>
        <div className='form-group'>
            <label>Completed:&nbsp;</label>
            <input 
                name='todoCompleted' 
                type='checkbox' 
                checked={todoCompleted} 
                onChange={event => setTodoCompleted(event.target.checked)}
            />
        </div>
        <div className='form-group'>
            <input 
                className={`btn ${!todoDescription ? 'btn-danger' : 'btn-primary'}`}
                type='submit' 
                value='Submit' 
                disabled={!todoDescription}
            />
        </div>
    </form>
  )
}

TodoForm.propTypes = {
    submitTodo: PropTypes.func.isRequired
}

export default TodoForm