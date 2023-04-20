import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getTodo } from '../apiCalls/todo'

const ViewTodo = () => {

    const [todo, setTodo] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTodo(id)
            if (response.status === 200) {
                setTodo(response.data.todo)
            } else {
                alert(response.response.data.msg)
            }
        }
        fetchData();
    }, [])

    return (
        <div className='text-center bg-white w-3/4 m-auto rounded py-3 mt-3'>
            {todo && <div>
                <h1 className='test-3xl mt-4 font-bold'> Title: {todo.title}</h1>
                <h2 className='mt-3 text-2x1'>Completed: {todo.completed ? "Completed" : "Not Completed"}</h2>
                <p className='mt-3'>Description: {todo.description}</p>
                <p className='mt-3'>Created: {todo.createdAt}</p>
                <p className='mt-3'>Updated: {todo.updatedAt}</p>
            </div>}

        </div>
    )
}

export default ViewTodo