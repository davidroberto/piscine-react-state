import { useState } from "react";

const Counter = () => {
  console.log("composant affiché");

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={incrementCounter}>Cliquez</button>
    </div>
  );
};

export default Counter;
