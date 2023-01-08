import React from "react";
import banner1 from "../../../img/Banner/banner_1.jpg";
import banner2 from "../../../img/Banner/banner_2.jpg";
import banner3 from "../../../img/Banner/banner_3.jpg";
const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={banner1} alt={banner1}></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner2} alt={banner2}></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner3} alt={banner3}></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
