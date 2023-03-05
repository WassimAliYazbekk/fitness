import React from 'react'

const WhatWeDo = () => {
  return (
    <div className=' mt-4 flex flex-col w-11/12 mx-auto shadow-lg bg-slate-200 dark:bg-gray-700 rounded-xl'>
       <h1 className=' text-lg font-bold mx-auto sm:my-5 xl:text-5xl sm:text-2xl lg:text-4xl lg:my-6 md:text-3xl my-3 dark:text-white'>
         What We Do?
       </h1>
       <div className="mx-auto p-4">
            <p className='dark:text-white text-center xl:text-4xl xl:mb-10 lg:text-3xl lg:mb-8 sm:mb-4 sm:text-xl mb-2 md:text-2xl md:mb-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa. Amet nostrum, iure, laudantium nulla non odio dolor suscipit maiores nam eius saepe, iste labore blanditiis dolorum corporis voluptatum porro.
            </p>
       </div>
    </div>
  )
}


export default WhatWeDo

/*const WhatWeDo = () => {
  return (
    <div className=' mt-4 flex flex-col w-11/12 mx-auto shadow-lg bg-slate-200 dark:bg-gray-700 rounded-xl'>
       <h1 className=' text-lg font-bold mx-auto  my-3 sm:my-4 sm:text-2xl md:text-3xl lg:text-4xl lg:my-6 xl:text-5xl dark:text-white'>
         What We Do?
       </h1>
       <div className="mx-auto p-4">
            <div className='block w-32  sm:w-40 md:w-44 lg:w-48 xl:w-56 float-right'>
            <img src={require('../assets/Images/whatWeDoImg.png')} alt=""
            className=' object-contain'/>
            </div>
            <p className='dark:text-white mb-2 sm:mb-4 sm:px-2 sm:text-xl xl:text-4xl xl:mb-10 xl:ml-4 md:text-2xl md:mb-6 lg:text-3xl lg:mb-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa. Amet nostrum, iure, laudantium nulla non odio dolor suscipit maiores nam eius saepe, iste labore blanditiis dolorum corporis voluptatum porro.
            </p>
       </div>
    </div>
  )
}*/