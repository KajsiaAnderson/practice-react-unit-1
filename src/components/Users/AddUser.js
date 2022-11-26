import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (e) => {
        e.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if (+enteredAge < 1) {
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    return (
        <Card cardClass={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser