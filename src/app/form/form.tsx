import { Input } from "../components/input/input.tsx";
import { Button } from "../components/button/button.tsx";

import "./form.css";

export const EvilForm = () => {
  return (
    <form className="evil-form">
      <div className="evil-form__fields">
        <Input name={"Name"} id={"Name"} label={"Name"} />
        <Input name={"Password"} id={"Password"} label={"Password"} />
      </div>
      <Button />
    </form>
  );
};
