import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ViewMore = () => {

    const label = [
        {
            Name: 'id'
        },
        {
            Name: 'author'
        },
        {
            Name: 'title'
        },
        {
            Name: 'sub-title'
        },
        {
            Name: 'description'
        },
        {
            Name: 'image'
        },
    ]
    return (
        <div className='grid grid-cols-12 grid-rows-6 items-center'>
            <div className='h-10 w-10 col-start-2'>
                <Link to={'/index'}><FaArrowLeft className='text-4xl text-[#845EC2]' /></Link>
            </div>
            <div className='flex flex-col row-start-2 col-start-2 capitalize'>
                {
                    label.map((val, i) => {
                        return (<label key={i} htmlFor={val.Name}>{val.Name}</label>)
                    })
                }
            </div>
        </div>
    )
}

export default ViewMore
