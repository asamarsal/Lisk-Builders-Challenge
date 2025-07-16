'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import { useState } from 'react'
import Loader from '../../shared/loader'
import Logo from '../../layout/header/Logo'

const SignUp = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  })

  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) return 'Name is required'
    if (!/^[a-zA-Z\s]{3,}$/.test(name))
      return 'Name must be at least 3 characters and contain only letters'
    return ''
  }

  const validateEmail = (email: string) => {
    if (!email.trim()) return 'Email is required'
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return 'Enter a valid email address'
    return ''
  }

  const validatePassword = (password: string) => {
    if (!password.trim()) return 'Password is required'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validate on change
    setErrors((prev) => ({
      ...prev,
      [name]:
        name === 'name'
          ? validateName(value)
          : name === 'email'
          ? validateEmail(value)
          : validatePassword(value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate all fields before submitting
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)

    setErrors({ name: nameError, email: emailError, password: passwordError })
    if (nameError || emailError || passwordError) {
      toast.error('Please fix the errors before submitting.')
      return
    }

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      localStorage.setItem('user', JSON.stringify({ user: formData.name }))
      router.push('/')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='relative shadow-lg mx-auto max-w-32 overflow-hidden rounded-lg bg-white dark:bg-dark_black px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-16'>
                <div className='mb-10 flex justify-center'>
                  <Logo />
                </div>

                <SocialSignIn actionText='Sign Up' />

                <span className='z-1 relative my-8 block text-center'>
                  <span className='-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_black/10 dark:bg-white/20 dark:bg-opacity-20 bg-opacity-10'></span>
                  <span className='text-sm text-dark_black/50 dark:text-white/40 relative z-10 inline-block dark:bg-dark_black bg-white px-3'>
                    OR
                  </span>
                </span>

                <form onSubmit={handleSubmit}>
                  <div className='mb-5 text-left'>
                    <input
                      type='text'
                      placeholder='Name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-full border px-5 py-3 outline-hidden transition  focus:border-dark_black dark:border-white/20 dark:bg-black/50
                                                ${
                                                  errors.name
                                                    ? 'border-red-500 dark:border-red-500'
                                                    : 'border-stroke'
                                                } 
                                                focus:border-dark_black/50 dark:focus:border-white/50`}
                    />
                    {errors.name && (
                      <p className='text-red-500 dark:text-red-500 text-sm mt-1'>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className='mb-5 text-left'>
                    <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-full border px-5 py-3 outline-hidden transition  focus:border-dark_black dark:border-white/20 dark:bg-black/50
                                                ${
                                                  errors.email
                                                    ? 'border-red-500 dark:border-red-500'
                                                    : 'border-stroke'
                                                }
                                                focus:border-dark_black/50 dark:focus:border-white/50`}
                    />
                    {errors.email && (
                      <p className='text-red-500 dark:text-red-500 text-sm mt-1'>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className='mb-5 text-left'>
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full rounded-full border px-5 py-3 outline-hidden transition focus:border-dark_black dark:border-white/20 dark:bg-black/50
                                                ${
                                                  errors.password
                                                    ? 'border-red-500 dark:border-red-500'
                                                    : 'border-stroke'
                                                }
                                                focus:border-dark_black dark:focus:border-white focus:border-opacity-50 dark:focus:border-opacity-50 `}
                    />
                    {errors.password && (
                      <p className='text-red-500 dark:text-red-500 text-sm mt-1'>
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className='mb-9'>
                    <button
                      type='submit'
                      className='flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-white/20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black '
                      disabled={loading}>
                      Sign Up {loading && <Loader />}
                    </button>
                  </div>
                </form>

                <div className='flex flex-col max-w-xs mx-auto gap-2'>
                  <p className='text-dark_black/70 dark:text-white/50'>
                    By creating an account, you agree with our{' '}
                    <Link
                      href='/privacy-policy'
                      className='text-dark_black dark:text-white dark:hover:text-white-50'>
                      Privacy
                    </Link>{' '}
                    and{' '}
                    <Link
                      href='/privacy-policy'
                      className='text-dark_black dark:text-white dark:hover:text-white-50'>
                      Policy
                    </Link>
                    .
                  </p>

                  <p className='text-dark_black/70 dark:text-white/50'>
                    Already have an account?
                    <Link
                      href='/signin'
                      className='text-dark_black dark:text-white dark:hover:text-white/50'>
                      {' '}
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
