import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <p>
        Copyright &copy; backroads travel tours company
        <span> {date}</span>. all rights reserved
      </p>
    </div>
  );
};

export default Footer;
