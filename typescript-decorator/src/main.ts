import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="main-section">
    <section>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>TypeScript Decorator Example</h1>
      <div class="card">
        <button id="counter" type="button">Increment</button>
      </div>
      <p class="read-the-docs">
        Click the button to see the @Logger decorator in action
      </p>
    </section>
    <section>
      <div id="log-container" style="display:flex; flex-direction: column;"></div>
    </section>    
  </div>
`;

// Create an instance of Counter and set up the button
const counter = new Counter();
counter.setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
