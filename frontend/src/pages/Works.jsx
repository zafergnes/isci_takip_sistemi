import React from 'react'
import Workcard from '../components/Workcard'

const Works = () => {
    const works = [
        // fake data 
         {id:1,work_name:'Kalıp İşi', work_desc:'Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat Karagedikteki 3 katlı inşaat',work_start_date:'2024 08 07',status:0},

         {id:2,work_name:'Demir işi', work_desc:'Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat Esentepedeki 3 katlı inşaat',work_start_date:'2021 08 07',status:2},
         
         {id:3, work_name:'Duvar İşi', work_desc:'Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat Güzelyurt 3 katlı inşaat',work_start_date:'2024 09 23',status:1},
         
         {id:4,work_name:'Tadilat İşi', work_desc:'Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat Esenlerdeki 3 katlı inşaat',work_start_date:'2022 08 08',status:1},
         
         {id:5,work_name:'Sıva İşi', work_desc:'İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat İstanbuldaki 3 katlı inşaat ',work_start_date:'2024 08 07',status:0},     
     ]
     
     
    
 
   return (
     <>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
             {
                 works.map((x,i) =>{  
                     return <Workcard key={i} works={x} />
                     })
             }
         </div>
     </>
   )
 }


export default Works