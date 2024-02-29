import React from 'react'

function Footer() {
  return (
    <div className=" my-5">
  <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>
    <section className="d-flex justify-content-between p-4 text-white" style={{backgroundColor: '#21D192'}}>
      <div className="me-5">
        <span>Rejoignez notre plateforme</span>
      </div>
      <div>
        <a href className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-instagram" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-github" />
        </a>
      </div>
     
    </section>
    
    <section className>
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">CactuShop</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <b>El Jadida : </b>
            Lundi - Vendredi: 8:00 - 17:00 / samedi : 8:00 - 12:00
            </p>
            <p>
            <b>Casablanca :</b> 
            Lundi - Vendredi: 8:00 - 17:00 / samedi : 8:00 - 12:00
            </p>    
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-dark"></a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 50, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Help</a>
            </p>
          </div>
        </div></div></section></footer></div>

  )
}

export default Footer