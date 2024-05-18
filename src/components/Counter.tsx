import { useState } from "budget-react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onclick={() => setCount((count) => count + 1)}>
        Count is: {count}
      </button>
      {count >= 10 && <p>Wow!</p>}
      {count >= 30 && <p>Amazing!</p>}
      {count >= 100 && <p>Insane!</p>}
    </div>
  );
}

export default Counter;
