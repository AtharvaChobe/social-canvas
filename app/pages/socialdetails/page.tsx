'use client'
import getSocialData from '@/api/rapid_apis/socialdetails';
import Grid from '@/components/blocks/social-details/Grid';
import { Hero } from '@/components/blocks/social-details/Hero';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
  const [url, seturl] = useState('');
  const [result, setresult] = useState([]);

  const handleSubmit = async () => {
    if (!url) {
      toast.error('url should not be empty')
      return;
    }
    const getdata = await getSocialData(url);

    console.log(getdata);
    setresult(getdata);
  }

  return (
    <div>

      <Hero />

      <div className='flex justify-center items-center gap-5 mt-16 w-full h-fit'>
        <input className='px-3 py-2 text-xl rounded-md shadow-md text-slate-800 placeholder:text-xl w-1/2' placeholder='https://apple.com' type="text" value={url} onChange={e => seturl(e.target.value)} />
        <button className='bg-blue-500 shadow-md rounded-md font-bold px-6 text-white py-2 text-md ' onClick={handleSubmit}>Get</button>
      </div>

      <div>
        <Grid data={result}/>
      </div>
    </div>
  )
}

export default page