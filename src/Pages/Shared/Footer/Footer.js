import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center">
      <p>
        <small>
          {" "}
          &copy; Copyright {year} All rights reserved By &reg; Rezvi Rayhan
          &hearts;
        </small>
      </p>
    </footer>
  );
};

export default Footer;
