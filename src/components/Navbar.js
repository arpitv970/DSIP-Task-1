import React from 'react'

function Navbar() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://www.gannett-cdn.com/presto/2019/06/24/USAT/d74b6f92-f007-40b9-b3f9-de33a7ac747a-AFP_AFP_1HH49E.JPG?width=2560" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cooltravelingtips.com/wp-content/uploads/2020/03/skyscraper-3184798_1920-1024x683.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1613419381378-b689dde48381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
