import { FormResult } from "../app/form/form.model.ts";

export const emailValidation =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const mockFetch = (
  email: string,
  password: string,
): Promise<{ status: FormResult }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (emailValidation.test(email) && password.length >= 6) {
        resolve({ status: "Success" });
      } else {
        reject({ status: "Failure" });
      }
    }, 1000);
  });
};
