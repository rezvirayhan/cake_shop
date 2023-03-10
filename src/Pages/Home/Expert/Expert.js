import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 text-center">
      <div className="card">
        <img className="card-img-top img-thumbnail img-fluid" src={img}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Expert;
