import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Toolbar = () => {
  const data = [
    {
      name: "home",
    },
    {
      name: "about",
    },
    {
      name: "contact",
    },
    {
      name: "logout",
    },
  ]
  const [show, setShow] = React.useState(false);
  const [Arrow, setArrow] = useState('down');



  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/login');
  }


  return (
    <div className='bg-[#845EC2] h-14 flex'>
      <div className='flex items-center text-white gap-2 mx-10'>
        <div className='bg-[#00C9A7] w-10 font-bold text-4xl'>B</div>
        <div>Blog Mgmt</div>
      </div>
      <div className='w-11/12 h-full gap-6 flex justify-end items-center text-white'>
        <div className="bg-[#F3C5FF] rounded-full h-10 w-10"></div>
        <div className='cursor-pointer'><Link to={'/login'}>Login</Link> </div>
        <div>
          <MdKeyboardArrowDown
            onBlur={() => {
              setShow(false)
            }} onClick={() => {
              setArrow("up")
              setShow(!show)
            }}
            className={`text-4xl relative cursor-pointer ${show ? "hidden" : "block"}  `} />
          <MdKeyboardArrowUp
            className={`text-4xl relative  text-white  cursor-pointer   ${Arrow === "down" ? 'hidden  ' : 'block '}`}
            onClick={() => {
              setArrow("down")
              setShow(!show);
            }}
          />
          {
            show && <div className='w-48 text-black absolute top-12 rounded-md bg-[#FEFEDF] right-0 shadow-md shadow-slate-600'>
              {data.map((val, i) => {
                if (val.name === 'logout') {
                  return (
                    <div key={i}
                      className='capitalize cursor-pointer items-center text-center py-2 hover:text-red-500'
                      onClick={() => handleLogout()}>{val.name}</div>
                  )
                } else {
                  return (
                    <div className='capitalize cursor-pointer items-center text-center py-2 hover:text-red-500' key={i}>
                      {val.name}
                    </div>
                  )
                }
              })}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Toolbar
