import { Input } from "./input/input.tsx";

import "./form.css";

export const EvilForm = () => {
  return (
    <form className="evil-form">
      <Input placeholder={"Your e-mail"} />
      <Input placeholder={"And your password"} />
    </form>
  );
};
