import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Toolbar from '../../Toolbar/Toolbar'

const Layout = ({children}) => {
  return (
    // <div className='grid grid-cols-12'>
    //     <div className="col-span-12">
    //     <Toolbar/>
    //     </div>
    //     <div className="col-span-2">
    //     <Sidebar/>
    //     </div>
    //     <div>
    //         {children}
    //     </div>
    // </div>
    <div>
        <Toolbar/>
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
            <Sidebar/>
          </div>
          <div className='col-span-10'>
            {children}
          </div>

        </div>

    </div>
  )
}

export default Layout
