import "./form.css";
import { Input } from "./input/input.tsx";

export const EvilForm = () => {
  return (
    <form className="evil-form">
      <h1 className="evil-form__title">Login</h1>
      <Input placeholder={"Your e-mail"} />
      <Input placeholder={"And your password"} />
    </form>
  );
};
