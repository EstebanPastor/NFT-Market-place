import React from "react";
import styled from "styled-components";

const Button = ({ text, blue = false }) => {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </Div>
  );
};

const Div = styled.div`
button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    border: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    :not(.blue) {
        background-color: transparent;
        border: 1px solid #fff;
    }
}
.blue {
    background-color: #2e38c6;
}

`;

export default Button;
