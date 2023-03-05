import React from 'react'

const Footer = () => {
  return (
    <footer className=' static bottom-0 flex-col min-w-full p-2 bg-slate-200 dark:text-white dark:bg-slate-800 text-black font-bold mt-4'>
        <h1 className=' text-center m-2 text-xs sm:text-base md:text-xl lg:text-2xl lg:my-6 xl:text-3xl'>
            &#169; <a href="/" className=' underline underline-offset-4'>Wassim Yabekk</a> & Hadi Awada 2023
        </h1>
    </footer>
  )
}

export default Footer