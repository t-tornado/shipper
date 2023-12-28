import { usePublishNavigationEvents } from "../hooks/usePublishNavigationEvents";
import { useSubscribeToNavigation } from "../hooks/useSubscribeToNavigation";

export const Root = () => {
  useSubscribeToNavigation();
  usePublishNavigationEvents();

  return null;
};
