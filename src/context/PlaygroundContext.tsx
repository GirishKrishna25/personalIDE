import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

interface PlaygroundContextType {
  folders: any;
  setFolders: any;
  createNewFolder: (folderTitle: string) => void;
  createNewPlayground: (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => void;
  createNewFolderAndPlayground: (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => void;
  editCardTitle: (
    folderId: string,
    cardId: string,
    newCardTitle: string
  ) => void;
  editFolderTitle: (folderId: string, newFolderTitle: string) => void;
  deleteCard: (folderId: string, cardId: string) => void;
  deleteFolder: (folderId: string) => void;
}

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null
);

export interface FolderT {
  title: string;
  items: {
    [key: string]: {
      title: string;
      language: string;
    };
  };
}

export interface FolderType {
  [key: string]: FolderT;
}

const initialItems = {
  [uuid()]: {
    title: "Folder Title 1",
    items: {
      [uuid()]: {
        title: "Stack Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "Queue Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "XYZ Implementation",
        language: "C++",
      },
    },
  },
  [uuid()]: {
    title: "Folder Title 2",
    items: {
      [uuid()]: {
        title: "1 Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "2 Implementation",
        language: "C++",
      },
      [uuid()]: {
        title: "3 Implementation",
        language: "C++",
      },
    },
  },
};

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders, setFolders] = useState(() => {
    const localData = JSON.parse(
      localStorage.getItem("playground-data") as string
    );
    return localData || initialItems;
  });

  // save all data in local storage
  // we want this hook to run whenever there are any changes to folders state
  useEffect(() => {
    // whenever folders state is changed
    // update it in local storage as well
    localStorage.setItem("playground-data", JSON.stringify(folders));
  }, [folders]);

  // creating a new folder
  const createNewFolder = (folderTitle: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState }; // newState = oldState
      // create a new folder
      newState[uuid()] = {
        title: folderTitle,
        items: {},
      };
      return newState;
    });
  };

  // CreateNewPlayground(folderId)
  const createNewPlayground = (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      // create a new playground
      newState[folderId].items[uuid()] = {
        title: cardTitle,
        language: cardLanguage,
      };
      return newState;
    });
  };

  // CreateNewFolderAndPlayground()
  const createNewFolderAndPlayground = (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      // create a new folder and playground
      newState[uuid()] = {
        title: folderTitle,
        items: {
          [uuid()]: {
            title: cardTitle,
            language: cardLanguage,
          },
        },
      };
      return newState;
    });
  };

  // EditCardTitle(folderId, cardId)
  const editCardTitle = (
    folderId: string,
    cardId: string,
    newCardTitle: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      // update title
      newState[folderId].items[cardId].title = newCardTitle;
      return newState;
    });
  };

  // EditFolderTitle(folderId)
  const editFolderTitle = (folderId: string, newFolderTitle: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[folderId].title = newFolderTitle;
      return newState;
    });
  };

  // DeleteCard(folderId, carId)
  const deleteCard = (folderId: string, cardId: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      delete newState[folderId].items[cardId];
      return newState;
    });
  };

  // DeleteFolder(folderId)
  const deleteFolder = (folderId: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      delete newState[folderId];
      return newState;
    });
  };

  const makeAvailableGlobally: PlaygroundContextType = {
    folders: folders,
    setFolders: setFolders,
    createNewFolder: createNewFolder,
    createNewPlayground: createNewPlayground,
    createNewFolderAndPlayground: createNewFolderAndPlayground,
    editCardTitle: editCardTitle,
    editFolderTitle: editFolderTitle,
    deleteCard: deleteCard,
    deleteFolder: deleteFolder,
  };

  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  );
}
