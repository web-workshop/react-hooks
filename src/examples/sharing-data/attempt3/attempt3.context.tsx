import * as React from "react";

type S<T> = React.Dispatch<React.SetStateAction<T>>;

const SharingDataContextState = React.createContext<string | null>(null);
const SharingDataContextSetter = React.createContext<S<string> | null>(null);

SharingDataContextState.displayName = "SharingDataContextState";
SharingDataContextSetter.displayName = "SharingDataContextSetter";

export const SharingDataContextProvider: React.FC<{}> = ({ children }) => {
  const [state, setState] = React.useState("");
  return (
    <SharingDataContextSetter.Provider value={setState}>
      <SharingDataContextState.Provider value={state}>
        {children}
      </SharingDataContextState.Provider>
    </SharingDataContextSetter.Provider>
  );
};

export function useSharingDataStateCtx() {
  const ctx = React.useContext(SharingDataContextState);
  if (ctx == null) {
    throw new Error(
      "useSharingDataStateCtx can only be used in the React subtree of SharingDataContextProvider"
    );
  }
  return ctx;
}

export function useSharingDataSetterCtx() {
  const ctx = React.useContext(SharingDataContextSetter);
  if (!ctx) {
    throw new Error(
      "useSharingDataSetterCtx can only be used in the React subtree of SharingDataContextProvider"
    );
  }
  return ctx;
}
