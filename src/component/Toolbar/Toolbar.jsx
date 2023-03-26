import React,{useState} from 'react'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
const Toolbar = () => {
  const data = [
    {
      name:"home",
    },
    {
      name:"about",
    },
    {
      name:"contact",
    },
    {
      name:"detail",
    },
    {
      name:"services",
    },
  ]
    const [show,setShow]=React.useState(false);
    const [Arrow,setArrow] = useState('down');
  return (
    <div className='bg-slate-800 h-14 flex'>
      <div className='flex items-center text-white'>
      <div className='bg-red-600 w-10 font-bold text-4xl'>B</div>
      <div>Blog Mgmt</div>
      </div>
      <div className='w-11/12 h-full gap-6 flex justify-end items-center text-white'>
      <div className="bg-emerald-600 rounded-full h-10 w-10"></div>
      <div>Alember Shreesh</div>
      <div>
        <MdKeyboardArrowDown
        onBlur={()=>{
          setShow(false)

        }} onClick={()=>{
          setArrow("up")
            setShow(!show)

        }} className={`text-4xl relative cursor-pointer ${show ? "hidden" :"block"}  `}/>
        <MdKeyboardArrowUp className={`text-4xl relative  text-white  cursor-pointer   ${Arrow=== "down" ? 'hidden  ':'block '}`}
          onClick={()=>{
            setArrow("down")
            setShow(!show);
          }}
        />
        {
            show && <div className='w-48 text-black absolute top-12 bg-yellow-500 right-0 z-20 p-2 '>
              {data.map((val,i)=>{
                return (
                  <div className='capitalize' key={i}>
                    {val.name}
                  </div>
                )
              })}
            </div>
        }
      </div>
      </div>
    </div>
  )
}

export default Toolbar
