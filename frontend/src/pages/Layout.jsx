import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {

    const menu =[
      {title:'İşler', path:'/works'},
      {title:'İşçiler', path:'/workers'},
      {title:'Hesap', path:'/wallet'},
      {title:'Günlük Yövmiye', path:'/workerinput'}
    ]

  return (
      <>
        {/* <header></header> */}
        <div className='border-b-2 shadow-2xl bg-slate-700 '>
            <div className='flex justify-between px-5 py-5 shadow-2xl'>
              <Link to='/'>
              <div className='flex'>
                <img src='worker_icon.svg' className=' h-15 flex mx-3 justify-center items-center'  />
                <span className='font-extrabold text-3xl flex justify-center items-center text-white'> İŞÇİ TAKİP SİSTEMİ</span>
              </div>
              
              </Link>
              <div className='flex '>
                  <ul className='flex'>
                    {
                      menu.map((x,i=0) =>{
                        return <li><Link className='p-4 px-4 mr-10 items-center justify-center flex font-bold hover:text-red-500  text-white'to={x.path} ><span>{x.title}</span></Link></li>
                        
                      })
                    }
                  </ul>
                  <Link to='/add' className='bg-slate-900 text-white px-2 py-1 w-40 rounded items-center justify-center flex shadow-2xl'>
                  <button className='bg-slate-900 text-white px-2 py-1 w-40 rounded items-center justify-center flex shadow-2xl '> + <span>Ekle</span></button>
                  </Link>
              </div>
            </div>
        </div>

        {/* <Home></Home> */}
        <div className='flex mx-auto px-5 md:px-20 bg-slate-500'>
            <div className='mt-5 mb-5 min-h-[400px] w-full'>
              <Outlet></Outlet>
            </div>
        </div>
        
        {/* <footer></footer> */}
        <div className='flex bg-slate-700 mt-auto'>
          <div className='flex mx-auto px-20 py-20 items-center justify-center'>
                    <h3 className='text-white text-4xl flex'>İŞÇİ TAKİP SİSTEMİ</h3><br />
          </div>
        </div>
        
    </>
  )
}

export default Layout