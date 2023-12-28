import { LocalStorage } from "../../infrastruture/LocalStorage";

const authKey = "shipper-auth";
const persistAuthAfterLogin = (payload: any) => {
  LocalStorage.set(authKey, payload);
};

const getPersistedAuth = () => {
  return LocalStorage.get(authKey);
};

const resetAuth = () => {
  localStorage.removeItem(authKey);
};

export { persistAuthAfterLogin, getPersistedAuth, resetAuth };
