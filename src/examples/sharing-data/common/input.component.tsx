import * as React from "react";

export type InputProp = {
  value: string;
  setValue: (x: string) => void;
  onSave?: () => void;
};
const Input: React.FC<InputProp> = ({ value, setValue, onSave }) => {
  return (
    <div className="grid-3 m-md">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>{value}</div>
      {onSave ? <button onClick={onSave}>Save</button> : null}
    </div>
  );
};

export default Input;
