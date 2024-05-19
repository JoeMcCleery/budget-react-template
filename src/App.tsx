import budgetReactLogo from "./assets/budget-react.svg";
import viteLogo from "/vite.svg";
import typescriptLogo from "./assets/ts-logo-128.svg";
import "./App.css";
import Counter from "./components/Counter";
import GithubUserImage from "./components/GithubUserImage";

function App() {
  return (
    <div>
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
      <div className="card">
        <Counter />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, BudgetReact and TypeScript logos to learn more
      </p>
      <div className="card">
        <GithubUserImage username="JoeMcCleery" />
      </div>
    </div>
  );
}

export default App;
