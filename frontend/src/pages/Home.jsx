import React from 'react'
import HomeCard1 from '../components/HomeCard1'
import HomeCard2 from '../components/HomeCard2'
import HomeCard3 from '../components/HomeCard3'


const Home = () => {
    return (
    <>
        <div className='flex justify-center items-center overflow-hidden'>
          <h1 className='text-6xl text-white font-bold mx-auto'>İŞÇİ TAKİP SİSTEMİ</h1>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5 m-[30px]'>
          <HomeCard1/>
          <HomeCard1/>
          <HomeCard1/>
          <HomeCard1/>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-[30px]'>
          <HomeCard2/>
          <HomeCard2/>
          <HomeCard2/>
          
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-[30px]'>
          <HomeCard3/>
          <HomeCard3/>
          <HomeCard3/>
          
        </div>
    </>
  )
}

export default Home