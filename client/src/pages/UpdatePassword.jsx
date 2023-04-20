import React from 'react'
import { useState } from 'react'
import { updatePassword } from '../apiCalls/user'
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {

    //const { oldPassword, setOldPassword } = useContext(UserContext)
    const navigate = useNavigate()

    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password does not match")
            return
        }
        const data = {
            password: oldPassword,
            newPassword: password
        }
        const response = await updatePassword(data);
        if (response.status === 200) {
            alert("Password Updated Successfully")
            navigate("/user/profile")
        }
        else {
            alert(response.response.data.msg)
        }
    }
    return (
        <div className='w-1/4 m-auto text-center'>
            <h1 className='text-3xl my-3 font-bold'>Update Password</h1>
            <form onSubmit={submitHandler}>

                <div className='mb-3'>
                    <input
                        type='password'
                        placeholder='Enter old Password...'
                        className='focus:outline-none border-none p-2 rounded w-full'
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}

                    />
                </div>
                <div className='mb-3'>
                    <input
                        type='password'
                        placeholder='Enter New Password...'
                        className='focus:outline-none border-none p-2 rounded w-full'
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                    />
                </div>
                <div className='mb-3'>
                    <input
                        type='password'
                        placeholder='Enter Confirm New Password...'
                        className='focus:outline-none border-none p-2 rounded w-full'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}

                    />
                </div>
                <button
                    type='sumbit'
                    className='bg-black text-white w-full py-2 rounded'>Update Password</button>

            </form>

        </div>
    )
}

export default UpdatePassword