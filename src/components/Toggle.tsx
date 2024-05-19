import { Props, useState } from "budget-react";

function Toggle(props: Props) {
  const [index, setIndex] = useState(0);

  const children = props.children
    ? (Array.isArray(props.children) && props.children) || [props.children]
    : [];

  function changeIndex(change: number) {
    setIndex((index) => (children.length + index + change) % children.length);
  }
  console.log(props.children);
  return (
    <>
      <div className="toggle">
        <button onclick={() => changeIndex(-1)}>Prev</button>
        <span>{index.toString()}</span>
        <button onclick={() => changeIndex(1)}>Next</button>
      </div>

      {children[index]}
    </>
  );
}

export default Toggle;
