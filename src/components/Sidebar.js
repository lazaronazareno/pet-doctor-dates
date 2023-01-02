import React, { useState } from 'react'

import { FaPlusCircle, FaMinusCircle, FaBars } from 'react-icons/fa'

function Sidebar ({ showForm, handleShowForm, children }) {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const Menu = () => {
    return (
      <>
        <div className='pt-3 px-3'>
          <h2>Bienvenido</h2>
          <span>Admin</span>
        </div>

        <div className='d-flex flex-column gap-1 my-2'>
          <button className='sidebar-link' onClick={handleShowForm}>{showForm ? <FaMinusCircle size={32} /> : <FaPlusCircle size={32} />}</button>
        </div>
        {showForm && children}
      </>
    )
  }

  return (
    <div className='sidebar p-0 container bg-light'>

      <FaBars size={32} onClick={handleSidebar} className='button-menu' />

      <div className={`${showSidebar ? 'show-menu' : 'hidden-menu'}`}>
        <div className='responsive-menu'>
          <Menu />
        </div>
      </div>

      <div className='menu'>
        <Menu />
      </div>
    </div>
  )
}

export default Sidebar
