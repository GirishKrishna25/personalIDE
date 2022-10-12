import React from "react";
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import styled from "styled-components";

export default function HomeScreen() {
  const HomeScreenContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
  `
  
  return <HomeScreenContainer>
    <LeftPane />
    <RightPane />
  </HomeScreenContainer>;
}
