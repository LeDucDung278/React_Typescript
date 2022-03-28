import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'



type Inputs ={
    name: string,
    email: string,
    password: string
}


const SignUp = () => {
    const { register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs>= (data) =>{
        signup(data)
        navigate('/signin')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputUserName1" className="form-label">User Name</label>
                <input type="text" {...register('name')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" {...register('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1" />
            </div>
            <button className="btn btn-primary">Sign up</button>
        </form>
    </div>
  )
}

export default SignUp