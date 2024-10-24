import { FormEvent, useEffect, useState } from "react";
import { Input } from "../components/input/input.tsx";
import { Button } from "../components/button/button.tsx";
import { FormErrors, FormResult } from "./form.model.ts";
import { emailValidation, mockFetch } from "../../utils/fetch.ts";
import Confetti from "react-confetti";

import sound from "../../assets/space-sound.mp3";

import "./form.css";

export const EvilForm = () => {
  const [loginResult, setLoginResult] = useState<FormResult>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState<FormErrors>({
    emailError: "",
    passwordError: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginResult === "Success") {
      new Audio(sound).play();
    }
  }, [loginResult]);

  const validateForm = (): boolean => {
    let isValid = true;
    const errors: FormErrors = {
      emailError: "",
      passwordError: "",
    };

    if (!emailValidation.test(email)) {
      errors.emailError = "Please enter a valid email address";
      isValid = false;
    }

    if (password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters long";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    setLoading(true);

    try {
      const response = await mockFetch(email, password);
      setLoginResult(response.status);
      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.log(err);
      setLoginResult("Failure");
      setLoading(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setFormErrors((prevState) => ({
      ...prevState,
      emailError: "",
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setFormErrors((prevState) => ({
      ...prevState,
      passwordError: "",
    }));
  };

  return (
    <form className="evil-form">
      <div className="evil-form__fields">
        <Input
          name={"Name"}
          id={"Name"}
          label={"Name"}
          type={"email"}
          error={formErrors.emailError}
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          name={"Password"}
          id={"Password"}
          label={"Password"}
          type={"password"}
          error={formErrors.passwordError}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button onClick={handleSubmit} isLoading={loading} />
      {loginResult === "Success" && (
        <Confetti
          className={"evil-form__confetti"}
          recycle={false}
          initialVelocityY={{ min: 10, max: 20 }}
        />
      )}
    </form>
  );
};
