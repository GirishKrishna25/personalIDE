import React from "react";
import GlobalStyles from "./styles/global";
import HomeScreen from "./screens/HomeScreen";
import ModalProvider from "./context/ModalContext";

export default function App() {
  return (
    <ModalProvider>
      <GlobalStyles />
      <HomeScreen />
    </ModalProvider>
  );
}
