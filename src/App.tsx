import { FC, useState } from 'react';
import reactLogo from './assets/react.svg';
import { styles } from './App.css';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="text-blue-300 bg-red-600">Hello Vite + React!</p>
      <p className={styles.header}>vanilla-extract</p>
      <div className="card">
        <button
          className="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
