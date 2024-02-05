import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
        <h1>You can count on me!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

root.render(<App />);