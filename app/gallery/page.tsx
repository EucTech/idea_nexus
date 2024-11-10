import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-28 mb-20 px-20'>
      <h1 className='text-[28px] md:text-[40px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#29a047] to-[#0b2e14] mb-20'>Gallery</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Image src="/el1.jpg" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el3.jpg" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el5.jpg" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el7.JPEG" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el8.JPEG" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el10.JPEG" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el11.JPEG" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el12.JPEG" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el13.JPEG" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el14.jpg" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el15.jpg" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />
        <Image src="/el16.jpg" alt='image' width={500} height={500} className=' w-[20em] rounded-xl' />

      </div>
    </div>
  )
}

export default page
