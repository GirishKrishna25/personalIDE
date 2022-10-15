import React from "react";
import GlobalStyles from "./styles/global";
import HomeScreen from "./screens/HomeScreen";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";

export default function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyles />
        <HomeScreen />
      </ModalProvider>
    </PlaygroundProvider>
  );
}
