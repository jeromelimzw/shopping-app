import React from "react";

const NavBar = ({ wallet }) => {
  return (
    <div className="bg-light-blue f3 b--blue o-80 ba bw2 shadow-5 flex justify-between pa1 mv2">
      <img
        src="/img/Logo.png"
        alt="logo"
        width="50"
        height="50"
        className="ph2 w-5 pointer grow-large"
      />
      <div className="flex">
        <span className="self-center f4 pointer">SGD {wallet}</span>
        <i className="fas fa-shopping-cart pointer mh3 green grow-large self-center" />
        <i className="fas fa-sign-out-alt gray mh2 self-center pointer grow-large" />
      </div>
    </div>
  );
};

export default NavBar;
