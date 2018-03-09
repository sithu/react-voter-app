import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = { voters: [], elections: [], ballots: [] }, action) => {
    switch(action.type) {
        case 'VOTER_REFRESH_DONE': return { ...state, voters: action.voters };
        case 'ELECTION_REFRESH_DONE': return { ...state, elections: action.elections };
        case 'BALLOT_REFRESH_DONE': return { ...state, ballots: action.ballots };
        default: return state;
    }
};

export const appStore = createStore(reducer, applyMiddleware(thunk));
