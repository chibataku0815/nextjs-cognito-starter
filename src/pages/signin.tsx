import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { useAuth } from '~/hooks/use-auth'

YupPassword(yup)

interface IFormInputs {
  username: string
  password: string
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup
      .string()
      .minLowercase(8, '8文字以上入力してください')
      .minUppercase(1, '大文字を1文字以上入力してください')
      .minSymbol(1, '記号を1文字以上入力してください')
      .minNumber(1, '数字を1文字以上入力してください')
      .required(),
  })
  .required()

const SignIn = () => {
  const auth = useAuth()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const onSubmit = async (data: IFormInputs) => {
    console.info(JSON.stringify(data))
    const result = await auth.signIn(data.username, data.password)
    if (result.success) {
      alert(result.success)
    } else {
      alert(result.message)
    }
  }

  console.info(watch('password'))
  console.info(getValues())

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
            <p>文字数{errors.password?.type === 'minLowercase' && !Object.keys(errors).length ? 'NG' : 'OK'}</p>
            <p>大文字{errors.password?.type === 'minUppercase' ? 'NG' : 'OK'}</p>
            <p>記号{errors.password?.type === 'minSymbol' ? 'NG' : 'OK'}</p>
            <p>数字{errors.password?.type === 'minNumber' ? 'NG' : 'OK'}</p>

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
