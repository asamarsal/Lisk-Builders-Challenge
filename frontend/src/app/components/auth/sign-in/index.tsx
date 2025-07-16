'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import Loader from '../../shared/loader'
import Logo from '../../layout/header/Logo'

const Signin = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  }) //login data state

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  }) //validation state

  // Input validation function
  const validateForm = () => {
    let errors = { email: '', password: '' }
    let isValid = true

    if (!loginData.email) {
      errors.email = 'Email is required.'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      errors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!loginData.password) {
      errors.password = 'Password is required.'
      isValid = false
    } else if (loginData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.'
      isValid = false
    }
    setValidationErrors(errors)
    return isValid
  }

  // form handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      localStorage.setItem('user', JSON.stringify({ user: loginData.email }))
      router.push('/')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl  before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='relative shadow-lg mx-auto max-w-32 overflow-hidden rounded-lg bg-white dark:bg-dark_black px-8 py-14 text-center sm:px-12 md:px-16'>
                <div className='mb-10 flex justify-center'>
                  <Logo />
                </div>

                <SocialSignIn actionText='Sign In' />

                <span className='z-1 relative my-8 block text-center'>
                  <span className='-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_black/10 dark:bg-white/20'></span>
                  <span className='text-sm text-dark_black/50 dark:text-white/40 relative z-10 inline-block bg-white dark:bg-dark_black px-3'>
                    OR
                  </span>
                </span>

                <form onSubmit={handleSubmit}>
                  <div className='mb-5 text-left'>
                    <input
                      type='email'
                      placeholder='Email'
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                                                ${
                                                  validationErrors.email
                                                    ? 'border-red-500'
                                                    : 'border-stroke'
                                                } 
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:focus:border-opacity-50`}
                    />
                    {validationErrors.email && (
                      <p className='text-red-500 dark:text-red-500 text-sm mt-1'>
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                  <div className='mb-5 text-left'>
                    <input
                      type='password'
                      placeholder='Password'
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      className={`w-full rounded-full border px-5 py-3 outline-hidden transition  dark:border-white/20 dark:bg-black/40 
                                                ${
                                                  validationErrors.email
                                                    ? ' border-red-500'
                                                    : 'border-stroke'
                                                } 
                                                focus:border-dark_black/50 dark:focus:border-white/50`}
                    />
                    {validationErrors.password && (
                      <p className='text-red-500 dark:text-red-500 text-sm mt-1'>
                        {validationErrors.password}
                      </p>
                    )}
                  </div>
                  <div className='mb-9'>
                    <button
                      type='submit'
                      className='flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-white/20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black '>
                      Sign In {loading && <Loader />}
                    </button>
                  </div>
                </form>

                <Link
                  href='/forgot-password'
                  className='mb-2 inline-block text-dark_black/50 dark:text-white/50 dark:hover:text-white/70 hover:text-dark_black'>
                  Forget Password?
                </Link>
                <p className='text-dark_black/70 dark:text-white/50'>
                  Not a member yet?{' '}
                  <Link
                    href='/signup'
                    className='text-dark_black dark:text-white hover:text-dark_black/50 dark:hover:text-white/50'>
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin
