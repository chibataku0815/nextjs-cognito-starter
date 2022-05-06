import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAuth } from '~/hooks/use-auth'

interface IFormInputs {
  username: string
  password: string
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(8, '8文字以上入力してください').required(),
  })
  .required()

const SignUp = () => {
  const auth = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data: IFormInputs) => {
    console.info(JSON.stringify(data))
    const result = await auth.signUp(data.username, data.password)
    if (result.success) {
      alert(result.success)
    } else {
      alert(result.message)
    }
  }

  return (
    <div className="container minH-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input className="form-control" {...register('username')} />
              <p className="text-danger">{errors.username?.message}</p>
            </div>
            <div className="form-group">
              <input className="form-control" {...register('password')} />
            </div>
            <p className="text-danger">{errors.password?.message}</p>

            <button type="submit" className="btn btn-primary">
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
