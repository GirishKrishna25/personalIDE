import React from "react";
import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";

export default function LeftPane() {
  interface HeaderProps {
    readonly variant: string;
  }

  interface HeadingProps {
    readonly vairant: string;
  }

  const StyledRightPane = styled.div`
    padding: 2rem;
    background: #fafafa;
  `;

  const Header = styled.div<HeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: ${(props) => (props.variant === "main" ? "2rem" : "1rem")};

    &::after {
      position: absolute;
      content: "";
      bottom: -1.25rem;
      width: 100%;
      height: 2px;
      background: rgba(0, 0, 0, 0.25);
      display: ${(props) => (props.variant === "main" ? "block" : "none")};
    }
  `;

  const Heading = styled.h3<HeadingProps>`
    font-weight: 400;
    font-size: ${(props) => (props.variant === "large" ? "1.8rem" : "1.5rem")};
    span {
      font-weight: 700;
    }
  `;

  const AddButton = styled.button`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 1.1rem;
    cursor: pointer;
    span {
      font-size: 1.75rem;
      font-weight: 700;
    }

    transition: all 0.25s ease;
    &:hover {
      opacity: 0.75;
      scale: 1.1;
    }
  `;

  const Folder = styled.div`
    margin-bottom: 0.5rem;
  `;

  const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
  `;

  const PlaygroundCard = styled.div`
    padding: 0.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  `;

  const LogoSmall = styled.img`
    width: 75px;
  `;

  const CardContent = styled.div`
    flex-grow: 1;
    h5 {
      font-weight: 400;
      font-size: 1.2rem;
    }
  `;

  const IconsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1.25rem;
  `;

  return (
    <StyledRightPane>
      <Header variant="main">
        <Heading variant="large">
          My <span>Playground</span>
        </Heading>
        <AddButton>
          <span>+</span> New Folder
        </AddButton>
      </Header>

      <Folder>
        <Header variant="small">
          <Heading vairant="small">Data structures</Heading>
          <AddButton>
            <span>+</span> New ground
          </AddButton>
        </Header>

        <CardContainer>
          <PlaygroundCard>
            <LogoSmall src="logo-small.png" alt="" />
            <CardContent>
              <h5>Stack Implementation</h5>
              <p>Language: java</p>
            </CardContent>
            <IconsContainer>
              <IoTrashOutline />
              <AiOutlineEdit />
            </IconsContainer>
          </PlaygroundCard>

          <PlaygroundCard>
            <LogoSmall src="logo-small.png" alt="" />
            <CardContent>
              <h5>Queue Implementation</h5>
              <p>Language: java</p>
            </CardContent>
            <IconsContainer>
              <IoTrashOutline />
              <AiOutlineEdit />
            </IconsContainer>
          </PlaygroundCard>

          <PlaygroundCard>
            <LogoSmall src="logo-small.png" alt="" />
            <CardContent>
              <h5>Heap Implementation</h5>
              <p>Language: java</p>
            </CardContent>
            <IconsContainer>
              <IoTrashOutline />
              <AiOutlineEdit />
            </IconsContainer>
          </PlaygroundCard>
        </CardContainer>
      </Folder>
    </StyledRightPane>
  );
}