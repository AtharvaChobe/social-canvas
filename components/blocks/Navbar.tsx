import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <nav className='w-full py-2 px-4 flex items-center justify-between'>
      <h2 className='text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text'>
        <Link href={"/"}>Social Canvas</Link>
      </h2>

      <div className='flex gap-8 justify-center items-center w-fit'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <Link href={"/sign-up"}><button className='bg-blue-500 hover:rounded-md hover:shadow-xl text-sm text-white px-3 py-2 rounded shadow '>Login/SignUp</button></Link>
        </SignedOut>
      </div>
    </nav>
  )
}

export default Navbar