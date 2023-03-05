import React from 'react'

const About = () => {
  return (
    <div className=' mt-4 flex flex-col w-11/12 mx-auto shadow-lg bg-slate-200 dark:bg-gray-700 rounded-xl'>
       <h1 className=' text-lg font-bold mx-auto sm:my-5 xl:text-5xl sm:text-2xl lg:text-4xl lg:my-6 md:text-3xl my-3 dark:text-white'>
         About Us
       </h1>
       <div className="mx-auto p-4">
            <p className='dark:text-white text-center xl:text-4xl xl:mb-10 lg:text-3xl lg:mb-8 sm:mb-4 sm:text-xl mb-2 md:text-2xl md:mb-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa. Amet nostrum, iure, laudantium nulla non odio dolor suscipit maiores nam eius saepe, iste labore blanditiis dolorum corporis voluptatum porro.
            </p>
       </div>
    </div>
  )
}

export default About