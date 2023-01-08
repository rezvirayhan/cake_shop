import React from "react";
import expret1 from "../../../img/Expert/Expert_1.jpg";
import expret2 from "../../../img/Expert/Expert_2.jpg";
import expret3 from "../../../img/Expert/Expert_3.jpg";
import expret4 from "../../../img/Expert/Expert_4.jpg";
import expret5 from "../../../img/Expert/Expert_5.jpg";
import expret6 from "../../../img/Expert/Expert_6.jpg";
import Expert from "../Expert/Expert";
const Exparts = () => {
  const experts = [
    { id: 1, name: "Name", img: expret1 },
    { id: 2, name: "Name", img: expret2 },
    { id: 3, name: "Name", img: expret3 },
    { id: 4, name: "Name", img: expret4 },
    { id: 5, name: "Name", img: expret5 },
    { id: 6, name: "Name", img: expret6 },
  ];
  return (
    <div className="container">
      <h1 className="text-primary text-center">Our Experts</h1>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
