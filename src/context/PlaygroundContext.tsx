import { useState, createContext } from "react";

interface PlaygroundContextType {
  folders: any;
  setFolders: any;
}

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null
);

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders, setFolders] = useState({
    ["1"]: {
      title: "Folder Title 1",
      items: {
        ["item1"]: {
          title: "stack implementation",
          language: "java"
        },
        ["item2"]: {
          title: "heap implementation",
          language: "java"
        },
        ["item3"]: {
          title: "queue implementation",
          language: "java"
        }
      }
    },
    ["2"]: {
      title: "Folder Title 2",
      items: {
        ["item4"]: {
          title: "array implementation",
          language: "java"
        },
        ["item5"]: {
          title: "string implementation",
          language: "java"
        },
        ["item6"]: {
          title: "linkedList implementation",
          language: "java"
        }
      }
    }
  });

  const makeAvailableGlobally: PlaygroundContextType = {
    folders: folders,
    setFolders: setFolders
  };

  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  );
}
