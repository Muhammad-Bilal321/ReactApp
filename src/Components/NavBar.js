import React from 'react'

const NavBar = () => {
  return (
    <>
    {/* NavBar Start */}
    <div className='mainHeading'> 
    <div className='overlay'>
      <nav class="navbar navbar-expand-lg bg-body-none mt-2">
  <div class="container-fluid ms-2 ps-2">
    <a class="navbar-brand ms-5 ps-5 fw-bold fs-5" href="/">DORSIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse m-2" id="navbarSupportedContent">
      <ul class="navbar-nav pe-5 mx-5 mb-lg-0 ">
        <li class="nav-item mx-3 ">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/">Services</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2"  href="/">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/">Contact</a>
        </li>
        
        
      </ul>
      <form class="d-flex ms-5" role="search">
        <button class="btn btn-danger ms-5" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
    

   
    </div>
    
    </>
  )
}

export default NavBar
