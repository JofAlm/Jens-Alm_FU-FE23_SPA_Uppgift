// src/reducers/themeReducer.js

const initialState = {
  theme: "light", // Starta med ljust tema
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
