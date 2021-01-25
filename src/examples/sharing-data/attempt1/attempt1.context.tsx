import * as React from "react";

const SharingDataContext = React.createContext(["", (x: string) => {}]);

export type SharingDataContextProviderProps = {};
export const SharingDataContextProvider: React.FC<{}> = ({ children }) => {
  const [state, setState] = React.useState("");
  const value = [state, setState];
  return (
    <SharingDataContext.Provider value={value}>
      {children}
    </SharingDataContext.Provider>
  );
};

export function useSharingDataCtx() {
  return React.useContext(SharingDataContext);
}

export default SharingDataContext;
