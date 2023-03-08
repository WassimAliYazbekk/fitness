import React from 'react'

const ProgramBanner = () => {
  return (
    <div className=' mt-20 xl:mt-24 flex w-11/12 mx-auto bg-slate-200 dark:bg-slate-800 dark:text-white rounded-xl'>
      <div className='block my-10 mx-8'>
        <div>
        Progress Bar
        </div>
        <h1 className='text-center'>
          Week: 5
        </h1>
      </div>
      <div className='block my-8 mx-8'>
        <li>
          height: 180
        </li>
        <li>
          weight: 80
        </li>
        <li>
          BMI: 70
        </li>
      </div>
    </div>
  )
}

export default ProgramBanner