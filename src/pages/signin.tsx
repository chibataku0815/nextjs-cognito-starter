import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IFormInputs {
  firstName: string
  age: number
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <div className="container minH-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input className="form-control" {...register('firstName')} />
              <p className="text-danger">{errors.firstName?.message}</p>
            </div>
            <div className="form-group">
              <input className="form-control" {...register('age')} />
            </div>
            <p className="text-danger">{errors.age?.message}</p>

            <button type="submit" className="btn btn-primary">
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
