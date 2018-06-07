export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
export const getItem = key => {
  try {
    let serializedState = localStorage.getItem("state");
    let data = null;
    if (serializedState === null) {
      serializedState = "{}";
    }
    data = JSON.parse(serializedState);
    return data[key];
  } catch (err) {
    return undefined;
  }
};
