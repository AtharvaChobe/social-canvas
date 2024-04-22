import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
        <SignUp/>
    </div>
  )
}

export default page