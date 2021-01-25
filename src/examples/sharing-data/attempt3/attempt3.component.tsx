import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import PrefixedListGen from "../../../component/prefixed-list-gen.component";
import {
  SharingDataContextProvider,
  useSharingDataSetterCtx,
  useSharingDataStateCtx,
} from "./attempt3.context";
import Input from "../common/input.component";

const MemoizedPrefixedListGen = React.memo(PrefixedListGen);
const FirstHalf: React.FC<unknown> = () => {
  const [state, setState] = React.useState("");
  const save = useSharingDataSetterCtx();
  return (
    <div>
      <Input value={state} setValue={setState} onSave={() => save(state)} />
      <PrefixedListGen prefix="hardcoded-prefix" count={100} />
      <MemoizedPrefixedListGen prefix="memoized-prefix" count={100} />
    </div>
  );
};

const SecondHalf: React.FC<unknown> = () => {
  const value = useSharingDataStateCtx();
  return (
    <div>
      <PrefixedListGen prefix={value as string} count={200} />
    </div>
  );
};

const MemoizedFirst = React.memo(FirstHalf);
const MemoizedSecond = React.memo(SecondHalf);

const Attemp3: React.FC<RouteComponentProps> = () => {
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

export default Attemp3;
