import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  SharingDataContextProvider,
  useSharingDataCtx,
} from "./attempt1.context";
import PrefixedListGen from "../../../component/prefixed-list-gen.component";
import Input from "../common/input.component";

const MemoizedPrefixedListGen = React.memo(PrefixedListGen);
const FirstHalf: React.FC<unknown> = () => {
  const [state, setState] = React.useState("");
  const [, save] = useSharingDataCtx();
  const onSave = () => typeof save === "function" && save(state);
  return (
    <div>
      <Input value={state} setValue={setState} onSave={onSave} />
      <PrefixedListGen prefix="hardcoded-prefix" count={100} />
      <MemoizedPrefixedListGen prefix="memoized-prefix" count={100} />
    </div>
  );
};

const SecondHalf: React.FC<unknown> = () => {
  const [value] = useSharingDataCtx();
  return (
    <div>
      <PrefixedListGen prefix={value as string} count={200} />
    </div>
  );
};

const MemoizedFirst = React.memo(FirstHalf);
const MemoizedSecond = React.memo(SecondHalf);

const Attemp1: React.FC<RouteComponentProps> = () => {
  const [state, setState] = React.useState("");
  return (
    <SharingDataContextProvider>
      <Input value={state} setValue={setState} />
      <div className="grid-2">
        <MemoizedFirst />
        <MemoizedSecond />
      </div>
    </SharingDataContextProvider>
  );
};

export default Attemp1;
