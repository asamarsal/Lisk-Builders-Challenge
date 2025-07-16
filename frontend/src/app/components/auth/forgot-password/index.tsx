'use client'
import React, { useState } from 'react'
import Logo from '../../layout/header/Logo'
import Loader from '../../shared/loader'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [loader, setLoader] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Function to validate email
  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required.')
      return false
    }
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email format.')
      return false
    }
    const domain = value.split('@')[1]
    setEmailError('') // Clear error if valid
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) return

    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      setIsEmailSent(true)
    }, 2000)
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

                {isEmailSent ? (
                  <div className='flex flex-col items-center gap-2'>
                    <h4 className='text-dark_black font-bold'>
                      Forgot Your Password?
                    </h4>
                    <p className='text-dark_black opacity-60'>
                      Please check your inbox for the new password.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className='mb-5 text-left'>
                      <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          validateEmail(e.target.value)
                        }}
                        required
                        className='w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:focus:border-white/50 focus:border-opacity-50 dark:focus:border-opacity-50 dark:bg-black/40'
                      />
                      {emailError && (
                        <p className='text-red-500 text-sm mt-1'>
                          {emailError}
                        </p>
                      )}
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-opacity-20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black '
                        disabled={loader}>
                        {loader ? <Loader /> : 'Send Email'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
