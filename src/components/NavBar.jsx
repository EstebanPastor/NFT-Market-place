import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <h1>NFT Market</h1>
      </div>
      <Button text="Contact"/>
    </Nav>
  );
};

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 2rem;

.toggle {
  display: none;
}
.links {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 80% 100%, 20% 100%);
  padding: 2.5rem 8rem;

  
}


`;

export default NavBar;
