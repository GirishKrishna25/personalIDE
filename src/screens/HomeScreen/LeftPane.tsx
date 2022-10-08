import React from "react";
import styled from "styled-components";

export default function LeftPane() {
  const StyledLeftPane = styled.div`
    background-color: #221520;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ContentContainer = styled.div`
    text-align: center;
  `;
  const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
  `;
  const MainHeading = styled.h1`
    font-size: 2.4rem;
    font-weight: 400;
    color: white;
    margin-bottom: 0.75rem;
    span {
      font-weight: 700;
    }
  `;
  const SubHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    margin-bottom: 1.5rem;
    opacity: 75%;
  `;
  const AddNewButton = styled.a`
    padding: 0.25rem 1rem;
    border-radius: 2rem;
    background: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    span {
      font-weight: 700;
      font-size: 2rem;
    }
    &:hover {
      opacity: 0.75;
    }
  `;

  return (
    <StyledLeftPane>
      <ContentContainer>
        <Logo src="logo.png" alt="logo" />
        <MainHeading>
          <span>personal</span>IDE
        </MainHeading>
        <SubHeading>Code. Compile. Debug.</SubHeading>
        <AddNewButton href="">
          <span>+</span> Create new Playground
        </AddNewButton>
      </ContentContainer>
    </StyledLeftPane>
  );
}
