import React from 'react'

const HeroBanner = () => {
  return (
    <div className=' mt-20 flex w-11/12 mx-auto bg-slate-200 dark:bg-slate-800 rounded-xl'>
      <div className=' flex lg:ml-4 xl:ml-8 flex-1'>
        <div className='my-auto p-4 mx-2'>
        <h1 className='font-bold text-black dark:text-white text-sm sm:text-xl mx-auto md:text-2xl lg:text-3xl  xl:text-5xl'>
          The Ultimate Guide to Achieve Your <span className='text-red-700'>Fitness</span> Goals.
        </h1>
        <h3 className=' text-gray-700 dark:text-gray-200 hidden mx-auto mt-4 md:block lg:text-xl xl:text-3xl'>
        Get fit and healthy with expert advice, workouts, nutrition tips, and motivation to stay on track.
        </h3>
        <div className=' flex my-4 sm:my-6'>
          <h1 className='font-bold my-auto sm:text-base xl:text-2xl xl:mr-10 lg:text-xl lg:mr-6 md:mr-5 mr-2 text-xs dark:text-white text-black hover:underline cursor-pointer hover:translate-x-3 hover:transition-all '>
            Get Started &#8594;
          </h1>
          <button className='px-2 font-bold sm:text-base lg:text-xl xl:text-2xl rounded-xl py-2 bg-blue-700 text-xs hover:bg-red-700 hover:text-black transition-colors text-white'>
            Start Now
          </button>
        </div>
        </div>
      </div>
      <div className='flex flex-1 p-2 xl:p-4 justify-end'>
        <img src="https://freepngimg.com/save/149074-person-athlete-pic-jogging-hq-image-free/530x540" alt=""
        className=' object-contain'  />
      </div>
    </div>
  )
}

export default HeroBanner