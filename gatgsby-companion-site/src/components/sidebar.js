import * as React from 'react'
export const Foo = () => (
    <>
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()"></a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div id="main">
        <button className="openbtn" onclick="openNav()">
          ☰ Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </>
  )
  