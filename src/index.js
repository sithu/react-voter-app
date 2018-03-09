import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import './index.css'

import { appStore } from './store';
/**
 * Custom Components imports
 */
import { VoterMain } from './components/voter-main';

/**
 * Custom Actions imports
 */
import { refreshVoter, insertVoter, updateVoter, deleteVoter } from './actions/voter-reg-actions';
import { insertElection, refreshElection } from './actions/election-actions';
import { refreshBallot, insertBallot } from './actions/ballot-actions';


const MainContainer = connect(
    ({ voters, elections, ballots }) => ({ voters, elections, ballots }),
    dispatch => bindActionCreators(
        { 
            refreshVoter, insertVoter, updateVoter, deleteVoter, 
            insertElection, refreshElection,
            refreshBallot, insertBallot, 
        }
        , dispatch)
)(VoterMain);

ReactDOM.render(<Provider store={appStore}>
    <MainContainer />
</Provider>, document.querySelector('main'))

const refresh = () => {
    return dispatch => {
        refreshVoter()(dispatch);
        refreshElection()(dispatch);
        refreshBallot()(dispatch);
        // add your refresh method here!
    };
}

refresh()(appStore.dispatch);