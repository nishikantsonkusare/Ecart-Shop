export const add = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD", payload: { id: Math.random(), ...data } });
  };
};

export const update = (data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE", payload: data });
  };
};
