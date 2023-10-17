import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <center><img src="https://sahyadri.edu.in/images/placement/background/PlacementBanner2023-1.jpg" height="450"/></center>
            <div class="carousel-caption d-none d-md-block">
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
          <center><img src="https://sahyadri.edu.in/images/placement/background/PlacementBanner2023-2.jpg" height="450"/></center>
            <div class="carousel-caption d-none d-md-block">
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
          <center><img src="https://sahyadri.edu.in/images/placement/background/Placement%20Landing%20Page%20Banner%203.jpg" height="450"/></center>
            <div class="carousel-caption d-none d-md-block">
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
          <center><img src="https://sahyadri.edu.in/images/placement/background/Placement%20Landing%20Page%20Banner%204.jpg" height="450"/></center>
            <div class="carousel-caption d-none d-md-block">
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
          <center><img src="https://sahyadri.edu.in/images/placement/background/Placement%20Landing%20Page%20Banner%205.jpg" height="450"/></center>
            <div class="carousel-caption d-none d-md-block">
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
          <center><img src="https://sahyadri.edu.in/images/placement/background/Placement%20Landing%20Page%20Banner%206.jpg" height="450"/></center>
            <div class="carousel-caption d-none d-md-block">
              <p></p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div class="row">
          <div class="col col-md-6 col-sm-12">
            <div class="card">
              <img src="https://mobirise.com/extensions/restaurantm4/assets/images/natalia-dworniak-424223-4032x2790.jpg" />
              <div class="card-body">
              </div>
            </div>
          </div>
          <div class="col col-md-6 col-sam-12">
            <div class="card">
              <img src="https://mobirise.com/extensions/restaurantm4/assets/images/gallery02.jpg" />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row" style={{ backgroundColor: "#1234" }}>
           
            <ul>
            <img src="https://sahyadri-beta.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" height="50" width="50"></img>
             <br></br> 
             <p class="text-[#8D8D8E] mt-4">The institute promote the idea of project based learning through various activities and initiatives in association with various in-house industries, which helps the graduates to imprive their expertise.
             </p>
             <p class="text-white mt-4 text-sm">+ 91 824 2277222/333</p>
             <p class="text-white mt-1 text-sm">+ 91 94498 45959</p>
            </ul>
            
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="text-muted"> <h10>Copyright © 2023 Sahyadri College of Engineering & Management, Mangalore. All Rights Reserved</h10></span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  );
};

export default Home;
