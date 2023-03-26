import {AiFillHome} from 'react-icons/ai'
import {RiPagesLine} from 'react-icons/ri'
import {BsFillPostcardHeartFill} from 'react-icons/bs'
import {MdPermMedia} from "react-icons/md"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const SidebarData =[
        {
            icons:<AiFillHome/>,
            Name:"Home",
            path:'/'
        },
        {
            icons:<RiPagesLine/>,
            Name:"Pages",
            path:"/pages"
        },
        {
            icons:<BsFillPostcardHeartFill/>,
            Name:"Posts",
            path:"/posts"
        },
        {
            icons:<MdPermMedia/>,
            Name:"Media",
            path:"/media"
        }
    ]
  return (
    <div className=''>
    <div className='bg-slate-800 text-white h-screen w-full items-center pt-4 flex flex-col gap-4'>
        {SidebarData.map((val, i)=>{
          return <Link  key={i} className='hover:bg-white hover:text-black w-11/12 border-2 border-white rounded-md' to={val.path}>
          <button className='flex m-auto py-2 gap-x-2 items-center'>
            {val.icons}{val.Name}
            </button>
            </Link>
        })}
    </div>
    </div>
  )
}

export default Sidebar
