import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = { voters: [], elections: [] }, action) => {
    switch(action.type) {
        case 'VOTER_REFRESH_DONE': return { ...state, voters: action.voters };
        default: return state;
    }
};

export const appStore = createStore(reducer, applyMiddleware(thunk));
