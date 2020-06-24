export const storeState = () => {
  let currentState = {};
  return stateChangeFunction => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateChanger = storeState();

export const changeState = (prop) => {
  return (value) => {
    if (typeof (value) === "number") {
      return (state) => ({
        ...state,
        [prop]: (state[prop] || 0) + value
      });
    } else {
      return (state) => ({
        ...state,
        [prop]: (state[prop] || "") + value
      });
    }
  };
};
//Initial character Vaules

export const initialCharcter = { name: "", experience: 0, ability: "", type: "", health: 10, money: 0, };

export const giveName = changeState("name");
export const giveAbility = changeState("fireball")(5);
export const giveType = changeState("warriors");
