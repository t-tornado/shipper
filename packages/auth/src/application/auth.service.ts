import { IUserInterface } from "../core/user";
import { UserRepository } from "../infrastructure/db";

type AuthPayload = Omit<IUserInterface, "createdAt" | "id">;

const signin = (data: AuthPayload) => {
  const user = UserRepository.getUserByEmailPass(data.email, data.password);
  if (!user) throw new Error("Invalid email/password");
  return user;
};
const signup = async (data: AuthPayload) => {
  const user = UserRepository.addUser(data.email, data.password);
  return user;
};
export const AuthService = Object.freeze({
  signin,
  signup,
});
