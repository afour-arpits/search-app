import { LOAD_FORM, initFormState } from "../Actions";

const formReducer = (state = initFormState, action) => {
  switch (action.type) {
    case LOAD_FORM:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export const loadFormData = uId => ({ type: LOAD_FORM, uId });
export default formReducer;
