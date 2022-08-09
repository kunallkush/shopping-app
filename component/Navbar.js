import React from 'react'

const Navbar = () => {
  return (
<>

<nav className="navbar navbar-expand-lg " style={{backgroundColor:"black"}} >
  <div className="container-fluid">
    <a className="navbar-brand fw-light fs-6 " style={{color:"white",letterSpacing:"8px",marginLeft:"30px"}} href="/">TANN TRIM</a>
    <div style={{width:"125px"}}>
        <div className="collapse navbar-collapse d-flex flex-row-reverse justify-content-around" id="navbarSupportedContent">
        <a href='/'>
            <img src='shopping-bag-24.ico'alt='error' style={{width:"13px",height:'13px'}}/>
         </a>
        <a href='/'>
            <img src='icons8-bookmark-24.png'alt='error' style={{width:"15px",height:'15px'}}/>
        </a>
        <a href='/'>
            <img src='icons8-account-24.png'alt='error' style={{width:"15px",height:'15px'}}/>
        </a>
        <a href='/'>
            <img src='search-13-64.png'alt='error' style={{width:"15px",height:'15px'}}/>
        </a>
        </div>
    </div>
  </div>
</nav> 
</>
  )
}

export default Navbar