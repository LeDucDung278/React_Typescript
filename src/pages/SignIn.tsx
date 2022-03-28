import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signin } from '../api/user'
import { authenticated } from '../utils/localStorage'

type TypeInputs = {
    email: string,
    password: string
}


type Props = {}

const SignIn = () => {
  const { register, handleSubmit, formState: {errors}} = useForm<TypeInputs>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<TypeInputs> = async data => {
    signin(data)

    const { data : user} = await signin(data)
    
    console.log(user);

    authenticated(user, () => {
      navigate('/')
    })

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" {...register('email')}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" {...register('password')}  className="form-control" id="exampleInputPassword1" />
            </div>
            <button className="btn btn-primary">Sign In</button>
        </form>
    </div>
  )
}

export default SignIn