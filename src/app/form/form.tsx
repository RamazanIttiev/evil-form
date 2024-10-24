import { Input } from "../components/input/input.tsx";
import { Button } from "../components/button/button.tsx";

import "./form.css";

export const EvilForm = () => {
  return (
    <form className="evil-form">
      <Input placeholder={"Your e-mail"} />
      <Input placeholder={"And your password"} />
      <Button />
    </form>
  );
};
