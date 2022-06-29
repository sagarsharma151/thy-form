import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './vendors/feather/feather.css'
import './vendors/mdi/css/materialdesignicons.min.css'
import './vendors/ti-icons/css/themify-icons.css'
import './vendors/typicons/typicons.css'
import './vendors/simple-line-icons/css/simple-line-icons.css'
import './vendors/css/vendor.bundle.base.css'
import './css/vertical-layout-light/style.css'
import './App.scss'
import Allform from './pages/Allform'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidbar from './Sidbar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Chart from './Charts'
import Register from './Register';
import Login from './userpages/Login'
import { ThemeProvider } from "styled-components";
import Dark from './Dark';
const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}
function App() {
  
  return (
    <>
     <div class="container-scroller">
    {/* <div class="row p-0 m-0 proBanner" id="proBanner"> 
      <div class="col-md-12 p-0 m-0">
        <div class="card-body card-body-padding px-3 d-flex align-items-center justify-content-between">
          <div class="ps-lg-3">
            <div class="d-flex align-items-center justify-content-between">
              <p class="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
              <a href="https://www.bootstrapdash.com/product/star-admin-pro/?utm_source=navbar&amp;utm_medium=productdemo&amp;utm_campaign=getpro" target="_blank" class="btn me-2 buy-now-btn border-0">Buy Now</a>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <a href="https://www.bootstrapdash.com/product/star-admin-pro/"><i class="ti-home me-3 text-white"></i></a>
            <button id="bannerClose" class="btn border-0 p-0">
              <i class="ti-close text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>  */}
    {/* <!-- partial:partials/_navbar.html --> */}

    {/* <!-- partial --> */}
    <div class="container-fluid page-body-wrapper">
      {/* <!-- partial:partials/_settings-panel.html --> */}
     
      {/* <!-- partial --> */}
      {/* <!-- partial:partials/_sidebar.html --> */}
 
      {/* <!-- partial --> */}
    
     <BrowserRouter>
     {localStorage.getItem('token') ? <Navbar /> : ''}
     {localStorage.getItem('token') ?  <Dark /> : ''}
     {localStorage.getItem('token') ? <Sidbar /> : ''}
     {/* <Navbar />
     <Dark />
     <Sidbar /> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path='/allform' element={<Allform />} />
          <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/chart" element={<Chart />} />
          <Route path="/" element={<Register />} />
          <Route path='/login' element={<Login />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
    {/* <!-- page-body-wrapper ends --> */}
  </div>
  {/* <!-- container-scroller --> */}

    </>
  );
}

export default App;
