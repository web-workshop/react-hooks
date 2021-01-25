import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  SharingDataContextProvider,
  useSharingDataCtx,
} from "./attempt2.context";
import PrefixedListGen from "../../../component/prefixed-list-gen.component";
import Input from "../common/input.component";
const MemoizedPrefixedListGen = React.memo(PrefixedListGen);
const FirstHalf: React.FC<unknown> = () => {
  const [state, setState] = React.useState("");
  const [, save] = useSharingDataCtx();
  return (
    <div>
      <Input value={state} setValue={setState} onSave={() => save(state)} />
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

const Attemp2: React.FC<RouteComponentProps> = () => {
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

export default Attemp2;
