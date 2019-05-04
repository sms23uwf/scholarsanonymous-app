import { createStore } from 'redux';

console.log('102');

// action generators - functions that return action objects

const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementCount = (payload = {}) => ({
    type: 'DECREMENT',
    decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
});

const setCount = ({count}) => ({
    type:'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// redux reducer function - determines how to change the state based on the action
// 1. Reducers are pure functions
// 2. Never change state or action

// reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type)
    {
        case 'INCREMENT':
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;  
        return {
              count: state.count + action.incrementBy
          };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;  
            return {
                count: state.count - decrementBy
            };  
        case 'SET':
            return {
                count: action.count
            }; 
        case 'RESET':
            return {
                count: state.count = 0
            };  default:
          return state;
    }
};

const store = createStore(countReducer);

  const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
  })


// actions

// increment count

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({ count: 102 }));

