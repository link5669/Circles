import { LOG_IN, LOG_OUT } from "./types";

const logIn = (user: string, firstName: string, lastName: string) => {
  return {
    type: LOG_IN,
    payload: { user: user, firstName: firstName, lastName: lastName },
  };
};

const logOut = () => {
  return {};
};

export { logIn, logOut };
