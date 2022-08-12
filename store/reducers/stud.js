const initState = {
  stud: [],
  details: "",
};

const stud = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        stud: [...state.stud, payload],
      };
    case "DELETE": {
      const items = state.stud.filter((x) => x.id !== payload);
      return {
        ...state,
        stud: [...items],
      };
    }
    case "DETAILS": {
      return {
        ...state,
        details: payload,
      };
    }
    case "UPDATE": {
      const itemIndex = state.stud.findIndex((x) => x.id === payload.id);
      let studArray = state.stud;
      studArray[itemIndex] = payload;
      return {
        ...state,
        stud: [...studArray],
      };
    }
    default:
      return state;
  }
};

export default stud;
