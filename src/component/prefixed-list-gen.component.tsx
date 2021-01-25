import * as React from "react";

export type PrefixedListGenProp = {
  prefix: string;
  count: number;
};

const PrefixedListGen: React.FC<PrefixedListGenProp> = ({
  prefix,
  children,
  count,
}) => {
  const list = new Array(count)
    .fill(prefix)
    .map((p, i) => `${p} - Auto generated list item - ${i + 1}`);
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {children}
    </ul>
  );
};

export default PrefixedListGen;
