import { IUserInterface } from "../core/user";
import { LocalStorage } from "./browser-tools/localStorage";
import uniqueId from "lodash.uniqueid";

const getUserByEmailPass = (email: string, password: string) => {
  const users = LocalStorage.get("users") as any;

  if (users) {
    const user = users[email];
    console.log(user);
    if (user && user.password === password) {
      return user;
    }
  }
  return null;
};

const addUser = (email: string, password: string) => {
  const user: IUserInterface = {
    createdAt: new Date().getTime(),
    email,
    password,
    id: uniqueId(),
  };
  const users = localStorage.getItem("users") ?? ({} as any);
  if (users[email]) {
    throw new Error("Duplicate User");
  }
  users[email] = user;
  LocalStorage.set("users", users);
  return user;
};

export const UserRepository = Object.freeze({
  getUserByEmailPass,
  addUser,
});
