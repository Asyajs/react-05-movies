import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from './AppBar';

const Header = () => {
  return (
    <>
    <div className='header_layout'>
      <AppBar />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </>
  )
}

export default Header;