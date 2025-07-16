import React from 'react'
import { signIn } from 'next-auth/react'
import { Icon } from '@iconify/react/dist/iconify.js'

const SocialSignIn = ({ actionText = 'Sign In' }) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:flex items-center'>
      <button
        onClick={() => signIn('google')}
        className='flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer'>
        {actionText}
        <Icon icon='flat-color-icons:google' width='22' height='22' />
      </button>

      <button
        onClick={() => signIn('github')}
        className='flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer'>
        {actionText}
        <Icon icon='logos:github-icon' width='22' height='22' />
      </button>
    </div>
  )
}

export default SocialSignIn
