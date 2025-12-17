import React, { useState } from 'react'
import './Todo.css'
import axios from 'axios'
const Todo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function sigup() {
        axios.post('http://localhost:5000/api/post', { name, email, password })
            .then(() => {
                alert("user has been created")
            })
            .catch(() => {
                alert("not created")
            })
    }


    return (
        <div className='todo-page'>
            <h1 className='heading'>
                Todo Sign up
            </h1>
            <div className='todo-container'>
                <div className='todo'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='button-container'>
                        <button className='button' onClick={sigup}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo