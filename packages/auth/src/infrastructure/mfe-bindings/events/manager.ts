import { IUserInterface } from "../../../core/user";
import { Remotes } from "../remotes";

const dispatchSigninSuccessEvent = (user: IUserInterface) => {
  window.postMessage(
    {
      type: "signin-success",
      payload: user,
    },
    Remotes.shell
  );
};

export const RemotesEventsManager = Object.freeze({
  dispatchSigninSuccessEvent,
});
