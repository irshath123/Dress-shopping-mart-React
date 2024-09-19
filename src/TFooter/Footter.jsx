import React from "react"
import './Footerstyle.css'

function Footter(){
return(
    <section className="news py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-9 m-auto text-center">
              <h1>Join Our Social Media</h1>
              <input type="text" class="px-3" placeholder="Enter the Email"/>
              <button class="btn2">Submit</button>
            </div>
          </div>
          <div class="row pt-5">
            <div class="col-lg-11 m-auto">
              <div className="row">
                <div className="col-lg-3 py-3">
                  <h5  className="pb-3">CUSTOMER CARE</h5>
                  <p>Regular</p>
                  <p>On Time</p>
                  <p>Always Care</p>
                </div>
                <div className="col-lg-3 py-3">
                  <h5  className="pb-3">FAQ's</h5>
                  <p>No E-Charges</p>
                  <p>Shopping & Delivery</p>
                  <p>Always Care</p>
                </div>
                <div className="col-lg-3 py-3">
                  <h5  className="pb-3">OUR COMPANY</h5>
                  <p>About</p>
                  <p>New Collection</p>
                  <p>Product</p>
                </div>
                <div className="col-lg-3 py-3">
                  <h5 className="pb-3">SOCIAL MEDIA</h5>
                  <div className="d-flex flex-wrap">
                  <span><i class="bi bi-facebook"></i></span>
                  <span><i class="bi bi-instagram"></i></span>
                  <span><i class="bi bi-twitter-x"></i></span>
                  <span><i class="bi bi-google"></i></span>
                  </div>
                </div>

              </div>


            </div>
          </div>
          <hr/>
          <p class="text-center">Copyright ©2024 All rights reserved | This webpage made by mohamed irshath</p>
        </div>
      </section>

)
}
export default Footter