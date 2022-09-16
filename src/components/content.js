import React from "react";
import "./style.css";

import styled from "styled-components";
const Content = () => {
  const Title = styled.h1`
    color: #aac9f0;
  `;
  const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    padding: 5px;
    margin: 5px;
    flex-direction: column;
    justify-content: center;
    color: #f0aeaa;
    border-radius: 15px;
  `;

  const Button = styled.button`
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
  `;
  return (
    <Section class="section">
      <Title>Section</Title>
      <button>click me!</button>
      <button>click me!</button>
    </Section>
  );
};

export default Content;
