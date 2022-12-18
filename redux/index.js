/**
 * 3 core concept in redux
 * Store -> Holds state of application
 * Action -> Describes what happened
 * Reducer -> Ties stores and action together
 */

/**
 * 3 principles
 * The state of whole application is stored in an object tree within a single store
 * The only way to change the state is to emit / dispatch an action, an object describing what happended
 * To specify how state tree is transformed by actions, you write pure reducers (takes prev / next state as input and returns a new state)
 */



const { createStore } = require("redux"); 

const BUY_CAR = "BUY_CAR"
const BUY_BIKE = "BUY_BIKE"
const BUY_N_BIKE = "BUY_N_BIKE"


//action
function buyBike(){
    return{
        type: BUY_BIKE
    }

}
function buyCar(){
    return{
        type: BUY_CAR
    }

}



//object
const intialState = {
    numberOfCars : 10 ,
    numberOfBikes : 20 ,
    
};


//creating a reducer
function reducer(state = intialState, action) {
    switch (action.type) {
      case BUY_CAR:
        return {
          ...state,
          numberOfCars: state.numberOfCars - 1,
        };
      case BUY_BIKE:
        return {
          ...state,
          numberOfBikes: state.numberOfBikes - 1,
        };
      default:
        return state;
    }
  }



  //creating a store
// 
const store = createStore(reducer);
console.log("Intial state" , store.getState());

  store.dispatch(buyCar());
  store.dispatch(buyCar());
  store.dispatch(buyCar());
  store.dispatch(buyCar());
  store.dispatch(buyCar());
  store.dispatch(buyCar());

//   store.dispatch({
//     type:BUY_CAR
//   })