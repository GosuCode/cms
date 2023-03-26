import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Toolbar from '../../Toolbar/Toolbar'

const Layout = ({children}) => {
  return (
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
