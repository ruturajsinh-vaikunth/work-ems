import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import { useEffect } from 'react'
import Error from '../components/Error'
import Spinner from '../components/Spinner'

export default function Login(props) {
    const { loading, userInfo, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/Dashboard')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <>
    <h1 className='text-center mt-5'>EMS</h1>
    <h2 className='text-center mt-2'>Login</h2>
    <div className='container content'>
        
        <form onSubmit={handleSubmit(submitForm)}>
        {error && <Error>{error}</Error>}
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
            type='email'
            className='form-input'
            {...register('email')}
            required
            />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
            type='password'
            className='form-input'
            {...register('password')}
            required
            />
        </div>
        <button type='submit' className='button' disabled={loading}>
            {loading ? <Spinner /> : 'Login'}
        </button>
        </form>
    </div>
    </>
    )
}