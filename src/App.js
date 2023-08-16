import './Style.css' 
import Footer from './Components/Footer';
function App() {
  return (
    <>
    {/* Header Start */}
     <div className='mainHeading'> 
    <div className='overlay'>
      <nav class="navbar navbar-expand-lg bg-body-none mt-2 ">
  <div class="container-fluid ms-2 ps-2">
    <a class="navbar-brand ms-5 ps-5 fw-bold fs-5 text-light" href="/">DORSIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse m-2 " id="navbarSupportedContent">
      <ul class="navbar-nav pe-5 mx-5 mb-lg-0 ">
        <li class="nav-item mx-3 ">
          <a class="nav-link text-light" aria-current="page" href="/">Home</a>
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
<div className='center-text'>
<h1 className='mt-3 pt-3 text-light main-Text'>We help startups launch their <br/> products</h1>
<p className='Cus-text'>Etiam sed.Interdum consequat proin vestibulum class at.</p>
<div class="container mt-5">
<button type="button" class="btn btn-outline-danger btn-circle"><i class="fa-solid fa-play fs-3"></i></button>
  </div>
</div>
</div>
    

   
    </div>
    {/* Header End */}
    {/* Main Start */}
    <div className="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h2>A digital web design studio creating modern & engaging online experiences</h2>
        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <ul>
          <li>We put a lot of effort in design.</li>
          <li>The most important ingredient of successful website.</li>
          <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
          <li>Submit Your Organization.</li>
        </ul>
        <button type="button" class="btn btn-danger px-4 py-2 mt-4">Learn More</button>

      </div>
      <div class="col-md-6">
        <img src={"http://dorsin.react.themesbrand.com/assets/images/online-world.svg"} class="img-fluid" alt="Image"/>
      </div>
    </div>
  </div>
  {/* Main End */}
  {/* Main 2 Start */}
  <div className="gradient-div p-5">
    <h2 className='m-4 mt-5'>Build your dream website today</h2>
    <p className='w-50'>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
    <button type="button" class="btn btn-light">View Plans & Pricing</button>
  </div>
  {/* Main 2 End */}
  {/* Main 3 Start */}
  <div class="container mt-5">
    <div className='text-center w-50 mx-auto'>
      <h3 className='my-4'>OUR PRICING</h3>
      <p className=' text-secondary'>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-header">
            <h4 class="card-title">ECONOMY</h4>
          </div>
          <div class="card-body">
            <h2 class="card-text">$9.90</h2>
            <ul class="list-unstyled">
              <li className='p-2'>5GB Storage</li>
              <li className='p-2'>10 Email Accounts</li>
              <li className='p-2'>24/7 Support</li>
            </ul>
            <a href="/" class="btn btn-danger className='p-2'">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-header">
            <h4 class="card-title">DELUXE</h4>
          </div>
          <div class="card-body">
            <h2 class="card-text">$19.90</h2>
            <ul class="list-unstyled">
              <li className='p-2'>15GB Storage</li>
              <li className='p-2'>25 Email Accounts</li>
              <li className='p-2'>24/7 Support</li>
            </ul>
            <a href="/" class="btn btn-danger">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-header">
            <h4 class="card-title">ULTIMATE</h4>
          </div>
          <div class="card-body">
            <h2 class="card-text">$29.90</h2>
            <ul class="list-unstyled">
              <li className='p-2'>30GB Storage</li>
              <li className='p-2'>50 Email Accounts</li>
              <li className='p-2'>24/7 Support</li>
            </ul>
            <a href="/" class="btn btn-danger">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main 3 End */}
  {/* Main 4 Start */}
  <div class="container mt-5">
  <div className='text-center w-75 mx-auto'>
      <h3 className='my-4'>BEHIND THE PEOPLE</h3>
      <p className=' text-secondary '>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <img src={"http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg"} class="card-img-top" alt="Image 1"/>
          <div class="card-body">
            <h5 class="card-title">Frank Johnson</h5>
            <p class="card-text">CEO</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src={"http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg"} class="card-img-top" alt="Image 2"/>
          <div class="card-body">
            <h5 class="card-title">Elaine Stclair</h5>
            <p class="card-text">DESIGNER</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src={"http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg"} class="card-img-top" alt="Image 3"/>
          <div class="card-body">
            <h5 class="card-title">Wanda Arthur</h5>
            <p class="card-text">DEVELOPER</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <img src={"http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg"} class="card-img-top" alt="Image 4"/>
          <div class="card-body">
            <h5 class="card-title">Joshua Stemple</h5>
            <p class="card-text">MANAGER</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main 4 End */}
  {/* Footer Start */}

<Footer/>

    </>
  );
}

export default App;
