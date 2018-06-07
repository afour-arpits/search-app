import { loadState, saveState, getItem } from "./localStorage";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const addUsers = userobj =>
  delay(500).then(() => {
    const user = {
      id: Date.now(),
      ...userobj
    };
    let oldState = getItem("users");
    if (oldState) {
      oldState.push(user);
      saveState({ users: oldState });
    } else {
      let users = [];
      users.push(user);
      saveState({ users });
    }
    return user;
  });

export const getUsers = () =>
  delay(500).then(() => {
    let users = getItem("users");
    return users;
  });
