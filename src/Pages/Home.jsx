import React from 'react'
import {NutrionBanner, ProgramBanner} from '../Components'

const Home = () => {
  return (
    <div className='mt-24 min-h-screen'>
      <ProgramBanner/>
      <NutrionBanner/>
    </div>
  )
}

export default Home