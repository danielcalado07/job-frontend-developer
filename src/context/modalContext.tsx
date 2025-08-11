import React, { createContext, useContext, useMemo, useState } from "react";

type ModaisContextType = {
  modalLogin: boolean;
  setModalLogin: (value: boolean) => void;
};

const ModaisContext = createContext<ModaisContextType | undefined>(undefined);

export const ModaisProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalLogin, setModalLogin] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      modalLogin,
      setModalLogin,
    }),
    [modalLogin, setModalLogin],
  );

  return (
    <ModaisContext.Provider value={value}>{children}</ModaisContext.Provider>
  );
};

export const useModaisContext = () => {
  const context = useContext(ModaisContext);
  if (!context) {
    throw new Error("useModais must be used within a ModaisProvider");
  }
  return context;
};
