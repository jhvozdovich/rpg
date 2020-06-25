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

export const changePoints = changeState("points");
export const initialCharcter = { name: "", experience: 0, ability: "", type: "", health: 10, money: 0, };



//take in two functions and return state object
// updateFunction aka player, updatingFunction aka player1Name
// export const returnState = () => {
//   return stateChangeFrunction => {
//     return (propertyChanger) => {
//       const newState = stateChangeFunction(propertyChanger);
//       return newState;
//     };
//   };
// };

// export const returnState101 = (propertyChanger) => {
//   let val = propertyChanger;
//   return (stateChange1Frunction) => {
//     const newState = stateChange1Function(val);
//     return newState;
//   };

// };


// export const functionChange = returnState101();

// export const returnState = (stateChangeFunction, propertyChanger) => {
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(propertyChanger);
//     return newState;
//   };

// };
// export const playerInfo = returnState();
//Initial character Vaules



//const player = storeState({ health: 10 });
// export const giveName = changeState("name");
// export const giveAbility = changeState("fireball")(5);
// export const giveType = changeState("warriors");
