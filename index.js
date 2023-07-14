const CAKE_ORDERED = 'CAKE_ORDERED'

/*
  Action
  Action is an object with a type property 

{
  type: CAKE_ORDERED,
  quantity: 1
}
*/

/* 
  ActionCreator
  ActionCreator is a function that returns an object */

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  }
}

const initialState = {
  //previousState
  numOfCakes: 10,
}

/*
  Reducer
  (previousState, action) => newState
  PreviousState + action returning a newState = Reducer

  *) We store previousState in the state , here initialState is the previous state which is stored in the state
  *) We refer action.type type property do perform an action using switch case
  *) As a default we return the previous state
  *) If there are multiple properties in the state copy the previous state (...state,) then perform the necessary actions without changing other properties
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}
