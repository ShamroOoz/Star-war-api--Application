export const ACTIONS = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        films: action.payload,
      };
    case ACTIONS.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
