import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="serivce">
      <img className="services_img" src={img} alt={img}></img>
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn btn-danger">Booking+ </button>
    </div>
  );
};

export default Service;
