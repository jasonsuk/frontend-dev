import { UserActionTypes } from './user.types';

// Instantiate a state
const INITIAL_STATE = {
    currentUser: null,
};

// Create a reducer FUNCTION that gets
// state object and action

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload, // update currentUser
            };
        default:
            return state;
    }
};

export default userReducer;

// Action is fired and an object(information) is passed to a reducer(middleware)
// Then the reducer is exported to root reducer to combine all reducers
// Then rooter reducer is passed onto store.js

// DESC : action format @ user.actions.js
// {
//     type: // action.type
//     payload: // action.payload
// }
