import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

interface PlaygroundContextType {
  folders: any;
  setFolders: any;
}

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null
);

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders, setFolders] = useState({
    [uuid()]: {
      title: "Folder Title 1",
      items: {
        [uuid()]: {
          title: "stack implementation",
          language: "java",
        },
        [uuid()]: {
          title: "heap implementation",
          language: "java",
        },
        [uuid()]: {
          title: "queue implementation",
          language: "java",
        },
      },
    },
    [uuid()]: {
      title: "Folder Title 2",
      items: {
        [uuid()]: {
          title: "array implementation",
          language: "java",
        },
        [uuid()]: {
          title: "string implementation",
          language: "java",
        },
        [uuid()]: {
          title: "linkedList implementation",
          language: "java",
        },
      },
    },
  });

npm install --save @types/styled-components
  const makeAvailableGlobally: PlaygroundContextType = {
    folders: folders,
    setFolders: setFolders,
  };

  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  );
}
