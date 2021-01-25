import * as React from "react";

type S<T> = React.Dispatch<React.SetStateAction<T>>;

const SharingDataContext = React.createContext<
  readonly [string, S<string>] | null
>(null);
SharingDataContext.displayName = "Sharing Data Context";
export type SharingDataContextProviderProps = {};
export const SharingDataContextProvider: React.FC<{}> = ({ children }) => {
  const [state, setState] = React.useState("");
  const value = React.useMemo(() => [state, setState] as const, [state]);
  return (
    <SharingDataContext.Provider value={value}>
      {children}
    </SharingDataContext.Provider>
  );
};

export function useSharingDataCtx() {
  const ctx = React.useContext(SharingDataContext);
  if (!ctx) {
    throw new Error(
      "useSharingDataCtx can only be used in the React subtree of SharingDataContextProvider"
    );
  }
  return ctx;
}

export default SharingDataContext;
