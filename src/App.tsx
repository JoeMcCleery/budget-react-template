import budgetReactLogo from "./assets/budget-react.svg";
import viteLogo from "/vite.svg";
import typescriptLogo from "./assets/ts-logo-128.svg";
import "./App.css";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import GithubUserImage from "./components/GithubUserImage";

function App() {
  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener"
          title="Vite"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://github.com/JoeMcCleery/budget-react"
          target="_blank"
          rel="noopener"
          title="BudgetReact"
        >
          <img
            src={budgetReactLogo}
            className="logo react"
            alt="BudgetReact logo"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener"
          title="TypeScript"
        >
          <img
            src={typescriptLogo}
            className="logo typescript"
            alt="TypeScript logo"
          />
        </a>
      </div>
      <h1>Vite + BudgetReact + TypeScript</h1>
      <p className="read-the-docs">
        Click on the Vite, BudgetReact and TypeScript logos to learn more
      </p>
      <div className="card">
        <h2>useState</h2>
        <Toggle>
          <p>Now, this is a story all about how...</p>
          <p>My life got flipped-turned upside down...</p>
          <p>And I'd like to take a minute...</p>
          <p>Just sit right there...</p>
          <p>I'll tell you how I became the prince of a town called Bel-Air!</p>
        </Toggle>
        <Counter />
      </div>
      <br />
      <div className="card">
        <h2>useEffect</h2>
        <GithubUserImage username="JoeMcCleery" />
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
