import { EvilForm } from "./form/form.tsx";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="app__inner">
        <h1 className="app__inner-title">Login</h1>
        <EvilForm />
      </div>
    </div>
  );
};

export default App;
