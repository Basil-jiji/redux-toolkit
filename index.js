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
