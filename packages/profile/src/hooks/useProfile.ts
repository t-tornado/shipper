import { useMemo } from "react";
import { LocalStorage } from "../utils/browser-tools/local-storage";

export const useProfile = () => {
  return useMemo(() => {
    const data = LocalStorage.get("shipper-auth");
    if (data) {
      return data;
    }
    return null;
  }, []);
};
