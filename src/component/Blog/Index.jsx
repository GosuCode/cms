import React, { useState } from 'react'
import AddForm from './Add/AddForm'
import ViewBlog from './View/ViewBlog'

const Index = () => {
    const [Active, setActive] = useState('add')
    const data = [
        {
            name:'add form',
            id:'add'
        },
        {
            name:'view blog',
            id:'view'
        }
    ]
  return (
    <div className='mx-12 my-7'>
        <div className='flex'>
            {
            data.map((val, i) =>{
                return <div onClick={()=>{
                    setActive(val.id)
                }} key={i}
                className={`${Active===val.id ? "bg-blue-400 text-white shadow-lg shadow-gray-600" : "bg-white text-black shadow-md shadow-gray-600"}
                cursor-pointer capitalize rounded-md w-full text-center items-center text-xl font-semibold`}>
                    {val.name}
                       </div>
            })}
        </div>
        <div>
            {Active==='add' ? <AddForm/> : <ViewBlog/>}
        </div>
    </div>
  )
}

export default Index
